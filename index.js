import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();
    if (!data.error) {
      setWeather(data);
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Real-Time Weather Forecast</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="p-2 border rounded w-full mb-2"
      />
      <button onClick={fetchWeather} className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Weather
      </button>

      {weather && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <h2 className="text-xl">{city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Description: {weather.description}</p>
          <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Weather Icon" />
        </div>
      )}
    </div>
  );
        }
