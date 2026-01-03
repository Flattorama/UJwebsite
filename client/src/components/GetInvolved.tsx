import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

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

export default function GetInvolved() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

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

  const newsletterMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      const response = await apiRequest('POST', '/api/newsletter/subscribe', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: 'Subscribed!',
        description: data.message || 'You will receive weekly updates on our fight.',
      });
      setEmail('');
    },
    onError: async (error: any) => {
      let message = 'Failed to subscribe. Please try again.';
      if (error.response) {
        try {
          const data = await error.response.json();
          message = data.message || message;
        } catch {}
      }
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
    },
  });

  const volunteerMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; role: string }) => {
      const response = await apiRequest('POST', '/api/volunteer/apply', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: 'Application Received!',
        description: data.message || "We'll be in touch about volunteer opportunities.",
      });
      setName('');
      setVolunteerEmail('');
      setSelectedRole('');
    },
    onError: async (error: any) => {
      let message = 'Failed to submit application. Please try again.';
      if (error.response) {
        try {
          const data = await error.response.json();
          message = data.message || message;
        } catch {}
      }
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate({ email });
    }
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && volunteerEmail && selectedRole) {
      volunteerMutation.mutate({ 
        name, 
        email: volunteerEmail, 
        role: selectedRole 
      });
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
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-black border-2 border-white px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                  data-testid="input-newsletter-email"
                  required
                  disabled={newsletterMutation.isPending}
                />
                <button 
                  type="submit"
                  className="bg-white text-black px-6 py-3 font-black hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-newsletter-submit"
                  disabled={newsletterMutation.isPending}
                >
                  {newsletterMutation.isPending ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                  {!newsletterMutation.isPending && <ArrowRight size={18} />}
                </button>
              </form>
            </div>

            <div className="bg-zinc-900 p-6 sm:p-8 border border-zinc-700">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase">Volunteer</h3>
              <p className="font-mono text-gray-400 mb-6">
                Join our network of trained advocates. We'll equip you to fight.
              </p>
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-black border-2 border-white px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                  data-testid="input-volunteer-name"
                  required
                  disabled={volunteerMutation.isPending}
                />
                <input
                  type="email"
                  value={volunteerEmail}
                  onChange={(e) => setVolunteerEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-black border-2 border-white px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                  data-testid="input-volunteer-email"
                  required
                  disabled={volunteerMutation.isPending}
                />
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-black border-2 border-white px-4 py-3 font-mono text-white focus:outline-none focus:border-red-600 appearance-none cursor-pointer disabled:opacity-50"
                  data-testid="select-volunteer-role"
                  required
                  disabled={volunteerMutation.isPending}
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
                  disabled={volunteerMutation.isPending}
                >
                  {volunteerMutation.isPending ? 'SUBMITTING...' : 'JOIN THE MOVEMENT'}
                </button>
              </form>
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
