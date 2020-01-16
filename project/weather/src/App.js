import React from 'react';
import './App.css';
import Data from './city-weather.json'
import WeatherInfo from './components/WeatherInfo'

function App() {
  console.log(Data)
  return (
    <div className="App">
      <h1 className="title">Weather</h1>
      <ul className="city_list">
        {Data.map(city=>{
          return (
            < WeatherInfo  key={city.id} city={city} />
          )
        } )}
      </ul>
      {/* <WeatherInfo /> */}
    </div>
  );
}

export default App;
