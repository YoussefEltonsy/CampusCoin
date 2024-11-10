// src/components/TransactionList.js
import React from 'react';

const TransactionList = () => {
  const transactions = [
    { name: 'Anthony Robinson', detail: 'Project bonus', date: '21/08/23', amount: '+300.00' },
    { name: 'Grand Center Theater', detail: 'Theater', date: '21/08/23', amount: '-150.00' },
    { name: 'Target', detail: 'Cafeteria', date: '21/08/23', amount: '-265.00' },
    { name: 'John Scott', detail: 'Bonus', date: '21/08/23', amount: '+170.00' },
  ];

  return (
    <div className="transaction-list">
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction-item">
          <div className="transaction-details">
            <h3>{transaction.name}</h3>
            <p>{transaction.detail} • {transaction.date}</p>
          </div>
          <span className={`transaction-amount ${transaction.amount.startsWith('-') ? 'negative' : 'positive'}`}>
            {transaction.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
