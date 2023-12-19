import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Please choose your snack from the Vending Machine</h1>
      <div><Link to="/milk">Milk</Link></div>
      <div><Link to="/cookies">Cookies</Link></div>
      <div><Link to="/chips">Chips</Link></div>
    </div>
  );
}

export default VendingMachine;