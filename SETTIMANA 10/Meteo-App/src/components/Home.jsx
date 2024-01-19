// Home.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const API_KEY = '7a11493a94d9eba324c189acbee61d73'; // Sostituisci con la tua chiave API OpenWeatherMap

const Home = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chiamata API per ottenere le coordinate geografiche della città
      const geoResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );

      if (geoResponse.data && geoResponse.data.length > 0) {
        const { lat, lon } = geoResponse.data[0];

        // Naviga alle previsioni meteorologiche
        navigate(`/weather/${lat},${lon}`);
      } else {
        // Nessun dato valido trovato
        alert('Nessun dato trovato per la città inserita. Riprova con un\'altra città.');
      }
    } catch (error) {
      console.error('Error fetching data', error);

      // Gestione più accurata dell'errore
      if (error.response && error.response.status === 404) {
        alert('Città non trovata. Inserisci una città valida.');
      } else {
        alert('Errore durante il recupero dei dati meteorologici. Riprova più tardi.');
      }
    }
  };

  return (
    <div className="container">
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
