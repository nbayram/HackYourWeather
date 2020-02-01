import React from 'react';
import './RenderWeather.css';

export default function RenderWeather({ cityWeatherData, deleteCity }) {
  const { coord, weather, main, sys, name, id } = cityWeatherData

  return (
    <div className="display">

      <div className="weatherInfo">
        <h2>{name}, {sys.country}</h2>
        <h3>{weather[0].main}</h3>
        <h4>{weather[0].description}</h4>
        <p>min temp: {main.temp_min}</p>
        <p>max temp: {main.temp_max}</p>
        <p>location: {coord.lon} {coord.lat}</p>
      </div>
      <div  >
        <button className="deleteButton" onClick={() => deleteCity(id)} >X</button>
      </div>
    </div>
  )
}
