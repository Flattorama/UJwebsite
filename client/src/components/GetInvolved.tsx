import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dbox-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        campaign?: string;
        type?: string;
        'enable-auto-scroll'?: string;
      }, HTMLElement>;
    }
  }
}

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/Info@Unapologetically-Jewish.org';

export default function GetInvolved() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [volunteerSubmitting, setVolunteerSubmitting] = useState(false);
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widgets.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setNewsletterSubmitting(true);
    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: 'New Newsletter Subscription',
          email: email,
          formType: 'Newsletter Subscription'
        })
      });
      
      if (response.ok) {
        setNewsletterSuccess(true);
        setEmail('');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to subscribe. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !volunteerEmail || !selectedRole) return;
    
    setVolunteerSubmitting(true);
    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: 'New Volunteer Application',
          name: name,
          email: volunteerEmail,
          role: selectedRole,
          formType: 'Volunteer Application'
        })
      });
      
      if (response.ok) {
        setVolunteerSuccess(true);
        setName('');
        setVolunteerEmail('');
        setSelectedRole('');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to submit application. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setVolunteerSubmitting(false);
    }
  };

  const roles = [
    'Community Organizer',
    'Legal Support',
    'Social Media',
    'Research',
    'Event Support',
  ];

  return (
    <section 
      id="get-involved" 
      className="bg-black text-white py-16 sm:py-24 border-t border-gray-800"
      data-testid="section-get-involved"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl sm:text-6xl md:text-8xl font-black mb-12 sm:mb-16 text-center leading-none"
          data-testid="text-get-involved-heading"
        >
          STOP WATCHING.<br/>
          <span className="text-red-600">START FIGHTING.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8 sm:space-y-12">
            <div className="bg-zinc-900 p-6 sm:p-8 border border-zinc-700">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase">Stay Informed</h3>
              <p className="font-mono text-gray-400 mb-6">
                Get weekly updates on victories, threats, and actions you can take.
              </p>
              {newsletterSuccess ? (
                <div className="flex items-center gap-3 text-green-400" data-testid="newsletter-success">
                  <CheckCircle size={24} />
                  <span className="font-mono">You're subscribed! Check your inbox for updates.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-black border-2 border-white px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                    data-testid="input-newsletter-email"
                    required
                    disabled={newsletterSubmitting}
                  />
                  <button 
                    type="submit"
                    className="bg-white text-black px-6 py-3 font-black hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-newsletter-submit"
                    disabled={newsletterSubmitting}
                  >
                    {newsletterSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                    {!newsletterSubmitting && <ArrowRight size={18} />}
                  </button>
                </form>
              )}
            </div>

            <div className="bg-zinc-900 p-6 sm:p-8 border border-zinc-700">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase">Volunteer</h3>
              <p className="font-mono text-gray-400 mb-6">
                Join our network of trained advocates. We'll equip you to fight.
              </p>
              {volunteerSuccess ? (
                <div className="flex items-center gap-3 text-green-400" data-testid="volunteer-success">
                  <CheckCircle size={24} />
                  <span className="font-mono">Application received! We'll be in touch soon.</span>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-black border-2 border-white px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                    data-testid="input-volunteer-name"
                    required
                    disabled={volunteerSubmitting}
                  />
                  <input
                    type="email"
                    value={volunteerEmail}
                    onChange={(e) => setVolunteerEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-black border-2 border-white px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                    data-testid="input-volunteer-email"
                    required
                    disabled={volunteerSubmitting}
                  />
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full bg-black border-2 border-white px-4 py-3 font-mono text-white focus:outline-none focus:border-red-600 appearance-none cursor-pointer disabled:opacity-50"
                    data-testid="select-volunteer-role"
                    required
                    disabled={volunteerSubmitting}
                  >
                    <option value="" disabled>Select your interest</option>
                    {roles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <button 
                    type="submit"
                    className="w-full bg-red-600 text-white py-4 font-black text-lg hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-volunteer-submit"
                    disabled={volunteerSubmitting}
                  >
                    {volunteerSubmitting ? 'SUBMITTING...' : 'JOIN THE MOVEMENT'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white text-black p-4 sm:p-6" data-testid="donorbox-container">
              <dbox-widget 
                campaign="unapologetically-jewish-founders-campaign" 
                type="donation_form" 
                enable-auto-scroll="true"
              />
            </div>

            <div className="mt-8 p-6 border border-white/20 text-center">
              <p className="font-mono text-gray-400 mb-4">
                FOR CORPORATE OR MAJOR GIFTS
              </p>
              <a 
                href="mailto:partnerships@unapologeticallyjewish.ca" 
                className="text-white font-bold underline decoration-2 hover:text-red-500 transition-colors"
                data-testid="link-partnerships-email"
              >
                partnerships@unapologeticallyjewish.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
