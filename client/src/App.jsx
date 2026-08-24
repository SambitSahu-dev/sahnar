import { useEffect, useState } from 'react';
import images from './assets/images';

const defaultFeed = [
  { time: '09:00', title: 'R&D Lab', description: 'Optimizing LLM latency for edge devices...' },
  { time: '11:30', title: 'VAPT', description: 'New zero-day vulnerability patched for fintech module...' },
  { time: '14:15', title: 'Forge', description: '15 new interns integrated into computer vision project...' }
];

const services = [
  { icon: '🧠', title: 'Artificial Intelligence', description: 'LLM copilots, vision systems, and strategic AI roadmaps for modern teams.' },
  { icon: '📈', title: 'Machine Learning', description: 'Predictive analytics and model deployment for measurable business impact.' },
  { icon: '📊', title: 'Data Science', description: 'End-to-end analytics, data engineering, and insight generation at scale.' },
  { icon: '🛡️', title: 'Cyber Security', description: 'VAPT, compliance, secure architecture, and resilient operations.' },
  { icon: '☁️', title: 'Cloud Solutions', description: 'Cloud-native platforms, migration, and automation on AWS, Azure, and GCP.' },
  { icon: '💻', title: 'Software Development', description: 'Custom web, mobile, and enterprise products with elegant delivery.' },
  { icon: '🌐', title: 'Web Development', description: 'High-performance digital experiences with polished product design.' },
  { icon: '📱', title: 'Mobile App Development', description: 'Secure and scalable mobile products for startups and enterprises.' },
  { icon: '🧭', title: 'IT Consulting', description: 'Architecture, governance, and transformation advisory for ambitious teams.' }
];

const showcaseSlides = [
  { title: 'AI Assistant', subtitle: 'Agentic copilots', image: images.aiAssistant, description: 'Conversational systems that turn data into action.' },
  { title: 'Cyber Defense', subtitle: 'Secure by design', image: images.cyberShield, description: 'Threat monitoring and resilient protection for critical operations.' },
  { title: 'Cloud Intelligence', subtitle: 'Connected platforms', image: images.cloudNetwork, description: 'Cloud-native operations designed for scale and speed.' },
  { title: 'Data Analytics', subtitle: 'Insight at a glance', image: images.dataAnalytics, description: 'Analytics experiences that keep leaders informed in real time.' }
];

function HeroIllustration() {
  return (
    <svg viewBox="0 0 960 640" role="img" aria-label="AI and cybersecurity dashboard illustration" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8FBFF" />
          <stop offset="100%" stopColor="#EAF4FF" />
        </linearGradient>
        <linearGradient id="heroPanel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F2F8FF" />
        </linearGradient>
        <filter id="heroShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#2D4DF5" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="960" height="640" rx="44" fill="url(#heroBg)" />
      <circle cx="772" cy="166" r="132" fill="#DDF4FF" />
      <circle cx="212" cy="530" r="124" fill="#EAF4FF" />
      <g filter="url(#heroShadow)">
        <rect x="132" y="132" width="696" height="376" rx="36" fill="url(#heroPanel)" />
        <rect x="176" y="186" width="220" height="130" rx="26" fill="#F8FBFF" />
        <rect x="430" y="178" width="300" height="96" rx="24" fill="#F9FCFF" />
        <rect x="176" y="352" width="260" height="112" rx="24" fill="#F9FCFF" />
        <rect x="470" y="336" width="248" height="126" rx="24" fill="#F8FBFF" />
      </g>
      <g>
        <rect x="208" y="226" width="92" height="52" rx="16" fill="#2563EB" />
        <rect x="316" y="226" width="48" height="10" rx="5" fill="#DDEBFD" />
        <rect x="316" y="246" width="54" height="8" rx="4" fill="#EAF4FF" />
        <circle cx="248" cy="252" r="24" fill="#38BDF8" />
      </g>
      <g>
        <rect x="462" y="202" width="226" height="16" rx="8" fill="#DDEBFD" />
        <rect x="462" y="230" width="164" height="12" rx="6" fill="#EAF4FF" />
        <rect x="462" y="248" width="188" height="12" rx="6" fill="#EAF4FF" />
        <circle cx="688" cy="214" r="14" fill="#F59E0B" fillOpacity="0.3" />
      </g>
      <g>
        <path d="M224 392H402" stroke="#2563EB" strokeWidth="14" strokeLinecap="round" />
        <path d="M224 422H336" stroke="#38BDF8" strokeWidth="12" strokeLinecap="round" />
        <path d="M506 412C544 376 574 360 616 354" stroke="#2563EB" strokeWidth="12" strokeLinecap="round" />
        <path d="M532 434C562 406 584 394 620 388" stroke="#38BDF8" strokeWidth="10" strokeLinecap="round" />
        <circle cx="652" cy="378" r="34" fill="#2563EB" fillOpacity="0.14" />
        <path d="M652 360V396" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" />
        <path d="M634 378H670" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" />
      </g>
      <g>
        <circle cx="742" cy="240" r="18" fill="#2563EB" fillOpacity="0.16">
          <animate attributeName="r" values="18;24;18" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="286" cy="144" r="12" fill="#38BDF8" fillOpacity="0.24">
          <animate attributeName="r" values="12;16;12" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </g>
      <g>
        <rect x="560" y="156" width="24" height="24" rx="8" fill="#F59E0B" fillOpacity="0.24">
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="3.8s" repeatCount="indefinite" />
        </rect>
        <rect x="206" y="164" width="24" height="24" rx="8" fill="#38BDF8" fillOpacity="0.24">
          <animateTransform attributeName="transform" type="translate" values="0 0;0 6;0 0" dur="3.4s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  );
}

const solutions = [
  { title: 'Generative AI', description: 'Launch copilots and AI workflows that feel useful from day one.' },
  { title: 'Chatbots', description: 'Human-like support experiences with real context and enterprise guardrails.' },
  { title: 'Predictive Analytics', description: 'Forecast outcomes with actionable insight and rigorous experimentation.' },
  { title: 'Computer Vision', description: 'Use visual intelligence for automation, quality, and monitoring.' },
  { title: 'LLM Applications', description: 'Deploy secure, domain-aware language systems into your operations.' },
  { title: 'Automation', description: 'Replace repetitive work with elegant, reliable intelligent workflows.' }
];

const industries = ['Healthcare', 'Finance', 'Education', 'Manufacturing', 'Retail', 'Logistics', 'Government', 'Startups'];

const stackGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'Vue']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'Java', '.NET']
  },
  {
    title: 'AI',
    items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain']
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub', 'Jenkins']
  }
];

