export default function WeatherCards({ data }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">

      <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300">Temperature</p>
        <p className="text-2xl font-bold">{data.temperature}°C</p>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300">Humidity</p>
        <p className="text-2xl font-bold">{data.humidity}%</p>
      </div>

      <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300">Wind Speed</p>
        <p className="text-2xl font-bold">{data.windKmh} km/h</p>
      </div>

      <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg shadow">
        <p className="text-gray-600 dark:text-gray-300">Rain Probability</p>
        <p className="text-2xl font-bold">{data.pop}%</p>
      </div>

    </div>
  );
}
