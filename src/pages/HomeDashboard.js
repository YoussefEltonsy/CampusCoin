// src/pages/HomeDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Balance from '../components/Balance';
import TransactionList from '../components/TransactionList';
import NavBar from '../components/NavBar';

const HomeDashboard = () => {
  const navigate = useNavigate(); // Create a navigate instance

  const handleAddMoneyClick = () => {
    navigate('/deposit'); // Navigate to Deposit Page
  };

  const handleStatisticsClick = () => {
    navigate('/history'); // Navigate to History Page
  };

  const handleTransferClick = () => {
    navigate('/transfer'); // Navigate to Transfer Page
  };

  return (
    <div className="home-dashboard">
      <header className="header">
        <h1>Dashboard</h1>
        {/* Icons for notifications and visibility */}
      </header>

      <Balance />

      <div className="buttons">
        <button className="button button2" onClick={handleAddMoneyClick}>
          Add money
        </button>
        <button className="button button2" onClick={handleTransferClick}>
          Transfer
        </button>
        <button className="button button2" onClick={handleStatisticsClick}>
          Statistic
        </button>
      </div>

      <section className="transaction-history">
        <h2>History</h2>
        <TransactionList />
      </section>

      <NavBar />
    </div>
  );
};

export default HomeDashboard;
