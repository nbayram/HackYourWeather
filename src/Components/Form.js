import React, { useState } from "react";

export default function Form({ getCity }) {
  const [city, setCity] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    getCity(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Search"
        name="city"
        value={city}
        required
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}