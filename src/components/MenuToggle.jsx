import { Menu, X } from 'lucide-react';

export function MenuToggle({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex items-center ml-auto p-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <X size={24} className="text-white" />
      ) : (
        <Menu size={24} className="text-white" />
      )}
    </button>
  );
}