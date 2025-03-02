import { AboutSection } from '../components/About/AboutSection';

export function SkillsPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <h1 className="text-4xl font-bold text-center mb-2 text-white">Over mij</h1>
      <p className="text-gray-400 text-center mb-12">
        Leer meer over wie ik ben en wat ik doe
      </p>
      <AboutSection />
    </div>
  );
}