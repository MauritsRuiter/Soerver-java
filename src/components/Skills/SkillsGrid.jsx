import { useState } from 'react';
import { Monitor, HeadphonesIcon, Network, ClipboardList, Terminal, Laptop } from 'lucide-react';
import { SkillCard } from './SkillCard';
import { SkillModal } from './SkillModal';
import { SkillContent } from './SkillContent';
import { skills } from './skills-data';

export function SkillsGrid() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const icons = {
    windows: Monitor,
    cisco: Network,
    linux: Terminal,
    topdesk: ClipboardList,
    servicedesk: HeadphonesIcon,
    hardware: Laptop,
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([key, skill]) => (
          <SkillCard
            key={key}
            title={skill.title}
            description={skill.shortDescription}
            Icon={icons[key]}
            onClick={() => setSelectedSkill(key)}
          />
        ))}
      </div>

      <SkillModal
        isOpen={selectedSkill !== null}
        onClose={() => setSelectedSkill(null)}
        title={selectedSkill ? skills[selectedSkill].title : ''}
      >
        {selectedSkill && (
          <SkillContent content={skills[selectedSkill].content} />
        )}
      </SkillModal>
    </>
  );
}