const processSteps = ['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Deployment', 'Support'];

const portfolioItems = [
  { title: 'AI Insight Platform', category: 'Analytics', tech: 'Python · React', description: 'A forecasting console for cross-functional decision-making.' },
  { title: 'Secure Operations Portal', category: 'Cybersecurity', tech: 'Node.js · Azure', description: 'A command center for incident response and risk visibility.' },
  { title: 'Digital Learning Suite', category: 'Education', tech: 'Next.js · OpenAI', description: 'A smart learning experience with personalized guidance.' }
];

const testimonials = [
  { quote: 'Sahnar delivered a thoughtful AI platform that looked premium and performed with reliability.', name: 'Neha Rao', role: 'CTO, Northstar Labs' },
  { quote: 'Their team blended product design and technical depth exceptionally well.', name: 'Arjun Menon', role: 'Head of Innovation, Velora' }
];

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '25+', label: 'Clients' },
  { value: '10+', label: 'Industries' },
  { value: '98%', label: 'Satisfaction' }
];

const internshipTypes = ['Remote', 'Hybrid', 'Onsite'];
const applicationStatuses = ['Applied', 'Reviewed', 'Shortlisted', 'Accepted', 'Rejected'];
const defaultAdminEmail = 'admin@sahnartech.com';
const defaultAdminPassword = 'Sahnar@2026';

