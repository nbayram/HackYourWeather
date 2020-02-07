import React, { useState } from 'react';
import RenderWeather from './RenderWeather';
import Search from './Search';
import './FetchWeather.css';

export default function FetchWeather() {
  const [cityWeatherData, setCityWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [addedCities, setAddedCities] = useState([]);

  const getWeather = city => {
    setIsLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
      .then(res => {
        if (res.ok) return res.json();
        else throw new Error('Please enter correct city name!');
      })
      .then(data => {
        setCityWeatherData(data);
        setAddedCities([data, ...addedCities]);
        setIsLoading(false);
        setHasError('');
      })
      .catch(err => {
        setCityWeatherData({});
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(err.message);
      })
  }

  function deleteCity(cityId) {
    setAddedCities(addedCities.filter(city => city.id !== cityId));
  }

  return (
    <div className="container">
      <h1>Weather</h1>
      <Search getWeather={getWeather} />
      {isLoading && <h2>Loading...</h2>}
      {hasError && <h2>{errorMessage}</h2>}
      {
        cityWeatherData.name &&
        (
          <ul className="UnOrderList" >
            {
              addedCities.map((city, index) => (
                <li className="listItem" key={index} >
                  <RenderWeather cityWeatherData={city} deleteCity={deleteCity} />
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}
