import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import TierCard from '../components/TierCard.jsx';
import { UserGroupIcon, PencilIcon, CalendarIcon } from '@heroicons/react/24/outline';
import consultingImg from '../assets/images/consulting.jpg';
import mediaImg from '../assets/images/mediaplan.jpg';
import scheduleImg from '../assets/images/schedule.jpg';
import tierDescriptions from '../data/longDescriptions.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Tier1() {
  const tierPlans = [
    {
      title: 'Consulting',
      description: 'What do you hope to gain?',
      descriptionLong: tierDescriptions.tier1.consulting,
      price: '$9.99/mo',
      icon: UserGroupIcon,
      scrollRef: useRef(null),
      image: consultingImg,
    },
    {
      title: 'Media Plan',
      description: 'Organize your ideas into a plan.',
      descriptionLong: tierDescriptions.tier1.mediaPlan,
      price: '$19.99/mo',
      icon: PencilIcon,
      scrollRef: useRef(null),
      image: mediaImg,
    },
    {
      title: 'Content Calendar',
      description: 'Organize your content releases.',
      descriptionLong: tierDescriptions.tier1.contentCalendar,
      price: '$29.99/mo',
      icon: CalendarIcon,
      scrollRef: useRef(null),
      image: scheduleImg,
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
      const offset = window.innerHeight / 2 - ref.current.offsetHeight / 2; // center align
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth',
      });
    }
  };

  // Mobile carousel settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-[#2f2f2f] via-[#2f2f2f] via-[#2f2f2f] to-[#2f2f2f] text-white sm:px-8 md:px-12 overflow-x-hidden">

      {/* Title */}
      <div className={`max-w-3xl mx-auto text-center transition-all duration-700 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <h1 className="font-header text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 sm:mb-6 md:mb-6 pb-2 mt-14 md:mt-28">What's in Tier 1?</h1>
        <h2>Starting at $500/month</h2>
        <h2 className={`font-extrabold font-header text-xl text-yellow-100 md:text-3xl mb-2 sm:mb-4 md:mb-8 pb-10 mt-4 md:mt-8 transition-opacity duration-700 ${showSubheading ? 'opacity-100' : 'opacity-0'}`}>Planning</h2>
      </div>

      {/* Mobile Carousel (big cards only) */}
      <div className="md:hidden w-full">
        <Slider {...sliderSettings}>
          {tierPlans.map((plan, idx) => (
            <div key={plan.title} className="px-4 pb-32">
              <div
                className={`bg-white text-gray-800 rounded-2xl shadow-1xl p-6 flex flex-col items-center gap-6 min-h-[550px]`}
              >
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    {plan.descriptionLong}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Small Cards (desktop only) */}
      <div
        className={`hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} sm:pb-12 mb-32`}
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

      {/* Big Cards Section (desktop only) */}
      <div className="hidden md:flex w-full mt-4 sm:mt-32 space-y-32 flex-col mb-32">
        {tierPlans.map((plan, idx) => (
          <div
            key={plan.title}
            ref={plan.scrollRef}
            className={`bg-white text-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-6 md:gap-8`}
          >
            {/* Image Container */}
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 mb-6 md:mb-0">
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Text content */}
            <div className="flex-1 md:px-12 lg:px-24 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold mb-6 md:mb-9">{plan.title}</h3>
              <p className="text-gray-700 text-sm sm:text-lg lg:text-3xl mb-3 md:mb-4">
                {plan.descriptionLong}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
