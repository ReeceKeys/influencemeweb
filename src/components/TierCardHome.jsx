import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function TierCardHome({ title, hovertitle, price, description, image, link, index }) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  const isEven = index % 2 === 0;

  // Split description into lines
  const descriptionLines = description.split('\n');

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      {/* Mobile = row (card + description), Desktop = horizontal cards side by side */}
      <div
        className={`flex flex-row md:flex-col sm:justify-start items-start gap-4`}
      >
        {/* Image card */}
        <Link
          to={link}
          className="relative group flex-none min-w-[120px] sm:min-w-[160px] md:min-w-[220px] lg:min-w-[250px] rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
        >
          <div
            className="w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[250px] bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          {/* Desktop hover overlay */}
            <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 p-4 flex-col">
            {/* Title at top */}
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-6 text-center w-full">
                {hovertitle}
            </h3>

            {/* Description in the middle */}
            <div className='border-t border-b border-white'>
                <div className="mx-auto w-4/5 text-left  py-2">
                    <p className="text-xs sm:text-sm md:text-base">
                    {descriptionLines.map((line, idx) => (
                        <span key={idx}>
                        {line}
                        <br />
                        </span>
                    ))}
                    </p>
                </div>
            </div>

            {/* Price at the bottom */}
            <h3 className="mt-auto mb-8 text-center text-sm sm:text-base md:text-lg font-bold">
                Starting Price: {price}
            </h3>
            </div>


          {/* Tier name at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 text-center py-1 sm:py-2 text-xs sm:text-sm md:text-base font-semibold text-gray-800">
            {title}
          </div>
        </Link>

        {/* Mobile description */}
        <div className="md:hidden flex-1 p-2 text-white text-sm text-left mb-8">
        <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-left w-full">
            {hovertitle}
        </h3>

        {/* Lines with extra length on right */}
        <div className="border-t border-b border-white py-2 mb-2 -mr-4">
            {descriptionLines.map((line, idx) => (
            <span key={idx}>
                {line}
                <br />
            </span>
            ))}
        </div>

        <h3>Starting Price: {price}</h3>
        </div>

      </div>
    </div>
  );
}
