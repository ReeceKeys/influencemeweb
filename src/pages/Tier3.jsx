import { useEffect, useState } from 'react';
import TierCard from '../components/TierCard.jsx';

export default function Tier3() {
  const tierPlans = [
    {
      title: 'Basic Plan',
      description: 'Start your journey with essential features.',
      price: '$9.99/mo',
      details: 'This plan includes the basics you need to get started and is perfect for beginners.',
    },
    {
      title: 'Starter Pack',
      description: 'Great for beginners to get going.',
      price: '$19.99/mo',
      details: 'The Starter Pack adds more advanced features and support, perfect for small teams.',
    },
    {
      title: 'Pro Pack',
      description: 'All advanced features for professionals.',
      price: '$29.99/mo',
      details: 'Pro Pack gives full access to all features, ideal for growing businesses and professionals.',
    },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center bg-gradient-to-r from-blue-400 to-indigo-600 text-white px-4 sm:px-8 md:px-12">

      {/* Title animates moving down */}
      <div className={`max-w-3xl mx-auto text-center transition-all duration-700 transform
                      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight sm:mb-2 md:mb-6 pb-8 mt-12">
          Tier 3
        </h1>
      </div>

      {/* Cards animate moving up */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl justify-items-center transition-all duration-700 transform
                      ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} sm:pb-12`}
      >
        {tierPlans.map((plan) => (
          <div key={plan.title} className="w-full max-w-xs self-start">
            <TierCard
              title={plan.title}
              description={plan.description}
              price={plan.price}
              details={plan.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
