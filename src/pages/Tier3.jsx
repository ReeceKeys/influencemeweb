import TierCard from '../components/TierCard';

export default function Tier3() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Tier 3</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TierCard
          title="Elite Plan"
          description="Full features for maximum influence."
          price="$59.99/mo"
          link="#"
        />
        <TierCard
          title="Premium Pack"
          description="All-inclusive plan with priority support."
          price="$79.99/mo"
          link="#"
        />
      </div>
    </div>
  );
}
