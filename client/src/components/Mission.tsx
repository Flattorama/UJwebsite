export default function Mission() {
  return (
    <section 
      id="mission" 
      className="bg-white py-24 md:py-32 relative overflow-hidden"
      data-testid="section-mission"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 
          className="text-4xl sm:text-5xl md:text-7xl font-black text-black mb-12 tracking-tighter uppercase"
          data-testid="text-mission-heading"
        >
          Mission & Vision
        </h2>
        
        <div className="space-y-12">
          <div className="p-6 sm:p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl sm:text-2xl font-black bg-black text-white inline-block px-4 py-1 mb-6 -rotate-1">
              OUR MISSION
            </h3>
            <p 
              className="text-lg sm:text-xl md:text-3xl font-medium text-black leading-tight"
              data-testid="text-mission-content"
            >
              We empower Jews to stand proud, speak boldly, and live safely.{' '}
              <span className="font-black">Unapologetically Jewish</span> combats antisemitism 
              through grassroots organizing, legal advocacy, and direct action — building a Canada 
              where Jewish identity is celebrated, not silenced.
            </p>
          </div>

          <div className="relative text-left">
            <div 
              className="absolute -left-4 sm:-left-12 -top-4 text-[8rem] sm:text-[10rem] leading-none font-black text-gray-100 select-none z-0"
              aria-hidden="true"
            >
              ?
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-black mb-4 relative z-10 border-b-4 border-black inline-block">
              THE VISION
            </h3>
            <p 
              className="text-base sm:text-lg md:text-2xl font-mono text-gray-800 relative z-10"
              data-testid="text-vision-content"
            >
              A Canada where Jews live without fear. Where our heritage is honored without shame. 
              Where standing up for Jewish lives isn't courage —{' '}
              <span className="bg-black text-white px-2">it's just being who we are.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
