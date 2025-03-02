import { ProjectsGrid } from '../components/Projects/ProjectsGrid';

export function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <h1 className="text-4xl font-bold text-center mb-2 text-white">Projecten en ervaringen</h1>
      <p className="text-gray-400 text-center mb-12">
        Hier vind je een overzicht van mijn ICT projecten en ervaringen die ik tot nu toe heb gehad
      </p>
      <ProjectsGrid />
    </div>
  );
}