function ApplicationForm({ onSubmit, form, onChange, onEducationChange, onResumeUpload }) {
  return (
    <div className="professional-form-wrapper">
      <form className="application-form professional-form" onSubmit={onSubmit}>
        <h4 className="form-heading">Professional Internship Application</h4>
        
        <div className="form-section-card">
          <div className="form-section-header">Personal Information</div>
          <div className="form-grid-2">
            <label className="form-label-group">
              <span className="field-title">Full Name *</span>
              <input name="name" value={form.name} onChange={onChange} placeholder="John Doe" required />
            </label>
            <label className="form-label-group">
              <span className="field-title">Email Address *</span>
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="johndoe@example.com" required />
            </label>
          </div>
          <div className="form-grid-2">
            <label className="form-label-group">
              <span className="field-title">Contact Number *</span>
              <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" required />
            </label>
            <label className="form-label-group">
              <span className="field-title">Key Skills *</span>
              <input name="skills" value={form.skills} onChange={onChange} placeholder="e.g. Python, React, JavaScript, SQL" required />
            </label>
          </div>
        </div>

        <div className="form-section-card">
          <div className="form-section-header">Education Qualifications</div>
          
          <div className="nested-education-level">
            <span className="level-subtitle">1. Graduation / Post-Graduation *</span>
            <div className="form-grid-2">
              <label className="form-label-group">
                <span className="field-title">Degree / Specialization</span>
                <input 
                  value={form.education.graduation.degree} 
                  onChange={(e) => onEducationChange('graduation', 'degree', e.target.value)} 
                  placeholder="e.g. B.Tech Computer Science" 
                  required 
                />
              </label>
              <label className="form-label-group">
                <span className="field-title">College / University</span>
                <input 
                  value={form.education.graduation.institute} 
                  onChange={(e) => onEducationChange('graduation', 'institute', e.target.value)} 
                  placeholder="e.g. ABC Institute of Technology" 
                  required 
                />
              </label>
            </div>
            <div className="form-grid-2">
              <label className="form-label-group">
                <span className="field-title">Passing Year</span>
                <input 
                  type="number" 
                  value={form.education.graduation.year} 
                  onChange={(e) => onEducationChange('graduation', 'year', e.target.value)} 
                  placeholder="e.g. 2026" 
                  required 
                />
              </label>
              <label className="form-label-group">
                <span className="field-title">CGPA / Marks Obtain</span>
                <input 
                  value={form.education.graduation.cgpa} 
                  onChange={(e) => onEducationChange('graduation', 'cgpa', e.target.value)} 
                  placeholder="e.g. 8.8 CGPA" 
                  required 
                />
              </label>
            </div>
          </div>

          <div className="nested-education-level">
            <span className="level-subtitle">2. Class 12th / Diploma *</span>
            <div className="form-grid-2">
              <label className="form-label-group">
                <span className="field-title">School / College Name</span>
                <input 
                  value={form.education.twelfth.school} 
                  onChange={(e) => onEducationChange('twelfth', 'school', e.target.value)} 
                  placeholder="e.g. St. Jude Higher Secondary" 
                  required 
                />
              </label>
              <label className="form-label-group">
                <span className="field-title">Board / Council</span>
                <input 
                  value={form.education.twelfth.board} 
                  onChange={(e) => onEducationChange('twelfth', 'board', e.target.value)} 
                  placeholder="e.g. CBSE / ICSE / State Board" 
                  required 
                />
              </label>
            </div>
            <div className="form-grid-2">
              <label className="form-label-group">
                <span className="field-title">Passing Year</span>
                <input 
                  type="number" 
                  value={form.education.twelfth.year} 
                  onChange={(e) => onEducationChange('twelfth', 'year', e.target.value)} 
                  placeholder="e.g. 2022" 
                  required 
                />
              </label>
              <label className="form-label-group">
                <span className="field-title">Percentage Marks</span>
                <input 
                  value={form.education.twelfth.percentage} 
                  onChange={(e) => onEducationChange('twelfth', 'percentage', e.target.value)} 
                  placeholder="e.g. 91.5%" 
                  required 
                />
              </label>
            </div>
          </div>

          <div className="nested-education-level border-none">
            <span className="level-subtitle">3. Class 10th *</span>
            <div className="form-grid-2">
              <label className="form-label-group">
                <span className="field-title">School Name</span>
                <input 
                  value={form.education.tenth.school} 
                  onChange={(e) => onEducationChange('tenth', 'school', e.target.value)} 
                  placeholder="e.g. Army Public School" 
                  required 
                />
              </label>
              <label className="form-label-group">
                <span className="field-title">Board / Council</span>
                <input 
                  value={form.education.tenth.board} 
                  onChange={(e) => onEducationChange('tenth', 'board', e.target.value)} 
                  placeholder="e.g. CBSE" 
                  required 
                />
              </label>
            </div>
            <div className="form-grid-2">
              <label className="form-label-group">
                <span className="field-title">Passing Year</span>
                <input 
                  type="number" 
                  value={form.education.tenth.year} 
                  onChange={(e) => onEducationChange('tenth', 'year', e.target.value)} 
                  placeholder="e.g. 2020" 
                  required 
                />
              </label>
              <label className="form-label-group">
                <span className="field-title">CGPA / Percentage Marks</span>
                <input 
                  value={form.education.tenth.cgpa} 
                  onChange={(e) => onEducationChange('tenth', 'cgpa', e.target.value)} 
                  placeholder="e.g. 9.4 CGPA or 89%" 
                  required 
                />
              </label>
            </div>
          </div>
        </div>

        <div className="form-section-card">
          <div className="form-section-header">Resume & Professional Links</div>
          <div className="form-grid-2">
            <label className="form-label-group">
              <span className="field-title">GitHub / Portfolio Link</span>
              <input name="portfolioUrl" type="url" value={form.portfolioUrl} onChange={onChange} placeholder="https://github.com/username" />
            </label>
            <label className="form-label-group">
              <span className="field-title">LinkedIn Profile Link</span>
              <input name="linkedinUrl" type="url" value={form.linkedinUrl} onChange={onChange} placeholder="https://linkedin.com/in/username" />
            </label>
          </div>

          <div className="form-label-group" style={{ marginTop: '0.8rem' }}>
            <span className="field-title">Upload Resume (PDF / Word) *</span>
            <div className="custom-file-upload">
              <input 
                type="file" 
                accept=".pdf,.docx,.doc" 
                onChange={onResumeUpload} 
                id="resume-file-upload-input"
                className="hidden-file-input"
                required={!form.resumeFile}
              />
              <label htmlFor="resume-file-upload-input" className="file-upload-dropzone">
                <span className="upload-icon">📁</span>
                {form.resumeFile ? (
                  <div className="selected-file-details">
                    <span className="file-title-display">{form.resumeFile.name}</span>
                    <span className="change-hint">(Click to change)</span>
                  </div>
                ) : (
                  <span className="upload-placeholder">Choose PDF or DOCX file to upload</span>
                )}
              </label>
            </div>
          </div>
        </div>

        <label className="form-label-group">
          <span className="field-title">Cover Letter / Why this internship? *</span>
          <textarea 
            name="message" 
            rows="4" 
            value={form.message} 
            onChange={onChange} 
            placeholder="Explain why you are a good fit for this role and what you hope to achieve." 
            required 
          />
        </label>

        <button type="submit" className="button button-primary submit-application-btn">Submit Application</button>
      </form>
    </div>
  );
}

const resolvePageFromPath = (path = '') => {
  const pathname = path || (typeof window !== 'undefined' ? window.location.pathname : '/');

  if (pathname.startsWith('/admin')) {
    return 'admin';
  }

  if (pathname.startsWith('/internships')) {
    return 'internships';
  }

  if (pathname.startsWith('/apply')) {
    return 'apply';
  }

  return 'home';
};

const getInitialPage = () => resolvePageFromPath();

