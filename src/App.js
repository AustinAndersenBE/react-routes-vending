import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Milk from './Milk';
import Cookies from './Cookies';
import Chips from './Chips';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/chips" element={<Chips />} />
      </Routes>
    </div>
  );
}

export default App;