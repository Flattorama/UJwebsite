import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const handleClick = () => {
    const element = document.querySelector('#get-involved');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2833&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-20 md:pt-24">
        <h1 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-6 select-none"
          data-testid="text-hero-heading"
        >
          UNAPOLOGETICALLY<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">jEWISH</span>
        </h1>
        <p 
          className="max-w-2xl text-lg md:text-xl text-gray-300 font-mono mb-10 tracking-wide border-l-4 border-red-600 pl-4 text-left"
          data-testid="text-hero-tagline"
        >
          While others build for tomorrow, we fight for today. <br/>
          No apologies. No compromise. Just action.
        </p>
        <button
          onClick={handleClick}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-black text-black transition-all duration-200 bg-white font-mono hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white border-4 border-white"
          data-testid="button-hero-cta"
        >
          <span>TAKE ACTION NOW</span>
          <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
