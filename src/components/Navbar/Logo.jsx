import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
    >
      <Code2 className="w-8 h-8" />
      <span className="text-lg font-bold tracking-wider">Portfolio van Daan</span>
    </Link>
  );
}