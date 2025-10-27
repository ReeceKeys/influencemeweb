import TierCardHome from '../components/TierCardHome.jsx';
import { useEffect, useState, useRef } from 'react';

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

  const topRef = useRef(null);
  const reviewsRef = useRef(null);
  const tiersRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToRef = (ref) => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const offset = 100; // adjust for fixed headers if any
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={topRef} className="flex-1 flex flex-col p-4 pb-12 sm:p-8 md:p-8 bg-gradient-to-r from-[#2f2f2f] via-[#2f2f2f] via-[#2f2f2f] to-[#2f2f2f] text-white overflow-y-auto">

      {/* Header and description */}
      <div className={`max-w-3xl mx-auto text-center px-4 pt-8 transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
      >
        <h1 className="font-header text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:mb-4 md:mb-4 pb-8 md:pb-4 mt-8 text-white">
          Ready to <span className="text-yellow-100">grow</span> your <span className="text-yellow-100">dream</span>?
        </h1>

        <p className="font-body text-base md:text-lg text-white font-medium mb-6 sm:mb-8 text-center">
          Industry-specific assistance
          <span className="inline md:hidden"><br /></span>
          <span className="hidden md:inline"> </span>
          to build your brand.
        </p>

        {/* Go to Testimonials Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => scrollToRef(reviewsRef)}
            className="bg-yellow-100 md:hover:bg-yellow-200 text-gray-900 font-medium px-6 py-3 rounded-lg shadow-lg transition-colors duration-300"
          >
            Testimonials
          </button>
        </div>
      </div>

      {/* Tiers Section */}
      <div ref={tiersRef} className={`flex flex-row flex-wrap md:justify-center sm:justify-start pt-8 pb-16 gap-[6rem] sm:gap-[10rem] transition-all duration-700 transform
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

      {/* Testimonials Section */}
      <div ref={reviewsRef} className={`max-w-5xl mx-auto text-center pt-12 pb-6 md:pb-16 transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <h2 className="font-header text-3xl md:text-4xl font-bold text-yellow-100 mb-6">
          Testimonials
        </h2>
        <p className="font-body text-base md:text-lg text-white mb-8">
          See what industry experts and clients are saying about our services.
        </p>

        {/* Placeholder review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg">
            <p className="mb-4">"Excellent strategy and execution! Highly recommend."</p>
            <p className="font-semibold">- Jane Doe, CEO</p>
          </div>
          <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg">
            <p className="mb-4">"Professional and thorough approach. Outstanding results."</p>
            <p className="font-semibold">- John Smith, Marketing Director</p>
          </div>
          <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg">
            <p className="mb-4">"The team helped our brand grow faster than expected."</p>
            <p className="font-semibold">- Alice Johnson, Entrepreneur</p>
          </div>
        </div>

        {/* Go Back to Top Button */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button
            onClick={() => scrollToRef(topRef)}
            className="bg-yellow-100 text-gray-900 font-medium px-6 py-3 rounded-lg shadow-lg md:hover:bg-yellow-200 transition-colors duration-200"
          >
           Back to Top
          </button>
        </div>
      </div>
    </div>
  );
}
