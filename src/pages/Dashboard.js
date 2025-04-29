import React, { useContext } from 'react';
import { WalletContext } from '../contexts/WalletContext';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const { user } = useContext(WalletContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardCard title="Current Balance" value={`$${user?.balance || 0}`} />
      <DashboardCard title="Total Deposit" value={`$${user?.totalDeposit || 0}`} />
      <DashboardCard title="Total Earned" value={`$${user?.totalEarn || 0}`} />
      <DashboardCard title="Total Withdrawn" value={`$${user?.totalWithdraw || 0}`} />
    </div>
  );
};

export default Dashboard;
