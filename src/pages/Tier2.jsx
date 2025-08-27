import TierCard from '../components/TierCard';

export default function Tier2() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Tier 2</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TierCard
          title="Pro Plan"
          description="Advanced tools for growing your influence."
          price="$29.99/mo"
          link="#"
        />
        <TierCard
          title="Growth Pack"
          description="Boost your strategy with extra features."
          price="$39.99/mo"
          link="#"
        />
      </div>
    </div>
  );
}
