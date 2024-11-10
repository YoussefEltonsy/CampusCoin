// src/pages/DepositPage.js
import React, { useState } from 'react';


const DepositPage = () => {
  const [amount, setAmount] = useState(''); // Amount to deposit
  const [step, setStep] = useState(1); // Step to track the current stage (1 for amount, 2 for card details)
  
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleNextClick = () => {
    if (step === 1 && amount) {
      setStep(2); // Move to step 2 (card details form)
    }
    // Optionally, add further validation or actions
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    alert(`Successfully deposited ${amount} points using the card ending in ${cardNumber.slice(-4)}`);
    // Here you could call an API to process the payment, update the user balance, etc.
  };

  return (
    <div className="deposit-page">
      <header className="header">
        <h1>Deposit</h1>
        {/* Close or back icon */}
      </header>

      {step === 1 && (
        <div>
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

          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Enter Card Details</h2>
          <form onSubmit={handleSubmitPayment}>
            <div>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div>
              <label htmlFor="expiryDate">Expiration Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit Payment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DepositPage;
