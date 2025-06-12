export default async function handler(req, res) {
  const { city } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(400).json({ error: data.message });
    }

    res.status(200).json({
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      icon: data.weather[0].icon
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
