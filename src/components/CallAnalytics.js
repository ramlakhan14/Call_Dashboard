import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa6";
import { LiaCommentSolid } from "react-icons/lia";
import { SiAirtel, SiAboutdotme } from 'react-icons/si';



const dummyData = [
  {
    name: 'Ritik Beniwal',
    subname:"DM0029384",
    info: 'Lead',
    subinfo:'Q3AAAKDJ9283KNS4NDE',
    category: 'KYC',
    status: 'UnResolved',
    comments: 'Lorem ipsum',
    callStatus: 'Rescheduled',
    date: '20 Apr 2025',
    time: '01:12 PM | 0:42 min',
  },
  {
    name: 'Manpreet Singh',
    subname:"DM0029384",
    info: 'Lead',
    subinfo:'Q3AAAKDJ9283KNS4NDE',
    category: 'e-Mandate',
    status: 'UnResolved',
    comments: 'Lorem ipsum',
    callStatus: 'Rescheduled',
    date: '20 Apr 2025',
    time: '01:12 PM | 0:42 min',
  },
    {
    name: 'Avika Sharma',
    subname:"DM0029384",
    info: 'Lead',
    subinfo:'Q3AAAKDJ9283KNS4NDE',
    category: 'e-Mandate',
    status: 'UnResolved',
    comments: 'Lorem ipsum',
    callStatus: 'Rescheduled',
    date: '20 Apr 2025',
    time: '01:12 PM | 0:42 min',
  },
    {
    name: 'Sourabh Kumar',
    subname:"DM0029384",
    info: 'Lead',
    subinfo:'Q3AAAKDJ9283KNS4NDE',
    category: 'e-Mandate',
    status: 'UnResolved',
    comments: 'Lorem ipsum',
    callStatus: 'Rescheduled',
    date: '20 Apr 2025',
    time: '01:12 PM | 0:42 min',
  },
    {
    name: 'Hritik Kumar',
    subname:"DM0029384",
    info: 'Lead',
    subinfo:'Q3AAAKDJ9283KNS4NDE',
    category: 'e-Mandate',
    status: 'UnResolved',
    comments: 'Lorem ipsum',
    callStatus: 'Rescheduled',
    date: '20 Apr 2025',
    time: '01:12 PM | 0:42 min',
  },
    {
    name: 'Naman Jain',
    subname:"DM0029384",
    info: 'Lead',
    subinfo:'Q3AAAKDJ9283KNS4NDE',
    category: 'e-Mandate',
    status: 'UnResolved',
    comments: 'Lorem ipsum',
    callStatus: 'Cancelled',
    date: '20 Apr 2025',
    time: '01:12 PM | 0:42 min',
  },
];

const CallAnalytics = () => {
  return (
    <div className="call-analytics">
      <div className="analytics-header">
        <h2>Call Analytics</h2>
        <div className="analytics-tabs">
          <button className="active">History</button>
          <button>In Progress</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Dealer Name</th>
            <th>Additional Info</th>
            <th>Issue Category</th>
            <th>Issue Status</th>
            <th>Comments</th>
            <th>Call Status</th>
            <th>Call Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, i) => (
            <tr key={i}>
           
<td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  {i % 2 === 0 ? (
    <button className='btn4' style={{ display: 'flex', alignItems: 'center', color: '#e60000' }}>
      <SiAirtel style={{ marginRight: '4px' }} />
      <span>airtel</span>
    </button>
  ) : (
    <button className='btn5' style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
      <SiAboutdotme style={{ marginRight: '4px',color: '#0073e6' }} />
      <span></span>
    </button>
  )}
  <div>
    {item.name}<br />{item.subname}
  </div>
</td>

              <td>{item.info}<br />{item.subinfo}</td>
              <td>{item.category}</td>
              <td>{item.status}</td>
              <td>{item.comments}</td>
              <td>{item.callStatus}</td>
              <td>{item.date}<br />{item.time}</td>
              <td>
              
                <button className='btn1'><IoInformationCircleOutline /></button>
                <button className='btn2'><FaRegCalendar /></button>
                <button className='btn3'><LiaCommentSolid /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallAnalytics;
