import React from 'react';

const UniversitySlider: React.FC = () => {
  const universities = [
    "FAST NUCES", "NUST", "LUMS", "GIKI", "ITU", "PUCIT", "COMSATS", 
    "UET Lahore", "PIEAS", "IBA Karachi", "UCP", "Bahria University", 
    "Air University", "GIFT University", "NCBA&E", "NED University",
    "SZABIST", "Iqra University", "Greenwich University", "Karachi University",
    "Punjab University", "Peshawar University", "UAF", "UMT", "HITEC"
  ];

  // Duplicate the array multiple times to create seamless infinite scroll
  const extendedUniversities = [...universities, ...universities, ...universities];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden mt-8 mb-8 sm:mt-0 sm:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Students from Pakistan's
            <br />
            <span className="relative inline-block">
              <span className="text-blue-600">Top Universities</span>
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Connecting brilliant minds from universities across Pakistan
          </p>
        </div>

        {/* University Names Slider */}
        <div className="relative">
          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-right-to-left-ultra-fast items-center py-8">
              {extendedUniversities.map((university, index) => (
                <div
                  key={`${university}-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-10"
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-black opacity-60 hover:text-blue-600 hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    {university}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitySlider; 