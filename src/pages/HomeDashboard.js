// src/pages/HomeDashboard.js
import React from 'react';
import Balance from '../components/Balance';
import TransactionList from '../components/TransactionList';
import NavBar from '../components/NavBar';

const HomeDashboard = () => {
  return (
    <div className="home-dashboard">
      <header className="header">
        <h1>Dashboard</h1>
        {/* Icons for notifications and visibility */}
      </header>

      <Balance />

      <div className="buttons">
        <button className="action-button">Add money</button>
        <button className="action-button">Transfer</button>
        <button className="action-button">Statistic</button>
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
