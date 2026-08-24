import internships from '../_data/internships.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ internships });
    return;
  }

  if (req.method === 'POST') {
    // Parse body if needed
    let body = req.body;
    if (!body || Object.keys(body).length === 0) {
      try {
        const raw = await new Promise((resolve, reject) => {
          let data = '';
          req.on('data', (chunk) => (data += chunk));
          req.on('end', () => resolve(data));
          req.on('error', reject);
        });
        body = raw ? JSON.parse(raw) : {};
      } catch (err) {
        res.status(400).json({ error: 'Invalid JSON' });
        return;
      }
    }

    const { title, company, location, type, duration, stipend, description, requirements, deadline } = body;
    if (!title || !company || !location || !duration || !stipend || !description) {
      res.status(400).json({ error: 'Please fill in the required internship fields.' });
      return;
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
    res.status(201).json({ internships, internship });
    return;
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}
