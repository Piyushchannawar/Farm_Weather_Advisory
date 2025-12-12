export default function RecentSearches({ searches }) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Recent Searches</h3>
      <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
        {searches.map((s, i) => (
          <li key={i}>{s.city}</li>
        ))}
      </ul>
    </div>
  );
}
