export function SkillContent({ content }) {
  return (
    <div className="space-y-6">
      <p className="text-gray-300 leading-relaxed">{content.description}</p>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-red-400 mb-3">Ervaring</h3>
          <p className="text-gray-300 leading-relaxed">{content.experience}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-red-400 mb-3">Huidige Status</h3>
          <p className="text-gray-300 leading-relaxed">{content.currentStatus}</p>
        </div>
      </div>
    </div>
  );
}