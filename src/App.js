import React from 'react';
import './styles/globals.css'
import {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';
import Home from './pages/Home.js';
import Orders from './pages/Orders.js';
import OrdersDash from './pages/OrdersDash.js';
import Operation from './pages/Operation.js';
import Product from './pages/Product.js';
import Outfit from './pages/Outfit.js';
import Contract from './pages/Contract.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/orders" element={<Orders />}>
        </Route>
        <Route path="/orders-dash" element={<OrdersDash />}>
        </Route>
        <Route path="/operation" element={<Operation />}>
        </Route>
        <Route path="/product" element={<Product />}>
        </Route>
        <Route path="/outfit" element={<Outfit />}>
        </Route>
        <Route path="/contract" element={<Contract />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
