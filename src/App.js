import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FetchWeather from './Components/FetchWeather';
import CityWeatherDetail from './Components/CityWeatherDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FetchWeather} />
        <Route path="/city/:cityId" exact component={CityWeatherDetail} />
      </Switch>
    </Router>
  )
}

export default App;
