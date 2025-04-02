import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Subject from './pages/Subject';
import './App.css';

function App() {
  const [isAllowed, setIsAllowed] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL; // Using Vite's env system
  console.log("✅ API URL from .env:", API_URL);

  useEffect(() => {
    const fetchUserIPv4 = async () => {
      try {
        console.log("🌍 Fetching user IP...");
        const response = await fetch('https://api4.ipify.org?format=json');
        const data = await response.json();
        const userIP = data.ip;
        
        console.log("📡 User IPv4:", userIP); // Log the IPv4

        // Send the IPv4 to backend for validation
        console.log(`🔗 Sending IP to ${API_URL}/check-ip`);
        const checkResponse = await fetch(`${API_URL}/check-ip`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ip: userIP }),
        });

        const checkData = await checkResponse.json();
        setIsAllowed(checkData.access); // Update state based on response
      } catch (error) {
        console.error('❌ Error fetching user IP:', error);
        setIsAllowed(false);
      }
    };

    fetchUserIPv4();
  }, []);

  if (isAllowed === null) return <h2>🔄 Checking access...</h2>;
  if (!isAllowed) return <h2>❌ Access Denied. You are not allowed to view this page.</h2>;

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
