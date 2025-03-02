export function SkillCard({ title, description, Icon, onClick }) {
  return (
    <div className="group h-full opacity-0 animate-fadeIn">
      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-red-600 h-full flex flex-col">
        <div className="text-red-500 mb-4">
          <Icon className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>
        <button
          onClick={onClick}
          className="mt-4 text-red-500 hover:text-red-400 flex items-center gap-2 text-sm font-medium group-hover:translate-x-1 transition-transform"
        >
          Meer informatie
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}