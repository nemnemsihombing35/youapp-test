// pages/api/login.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      
      // Replace with actual authentication logic (e.g., checking a database)
      if (email === 'user@example.com' && password === 'password123') {
        return res.status(200).json({ message: 'Login successful' });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    }
    
    res.status(405).json({ message: 'Method Not Allowed' });
  }
  