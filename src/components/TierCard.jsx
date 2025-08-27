// src/components/TierCard.jsx
export default function TierCard({ title, description, price, link }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <p className="text-lg font-semibold mb-4">{price}</p>
      </div>
      <a
        href={link}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
      >
        Select
      </a>
    </div>
  );
}
