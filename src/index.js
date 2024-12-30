import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherApp from './components/weather'; // Make sure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);
