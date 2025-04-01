const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const allowedIPs = process.env.ALLOWED_IPS ? process.env.ALLOWED_IPS.split(',') : [];

app.post('/check-ip', (req, res) => {
  const userIP = req.body.ip;
  console.log("Checking IPv4:", userIP);

  if (allowedIPs.includes(userIP)) {
    return res.json({ access: true });
  } else {
    return res.json({ access: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
