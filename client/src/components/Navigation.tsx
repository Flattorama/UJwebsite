import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'MISSION', href: '#mission' },
  { name: 'THE FIGHTER', href: '#fighter' },
  { name: 'WHAT WE DO', href: '#pillars' },
  { name: 'MEDIA', href: '#media' },
  { name: 'MERCH', href: '#merch' },
  { name: 'GET INVOLVED', href: '#get-involved' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black border-b border-white/20 py-2' : 'bg-transparent py-4'
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              className="flex items-center gap-2 group"
              data-testid="link-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold text-xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                UJ
              </div>
              <span className="font-black tracking-tighter text-xl text-white hidden sm:inline">
                UNAPOLOGETICALLY JEWISH
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-mono font-bold text-white hover:text-red-500 transition-colors tracking-widest"
                data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#get-involved"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#get-involved');
              }}
              className="bg-white text-black px-6 py-2 font-black font-mono hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-0.5 border-2 border-white"
              data-testid="button-donate-header"
            >
              DONATE
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 focus:outline-none p-2"
              data-testid="button-mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 fixed inset-0 top-[60px] z-50">
          <div className="px-4 py-8 flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-3xl font-black text-white hover:text-red-600 tracking-tighter uppercase transition-colors"
                data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#get-involved"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#get-involved');
              }}
              className="bg-red-600 text-white px-8 py-4 font-black text-xl hover:bg-white hover:text-black transition-colors"
              data-testid="button-donate-mobile"
            >
              DONATE NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
