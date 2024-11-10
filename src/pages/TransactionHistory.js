// src/pages/TransactionHistory.js
import React from 'react';
import StatsGraph from '../components/StatsGraph';
import TransactionList from '../components/TransactionList';

const TransactionHistory = () => {
  return (
    <div className="transaction-history-page">
      <header className="header">
        <h1>Statistics</h1>
        {/* Dropdown for filtering time periods */}
      </header>

      <StatsGraph />

      <section className="transaction-list-section">
        <h2>Transaction</h2>
        <TransactionList />
      </section>
    </div>
  );
};

export default TransactionHistory;
