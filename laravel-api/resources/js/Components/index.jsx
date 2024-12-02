// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM from 'react-dom/client' for React 18
import ShippingDetails from './ShippingDetails'; // Import your ShippingDetails component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShippingDetails />
  </React.StrictMode>
);
