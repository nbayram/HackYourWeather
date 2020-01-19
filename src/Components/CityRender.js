import React from 'react';
import City from './City';
import Data from './../city-weather.json';

export default function CityRender() {
  return (
    <div className="cityRender">
      {
        Data.map(data => <City key={data.sys.id} data={data} />)
      }
    </div>
  )
}
