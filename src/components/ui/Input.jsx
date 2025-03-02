export function Input({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        className={`
          w-full px-4 py-2 bg-gray-700/50 border rounded-lg
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-red-500
          ${error ? 'border-red-500' : 'border-gray-700'}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}