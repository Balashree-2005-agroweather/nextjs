// src/App.jsx
import React, { useState, useEffect } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch weather data
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeatherData(data);
        setCity(cityName);
      } else {
        setError("City not found.");
        setWeatherData(null);
      }
    } catch (err) {
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  // Load last searched city
  useEffect(() => {
    const savedCity = localStorage.getItem("lastCity");
    if (savedCity) fetchWeather(savedCity);
  }, []);

  // Save city to localStorage
  useEffect(() => {
    if (city) localStorage.setItem("lastCity", city);
  }, [city]);

  return (
    <div className="container">
      <h1>🌤️ WeatherNow</h1>
      <WeatherForm onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
