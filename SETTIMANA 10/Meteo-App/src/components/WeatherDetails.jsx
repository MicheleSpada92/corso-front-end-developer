// WeatherDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import WeatherBackground from './WeatherBackground';
import '../styles/WeatherDetails.css';

const WeatherDetails = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coordinates = city.split(',');
        if (coordinates.length === 2) {
          const [lat, lon] = coordinates;
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7a11493a94d9eba324c189acbee61d73`
          );

          setWeatherData(response.data);
        } else {
          console.error('Invalid coordinates format:', city);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [city]);

  const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <div className="weather-details-container">
      {weatherData && (
        <div className="weather-background">
          <WeatherBackground
            city={weatherData.name}
            condition={weatherData.weather[0].main}
            temperature={convertKelvinToCelsius(weatherData.main.temp)}
            coordinates={{ lat: weatherData.coord.lat, lon: weatherData.coord.lon }}
            pressure={weatherData.main.pressure}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
          />
          <Link to="/" className="btn btn-light mt-3">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
