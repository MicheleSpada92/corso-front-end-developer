// WeatherBackground.jsx
import React from 'react';
import sunnyBackground from './assets/sunny-background.jpg';
import rainyBackground from './assets/rainy-background.jpg';
import cloudyBackground from './assets/cloudy-background.jpg';
import mistyBackground from './assets/misty-background.jpg';
import snowyBackground from './assets/snowy-background.jpg';

const WeatherBackground = ({ city, condition, temperature, coordinates, pressure, humidity, windSpeed }) => {
  let background;

  switch (condition) {
    case 'Clear':
      background = `url(${sunnyBackground})`;
      break;
    case 'Rain':
      background = `url(${rainyBackground})`;
      break;
    case 'Clouds':
      background = `url(${cloudyBackground})`;
      break;
      case 'Mist':
        background = `url(${mistyBackground})`;
        break;
        case 'Snow':
        background = `url(${snowyBackground})`;
        break;
    default:
      background = `url(${sunnyBackground})`;
  }

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${background}`, // Aggiungi un overlay nero con opacità del 50%
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '75vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
  };

  const overlayStyle = {
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <p>{city}</p>
        <p>Temperature: {temperature.toFixed(1)}°C</p>
        <p>Condition: {condition}</p>
        <p>Coordinates: {coordinates.lat}, {coordinates.lon}</p>
        <p>Pressure: {pressure} hPa</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherBackground;
