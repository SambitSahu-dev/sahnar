export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // Ensure we can parse the body whether Vercel parsed it or not
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

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@sahnartech.com';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Sahnar@2026';

  const { email, password } = body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    res.json({ token: `admin-${Date.now()}`, admin: { email } });
    return;
  }

  res.status(401).json({ error: 'Invalid admin credentials.' });
}
