// src/components/WeatherForm.jsx
import React, { useState } from "react";

function WeatherForm({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default WeatherForm;
