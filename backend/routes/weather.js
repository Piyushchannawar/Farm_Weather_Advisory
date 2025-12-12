import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const city = req.query.q;

    if (!city) {
      return res.status(400).json({ error: "City name (q) is required" });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);

    if(!response.ok){
  const errorText = await response.text();
  return res.status(response.status).json({
    error: "OpenWeatherMap error",
    details: errorText
  });
}


    const data = await response.json();
    const block = data.list[0];

    const temperature = block.main.temp;
    const humidity = block.main.humidity;
    const windSpeedMs = block.wind.speed;
    const windKmh = (windSpeedMs * 3.6).toFixed(1);
    const pop = block.pop ? Math.round(block.pop * 100) : 0;
    const forecast = data.list.slice(0, 12).map(item => ({
      time: item.dt_txt,
      temp: item.main.temp,
      pop: item.pop ? Math.round(item.pop * 100) : 0,
      wind: Math.round(item.wind.speed * 3.6),
    }));

    res.json({
      location: `${data.city.name}, ${data.city.country}`,
      temperature,
      humidity,
      windKmh,
      pop,
      forecast,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

export default router;
