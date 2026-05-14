import React from 'react';

const GradientDefs = () => (
  <defs>
    <linearGradient id="iconBlueGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="50" y2="50">
      <stop offset="0%" stopColor="#184FA2" />
      <stop offset="49.83%" stopColor="#27AAE2" />
      <stop offset="100%" stopColor="#91D3EE" />
    </linearGradient>
  </defs>
);

const Icon1 = ({ color }: { color: string }) => (
  <>
    <path fill={color} d="M12 9v4h-1.5l2.5 3 2.5-3H14V9h-2z M25 5v4h-1.5l2.5 3.5 2.5-3.5H27V5h-2z M38 9v4h-1.5l2.5 3 2.5-3H40V9h-2z" />
    <path fill={color} d="M25 18a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" />
    <path fill={color} d="M14.5 35v-6c0-5 6-7 10.5-7 1.8 0 4 .5 5.5 1.5A9.5 9.5 0 0027 35H14.5z" />
    <path fill={color} d="M37 24a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm-1 4v4h2v-4h-2zm0 6v2h2v-2h-2z" />
  </>
);

const Icon2 = ({ color }: { color: string }) => (
  <>
    <path fill={color} d="M14 6c0-1.6 1.4-3 3-3h12l8 8v22c0 1.6-1.4 3-3 3H17c-1.6 0-3-1.4-3-3V6zm14-1v8h8L28 5zm-8 10h6v2h-6v-2zm0 6h12v2h-12v-2zm0 6h8v2h-8v-2z" />
    <path fill={color} d="M34 22l7-2.5 7 2.5v6c0 5.5-3.5 10.5-7 13.5-3.5-3-7-8-7-13.5v-6zm7 15l4.5-5.5-1.5-1.5-3 3.5-1.5-1.5-1.5 1.5L41 37z" />
  </>
);

const Icon3 = ({ color }: { color: string }) => (
  <>
    <path fill={color} d="M23 10h4v24h-4z" />
    <path fill={color} d="M16 34h18v3h-18z M12 37h26v3h-26z" />
    <path fill={color} d="M8 10h34v3h-34z" />
    <path fill={color} d="M10 13l-4 13a6 6 0 0012 0l-4-13z" />
    <path fill={color} d="M40 13l-4 13a6 6 0 0012 0l-4-13z" />
    <path fill={color} d="M25 6l4 4h-8z" />
  </>
);

const Icon4 = ({ color }: { color: string }) => (
  <>
    <path fill={color} d="M40 8s-4.5 0-10.5 4C23.5 15.5 19 23 19 23l-8 .5v6.5l6 4-4 8.5-1.5-1.5-5 5h4.5l1.5-1.5 1.5 1.5 3 6.5h7.5v-8.5s7.5-3.5 13-9.5C41 23.5 39 9 39 9l-1-3zm-8 11.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM10 39l-4 4v3h3l4-4-3-3z" />
  </>
);

