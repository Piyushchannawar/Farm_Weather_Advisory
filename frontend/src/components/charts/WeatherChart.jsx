import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function WeatherChart({ forecast }) {
  const labels = forecast.map((f) => f.time.split(" ")[1]);

  const temperatureData = forecast.map((f) => f.temp);
  const popData = forecast.map((f) => f.pop);

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatureData,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.4,
      },
      {
        label: "Rain Probability (%)",
        data: popData,
        borderColor: "#a855f7",
        backgroundColor: "rgba(168, 85, 247, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: document.documentElement.classList.contains("dark")
            ? "#fff"
            : "#000",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: document.documentElement.classList.contains("dark")
            ? "#bbb"
            : "#333",
        },
      },
      y: {
        ticks: {
          color: document.documentElement.classList.contains("dark")
            ? "#bbb"
            : "#333",
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-6">
      <h3 className="text-xl font-semibold mb-4">Weather Trends</h3>
      <Line data={data} options={options} />
    </div>
  );
}
