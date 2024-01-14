import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { data } = weather;

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };
  console.log(data);
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return formattedHours + ":" + minutes.substr(-2) + " " + ampm;
  };

  return (
    <div>
      <div className="weatherField">
        <h2 className="place">
          {data.name}, {data.sys.country}. Weather
        </h2>
        <p className="time">As of {formatTime(data.dt)} (real-time)</p>
        <p className="cloud">Weather {data.weather[0].description}</p>
        <p className="cloud">Clouds {data.clouds.all}%</p>

        <h1 className="temp">{kelvinToCelsius(data.main.temp)} °C</h1>
      </div>
      <div className="details">
        <div className="details-left">
          <p>
            High/Low Temperature: {kelvinToCelsius(data.main.temp_max)} °C /{" "}
            {kelvinToCelsius(data.main.temp_min)} °C
          </p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Visibility: {data.visibility} meters</p>
        </div>
        <div className="details-right">
          <p>Wind Speed: {data.wind.speed} m/s</p>
          <p>Wind Direction: {data.wind.deg}°</p>
          <p>Sunrise: {formatTime(data.sys.sunrise)}</p>
          <p>Sunset: {formatTime(data.sys.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
