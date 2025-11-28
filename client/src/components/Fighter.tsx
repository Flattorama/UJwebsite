import mattTaubImage from '@assets/Matt Taub -  Website Image (1)_1764358810423.png';

export default function Fighter() {
  const trackRecord = [
    'Secured arrests of Razaali Awan Bahudar and multiple threat actors.',
    'Exposed officers with extremist connections, triggering internal investigations.',
    'Forced Toronto Police to implement new social media protocols.',
    'Built direct access to federal ministers and provincial leadership.',
  ];

  return (
    <section 
      id="fighter" 
      className="flex flex-col md:flex-row min-h-screen bg-black text-white"
      data-testid="section-fighter"
    >
      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-auto">
        <div className="absolute inset-0 bg-gray-800">
          <div 
            className="w-full h-full bg-cover bg-center bg-top"
            style={{
              backgroundImage: `url(${mattTaubImage})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>
        <div className="absolute bottom-8 left-4 sm:left-8">
          <h3 
            className="text-2xl sm:text-4xl font-black uppercase tracking-tighter border-l-8 border-red-600 pl-4"
            data-testid="text-fighter-name"
          >
            Matthew Taub
          </h3>
          <p className="text-gray-300 font-mono mt-2">The Fighter.</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/20">
        <h2 
          className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter text-red-600"
          data-testid="text-fighter-heading"
        >
          Meet The Fighter
        </h2>
        
        <div className="prose prose-invert prose-lg mb-10">
          <p className="font-mono text-lg sm:text-xl leading-relaxed text-gray-300">
            Matthew Taub doesn't wait for permission. When Toronto Police failed to act, 
            he got antisemites arrested. When media ignored Jewish voices, he forced them 
            to listen. When politicians looked away, he showed up at their offices.
          </p>
        </div>

        <div className="space-y-6 bg-white/5 p-4 sm:p-6 border border-white/10">
          <h4 className="text-lg sm:text-xl font-bold border-b border-gray-600 pb-2 mb-4">
            THE TRACK RECORD
          </h4>
          <ul className="space-y-4 font-mono text-sm md:text-base">
            {trackRecord.map((item, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3"
                data-testid={`text-track-record-${index}`}
              >
                <span className="text-red-500 mt-1 flex-shrink-0">&#9632;</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <p 
          className="mt-8 text-xl sm:text-2xl font-black italic"
          data-testid="text-fighter-quote"
        >
          "This isn't another committee. This is action."
        </p>
      </div>
    </section>
  );
}
