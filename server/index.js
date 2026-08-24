import express from 'express';
import cors from 'cors';
import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

app.use(cors());
app.use(express.json());

const connectDatabase = async () => {
  if (!MONGO_URI) {
    console.warn('MONGO_URI is not configured. Running with in-memory internship storage.');
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

connectDatabase();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@sahnartech.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Sahnar@2026';

const statusFeed = [
  {
    time: '09:00',
    title: 'R&D Lab',
    description: 'Optimizing LLM latency for edge devices...'
  },
  {
    time: '11:30',
    title: 'VAPT',
    description: 'New zero-day vulnerability patched for fintech module...'
  },
  {
    time: '14:15',
    title: 'Forge',
    description: '15 new interns integrated into computer vision project...'
  }
];

const internships = [
  {
    id: 'intern-1',
    title: 'AI Engineering Intern',
    company: 'Sahnar Technologies',
    location: 'Remote',
    type: 'Remote',
    duration: '3 months',
    stipend: '₹10,000/month',
    description: 'Work with our AI team on copilots, automation, and smart product features.',
    requirements: ['Python', 'React basics', 'Communication'],
    deadline: '2026-08-31'
  },
  {
    id: 'intern-2',
    title: 'Cyber Security Intern',
    company: 'Sahnar Technologies',
    location: 'Hybrid',
    type: 'Hybrid',
    duration: '6 weeks',
    stipend: '₹8,000/month',
    description: 'Support vulnerability assessment, secure coding reviews, and threat monitoring tasks.',
    requirements: ['Networking', 'Linux fundamentals', 'Curiosity'],
    deadline: '2026-08-15'
  }
];

const applications = [];

app.get('/api/status', (req, res) => {
  return res.json({ status: 'active', feed: statusFeed });
});

app.post('/api/subscribe', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  return res.status(201).json({
    message: 'Subscription received. Sahnar team will reach out soon.',
    subscriber: { name, email }
  });
});

app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.json({
      token: `admin-${Date.now()}`,
      admin: { email }
    });
  }

  return res.status(401).json({ error: 'Invalid admin credentials.' });
});

app.get('/api/internships', (req, res) => {
  return res.json({ internships });
});

app.post('/api/internships', (req, res) => {
  const { title, company, location, type, duration, stipend, description, requirements, deadline } = req.body;
  if (!title || !company || !location || !duration || !stipend || !description) {
    return res.status(400).json({ error: 'Please fill in the required internship fields.' });
  }

  const normalizedRequirements = String(requirements || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const internship = {
    id: `intern-${Date.now()}`,
    title,
    company,
    location,
    type: type || 'Remote',
    duration,
    stipend,
    description,
    requirements: normalizedRequirements,
    deadline
  };

  internships.push(internship);
  return res.status(201).json({ internships, internship });
});

app.put('/api/internships/:id', (req, res) => {
  const { id } = req.params;
  const index = internships.findIndex((internship) => internship.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Internship not found.' });
  }

  const { title, company, location, type, duration, stipend, description, requirements, deadline } = req.body;
  internships[index] = {
    ...internships[index],
    title,
    company,
    location,
    type: type || internships[index].type,
    duration,
    stipend,
    description,
    requirements: String(requirements || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean),
    deadline
  };

  return res.json({ internships, internship: internships[index] });
});

app.delete('/api/internships/:id', (req, res) => {
  const { id } = req.params;
  const index = internships.findIndex((internship) => internship.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Internship not found.' });
  }

  internships.splice(index, 1);
  return res.json({ internships });
});

app.post('/api/internships/:id/apply', (req, res) => {
  const { id } = req.params;
  const internship = internships.find((item) => item.id === id);
  if (!internship) {
    return res.status(404).json({ error: 'Internship not found.' });
  }

  const { name, email, phone, education, skills, resumeFile, portfolioUrl, linkedinUrl, message } = req.body;
  if (!name || !email || !phone || !education || !skills || !message) {
    return res.status(400).json({ error: 'Please complete the required application fields.' });
  }

  if (!education.graduation?.degree || !education.graduation?.institute || !education.graduation?.year || !education.graduation?.cgpa ||
      !education.twelfth?.school || !education.twelfth?.board || !education.twelfth?.year || !education.twelfth?.percentage ||
      !education.tenth?.school || !education.tenth?.board || !education.tenth?.year || !education.tenth?.cgpa) {
    return res.status(400).json({ error: 'Please provide complete details for all 3 education levels.' });
  }

  if (!resumeFile || !resumeFile.name || !resumeFile.data) {
    return res.status(400).json({ error: 'Please upload your resume.' });
  }

  const application = {
    id: `app-${Date.now()}`,
    internshipId: id,
    internshipTitle: internship.title,
    name,
    email,
    phone,
    education,
    skills,
    resumeFile,
    portfolioUrl: portfolioUrl || '',
    linkedinUrl: linkedinUrl || '',
    message,
    status: 'Applied'
  };

  applications.push(application);
  return res.status(201).json({ message: 'Application submitted successfully.', internship, applications });
});

app.get('/api/internships/applications', (req, res) => {
  return res.json({ applications });
});

app.patch('/api/internships/applications/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const application = applications.find((item) => item.id === id);
  if (!application) {
    return res.status(404).json({ error: 'Application not found.' });
  }

  application.status = status || application.status;
  return res.json({ applications });
});

const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
