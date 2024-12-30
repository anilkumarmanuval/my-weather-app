import React, { useEffect, useState } from 'react';
import axios from 'axios';
import sunnyImage from '../images/sunny.jpg';
import rainyImage from '../images/rainy.jpg';
import snowyImage from '../images/snowy.jpg';
import cloudyImage from '../images/cloudy.jpg';
import backgroundImage from '../images/back.jpg';
import loadingImage from '../images/load.jpg';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchCity, setSearchCity] = useState('');
  const API_KEY = 'f750bb2146956c18bd55bb3b8b83636c';

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity) {
      fetchWeather(searchCity);
      setSearchCity('');
    }
  };

  useEffect(() => {
    fetchWeather('London');
  }, []);

  const background = loading
    ? loadingImage
    : weatherData
      ? (weatherData.weather[0].main === 'Rain' ? rainyImage :
        weatherData.weather[0].main === 'Snow' ? snowyImage :
        weatherData.weather[0].main === 'Clouds' ? cloudyImage : sunnyImage)
      : backgroundImage;

  return (
    <div className="weather-app" style={{ backgroundImage: `url(${background})` }}>
      <nav className="navbar navbar-expand-lg navbar-light transparent-nav">
        <a className="navbar-brand" href="#">Weather Wise</a>
        <div className="navbar-nav ml-auto">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Contact</a>
        </div>
      </nav>
      <div className="content-container">
        <div className="headline"></div>
        <div className="card-container">
          <div className="weather-card">
            <h1 className="text-center my-4"></h1>
            <form className="form-inline justify-content-center mb-4" onSubmit={handleSearch}>
             <center> <input
                type="text"
                className="form-control mr-2 transparent-input"
                placeholder="Enter city"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                style={{ width: '490px', fontSize: '34px', color: 'white', }}
              /></center>
             <p><center><button type="submit" className="btn btn-primary" style={{ fontSize: '23px' }}>Search</button></center></p> 
            </form>

            {loading ? (
              <div className="text-center">Loading...</div>
            ) : weatherData ? (
              <div className="card-body text-center">
                <center><h1 className="card-title">{weatherData.name}</h1>
                <h2 className="card-subtitle mb-2">{Math.round(weatherData.main.temp)}° C</h2>
                <h2 className="card-text">{weatherData.weather[0].description}</h2>
                <p className="card-text">Humidity: {weatherData.main.humidity}%</p>
                <p className="card-text">Wind Speed: {weatherData.wind.speed} m/s</p></center>
              </div>
            ) : (
              <div className="text-center"><h2>City not found. Try another search.</h2></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
