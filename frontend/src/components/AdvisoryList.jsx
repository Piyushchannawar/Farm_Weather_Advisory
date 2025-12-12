export default function AdvisoryList({ advisories }) {
  return (
    <div className="space-y-3">
      {advisories.map((a, i) => (
        <div 
          key={i}
          className="p-4 bg-gray-50 dark:bg-gray-700 
                     border-l-4 border-blue-500 
                     rounded-lg shadow"
        >
          <h4 className="font-bold text-gray-800 dark:text-gray-100">
            {a.title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            {a.message}
          </p>
        </div>
      ))}
    </div>
  );
}
