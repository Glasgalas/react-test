import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import s from './Weather.module.css';

const initialState = {
  city: '',
  country: '',
  temp: '',
  description: '',
  humidity: '',
  speed: '',
};
const keyApi = '28660214f7a1b967fd8d99aa51df4923';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${keyApi}&units=metric&lang=ru`;
const weatherApi = () => {
  return axios.get(url).then(response => response.data);
};
const Weather = () => {
  const [state, setState] = useState(initialState);
  const { city, country, temp, description, humidity, speed } = state;

  const fetch = () => {
    weatherApi()
      .then(data => {
        setState({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp_min,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          speed: data.wind.speed,
        });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className={s.weather}>
      <button onClick={fetch}>Get weather</button>
      <p>
        {city} {country}
      </p>
      <p>{temp}°C</p>
      <p>Сейчас: {description}</p>
      <p>Влажность: {humidity}%</p>
      <p>Скорость ветра: {speed} м/с</p>
    </div>
  );
};

export default Weather;
