import { useState } from 'react';
import { Monitor, HeadphonesIcon, Network, ClipboardList, Terminal, Code } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ProjectContent } from './ProjectContent';
import { projects } from './projects-data';

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const icons = {
    windows: Monitor,
    servicedesk: HeadphonesIcon,
    cisco: Network,
    topdesk: ClipboardList,
    powershell: Terminal,
    python: Code,
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(projects).map(([key, project]) => (
          <ProjectCard
            key={key}
            title={project.title}
            description={project.shortDescription}
            Icon={icons[key]}
            onClick={() => setSelectedProject(key)}
          />
        ))}
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject ? projects[selectedProject].title : ''}
      >
        {selectedProject && (
          <ProjectContent content={projects[selectedProject].content} />
        )}
      </ProjectModal>
    </>
  );
}