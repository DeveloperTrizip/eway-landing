import React from 'react';

const Ad_Core = () => {
  return (
    <section className="w-full bg-[#91D3EE]/15 py-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-12">
          {/* Apply gradient to the h2 using Tailwind arbitrary class, or inline style since it's permanent */}
          <h2 
            className="text-3xl md:text-[36px] font-bold mb-2 text-transparent bg-clip-text inline-block"
            style={{ backgroundImage: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }}
          >
            Advanced Capabilities
          </h2>
          <h3 className="text-black text-2xl md:text-[28px] font-semibold">
            Enterprise Features
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative group rounded-[26px] p-[2px] transition-all duration-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer overflow-hidden">
            {/* Gradient border wrapper */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0"
              style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }}
            />
            {/* Inner Card base */}
            <div className="relative bg-white rounded-[24px] h-full p-8 z-10 flex flex-col">
              {/* Masked PNG Icon with cross-fade hover */}
              <div 
                className="relative w-16 h-16 mb-6"
                style={{
                  maskImage: 'url(/system_integration.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  WebkitMaskImage: 'url(/system_integration.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center'
                }}
              >
                <div className="absolute inset-0 bg-black group-hover:opacity-0 transition-opacity duration-400" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
                />
              </div>

              <h4 className="text-[20px] font-bold text-black mb-4 transition-all duration-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:[background-image:linear-gradient(135deg,#184FA2_0%,#27AAE2_49.83%,#91D3EE_100%)]">
                System Integration
              </h4>
              <p className="text-gray-700 text-[15.5px] leading-[1.6] mb-6">
                Seamless integration with existing systems (ERP/SAP). Automated
                invoice-to-eWB creation for a touchless workflow.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#333] text-[15.5px]">
                <li>Robust API connectivity</li>
                <li>ERP-agnostic architecture</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-[26px] p-[2px] transition-all duration-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer overflow-hidden">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0"
              style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }}
            />
            <div className="relative bg-white rounded-[24px] h-full p-8 z-10 flex flex-col">
              <div 
                className="relative w-16 h-16 mb-6"
                style={{
                  maskImage: 'url(/Bulk_creation.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  WebkitMaskImage: 'url(/Bulk_creation.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center'
                }}
              >
                <div className="absolute inset-0 bg-black group-hover:opacity-0 transition-opacity duration-400" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
                />
              </div>

              <h4 className="text-[20px] font-bold text-black mb-4 transition-all duration-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:[background-image:linear-gradient(135deg,#184FA2_0%,#27AAE2_49.83%,#91D3EE_100%)]">
                Bulk Creation via Excel
              </h4>
              <p className="text-gray-700 text-[15.5px] leading-[1.6] mb-6">
                Upload and generate eWBs in bulk using standard Excel formats. Ideal
                for high-volume enterprise operations.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#333] text-[15.5px]">
                <li>High-speed bulk generation</li>
                <li>Smart error validation</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group rounded-[26px] p-[2px] transition-all duration-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer overflow-hidden">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0"
              style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }}
            />
            <div className="relative bg-white rounded-[24px] h-full p-8 z-10 flex flex-col">
              <div 
                className="relative w-16 h-16 mb-6"
                style={{
                  maskImage: 'url(/Customization.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  WebkitMaskImage: 'url(/Customization.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center'
                }}
              >
                <div className="absolute inset-0 bg-black group-hover:opacity-0 transition-opacity duration-400" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }} 
                />
              </div>

              <h4 className="text-[20px] font-bold text-black mb-4 transition-all duration-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:[background-image:linear-gradient(135deg,#184FA2_0%,#27AAE2_49.83%,#91D3EE_100%)]">
                Customization
              </h4>
              <p className="text-gray-700 text-[15.5px] leading-[1.6] mb-6">
                Flexible data integration options. Custom report generation and
                download capabilities tailored to your business needs.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#333] text-[15.5px]">
                <li>Custom data fields</li>
                <li>Advanced report scheduling</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ad_Core;