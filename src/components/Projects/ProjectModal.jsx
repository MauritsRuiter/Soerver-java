export function ProjectModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
      <div className="min-h-screen px-4 flex items-center justify-center w-full" onClick={e => e.stopPropagation()}>
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg w-full max-w-7xl p-8 relative mx-auto my-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-6 text-red-500">{title}</h2>
          <div className="overflow-y-auto max-h-[80vh]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}