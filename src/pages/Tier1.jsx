import { useEffect, useState } from 'react';
import TierCard from '../components/TierCard.jsx';

// ✅ Import Heroicons
import { UserGroupIcon, PencilIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function Tier1() {
  const tierPlans = [
  {
    title: 'Consulting',
    description: 'What do you hope to gain?',
    price: '$9.99/mo',
    details: 'Discuss where you are right now, and where you would like to be.',
    icon: UserGroupIcon,
    nav: 'Tier1.jsx',
  },
  {
    title: 'Media Plan',
    description: 'Organize your ideas into a plan.',
    price: '$19.99/mo',
    details: 'The Starter Pack includes all the basic tools plus additional media and content management features to help small teams grow efficiently.',
    icon: PencilIcon,
    nav: 'Tier2.jsx',
  },
  {
    title: 'Content Calendar',
description: 'Organize your content releases.',
    price: '$29.99/mo',
    details: 'Pro Pack provides full access to advanced scheduling and organizational tools, designed for professionals who need maximum control and efficiency.',
    icon: CalendarIcon,
  },
];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center bg-gradient-to-r from-[#444444ff] via-[#555555ff] via-[#666666ff] to-[#333333ff] text-white px-4 sm:px-8 md:px-12 overflow-x-hidden">

      {/* Title animates moving down */}
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
      >
        <h1 className="font-header text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:mb-4 md:mb-8 pb-10 mt-14 md:mt-28">
          Tier 1
        </h1>
      </div>

      {/* Cards animate moving up */}
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
              details={plan.details}
              icon={plan.icon} // ✅ Pass icon
            />
          </div>
        ))}
      </div>
    </div>
  );
}
