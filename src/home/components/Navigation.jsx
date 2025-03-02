import { useState, useEffect } from 'react';
import { MenuToggle } from '../../components/MenuToggle';
import { NavLinks } from '../../components/NavLinks';
import { MobileMenu } from '../../components/MobileMenu';
import { Container } from '../../components/Navbar/Container';
import { Logo } from '../../components/Navbar/Logo';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-500
        ${!scrolled 
          ? 'bg-gray-800/95 shadow-lg'
          : 'backdrop-blur-sm'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <Logo />
          <NavLinks className="hidden md:flex items-center space-x-8" />
          <MenuToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </Container>
    </nav>
  );
}