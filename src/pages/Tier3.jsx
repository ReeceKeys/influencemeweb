import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import TierCard from '../components/TierCard.jsx';
import { MinusIcon, Bars2Icon, CameraIcon } from '@heroicons/react/24/outline';
import tier1Img from '../assets/images/new-tier1.jpg';
import tier2Img from '../assets/images/new-tier2.jpg';
import productionImg from '../assets/images/production.jpg';
import tierDescriptions from '../data/longDescriptions.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Tier3() {
  const tierPlans = [
    { title: 'Tier 1', description: 'Everything in the Tier 1 Plan.', longDescription: tierDescriptions.tier3.tier1Addon,price: '$9.99/mo', icon: MinusIcon, scrollRef: useRef(null), image: tier1Img },
    { title: 'Tier 2', description: 'Everything in the Tier 2 Plan.', longDescription: tierDescriptions.tier3.tier2Addon, price: '$19.99/mo', icon: Bars2Icon, scrollRef: useRef(null), image: tier2Img },
    { title: 'Full Production', description: 'Everything from idea to release.', longDescription: tierDescriptions.tier3.fullProduction, price: '$29.99/mo', icon: CameraIcon, scrollRef: useRef(null), image: productionImg },
  ];

  const [loaded, setLoaded] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    const subheadingTimeout = setTimeout(() => setShowSubheading(true), 900);
    return () => { clearTimeout(timeout); clearTimeout(subheadingTimeout); };
  }, []);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerHeight / 2 - ref.current.offsetHeight / 2;
      window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
    }
  };

  const sliderSettings = { dots: true, infinite: false, speed: 500, slidesToShow: 1, slidesToScroll: 1, arrows: false };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-[#2f2f2f] via-[#2f2f2f] via-[#2f2f2f] to-[#2f2f2f] text-white sm:px-8 md:px-12 overflow-x-hidden">

      {/* Title */}
      <div className={`max-w-3xl mx-auto text-center transition-all duration-700 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <h1 className="font-header text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 sm:mb-6 md:mb-6 pb-2 mt-14 md:mt-28">What's in Tier 3?</h1>
        <h2>Starting at $1500/month</h2>
        <h2 className={`font-extrabold font-header text-xl text-yellow-100 md:text-3xl mb-2 sm:mb-4 md:mb-8 pb-10 mt-8 md:mt-8 transition-opacity duration-700 ${showSubheading ? 'opacity-100' : 'opacity-0'}`}>Production</h2>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden w-full">
        <Slider {...sliderSettings}>
          {tierPlans.map((plan) => (
            <div key={plan.title} className="px-4 pb-32">
              <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-6 min-h-[550px]">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img src={plan.image} alt={plan.title} className="w-full h-full object-cover object-center" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
                  <p className="text-gray-700 text-sm mb-3">{plan.longDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Small Cards (desktop only) */}
      <div className={`hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center transition-all duration-700 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} sm:pb-12 mb-32`}>
        {tierPlans.map((plan) => (
          <div key={plan.title} className="font-body w-full max-w-xs self-start">
            <TierCard title={plan.title} description={plan.description} price={plan.price} icon={plan.icon} onLearnMore={() => handleScrollTo(plan.scrollRef)} />
          </div>
        ))}
      </div>

      {/* Big Cards Section (desktop only) */}
      <div className="hidden md:flex w-full mt-4 sm:mt-32 space-y-32 flex-col mb-32">
        {tierPlans.map((plan, idx) => (
          <div key={plan.title} ref={plan.scrollRef} className={`bg-white text-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-6 md:gap-8`}>
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 mb-6 md:mb-0">
              <img src={plan.image} alt={plan.title} className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex-1 px-24 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{plan.title}</h3>
              <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">{plan.longDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
