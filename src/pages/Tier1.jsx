// Example: src/pages/Tier1.jsx
import TierCard from '../components/TierCard.jsx';

export default function Tier1() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Tier 1</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TierCard
          title="Basic Plan"
          description="Start your journey with essential features."
          price="$9.99/mo"
          link="#"
        />
        <TierCard
          title="Starter Pack"
          description="Great for beginners to get going."
          price="$19.99/mo"
          link="#"
        />
      </div>
    </div>
  );
}
