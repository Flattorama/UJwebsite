import { Instagram } from 'lucide-react';
import { SiX, SiYoutube, SiSubstack } from 'react-icons/si';
import ujLogo from '@assets/uj-logo.svg';

const socialLinks = [
  { icon: SiX, label: 'X', href: 'https://x.com/_UJewishOrg' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/unapologetically.jewish/' },
  { icon: SiYoutube, label: 'YouTube', href: 'https://www.youtube.com/@unapologeticallyjewishorg' },
  { icon: SiSubstack, label: 'Substack', href: 'https://unapologeticallyjewishorg.substack.com/' },
];

const quickLinks = [
  { name: 'Mission', href: '#mission' },
  { name: 'The Fighter', href: '#fighter' },
  { name: 'What We Do', href: '#pillars' },
  { name: 'Media', href: '#media' },
  { name: 'Merch', href: '#merch' },
  { name: 'Get Involved', href: '#get-involved' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="bg-black text-white border-t border-gray-800"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={ujLogo} 
                alt="Unapologetically Jewish" 
                className="w-16 h-16 invert"
              />
              <span className="font-black text-xl sm:text-2xl tracking-tighter">
                UNAPOLOGETICALLY JEWISH
              </span>
            </div>
            <p className="font-mono text-gray-400 max-w-md mb-6 text-sm sm:text-base">
              Fighting antisemitism in Canada through direct action, legal advocacy, 
              and grassroots organizing. No apologies. No compromise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    aria-label={social.label}
                    data-testid={`link-footer-${social.label.toLowerCase()}`}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-mono text-gray-400 hover:text-white transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4 uppercase">Contact</h4>
            <div className="space-y-3 font-mono text-gray-400 text-sm">
              <p>
                <span className="text-white">General:</span><br/>
                <a 
                  href="mailto:info@unapologeticallyjewish.ca" 
                  className="hover:text-white transition-colors"
                  data-testid="link-footer-email-general"
                >
                  info@unapologeticallyjewish.ca
                </a>
              </p>
              <p>
                <span className="text-white">Press:</span><br/>
                <a 
                  href="mailto:media@unapologeticallyjewish.ca" 
                  className="hover:text-white transition-colors"
                  data-testid="link-footer-email-press"
                >
                  media@unapologeticallyjewish.ca
                </a>
              </p>
              <p>
                <span className="text-white">Report Incident:</span><br/>
                <a 
                  href="mailto:report@unapologeticallyjewish.ca" 
                  className="hover:text-white transition-colors"
                  data-testid="link-footer-email-report"
                >
                  report@unapologeticallyjewish.ca
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-gray-500 text-xs sm:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Unapologetically Jewish. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-mono text-gray-500 text-xs sm:text-sm">
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                console.log('Opening privacy policy');
              }}
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                console.log('Opening terms');
              }}
              data-testid="link-footer-terms"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                console.log('Opening charitable info');
              }}
              data-testid="link-footer-charity"
            >
              Charitable Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
