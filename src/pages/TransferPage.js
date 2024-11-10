// src/pages/TransferPage.js
import React, { useState } from 'react';
import "./TransferPage.css"

const TransferPage = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = () => {
    // Handle the transfer logic (e.g., update balance, show confirmation)
    alert(`Transferred ${amount} points to ${recipient}`);
  };

  return (
    <div className="transfer-page">
      <h1>Transfer Points</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="recipient">Recipient Username</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount to Transfer</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleTransfer}>
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferPage;
