import { useEffect, useState, useRef } from 'react';
import TierCard from '../components/TierCard.jsx';
import { MinusIcon, Bars2Icon, CameraIcon } from '@heroicons/react/24/outline';
import tier1Img from '../assets/images/new-tier1.jpg';
import tier2Img from '../assets/images/new-tier2.jpg';
import productionImg from '../assets/images/production.jpg';

export default function Tier3() {
  const tierPlans = [
    {
      title: 'Tier 1',
      description: 'Everything in the Tier 1 Plan.',
      price: '$9.99/mo',
      icon: MinusIcon,
      scrollRef: useRef(null),
      image: tier1Img,
    },
    {
      title: 'Tier 2',
      description: 'Everything in the Tier 2 Plan.',
      price: '$19.99/mo',
      icon: Bars2Icon,
      scrollRef: useRef(null),
      image: tier2Img,
    },
    {
      title: 'Full Production',
      description: 'Everything from idea to release.',
      price: '$29.99/mo',
      icon: CameraIcon,
      scrollRef: useRef(null),
      image: productionImg,
    },
  ];

  const [loaded, setLoaded] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    const subheadingTimeout = setTimeout(() => setShowSubheading(true), 900);
    return () => {
      clearTimeout(timeout);
      clearTimeout(subheadingTimeout);
    };
  }, []);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerHeight / 2 - ref.current.offsetHeight / 2;
      window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-[#444444ff] via-[#555555ff] via-[#666666ff] to-[#333333ff] text-white px-4 sm:px-8 md:px-12 overflow-x-hidden">
      {/* Title */}
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
        }`}
      >
        <h1 className="font-header text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:mb-4 md:mb-6 pb-2 mt-14 md:mt-28">
          What is Tier 3?
        </h1>

        <h2
          className={`font-extrabold font-header text-xl text-yellow-100 md:text-3xl mb-2 sm:mb-4 md:mb-8 pb-10 mt-4 md:mt-8 transition-opacity duration-700 ${
            showSubheading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Production
        </h2>
      </div>

      {/* Small Cards */}
      <div
        className={`hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center transition-all duration-700 transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } sm:pb-12 mb-32`}
      >
        {tierPlans.map((plan) => (
          <div key={plan.title} className="font-body w-full max-w-xs self-start">
            <TierCard
              title={plan.title}
              description={plan.description}
              price={plan.price}
              icon={plan.icon}
              onLearnMore={() => handleScrollTo(plan.scrollRef)}
            />
          </div>
        ))}
      </div>

      {/* Big Cards Section */}
      <div className="w-full mt-4 sm:mt-32 space-y-16 md:space-y-32 mb-32">
        {tierPlans.map((plan, idx) => (
          <div
            key={plan.title}
            ref={plan.scrollRef}
            className={`bg-white text-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-6 md:gap-8`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 mb-6 md:mb-0">
              <img src={plan.image} alt={plan.title} className="w-full h-full object-cover object-center" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{plan.title}</h3>
              <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque velit nec justo malesuada,
                nec tincidunt lorem venenatis. Nullam at massa nec felis bibendum dictum. Sed sit amet lectus id nibh
                commodo facilisis. Curabitur eu dolor id nulla feugiat aliquam. Suspendisse potenti.
              </p>
              <p className="text-lg md:text-2xl font-semibold text-black">{plan.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
