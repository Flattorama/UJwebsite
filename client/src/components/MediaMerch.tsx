import { Twitter, Instagram, Youtube, ArrowRight, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, handle: '@UnapologeticallyJewish', label: 'Twitter' },
  { icon: Instagram, handle: '@UnapologeticallyJewish', label: 'Instagram' },
  { icon: Youtube, handle: 'Training & Interviews', label: 'YouTube' },
];

const newsItems = [
  {
    type: 'LATEST OP-ED',
    title: '"Why Silence is Complicity in 2025"',
    source: 'National Post',
    date: 'Nov 22, 2025',
    link: 'Read Article',
  },
  {
    type: 'IN THE NEWS',
    title: 'Taub confronts City Council on Hate Speech bylaws',
    source: 'CBC News',
    date: 'Oct 15, 2025',
    link: 'Watch Clip',
  },
];

const merchItems = [
  {
    name: 'STREET FIGHTER HOODIE',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2787&auto=format&fit=crop',
  },
  {
    name: 'BOLD LOGO TEE',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop',
  },
  {
    name: 'UNAPOLOGETIC SNAPBACK',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2864&auto=format&fit=crop',
  },
];

export default function MediaMerch() {
  return (
    <section id="media" className="bg-white" data-testid="section-media">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="w-full lg:w-1/3">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none mb-8"
              data-testid="text-media-heading"
            >
              MAKING HEADLINES.<br/>CHANGING MINDS.
            </h2>
            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href="#" 
                    className="flex items-center gap-4 p-4 border-2 border-black hover:bg-black hover:text-white transition-colors group"
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Opening ${social.label}`);
                    }}
                  >
                    <IconComponent className="w-6 h-6 flex-shrink-0" />
                    <span className="font-mono font-bold text-sm sm:text-base truncate">{social.handle}</span>
                    <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                );
              })}
            </div>
            <button 
              className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-red-600 transition-colors w-full"
              data-testid="button-press-kit"
              onClick={() => console.log('Opening press kit')}
            >
              View Press Kit
            </button>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsItems.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-100 p-4 sm:p-6 border-b-4 border-black"
                data-testid={`card-news-${index}`}
              >
                <div className="text-xs font-bold text-red-600 mb-2">{item.type}</div>
                <h4 className="text-lg sm:text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-sm font-mono text-gray-600 mb-4">{item.source} &bull; {item.date}</p>
                <a 
                  href="#" 
                  className="text-sm font-bold underline decoration-2"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Opening: ${item.title}`);
                  }}
                >
                  {item.link}
                </a>
              </div>
            ))}
            <div className="bg-black text-white p-4 sm:p-6 md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-xl sm:text-2xl font-black">THE DAILY BRIEF</h4>
                <p className="font-mono text-gray-400">Get rapid response updates.</p>
              </div>
              <button 
                className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-red-600 hover:text-white transition-colors flex-shrink-0"
                data-testid="button-daily-brief"
                onClick={() => console.log('Opening daily brief')}
              >
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-4 font-mono text-center uppercase tracking-[0.15em] sm:tracking-[0.2em] border-y border-white text-sm sm:text-base">
        /// Every purchase funds the fight ///
      </div>

      <section 
        id="merch" 
        className="relative py-16 sm:py-24 bg-gray-100"
        data-testid="section-merch"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 uppercase"
            data-testid="text-merch-heading"
          >
            Armor for the Unapologetic
          </h2>
          <p className="text-base sm:text-xl font-mono mb-12 max-w-2xl mx-auto">
            Every logo worn is a declaration: We're here. We're proud. We're not going anywhere.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {merchItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative cursor-pointer"
                data-testid={`card-merch-${index}`}
                onClick={() => console.log(`Viewing: ${item.name}`)}
              >
                <div className="aspect-[3/4] bg-gray-300 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="bg-black text-white p-4 absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-bold text-sm sm:text-base truncate">{item.name}</span>
                    <span className="font-mono flex-shrink-0">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
