import React from 'react';
import ReactDOM from 'react-dom/client'; // Izmanto jaunāko ReactDOM importu
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Izmanto createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
