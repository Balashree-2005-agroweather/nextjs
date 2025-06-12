// src/components/WeatherDisplay.jsx
import React from "react";

function WeatherDisplay({ data }) {
  return (
    <div className="weather">
      <h2>{data.name}, {data.sys.country}</h2>
      <p><strong>Temperature:</strong> {data.main.temp} °C</p>
      <p><strong>Humidity:</strong> {data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {data.wind.speed} m/s</p>
      <p><strong>Condition:</strong> {data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
    </div>
  );
}

export default WeatherDisplay;
