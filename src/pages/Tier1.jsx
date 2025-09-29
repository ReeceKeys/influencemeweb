import { useEffect, useState, useRef } from 'react';
import TierCard from '../components/TierCard.jsx';
import { UserGroupIcon, PencilIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function Tier1() {
  const tierPlans = [
    {
      title: 'Consulting',
      description: 'What do you hope to gain?',
      price: '$9.99/mo',
      icon: UserGroupIcon,
      scrollRef: useRef(null),
    },
    {
      title: 'Media Plan',
      description: 'Organize your ideas into a plan.',
      price: '$19.99/mo',
      icon: PencilIcon,
      scrollRef: useRef(null),
    },
    {
      title: 'Content Calendar',
      description: 'Organize your content releases.',
      price: '$29.99/mo',
      icon: CalendarIcon,
      scrollRef: useRef(null),
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
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-[#444444ff] via-[#555555ff] via-[#666666ff] to-[#333333ff] text-white px-4 sm:px-8 md:px-12 overflow-x-hidden">
      {/* Title */}
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
      >
        <h1 className="font-header text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:mb-4 md:mb-6 pb-2 mt-14 md:mt-28">
          Tier 1
        </h1>

        <h2
          className={`font-header text-xl text-yellow-100 md:text-3xl sm:mb-4 md:mb-8 pb-10 mt-8 md:mt-16 transition-opacity duration-700 ${
            showSubheading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Planning
        </h2>
      </div>

      {/* Small Cards */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} sm:pb-12`}
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
      <div className="w-full  mt-320 space-y-32 mb-32">
        {/* Consulting Big Card */}
        <div ref={tierPlans[0].scrollRef} className="h-[70vh] bg-white text-gray-800 rounded-2xl shadow-2xl p-12 flex flex-col md:flex-row items-center gap-8">
          <img src="/images/consulting.jpg" alt="Consulting" className="w-full md:w-1/2 rounded-xl" />
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-4">{tierPlans[0].title}</h3>
            <p className="text-gray-700 mb-4">
              Discuss where you are right now, and where you would like to be. Tailored one-on-one consulting sessions.
            </p>
            <p className="text-2xl font-semibold text-[#3776a6]">{tierPlans[0].price}</p>
          </div>
        </div>

        {/* Media Plan Big Card */}
        <div ref={tierPlans[1].scrollRef} className="h-[70vh] bg-white text-gray-800 rounded-2xl shadow-2xl p-12 flex flex-col md:flex-row-reverse items-center gap-8">
          <img src="/images/media.jpg" alt="Media Plan" className="w-full md:w-1/2 rounded-xl" />
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-4">{tierPlans[1].title}</h3>
            <p className="text-gray-700 mb-4">
              The Starter Pack includes all basic tools plus additional media and content management features.
            </p>
            <p className="text-2xl font-semibold text-[#3776a6]">{tierPlans[1].price}</p>
          </div>
        </div>

        {/* Content Calendar Big Card */}
        <div ref={tierPlans[2].scrollRef} className="h-[70vh] bg-white text-gray-800 rounded-2xl shadow-2xl p-12 flex flex-col md:flex-row items-center gap-8">
          <img src="/images/calendar.jpg" alt="Content Calendar" className="w-full md:w-1/2 rounded-xl" />
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-4">{tierPlans[2].title}</h3>
            <p className="text-gray-700 mb-4">
              Pro Pack provides full access to advanced scheduling and organizational tools for professionals.
            </p>
            <p className="text-2xl font-semibold text-[#3776a6]">{tierPlans[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
