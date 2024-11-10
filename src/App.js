// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './pages/HomeDashboard';
import DepositPage from './pages/DepositPage';
import TransactionHistory from './pages/TransactionHistory';
import TransferPage from './pages/TransferPage'; // Import TransferPage
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/transfer" element={<TransferPage />} /> {/* Add the new route for TransferPage */}
      </Routes>
    </Router>
  );
}

export default App;
