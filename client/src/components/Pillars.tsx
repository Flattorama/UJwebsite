import { Scale, Shield, Mic, Megaphone, Users, HardHat } from 'lucide-react';

const pillars = [
  {
    icon: Scale,
    title: 'LEGISLATIVE ACTION',
    desc: "We don't wait in lobbies. We get in rooms. Monthly meetings with MPs, motions, and policy briefings that move the needle.",
  },
  {
    icon: Shield,
    title: 'LAW ENFORCEMENT & LEGAL',
    desc: "Collaboration first. Accountability always. From hate crime training to Charter challenges — ensuring Jewish safety isn't negotiable.",
  },
  {
    icon: Mic,
    title: 'MEDIA RELATIONS',
    desc: "We don't react to narratives. We create them. When media gets it wrong, we correct it. When they ignore us, we become impossible to ignore.",
  },
  {
    icon: Megaphone,
    title: 'SOCIAL MEDIA',
    desc: 'Making Jewish pride go viral. Daily content that counters lies with truth. Rapid-response to breaking incidents.',
  },
  {
    icon: Users,
    title: 'ADVOCATE BUILDING',
    desc: 'Training fighters, not victims. Creating a network of trained advocates who know how to show up, speak up, and never back down.',
  },
  {
    icon: HardHat,
    title: "LABOUR & 'JEW 311'",
    desc: 'No incident goes unanswered. Our intake system documents antisemitism in workplaces, connecting victims to legal support.',
  },
];

export default function Pillars() {
  return (
    <section 
      id="pillars" 
      className="py-24 bg-zinc-900 text-white"
      data-testid="section-pillars"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl sm:text-5xl md:text-7xl font-black mb-16 text-center tracking-tighter"
          data-testid="text-pillars-heading"
        >
          SIX PILLARS OF <span className="text-red-600">ACTION</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-white">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={index} 
                className="group relative p-6 sm:p-10 border border-white/20 bg-black hover:bg-white transition-colors duration-300"
                data-testid={`card-pillar-${index}`}
              >
                <div className="mb-6 text-white group-hover:text-black transition-colors">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase text-white group-hover:text-black transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-mono text-sm sm:text-base text-gray-400 group-hover:text-black transition-colors">
                  {pillar.desc}
                </p>
                <div 
                  className="absolute top-4 right-4 text-3xl sm:text-4xl font-black text-white/10 group-hover:text-black/10"
                  aria-hidden="true"
                >
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
