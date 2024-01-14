import React, { useState } from 'react';
import InputForm from './InputForm';
import WeatherDisplay from './WeatherDisplay';
import './App.css'
function App() {
  const [form, setForm] = useState({ city: '', country: '' });
  const [weather, setWeather] = useState({ data: null }); 

  const APIKEY = "e6d2f6f7a2cc8b41b0ad47d1ede36fa9";

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
        ).then((res) => res.json());
        setWeather({ data });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <InputForm className="a"   form={form} setForm={setForm} weatherData={weatherData} />
      {weather.data && <WeatherDisplay weather={weather} />}
    </div>
  );
}
export default App;
