import { NavLinks } from './NavLinks';

export function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="absolute inset-x-0 top-full bg-gray-800/95 backdrop-blur-sm shadow-lg">
        <div className="px-2 py-4">
          <NavLinks
            className="flex flex-col space-y-1"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}