import { Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://www.linkedin.com/in/daan-van-bakel-7a3844328/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="mailto:576462@edu.rocmn.nl"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}