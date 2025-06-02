import React from 'react';
import Dashboard from './components/Dashboard';
import CallAnalytics from './components/CallAnalytics';
import { FaSearch,FaTachometerAlt, FaPhone, FaChartBar, FaCog } from 'react-icons/fa';
import { GiPirateCaptain } from "react-icons/gi";
import { MdWindow } from "react-icons/md";
import { MdVideoCall } from "react-icons/md";
import { MdWifiCalling1 } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";

const App = () => {
  return (
    <div className="app">
      <aside className="sidebar">
     <GiPirateCaptain title='menu' className='menu' />
        
        <nav className="sidebar-icons">
          
          <MdWindow title="Dashboard" className='Dashboard' />
         
          <MdVideoCall title="Calls" />
          <MdWifiCalling1  title='voice'/>
          <MdAnalytics title="Analytics"/>
          <FaCog title="Settings" />
        </nav>
      </aside>

      <div className="main-wrapper">
  <header className="top-bar">
    <div className="idream">iDreamBiz</div>
    <div className="top-bar-content">
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </div>
  </header>


        <main className="main-content">
          <Dashboard />
          <CallAnalytics />
        </main>
      </div>
    </div>
  );
};

export default App;
