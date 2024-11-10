// src/pages/DepositPage.js
import React, { useState } from 'react';

const DepositPage = () => {
  const [amount, setAmount] = useState('');

  return (
    <div className="deposit-page">
      <header className="header">
        <h1>Deposit</h1>
        {/* Close or back icon */}
      </header>

      <h2>How much do you want to deposit?</h2>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="deposit-input"
      />

      <div className="preset-amounts">
        {[50, 250, 500, 1000, 2500, 5000].map((amt) => (
          <button key={amt} onClick={() => setAmount(amt.toString())} className="preset-button">
            {amt} Points
          </button>
        ))}
      </div>

      <button className="next-button">Next</button>
    </div>
  );
};

export default DepositPage;
