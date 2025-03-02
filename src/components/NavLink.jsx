import { Link, useLocation } from 'react-router-dom';

export function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        relative group px-4 py-2 text-sm tracking-wider font-medium
        ${isActive ? 'text-red-500' : 'text-white'}
      `}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`
          absolute inset-0 rounded-lg transition-all duration-200 
          ${isActive 
            ? 'bg-white/10' 
            : 'bg-white/0 group-hover:bg-white/5'
          }
        `}
      />
    </Link>
  );
}