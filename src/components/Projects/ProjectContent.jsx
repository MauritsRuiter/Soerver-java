export function ProjectContent({ content }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <p className="text-gray-300 leading-relaxed">{content.description}</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-3">Uitvoering & resultaat</h3>
            <p className="text-gray-300 leading-relaxed">{content.execution}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-3">Terugblik</h3>
            <p className="text-gray-300 leading-relaxed">{content.reflection}</p>
          </div>
        </div>
      </div>

      {content.media && (
        <div className="lg:col-span-2 space-y-4">
          <div className="sticky top-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              {content.media.type === 'youtube' ? (
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${content.media.url}`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">{content.media.caption || "Project afbeelding"}</p>
                </div>
              )}
              {content.media.caption && (
                <p className="text-sm text-gray-400 mt-4 text-center">
                  {content.media.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}