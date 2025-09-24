import TierCardHome from '../components/TierCardHome.jsx';
import { useEffect, useState } from 'react';

import tier1Img from '../assets/images/new-tier1.jpg';
import tier2Img from '../assets/images/new-tier2.jpg';
import tier3Img from '../assets/images/new-tier3.jpg'; 

export default function Home() {
  const tiers = [
    { title: 'Tier 1', hovertitle: 'Strategy', description: '+ Consulting\n+ Planning\n+ Strategy', image: tier1Img, link: '/tier1', price: '$150' },
    { title: 'Tier 2', hovertitle: 'Execution', description: '+ Tier 1\n+ Media Editing\n+ Scheduling Content', image: tier2Img, link: '/tier2', price: '$300' },
    { title: 'Tier 3', hovertitle: 'Production', description: '+ Tier 2\n+ On-Site Production\n', image: tier3Img, link: '/tier3', price: '$500' },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
  <div className="flex-1 flex flex-col p-4 pb-12 sm:p-8 md:p-8 bg-gradient-to-r from-[#444444ff] via-[#555555ff] via-[#666666ff] to-[#333333ff] text-white overflow-y-auto">

    {/* Header and description */}
    <div className={`max-w-3xl mx-auto text-center px-4 pt-8 transition-all duration-700 transform
      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
    >
      <h1 className="font-header text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:mb-4 md:mb-4 pb-4 mt-8">
        Ready to grow your dream?
      </h1>

      <p className="font-body text-sm md:text-lg text-indigo-100 font-medium mb-16 text-center">
        Industry-specific assistance
        <span className="inline md:hidden"><br /></span>
        to build your brand.
      </p>
    </div>

    {/* Horizontal flexbox for desktop */}
    <div className={`flex flex-row flex-wrap md:justify-center sm:justify-start pt-8 gap-[6rem] transition-all duration-700 transform
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
          fontHeader="font-header"
          fontBody="font-body"
        />
      ))}
    </div>
  </div>
);

}
