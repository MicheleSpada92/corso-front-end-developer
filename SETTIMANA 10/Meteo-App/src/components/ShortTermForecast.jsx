// ShortTermForecast.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShortTermForecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const coordinates = city.split(',');
        if (coordinates.length === 2) {
          const [lat, lon] = coordinates;
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7a11493a94d9eba324c189acbee61d73`
          );
          setForecast(response.data.list);
        } else {
          console.error('Invalid coordinates format:', city);
        }
      } catch (error) {
        console.error('Error fetching forecast', error);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <div>
      <h3>Short Term Forecast</h3>
      {forecast.map((item) => (
        <div key={item.dt}>
          <p>{item.dt_txt}</p>
          <p>Temperature: {item.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default ShortTermForecast;
