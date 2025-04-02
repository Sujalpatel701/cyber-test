const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const allowedIPs = process.env.ALLOWED_IPS
  ? process.env.ALLOWED_IPS.split(',').map(ip => ip.trim()) // Ensure trimmed IPs
  : [];

console.log("Allowed IPs:", allowedIPs); // Debugging allowed IPs

// POST route to check IP access
app.post('/check-ip', (req, res) => {
  const userIP = req.body.ip;
  console.log("User IP received:", userIP);
  
  if (allowedIPs.includes(userIP)) {
    console.log("✅ Access granted to:", userIP);
    return res.json({ access: true });
  } else {
    console.log("❌ Access denied to:", userIP);
    return res.json({ access: false });
  }
});

// GET route to confirm server is running
app.get('/status', (req, res) => {
  res.json({ message: 'Server is running perfectly!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
