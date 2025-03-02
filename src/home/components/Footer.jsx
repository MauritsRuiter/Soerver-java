export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <p className="text-gray-400 text-sm text-center">
          © {currentYear} Daan van Bakel. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}