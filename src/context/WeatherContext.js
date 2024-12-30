import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [preferredCities, setPreferredCities] = useState(['New York', 'Los Angeles']);
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'

  return (
    <WeatherContext.Provider value={{ preferredCities, setPreferredCities, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};
