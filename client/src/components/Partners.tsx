export default function Partners() {
  const messages = [
    { text: 'STRATEGIC ALLIANCES THAT DELIVER', color: 'text-white' },
    { text: "WE DON'T WORK ALONE", color: 'text-black' },
    { text: 'GOVERNMENT RELATIONS', color: 'text-white' },
    { text: 'LEGAL EXPERTS', color: 'text-black' },
    { text: 'ALLIED ORGANIZATIONS', color: 'text-white' },
    { text: 'STRATEGIC ALLIANCES THAT DELIVER', color: 'text-black' },
    { text: "WE DON'T WORK ALONE", color: 'text-white' },
  ];

  return (
    <section 
      id="partners" 
      className="py-6 sm:py-12 bg-red-600 overflow-hidden"
      data-testid="section-partners"
    >
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {messages.map((msg, index) => (
            <span 
              key={index}
              className={`text-2xl sm:text-4xl md:text-6xl font-black px-4 sm:px-8 ${msg.color}`}
            >
              {msg.text}
            </span>
          ))}
          {messages.map((msg, index) => (
            <span 
              key={`dup-${index}`}
              className={`text-2xl sm:text-4xl md:text-6xl font-black px-4 sm:px-8 ${msg.color}`}
            >
              {msg.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
