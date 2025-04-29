import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-5">
      <ul className="space-y-4">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/deposit">Deposit</Link></li>
        <li><Link to="/withdraw">Withdraw</Link></li>
        <li><Link to="/donation">Donation</Link></li>
        <li><Link to="/transfer">Transfer</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
