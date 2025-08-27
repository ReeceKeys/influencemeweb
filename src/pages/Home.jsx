import TierCardHome from '../components/TierCardHome.jsx';
import { useEffect, useState } from 'react';

export default function Home() {
  const tiers = [
    { title: 'Tier 1', hovertitle: 'Strategy', description: '+ Consulting\n+ Planning\n+ Strategy', image: '/images/tier1.jpg', link: '/tier1', price: '$150' },
    { title: 'Tier 2', hovertitle: 'Execution', description: '+ Tier 1\n+ Media Editing\n+ Scheduling Content', image: '/images/tier2.jpg', link: '/tier2', price: '$300' },
    { title: 'Tier 3', hovertitle: 'Production', description: '+ Tier 2\n+ On-Site Production', image: '/images/tier3.jpg', link: '/tier3', price: '$500' },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation once on page load
    const timeout = setTimeout(() => setLoaded(true), 100); // slight delay for smoother animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-center p-4 sm:p-8 md:p-8 bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
      
      {/* Header and description */}
      <div className={`max-w-3xl mx-auto text-center px-4 transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:mb-2 md:mb-6 pb-8 mt-12">
          Ready to grow your dream?
        </h1>

        <p className="text-sm md:text-lg text-indigo-100 font-medium mb-12 text-center">
          Industry-specific assistance
          <span className="inline md:hidden"><br /></span>
          to build your brand.
        </p>
      </div>

      {/* Horizontal flexbox for desktop */}
      <div className={`flex flex-row flex-wrap md:justify-center sm:justify-start gap-[4rem] transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        {tiers.map((tier, idx) => (
          <TierCardHome
            key={tier.title}
            index={idx}
            title={tier.title}
            hovertitle={tier.hovertitle}
            description={tier.description}
            price={tier.price}
            image={tier.image}
            link={tier.link}
          />
        ))}
      </div>
    </div>
  );
}
