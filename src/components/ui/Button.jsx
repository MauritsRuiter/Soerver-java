export function Button({ children, isLoading, disabled, ...props }) {
  return (
    <button
      className={`
        w-full px-6 py-3 rounded-lg font-medium transition-all duration-200
        ${disabled || isLoading
          ? 'bg-gray-600 cursor-not-allowed'
          : 'bg-red-500 hover:bg-red-600 active:bg-red-700'
        }
        text-white shadow-lg hover:shadow-red-500/20
        flex items-center justify-center
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
}