import React from 'react';
import BarChart from './BarChart';
import Notifications from './Notifications';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Revenue</h1>
      <p>$25,541 <span>+17.5% from last month</span></p>
      
      <h2>Open tickets</h2>
      
      <BarChart />
      <Notifications />
    </div>
  );
};

export default MainContent;