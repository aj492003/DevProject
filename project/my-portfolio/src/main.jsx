import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Portfolio.jsx';
import './index.css'; // <- Important for Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
