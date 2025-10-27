import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactGA from "react-ga4";

ReactGA.initialize("G-DNESZRGZVT"); // <-- your Measurement ID

ReactGA.send("pageview"); // Send initial pageview

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
