import internships from '../_data/internships.js';

const parseBody = async (req) => {
  if (req.body && Object.keys(req.body).length) return req.body;
  try {
    const raw = await new Promise((resolve, reject) => {
      let data = '';
      req.on('data', (chunk) => (data += chunk));
      req.on('end', () => resolve(data));
      req.on('error', reject);
    });
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    return null;
  }
};

export default async function handler(req, res) {
  // extract id from query or pathname
  let id = req.query && req.query.id;
  if (!id) {
    try {
      const host = req.headers.host || 'localhost';
      const url = new URL(req.url, `http://${host}`);
      const parts = url.pathname.split('/').filter(Boolean);
      id = parts[parts.length - 1];
    } catch (e) {
      // fallback
    }
  }

  if (!id) return res.status(400).json({ error: 'Missing internship id' });

  if (req.method === 'GET') {
    const item = internships.find((i) => i.id === id);
    if (!item) return res.status(404).json({ error: 'Internship not found.' });
    return res.status(200).json({ internship: item });
  }

  if (req.method === 'DELETE') {
    const index = internships.findIndex((i) => i.id === id);
    if (index === -1) return res.status(404).json({ error: 'Internship not found.' });
    internships.splice(index, 1);
    return res.json({ internships });
  }

  if (req.method === 'PUT' || req.method === 'PATCH') {
    const body = await parseBody(req);
    if (body === null) return res.status(400).json({ error: 'Invalid JSON' });

    const index = internships.findIndex((i) => i.id === id);
    if (index === -1) return res.status(404).json({ error: 'Internship not found.' });

    const { title, company, location, type, duration, stipend, description, requirements, deadline } = body;
    internships[index] = {
      ...internships[index],
      title: title ?? internships[index].title,
      company: company ?? internships[index].company,
      location: location ?? internships[index].location,
      type: type ?? internships[index].type,
      duration: duration ?? internships[index].duration,
      stipend: stipend ?? internships[index].stipend,
      description: description ?? internships[index].description,
      requirements: requirements ? String(requirements).split(',').map(s=>s.trim()).filter(Boolean) : internships[index].requirements,
      deadline: deadline ?? internships[index].deadline
    };

    return res.json({ internship: internships[index], internships });
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}
