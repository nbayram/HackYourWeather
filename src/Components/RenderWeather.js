import React from 'react';
import './RenderWeather.css';
import { Link } from 'react-router-dom';

export default function RenderWeather({ cityWeatherData, deleteCity }) {
  const { coord, weather, main, sys, name, id } = cityWeatherData

  return (
    <div >
      <Link to={`/city/${id}`} key={id} className="weatherInfo">
        <h2>{name}, {sys.country}</h2>
        <h3>{weather[0].main}</h3>
        <h4>{weather[0].description}</h4>
        <p>min temp: {main.temp_min}</p>
        <p>max temp: {main.temp_max}</p>
        <p>location: {coord.lon} {coord.lat}</p>
      </Link>
      <div>
        <button className="deleteButton" onClick={() => deleteCity(id)} >X</button>
      </div>
    </div>
  )
}