function App() {
  const [feed, setFeed] = useState(defaultFeed);
  const [status, setStatus] = useState('active');
  const [activeSlide, setActiveSlide] = useState(0);
  const [internships, setInternships] = useState([]);
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [activeView, setActiveView] = useState('home');
  const [selectedInternshipId, setSelectedInternshipId] = useState('');
  const [editingInternshipId, setEditingInternshipId] = useState('');
  const [adminAuthenticated, setAdminAuthenticated] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return Boolean(window.localStorage.getItem('sahnar-admin-auth'));
  });
  const [adminLoginForm, setAdminLoginForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [expandedCandidateId, setExpandedCandidateId] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    portfolioUrl: '',
    linkedinUrl: '',
    education: {
      graduation: { degree: '', institute: '', year: '', cgpa: '' },
      twelfth: { school: '', board: '', year: '', percentage: '' },
      tenth: { school: '', board: '', year: '', cgpa: '' }
    },
    resumeFile: null,
    message: ''
  });
  const [adminForm, setAdminForm] = useState({
    title: '',
    company: 'Sahnar Technologies',
    location: 'Remote',
    type: 'Remote',
    duration: '3 months',
    stipend: '₹10,000/month',
    description: '',
    requirements: '',
    deadline: ''
  });

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPage(resolvePageFromPath(window.location.pathname));
      setActiveView('home');
    };

    window.addEventListener('popstate', handleRouteChange);

    const carouselTimer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 4500);

    const loadData = async () => {
      try {
        const statusRes = await fetch('/api/status');
        const statusData = await statusRes.json();
        if (statusData?.feed) {
          setFeed(statusData.feed);
          setStatus(statusData.status || 'active');
        }
      } catch {
        setStatus('active');
      }

      try {
        const internshipsRes = await fetch('/api/internships');
        const internshipsData = await internshipsRes.json();
        if (internshipsData?.internships) {
          setInternships(internshipsData.internships);
        }
      } catch {
        setInternships([]);
      }

      try {
        const applicationsRes = await fetch('/api/internships/applications');
        const applicationsData = await applicationsRes.json();
        if (applicationsData?.applications) {
          setApplications(applicationsData.applications);
        }
      } catch {
        setApplications([]);
      }
    };

    loadData();

    return () => {
      window.clearInterval(carouselTimer);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
    };
  }, [currentPage]);

  const navigateToPage = (page) => {
    const nextPath = page === 'admin' ? '/admin' : page === 'internships' ? '/internships' : page === 'apply' ? '/apply' : '/';

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', nextPath);
      setCurrentPage(page);
      setActiveView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const resetApplicationForm = () => {
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      skills: '',
      portfolioUrl: '',
      linkedinUrl: '',
      education: {
        graduation: { degree: '', institute: '', year: '', cgpa: '' },
        twelfth: { school: '', board: '', year: '', percentage: '' },
        tenth: { school: '', board: '', year: '', cgpa: '' }
      },
      resumeFile: null,
      message: ''
    });
  };

  const handleApplicationChange = (event) => {
    const { name, value } = event.target;
    setApplicationForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (level, field, value) => {
    setApplicationForm((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [level]: {
          ...prev.education[level],
          [field]: value
        }
      }
    }));
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setApplicationForm((prev) => ({
        ...prev,
        resumeFile: {
          name: file.name,
          data: e.target.result
        }
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleAdminChange = (event) => {
    const { name, value } = event.target;
    setAdminForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdminLoginChange = (event) => {
    const { name, value } = event.target;
    setAdminLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adminLoginForm)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Admin login failed.');
      }
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('sahnar-admin-auth', data.token);
      }
      setAdminAuthenticated(true);
      navigateToPage('admin');
      setMessage('Welcome to the admin dashboard.');
      setAdminLoginForm({ email: '', password: '' });
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleAdminLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('sahnar-admin-auth');
    }
    setAdminAuthenticated(false);
    setMessage('You have signed out from the admin panel.');
    navigateToPage('home');
  };

  const handleApplySubmit = async (event) => {
    event.preventDefault();
    if (!selectedInternshipId) {
      setMessage('Select an internship before applying.');
      return;
    }

    try {
      const response = await fetch(`/api/internships/${selectedInternshipId}/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationForm)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Application submission failed.');
      }
      setApplications(data.applications || []);
      setMessage(`Application submitted for ${data.internship?.title || 'the selected role'}. The admin dashboard is ready for review.`);
      setSelectedInternshipId('');
      resetApplicationForm();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleCreateOrUpdateInternship = async (event) => {
    event.preventDefault();
    const method = editingInternshipId ? 'PUT' : 'POST';
    const endpoint = editingInternshipId ? `/api/internships/${editingInternshipId}` : '/api/internships';

    try {
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adminForm)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to save internship.');
      }
      setInternships(data.internships || []);
      setMessage(editingInternshipId ? 'Internship updated successfully.' : 'Internship posted successfully.');
      setEditingInternshipId('');
      setAdminForm({
        title: '',
        company: 'Sahnar Technologies',
        location: 'Remote',
        type: 'Remote',
        duration: '3 months',
        stipend: '₹10,000/month',
        description: '',
        requirements: '',
        deadline: ''
      });
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleEditInternship = (internship) => {
    setEditingInternshipId(internship.id);
    setAdminForm({
      title: internship.title,
      company: internship.company,
      location: internship.location,
      type: internship.type,
      duration: internship.duration,
      stipend: internship.stipend,
      description: internship.description,
      requirements: internship.requirements?.join(', ') || '',
      deadline: internship.deadline
    });
    setActiveView('admin');
    setMessage('Editing internship. Update the details and save.');
  };

  const handleDeleteInternship = async (internshipId) => {
    try {
      const response = await fetch(`/api/internships/${internshipId}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to delete internship.');
      }
      setInternships(data.internships || []);
      setMessage('Internship removed.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleStatusChange = async (applicationId, nextStatus) => {
    try {
      const response = await fetch(`/api/internships/applications/${applicationId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to update application status.');
      }
      setApplications(data.applications || []);
      setMessage('Candidate status updated.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (currentPage === 'apply') {
    const selectedInternship = internships.find((item) => item.id === selectedInternshipId);
    return (
      <div className="app-shell">
        <header className="site-header">
          <div className="container header-inner">
            <button type="button" className="brand" onClick={() => navigateToPage('home')}>
              <img className="brand-mark" src={images.logo} alt="Sahnar Technologies Logo" />
              <div>
                <span className="brand-name">Sahnar Technologies</span>
              </div>
            </button>

            <div className="header-actions">
              <button type="button" className="button button-secondary" onClick={() => navigateToPage('home')}>
                Back to Site
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="section section-alt">
            <div className="container" style={{ maxWidth: '800px' }}>
              <div className="section-header">
                <p className="section-label">Internship Application Form</p>
                {selectedInternship ? (
                  <h2>Applying for: <span style={{ color: 'var(--primary)' }}>{selectedInternship.title}</span></h2>
                ) : (
                  <h2>Select a position and submit details</h2>
                )}
              </div>

              {message ? <div className="message-box">{message}</div> : null}

              {!selectedInternshipId && internships.length > 0 ? (
                <div className="form-section-card" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label-group">
                    <span className="field-title">Choose Position *</span>
                    <select
                      value={selectedInternshipId}
                      onChange={(e) => {
                        setSelectedInternshipId(e.target.value);
                        setMessage('');
                      }}
                      style={{
                        padding: '0.9rem 1rem',
                        borderRadius: '1rem',
                        border: '1px solid var(--border)',
                        background: 'var(--surface)',
                        fontFamily: 'inherit',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--text)'
                      }}
                    >
                      <option value="">-- Choose Internship Role --</option>
                      {internships.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title} ({item.company})
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              ) : null}

              {selectedInternshipId || internships.length === 0 ? (
                <>
                  {selectedInternshipId ? (
                    <div style={{ marginBottom: '1.25rem' }}>
                      <button
                        type="button"
                        className="button button-secondary"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                        onClick={() => {
                          setSelectedInternshipId('');
                          setMessage('');
                        }}
                      >
                        ← Choose different position
                      </button>
                    </div>
                  ) : null}

                  {internships.length > 0 ? (
                    <ApplicationForm
                      onSubmit={handleApplySubmit}
                      form={applicationForm}
                      onChange={handleApplicationChange}
                      onEducationChange={handleEducationChange}
                      onResumeUpload={handleResumeUpload}
                    />
                  ) : (
                    <div className="empty-state">No active internships available at this moment.</div>
                  )}
                </>
              ) : null}
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (currentPage === 'internships') {
    return (
      <div className="app-shell">
        <header className="site-header">
          <div className="container header-inner">
            <button type="button" className="brand" onClick={() => navigateToPage('home')}>
              <img className="brand-mark" src={images.logo} alt="Sahnar Technologies Logo" />
              <div>
                <span className="brand-name">Sahnar Technologies</span>
              </div>
            </button>

            <div className="header-actions">
              <button type="button" className="button button-secondary" onClick={() => navigateToPage('home')}>
                Back to Site
              </button>
              <button type="button" className="button button-primary" onClick={() => navigateToPage('admin')}>
                Admin Login
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="section section-alt" id="internships">
            <div className="container">
              <div className="section-header">
                <p className="section-label">Internship Applications</p>
                <h2>Apply for internships and track your submission.</h2>
              </div>

              {message ? <div className="message-box">{message}</div> : null}

              <div className="internship-grid">
                {internships.map((internship) => (
                  <article className="internship-card" key={internship.id}>
                    <div className="internship-top">
                      <span className="status-pill">{internship.type}</span>
                      <span className="status-text">{internship.duration}</span>
                    </div>
                    <h3>{internship.title}</h3>
                    <p className="company-line">{internship.company}</p>
                    <p>{internship.description}</p>
                    <div className="internship-meta">
                      <span>📍 {internship.location}</span>
                      <span>💰 {internship.stipend}</span>
                      <span>📅 Deadline {internship.deadline}</span>
                    </div>
                    <div className="internship-requirements">
                      <strong>Requirements</strong>
                      <ul>
                        {internship.requirements?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="button button-primary"
                      onClick={() => {
                        setSelectedInternshipId(internship.id);
                        setMessage('');
                        setApplicationForm((prev) => ({ ...prev, message: `I am interested in the ${internship.title} role.` }));
                        navigateToPage('apply');
                      }}
                    >
                      Apply Now
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (currentPage === 'admin') {
    return (
      <div className="app-shell">
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/">
              <img className="brand-mark" src={images.logo} alt="Sahnar Technologies Logo" />
              <div>
                <span className="brand-name">Sahnar Technologies</span>
              </div>
            </a>

            <div className="header-actions">
              <button type="button" className="button button-secondary" onClick={() => navigateToPage('home')}>
                Back to Site
              </button>
              {adminAuthenticated ? (
                <button type="button" className="button button-primary" onClick={handleAdminLogout}>
                  Logout
                </button>
              ) : null}
            </div>
          </div>
        </header>

        <main>
          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <p className="section-label">Admin Dashboard</p>
                <h2>Manage internships and candidate applications.</h2>
              </div>

              {message ? <div className="message-box">{message}</div> : null}

              {!adminAuthenticated ? (
                <div className="admin-login-card">
                  <h3>Admin Login</h3>
                  <p>Access the internship administration panel.</p>
                  <form className="contact-form" onSubmit={handleAdminLogin}>
                    <label>
                      <span>Email</span>
                      <input name="email" type="email" value={adminLoginForm.email} onChange={handleAdminLoginChange} placeholder="admin@sahnartech.com" required />
                    </label>
                    <label>
                      <span>Password</span>
                      <input name="password" type="password" value={adminLoginForm.password} onChange={handleAdminLoginChange} placeholder="Enter password" required />
                    </label>
                    <button type="submit" className="button button-primary">Access Dashboard</button>
                  </form>
                  <p className="admin-hint">Demo credentials: {defaultAdminEmail} / {defaultAdminPassword}</p>
                </div>
              ) : (
                <>
                  <div className="dashboard-summary">
                    <div className="dashboard-summary-card">
                      <strong>{internships.length}</strong>
                      <span>Active Internships</span>
                    </div>
                    <div className="dashboard-summary-card">
                      <strong>{applications.length}</strong>
                      <span>Total Applications</span>
                    </div>
                    <div className="dashboard-summary-card">
                      <strong>{applications.filter((item) => item.status === 'Shortlisted' || item.status === 'Accepted').length}</strong>
                      <span>Shortlisted</span>
                    </div>
                    <div className="dashboard-summary-card">
                      <strong>{applications.filter((item) => item.status === 'Applied' || item.status === 'Reviewed').length}</strong>
                      <span>Pending Review</span>
                    </div>
                  </div>

                  <div className="admin-panel">
                    <div className="admin-grid">
                      <article className="admin-card">
                        <h3>{editingInternshipId ? 'Edit Internship' : 'Post New Internship'}</h3>
                        <form className="contact-form" onSubmit={handleCreateOrUpdateInternship}>
                          <label>
                            <span>Title</span>
                            <input name="title" value={adminForm.title} onChange={handleAdminChange} placeholder="AI Product Intern" required />
                          </label>
                          <label>
                            <span>Company</span>
                            <input name="company" value={adminForm.company} onChange={handleAdminChange} placeholder="Sahnar Technologies" required />
                          </label>
                          <label>
                            <span>Location</span>
                            <input name="location" value={adminForm.location} onChange={handleAdminChange} placeholder="Remote" required />
                          </label>
                          <label>
                            <span>Type</span>
                            <select name="type" value={adminForm.type} onChange={handleAdminChange}>
                              {internshipTypes.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </label>
                          <label>
                            <span>Duration</span>
                            <input name="duration" value={adminForm.duration} onChange={handleAdminChange} placeholder="3 months" required />
                          </label>
                          <label>
                            <span>Stipend</span>
                            <input name="stipend" value={adminForm.stipend} onChange={handleAdminChange} placeholder="₹10,000/month" required />
                          </label>
                          <label>
                            <span>Deadline</span>
                            <input name="deadline" type="date" value={adminForm.deadline} onChange={handleAdminChange} required />
                          </label>
                          <label>
                            <span>Description</span>
                            <textarea name="description" rows="4" value={adminForm.description} onChange={handleAdminChange} placeholder="Describe the role and outcomes." required />
                          </label>
                          <label>
                            <span>Requirements</span>
                            <textarea name="requirements" rows="3" value={adminForm.requirements} onChange={handleAdminChange} placeholder="Python, React, communication" required />
                          </label>
                          <button type="submit" className="button button-primary">
                            {editingInternshipId ? 'Save Internship' : 'Post Internship'}
                          </button>
                        </form>
                      </article>

                      <article className="admin-card">
                        <h3>Manage Internships</h3>
                        {internships.length === 0 ? (
                          <div className="empty-state">No internship posts yet.</div>
                        ) : (
                          <div className="admin-list">
                            {internships.map((internship) => (
                              <div className="admin-list-item" key={internship.id}>
                                <div>
                                  <strong>{internship.title}</strong>
                                  <p>{internship.company} • {internship.location}</p>
                                </div>
                                <div className="admin-actions">
                                  <button type="button" className="button button-secondary" onClick={() => handleEditInternship(internship)}>
                                    Edit
                                  </button>
                                  <button type="button" className="button button-primary" onClick={() => handleDeleteInternship(internship.id)}>
                                    Delete
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </article>
                    </div>

                    <article className="admin-card">
                      <h3>Manage Candidates</h3>
                      {applications.length === 0 ? (
                        <div className="empty-state">No candidate applications yet.</div>
                      ) : (
                        <div className="admin-table">
                          {applications.map((application) => {
                            const isExpanded = expandedCandidateId === application.id;
                            return (
                              <div className="candidate-item" key={application.id} style={{ marginBottom: '1.2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.2rem' }}>
                                <div className="admin-table-row">
                                  <div>
                                    <strong>{application.name}</strong>
                                    <p>{application.email} • {application.phone} • Applied for: <strong>{application.internshipTitle}</strong></p>
                                  </div>
                                  <div className="candidate-meta">
                                    <span className="status-chip">{application.status}</span>
                                    <select value={application.status} onChange={(event) => handleStatusChange(application.id, event.target.value)}>
                                      {applicationStatuses.map((statusOption) => (
                                        <option key={statusOption} value={statusOption}>{statusOption}</option>
                                      ))}
                                    </select>
                                    <button 
                                      type="button" 
                                      className="button button-secondary"
                                      style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                                      onClick={() => setExpandedCandidateId(isExpanded ? null : application.id)}
                                    >
                                      {isExpanded ? 'Hide Details' : 'View Details'}
                                    </button>
                                  </div>
                                </div>
                                
                                {isExpanded && (
                                  <div className="candidate-details-expanded" style={{ marginTop: '1rem', padding: '1rem', background: 'var(--surface-soft)', borderRadius: '1rem' }}>
                                    <div className="details-section" style={{ marginBottom: '0.8rem' }}>
                                      <strong>Skills:</strong>
                                      <p style={{ margin: '0.2rem 0 0', color: 'var(--text)' }}>{application.skills}</p>
                                    </div>
                                    
                                    <div className="details-section" style={{ marginBottom: '0.8rem' }}>
                                      <strong>Education Qualifications:</strong>
                                      <div className="education-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.4rem' }}>
                                        <div className="edu-detail-card" style={{ padding: '0.8rem', background: 'var(--surface)', borderRadius: '0.8rem', border: '1px solid var(--border)' }}>
                                          <h6 style={{ margin: '0 0 0.4rem', color: 'var(--primary)', fontWeight: '700' }}>Graduation / Post-Graduation</h6>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Degree:</strong> {application.education?.graduation?.degree}</p>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Institute:</strong> {application.education?.graduation?.institute}</p>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Year:</strong> {application.education?.graduation?.year}</p>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>CGPA:</strong> {application.education?.graduation?.cgpa}</p>
                                        </div>
                                        <div className="edu-detail-card" style={{ padding: '0.8rem', background: 'var(--surface)', borderRadius: '0.8rem', border: '1px solid var(--border)' }}>
                                          <h6 style={{ margin: '0 0 0.4rem', color: 'var(--primary)', fontWeight: '700' }}>Class 12th / Diploma</h6>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>School:</strong> {application.education?.twelfth?.school}</p>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Board:</strong> {application.education?.twelfth?.board}</p>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Year:</strong> {application.education?.twelfth?.year}</p>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Percentage:</strong> {application.education?.twelfth?.percentage}</p>
                                        </div>
                                        <div className="edu-detail-card" style={{ padding: '0.8rem', background: 'var(--surface)', borderRadius: '0.8rem', border: '1px solid var(--border)' }}>
                                          <h6 style={{ margin: '0 0 0.4rem', color: 'var(--primary)', fontWeight: '700' }}>Class 10th</h6>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>School:</strong> {application.education?.tenth?.school}</p>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Board:</strong> {application.education?.tenth?.board}</p>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Year:</strong> {application.education?.tenth?.year}</p>
                                          <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>CGPA/Percentage:</strong> {application.education?.tenth?.cgpa}</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="details-section" style={{ marginBottom: '0.8rem' }}>
                                      <strong>Attachments & Links:</strong>
                                      <div className="links-row" style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
                                        {application.resumeFile ? (
                                          <a 
                                            href={application.resumeFile.data} 
                                            download={application.resumeFile.name} 
                                            className="button button-primary"
                                            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                                          >
                                            Download Resume ({application.resumeFile.name})
                                          </a>
                                        ) : (
                                          <span style={{ color: 'red' }}>No Resume uploaded.</span>
                                        )}
                                        {application.portfolioUrl && (
                                          <a href={application.portfolioUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                                            GitHub / Portfolio
                                          </a>
                                        )}
                                        {application.linkedinUrl && (
                                          <a href={application.linkedinUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                                            LinkedIn
                                          </a>
                                        )}
                                      </div>
                                    </div>

                                    <div className="details-section">
                                      <strong>Cover Letter / Message:</strong>
                                      <p style={{ margin: '0.2rem 0 0', whiteSpace: 'pre-wrap', color: 'var(--text)' }}>{application.message}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </article>
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <img className="brand-mark" src={images.logo} alt="Sahnar Technologies Logo" />
            <div>
              <span className="brand-name">Sahnar Technologies</span>
            </div>
          </a>

          <nav className="main-nav" aria-label="Primary navigation">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#solutions">Solutions</a>
            <a className="nav-link" href="#internships">Internships</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <button type="button" className="button button-primary" onClick={() => navigateToPage('internships')}>
              Internship Apply
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero reveal" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI • ML • Cybersecurity • Cloud</p>
              <h1>Building intelligent digital solutions for the future.</h1>
              <p className="hero-text">
                We partner with ambitious businesses to design secure, scalable platforms powered by artificial intelligence, data science, and modern engineering.
              </p>

              <div className="hero-actions">
                <button type="button" className="button button-primary" onClick={() => navigateToPage('internships')}>
                  View Internships
                </button>
                <a className="button button-secondary" href="#services">Explore Services</a>
              </div>

              <div className="trust-row">
                <span>Trusted by</span>
                <div className="trust-pills">
                  <span>Startups</span>
                  <span>Enterprises</span>
                  <span>Education</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-top">
                  <span className="status-pill">Live AI Ops</span>
                  <span className="status-text">Research-first execution</span>
                </div>
                <div className="hero-illustration-wrap">
                  <HeroIllustration />
                </div>
                <div className="hero-metrics">
                  <div className="metric-card">
                    <strong>12</strong>
                    <span>Active models</span>
                  </div>
                  <div className="metric-card">
                    <strong>8</strong>
                    <span>Threat hunts</span>
                  </div>
                  <div className="metric-card">
                    <strong>24</strong>
                    <span>Innovation sprints</span>
                  </div>
                </div>
                <div className="hero-graph">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="internships">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Internships</p>
              <h2>Launch your career with industry-ready learning.</h2>
            </div>

            {message ? <div className="message-box">{message}</div> : null}

            <div className="internship-toolbar">
              <button type="button" className="button button-primary" onClick={() => navigateToPage('internships')}>
                Open Positions
              </button>
              <button type="button" className="button button-secondary" onClick={() => navigateToPage('admin')}>
                {adminAuthenticated ? 'Open Admin Dashboard' : 'Admin Login'}
              </button>
            </div>

            <div className="internship-grid" style={{ marginTop: '1.25rem' }}>
              {internships.map((internship) => (
                <article className="internship-card" key={internship.id}>
                  <div className="internship-top">
                    <span className="status-pill">{internship.type}</span>
                    <span className="status-text">{internship.duration}</span>
                  </div>
                  <h3>{internship.title}</h3>
                  <p className="company-line">{internship.company}</p>
                  <p>{internship.description}</p>
                  <div className="internship-meta">
                    <span>📍 {internship.location}</span>
                    <span>💰 {internship.stipend}</span>
                    <span>📅 Deadline {internship.deadline}</span>
                  </div>
                  <div className="internship-requirements">
                    <strong>Requirements</strong>
                    <ul>
                      {internship.requirements?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={() => {
                      setSelectedInternshipId(internship.id);
                      setMessage('');
                      setApplicationForm((prev) => ({ ...prev, message: `I am interested in the ${internship.title} role.` }));
                      navigateToPage('apply');
                    }}
                  >
                    Apply Now
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section showcase-section reveal">
          <div className="container showcase-shell">
            <div className="showcase-copy">
              <p className="section-label">AI technology showcase</p>
              <h2>Modern visuals for intelligent systems, secure operations, and cloud innovation.</h2>
              <p>
                From conversational AI to cyber defense and cloud intelligence, our experiences combine premium visuals with actionable technology storytelling.
              </p>
            </div>
            <div className="showcase-card">
              <div className="ambient ambient-one" />
              <div className="ambient ambient-two" />
              <div className="showcase-image-frame">
                <img src={showcaseSlides[activeSlide].image} alt={showcaseSlides[activeSlide].title} />
              </div>
              <div className="showcase-content">
                <div>
                  <p className="showcase-kicker">{showcaseSlides[activeSlide].subtitle}</p>
                  <h3>{showcaseSlides[activeSlide].title}</h3>
                  <p>{showcaseSlides[activeSlide].description}</p>
                </div>
                <div className="showcase-dots" aria-label="Carousel indicators">
                  {showcaseSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      className={`dot ${index === activeSlide ? 'active' : ''}`}
                      aria-label={`Show ${slide.title}`}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section trust-section reveal">
          <div className="container">
            <div className="section-header center">
              <p className="section-label">Trusted by businesses</p>
              <h2>Premium solutions backed by enterprise discipline.</h2>
            </div>
            <div className="trust-grid">
              <article className="trust-card">
                <div className="trust-number">01</div>
                <h3>Innovation</h3>
                <p>We combine R&D thinking with product delivery to create meaningful outcomes.</p>
              </article>
              <article className="trust-card">
                <div className="trust-number">02</div>
                <h3>Expert Engineers</h3>
                <p>Cross-functional teams deliver clean architecture and rapid execution.</p>
              </article>
              <article className="trust-card">
                <div className="trust-number">03</div>
                <h3>Secure by Design</h3>
                <p>Security and compliance stay central from the first sketch to deployment.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Services</p>
              <h2>Technology services built for confident transformation.</h2>
            </div>
            <div className="card-grid services-grid">
              {services.map((service) => (
                <article className="feature-card reveal" key={service.title}>
                  <span className="feature-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact">Read more</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="about">
          <div className="container about-grid">
            <div className="about-copy reveal">
              <p className="section-label">Why choose Sahnar</p>
              <h2>Bridging research, engineering, and business outcomes.</h2>
              <p>
                We help organizations move from concept to production with confidence through intelligent systems, secure delivery, and carefully crafted product strategy.
              </p>
              <div className="bullet-list">
                <div>Innovation-led delivery</div>
                <div>Expert technical leadership</div>
                <div>Scalable and secure architecture</div>
                <div>24×7 support and partnership</div>
              </div>
            </div>
            <div className="about-card reveal">
              <div className="about-card-inner">
                <h3>Our approach</h3>
                <p>From discovery to deployment, every engagement is structured to reduce friction and accelerate meaningful value.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container">
            <div className="section-header">
              <p className="section-label">AI solutions showcase</p>
              <h2>Purpose-built solutions for high-impact operational change.</h2>
            </div>
            <div className="card-grid solutions-grid">
              {solutions.map((solution) => (
                <article className="feature-card reveal" key={solution.title}>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="industries">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Industries</p>
              <h2>Solutions tailored for sectors that demand trust and speed.</h2>
            </div>
            <div className="industry-grid">
              {industries.map((industry) => (
                <div className="industry-card reveal" key={industry}>{industry}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Technology stack</p>
              <h2>Modern tools and platforms with proven enterprise adoption.</h2>
            </div>
            <div className="stack-grid">
              {stackGroups.map((group) => (
                <article className="stack-card reveal" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="pill-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Process</p>
              <h2>A polished delivery model from idea to launch.</h2>
            </div>
            <div className="timeline reveal">
              {processSteps.map((step, index) => (
                <div className="timeline-item" key={step}>
                  <span>{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Portfolio</p>
              <h2>Selected work that reflects our craft and ambition.</h2>
            </div>
            <div className="card-grid portfolio-grid">
              {portfolioItems.map((item) => (
                <article className="portfolio-card reveal" key={item.title}>
                  <div className="portfolio-top">
                    <span>{item.category}</span>
                    <strong>{item.tech}</strong>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#contact">Visit project</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="careers">
          <div className="container">
            <div className="section-header center">
              <p className="section-label">Stats</p>
              <h2>Measured progress and a reputation for consistency.</h2>
            </div>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card reveal" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Testimonials</p>
              <h2>Trusted by teams that value precision, clarity, and speed.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card reveal" key={item.name}>
                  <p>“{item.quote}”</p>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-band reveal" id="contact">
          <div className="container cta-band-inner">
            <div>
              <p className="eyebrow">Ready to transform?</p>
              <h2>Let’s build the next intelligent chapter of your business.</h2>
            </div>
            <div className="cta-actions">
              <a className="button button-primary" href="mailto:contact@sahnartech.com">Book Consultation</a>
              <a className="button button-secondary" href="mailto:contact@sahnartech.com">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <div className="contact-card reveal">
              <p className="section-label">Contact</p>
              <h2>Reach out to start your next initiative.</h2>
              <p>We typically reply within one business day.</p>
              <ul>
                <li>Phone: +91 98765 43210</li>
                <li>Email: contact@sahnartech.com</li>
                <li>Address: Basavana Bagevadi, Karnataka</li>
                <li>Hours: Mon – Fri, 9:00 AM – 6:00 PM</li>
              </ul>
            </div>
            <form className="contact-form reveal">
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="you@company.com" />
              </label>
              <label>
                <span>Project Brief</span>
                <textarea rows="4" placeholder="Tell us about your goals" />
              </label>
              <button type="button" className="button button-primary">Send Inquiry</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>Sahnar Technologies</h4>
            <p>Enterprise-grade AI, cybersecurity, and software delivery for modern organizations.</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#internships">Internships</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:contact@sahnartech.com">contact@sahnartech.com</a>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Sahnar Technologies Pvt. Ltd.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
