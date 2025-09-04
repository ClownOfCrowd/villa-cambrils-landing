import React from 'react';

const Features = ({ translations }) => {
  const features = [
    {
      icon: (
        // Area (square meters) – outward arrows inside a square
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 8l3 3M8 8V5m0 3H5M16 16l-3-3M16 16v3m0-3h3M8 16l3-3M8 16H5m3 0v3M16 8l-3 3M16 8h3m-3 0V5"/>
        </svg>
      ),
      title: translations.features.area,
      description: translations.features.area_desc
    },
    {
      icon: (
        // Bedrooms – bed icon
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 12V6a2 2 0 012-2h4a2 2 0 012 2v6"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 12h16a2 2 0 012 2v4H2v-4a2 2 0 012-2z"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 8h1.5M7 8h.5"/>
        </svg>
      ),
      title: translations.features.bedrooms,
      description: translations.features.bedrooms_desc
    },
    {
      icon: (
        // Bathrooms – bathtub icon
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10V7a3 3 0 016 0v3"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 13h18v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2z"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 18v2M17 18v2"/>
        </svg>
      ),
      title: translations.features.bathrooms,
      description: translations.features.bathrooms_desc
    },
    {
      icon: (
        // Pool – waves
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 16c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 12c1.5 0 2.5 1 4 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1"/>
        </svg>
      ),
      title: translations.features.pool,
      description: translations.features.pool_desc
    },
    {
      icon: (
        // Garden – leaf
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12c0-5 4-8 9-8 0 5-4 9-9 9 0 3 2 5 5 5 5 0 9-4 9-9"/>
        </svg>
      ),
      title: translations.features.garden,
      description: translations.features.garden_desc
    },
    {
      icon: (
        // Garage – car front inside a gate
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4v10a2 2 0 01-2 2h-1"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 18a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 16h12l-1.5-5h-9L6 16z"/>
        </svg>
      ),
      title: translations.features.garage,
      description: translations.features.garage_desc
    },
    {
      icon: (
        // Cinema & Gym – film + play
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeWidth="2"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 5v14M17 5v14"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M11 10l4 3-4 3v-6z"/>
        </svg>
      ),
      title: translations.features.cinema,
      description: translations.features.cinema_desc
    },
    {
      icon: (
        // Fireplace – flame
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3s-3 3-3 6a3 3 0 006 0c0-3-3-6-3-6z"/>
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 13a4 4 0 00-4 4h8a4 4 0 00-4-4z"/>
        </svg>
      ),
      title: translations.features.fireplace,
      description: translations.features.fireplace_desc
    }
  ];

  return (
    <section id="details" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] tracking-wide text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            {translations.features.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {translations.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 hover:bg-yellow-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-amber-300 group-hover:bg-amber-400 rounded-lg flex items-center justify-center mb-4 text-black transition-colors shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Details */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{translations.features.layout_title}</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-900 font-semibold">{translations.features.basement}:</span>
                    <span className="text-gray-700"> {translations.features.basement_desc}</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-900 font-semibold">{translations.features.ground_floor}:</span>
                    <span className="text-gray-700"> {translations.features.ground_floor_desc}</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-900 font-semibold">{translations.features.first_floor}:</span>
                    <span className="text-gray-700"> {translations.features.first_floor_desc}</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <span className="text-gray-900 font-semibold">{translations.features.second_floor}:</span>
                    <span className="text-gray-700"> {translations.features.second_floor_desc}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{translations.features.exclusive_title}</h3>
              <ul className="space-y-3">
                {translations.features.exclusive_items.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;