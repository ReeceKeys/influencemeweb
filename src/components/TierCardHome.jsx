import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function TierCardHome({
  title,
  hovertitle,
  price,
  description,
  image,
  link,
  index,
  fontHeader = 'font-header',
  fontBody = 'font-body'
}) {
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

  const descriptionLines = description.split('\n');

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <div className="flex flex-row md:flex-col sm:justify-start items-start md:gap-4 gap-0 md:pb-0">
        {/* Image card */}
        <Link
          to={link}
          className="relative group flex-none w-[180px] sm:w-[200px] md:w-[250px] xs:w-[160px] rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
        >
          {/* Fixed width & height image container */}
          <div className="w-full h-[180px] sm:h-[200px] md:h-[260px] xs:h-[160px] overflow rounded-t">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop hover overlay */}
          <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300 p-4 flex-col text-white">
            <h3 className={`text-sm sm:text-base md:text-lg font-bold mb-6 text-center w-full ${fontHeader}`}>
              {hovertitle}
            </h3>

            <div className="border-t border-b border-white">
              <div className={`mx-auto w-4/5 text-left py-2 ${fontBody}`}>
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

            <h3 className={`mt-6 mb-8 text-center text-sm sm:text-base md:text-lg font-bold ${fontHeader}`}>
              Starting Price: {price}
            </h3>
          </div>

          {/* Tier name at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-100 text-center py-1 sm:py-2 text-xs sm:text-sm md:text-base font-semibold text-gray-800">
            {title}
          </div>
        </Link>

        {/* Mobile description */}
        <div className={`md:hidden flex-1 p-2 text-white text-sm text-left mb-8 ${fontBody}`}>
          <h3 className={`text-sm sm:text-base md:text-lg font-bold mb-2 text-left w-full ${fontHeader}`}>
            {hovertitle}
          </h3>

          <div className="border-t border-b border-white py-2 mb-2 -mr-4">
            {descriptionLines.map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </div>

          <h3 className={fontHeader}>Starting Price: {price}</h3>
        </div>
      </div>
    </div>
  );
}
