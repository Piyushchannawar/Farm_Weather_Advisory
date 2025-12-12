import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCards from "./components/WeatherCards";
import AdvisoryList from "./components/AdvisoryList";
import RecentSearches from "./components/RecentSearches";
import WeatherChart from "./components/charts/WeatherChart";


function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const fetchWeather = async () => {
    try {
      setError("");
      setData(null);

      const res = await fetch(`http://localhost:5000/api/weather?q=${city}`);
      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Something went wrong");
        return;
      }

      setData(json);
    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100 
                    flex flex-col items-center p-6 transition">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 px-4 py-2 
                   bg-gray-200 dark:bg-gray-800 
                   text-gray-800 dark:text-gray-200 
                   rounded-lg shadow hover:opacity-80 transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <h1 className="text-3xl font-bold mb-6">
        Farm Weather Advisor
      </h1>
      <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
      {error && <p className="text-red-500 font-medium">{error}</p>}
      {data && (
        <div className="w-full max-w-2xl bg-white dark:bg-gray-800 
                        p-6 rounded-xl shadow-md mt-6">

          <h2 className="text-2xl font-semibold mb-4">
            {data.location}
          </h2>
          <WeatherCards data={data} />
          <h3 className="text-xl font-semibold mb-2">Advisories</h3>
          <AdvisoryList advisories={data.advisories} />

          <WeatherChart forecast={data.forecast} />
          <RecentSearches searches={data.recentSearches} />

        </div>
      )}
    </div>
  );
}

export default App;
