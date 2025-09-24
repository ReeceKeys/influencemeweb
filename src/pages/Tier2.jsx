import { useEffect, useState } from 'react';
import TierCard from '../components/TierCard.jsx';

// ✅ Use outline Heroicons for consistency
import { MinusIcon, WrenchScrewdriverIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function Tier2() {
  const tierPlans = [
    {
      title: 'Tier 1',
      description: 'Everything in the Tier 1 Plan.',
      price: '$9.99/mo',
      details: 'This plan includes the basics you need to get started and is perfect for beginners.',
      icon: MinusIcon,
      nav: '/tier1', // correct path
    },
    {
      title: 'Content Editing',
      description: 'User-specific content editing.',
      price: '$19.99/mo',
      details: 'The Starter Pack adds more advanced features and support, perfect for small teams.',
      icon: WrenchScrewdriverIcon,
    },
    {
      title: 'Advanced Scheduling',
      description: 'Content details, release dates, etc.',
      price: '$29.99/mo',
      details: 'Pro Pack gives full access to all features, ideal for growing businesses and professionals.',
      icon: CalendarDaysIcon,
    },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center bg-gradient-to-r from-[#444444ff] via-[#555555ff] via-[#666666ff] to-[#333333ff] text-white px-4 sm:px-8 md:px-12 overflow-x-hidden">
      <div className={`max-w-3xl mx-auto text-center transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <h1 className="font-header text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:mb-4 md:mb-8 pb-10 mt-14 md:mt-28">
          Tier 2
        </h1>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} sm:pb-12`}>
        {tierPlans.map((plan) => (
          <div key={plan.title} className="font-body w-full max-w-xs self-start">
            <TierCard
              title={plan.title}
              description={plan.description}
              price={plan.price}
              details={plan.details}
              icon={plan.icon}
              nav={plan.nav}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
