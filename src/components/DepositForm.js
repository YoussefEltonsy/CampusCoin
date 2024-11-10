import React, { useState } from 'react';

const DepositForm = () => {
  const [amount, setAmount] = useState('');

  return (
    <div>
      <h2>How much do you want to deposit?</h2>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <div className="preset-amounts">
        {[50, 250, 500, 1000, 2500, 5000].map((amt) => (
          <button key={amt} onClick={() => setAmount(amt.toString())}>
            {amt} Points
          </button>
        ))}
      </div>
      <button className="next-button">Next</button>
    </div>
  );
};

export default DepositForm;
