export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="w-full max-w-xl flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 
                   rounded-lg shadow-sm bg-white dark:bg-gray-800 
                   text-gray-800 dark:text-gray-200 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={onSearch}
        disabled={!city}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow 
                   hover:bg-blue-700 disabled:bg-gray-400 transition"
      >
        Search
      </button>
    </div>
  );
}