const WhyChoose = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-[1300px] mx-auto">

        {/* Section Headers */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-[38px] font-bold mb-3 text-transparent bg-clip-text inline-block"
            style={{ backgroundImage: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }}
          >
            Why Choose Sharkship?
          </h2>
          <h3 className="text-black text-xl md:text-[26px] font-semibold">
            Great Outcomes Start With Thoughtful Weighing
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="relative group overflow-hidden bg-[#E9F4FA] transition-all duration-500 rounded-[20px] shadow-sm hover:shadow-xl flex flex-col items-start pt-0 pl-0 cursor-pointer">
            {/* Hover Full Card Gradient Background */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
            />

            <div className="relative z-10 flex flex-col h-full w-full">
              {/* Icon Container with Shape */}
              <div className="relative w-[84px] h-[84px] mb-6 rounded-br-[36px] overflow-hidden">
                <div 
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* SVG Icon Switcher */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-11 h-11 absolute group-hover:opacity-0 transition-opacity duration-500" viewBox="0 0 50 50">
                    <Icon1 color="white" />
                  </svg>
                  <svg className="w-11 h-11 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 50 50">
                    <GradientDefs />
                    <Icon1 color="url(#iconBlueGrad)" />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-6 pb-8 flex-grow">
                <h4 className="text-[19px] font-bold text-black group-hover:text-white transition-colors duration-500 mb-3 leading-snug">
                  Reduce manual effort and errors
                </h4>
                <p className="text-[14.5px] text-gray-700 group-hover:text-white/95 transition-colors duration-500 leading-relaxed">
                  Automate repetitive tasks and minimize human intervention in the billing process.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden bg-[#E9F4FA] transition-all duration-500 rounded-[20px] shadow-sm hover:shadow-xl flex flex-col items-start pt-0 pl-0 cursor-pointer">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
            />

            <div className="relative z-10 flex flex-col h-full w-full">
              <div className="relative w-[84px] h-[84px] mb-6 rounded-br-[36px] overflow-hidden">
                <div 
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-11 h-11 absolute group-hover:opacity-0 transition-opacity duration-500" viewBox="0 0 50 50">
                    <Icon2 color="white" />
                  </svg>
                  <svg className="w-11 h-11 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 50 50">
                    <GradientDefs />
                    <Icon2 color="url(#iconBlueGrad)" />
                  </svg>
                </div>
              </div>

              <div className="px-6 pb-8 flex-grow">
                <h4 className="text-[19px] font-bold text-black group-hover:text-white transition-colors duration-500 mb-3 leading-snug">
                  Improve compliance and tracking
                </h4>
                <p className="text-[14.5px] text-gray-700 group-hover:text-white/95 transition-colors duration-500 leading-relaxed">
                  Full visibility of shipment lifecycle ensures 100% regulatory compliance at every step.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden bg-[#E9F4FA] transition-all duration-500 rounded-[20px] shadow-sm hover:shadow-xl flex flex-col items-start pt-0 pl-0 cursor-pointer">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
            />

            <div className="relative z-10 flex flex-col h-full w-full">
              <div className="relative w-[84px] h-[84px] mb-6 rounded-br-[36px] overflow-hidden">
                <div 
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-11 h-11 absolute group-hover:opacity-0 transition-opacity duration-500" viewBox="0 0 50 50">
                    <Icon3 color="white" />
                  </svg>
                  <svg className="w-11 h-11 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 50 50">
                    <GradientDefs />
                    <Icon3 color="url(#iconBlueGrad)" />
                  </svg>
                </div>
              </div>

              <div className="px-6 pb-8 flex-grow">
                <h4 className="text-[19px] font-bold text-black group-hover:text-white transition-colors duration-500 mb-3 leading-snug">
                  Scale operations effortlessly
                </h4>
                <p className="text-[14.5px] text-gray-700 group-hover:text-white/95 transition-colors duration-500 leading-relaxed">
                  Our infrastructure grows with you, handling spikes in volume without breaking a sweat.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group overflow-hidden bg-[#E9F4FA] transition-all duration-500 rounded-[20px] shadow-sm hover:shadow-xl flex flex-col items-start pt-0 pl-0 cursor-pointer">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
            />

            <div className="relative z-10 flex flex-col h-full w-full">
              <div className="relative w-[84px] h-[84px] mb-6 rounded-br-[36px] overflow-hidden">
                <div 
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-11 h-11 absolute group-hover:opacity-0 transition-opacity duration-500" viewBox="0 0 50 50">
                    <Icon4 color="white" />
                  </svg>
                  <svg className="w-11 h-11 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 50 50">
                    <GradientDefs />
                    <Icon4 color="url(#iconBlueGrad)" />
                  </svg>
                </div>
              </div>

              <div className="px-6 pb-8 flex-grow">
                <h4 className="text-[19px] font-bold text-black group-hover:text-white transition-colors duration-500 mb-3 leading-snug">
                  Designed for startups to enterprises
                </h4>
                <p className="text-[14.5px] text-gray-700 group-hover:text-white/95 transition-colors duration-500 leading-relaxed">
                  Flexible modular architecture that adapts to your organization&apos;s specific size and needs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
