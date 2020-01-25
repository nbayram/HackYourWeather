import React, { useState } from "react";
import CityData from "./CityData";
import Form from "./Form";

export default function CityRender() {
  const [weather, setWeather] = useState({});
  const [state, setState] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  async function getCity(city) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb076c099e2e95f7dc6a0f2dbe0761ae`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
        setLoading(false);
        setState('success')
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div>
      <Form getCity={getCity} />
      <h2>Welcome</h2>

      {(isLoading && (state !== "success")) && <h2>Loading....</h2>}
      {hasError && <h1>Error occured!</h1>}

      {state === "success" && (
        <div>
          <CityData cityProps={weather} />
        </div>
      )}
    </div>
  );
};