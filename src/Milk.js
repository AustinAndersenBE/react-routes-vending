import React from 'react';
import { Link } from 'react-router-dom';

function Milk() {
  return (
    <div>
      <h1>Drink some milk for gainz</h1>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Milk;