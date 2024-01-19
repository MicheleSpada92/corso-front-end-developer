import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Importa il file CSS

const API_KEY = '7a11493a94d9eba324c189acbee61d73';

const Home = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleWeatherDetails = async (lat, lon) => {
    navigate(`/weather/${lat},${lon}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const geoResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );

      if (geoResponse.data && geoResponse.data.length > 0) {
        const { lat, lon } = geoResponse.data[0];

        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        console.log('Weather Forecast:', weatherResponse.data);

        handleWeatherDetails(lat, lon);
      } else {
        alert('No data found for the entered city. Please try with another city.');
      }
    } catch (error) {
      console.error('Error fetching data', error);

      if (error.response && error.response.status === 404) {
        alert('City not found. Please enter a valid city.');
      } else {
        alert('Error fetching weather data. Please try again later.');
      }
    }
  };

  return (
    <div className="home-container">
      <div className="form-container">
        <div className="app-name">Weather App</div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
