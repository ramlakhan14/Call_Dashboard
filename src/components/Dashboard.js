import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("Today");
  const [showDateInput, setShowDateInput] = useState(false);

  const pieData = {
    
    datasets: [{
      data: [300, 500, 200],
      backgroundColor: ['#2D6A4F', '#4CC9F0', '#FFBE0B'],
    }],
    labels: ['Unresolved', 'Resolved', 'Pending'],
  };

  const barData = {
    labels: ['KYC', 'e-Mandate', 'Loan Closure', 'AML', 'UTL', 'Unlisted'],
    datasets: [{
      label: 'Issue Category',
      data: [700, 500, 300, 400, 200, 100],
      backgroundColor: '#4CC9F0',
    }],
  };

  return (
    <div className="dashboard">
     

      {/* Filters */}
      <div className="dashboard-header">
        <h2>My Dashboard</h2>
        <div className="date-filters">
          {['Today', 'Week', 'Month'].map(label => (
            <button
              key={label}
              className={activeFilter === label ? 'active' : ''}
              onClick={() => setActiveFilter(label)}
            >
              {label}
            </button>
          ))}
          <button className="calender" onClick={() => setShowDateInput(!showDateInput)}>
            Select Date <FaCalendarAlt /> 
          </button>
          {showDateInput && <input type="date" />}
        </div>
      </div>

   
      <div className="dashboard-content">
        <div className="stats">
          <div className="card">Total Calls Originated <span>9232</span></div>
          <div className="card">Answered Calls <span>7293</span></div>
          <div className="card">Abandoned Calls <span>1939</span></div>
          <div className="card">Total Talk Time <span>730 Hrs</span></div>
          <div className="card">Avg Wait Time <span>1Min 50Sec</span></div>
          <div className="card">Avg Call Time <span>6Min 15Sec</span></div>
        </div>

  <div className="chart-box1">
    <h3>Issue Status</h3>
  <Pie
  data={pieData}
  className="pie"
  options={{
    plugins: {
      legend: {
        display: false,
      },
    },
  }}
/>

<div>
  <div className="pie-labels">
  {pieData.labels.map((label, index) => (
    <div key={label} className="pie-label">
      <span className="dot" style={{ backgroundColor: pieData.datasets[0].backgroundColor[index] }}></span>
      {label}
    </div>
  ))}
</div>

</div>

  </div>
  <div className="chart-box2">
    <h3>Issue Category</h3>
   <Bar
  data={barData}
  options={{
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          font: {
            size: 10, 
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 6, 
          },
        },
      },
    },
    barThickness: 5,
  }}
/>


  </div>
      </div>
    </div>
  );
};

export default Dashboard;
