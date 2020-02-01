import React, { useState } from 'react';
import './Search.css';

export default function Search({ getWeather }) {
  const [inputValue, setInputValue] = useState('');

  const onHandleSubmit = (event) => {
    event.preventDefault();
    getWeather(inputValue);
    setInputValue('');
  }

  return (
    <form className="form" onSubmit={onHandleSubmit} >
      <input className="inputCity" type="text" placeholder="Search City" value={inputValue} onChange={ev => setInputValue(ev.target.value)} />
      <input className="searchButton" type="submit" value="Search" disabled={inputValue < 1 ? true : false} />
    </form>
  )
}
