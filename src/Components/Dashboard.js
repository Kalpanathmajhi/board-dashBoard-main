import React from 'react';
import './Dashbord.css';
import { Avatar } from '@mui/material'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import Sidebar from './Sidebar';
import Card from './Cards';
import FinalChart from './FinalChart';

const Dashboard = () => {
  return (
    <div>
      <Sidebar/>
    <nav className="navbar">
      <div className="navbar-logo">Dashboard</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." typeof='search' />
      </div>
      <div className="navbar-icons">
        <NotificationsIcon className='navbar-icon'/>
        <Avatar className='navbar-avatar'/>
      </div>
    </nav>
    <Card/>
    <FinalChart/>
    </div>
  );
};

export default Dashboard;