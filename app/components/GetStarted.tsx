import React from 'react';
import Link from 'next/link';
const GetStarted = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 font-sans bg-white relative">
      <div className="max-w-[1240px] mx-auto">
        <div 
          className="relative w-full rounded-[12px] overflow-hidden flex flex-col items-center text-center px-6 py-12 md:py-16"
          style={{
            backgroundColor: '#FCFCFC',
            boxShadow: '0px 0px 10px 0px #00000040'
          }}
        >
          {/* Background SVG Waves */}
          <div className="absolute inset-0 pointer-events-none flex justify-between overflow-hidden opacity-30">
            {/* Left waves */}
            <svg 
              className="absolute -left-[10%] top-0 h-full w-[60%] transform -scale-y-100 opacity-60" 
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 300 C300 300 500 100 800 500" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M0 320 C320 320 520 120 820 520" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M0 340 C340 340 540 140 840 540" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M0 360 C360 360 560 160 860 560" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M0 380 C380 380 580 180 880 580" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M0 400 C400 400 600 200 900 600" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M0 420 C420 420 620 220 920 620" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M0 440 C440 440 640 240 940 640" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M0 460 C460 460 660 260 960 660" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M0 480 C480 480 680 280 980 680" stroke="#D1D5DB" strokeWidth="0.8"/>
            </svg>

            {/* Right waves */}
            <svg 
              className="absolute -right-[10%] top-0 h-full w-[60%] opacity-60" 
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M200 500 C500 100 700 300 1000 300" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M180 520 C480 120 680 320 1000 320" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M160 540 C460 140 660 340 1000 340" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M140 560 C440 160 640 360 1000 360" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M120 580 C420 180 620 380 1000 380" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M100 600 C400 200 600 400 1000 400" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M80 620 C380 220 580 420 1000 420" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M60 640 C360 240 560 440 1000 440" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M40 660 C340 260 540 460 1000 460" stroke="#D1D5DB" strokeWidth="0.8"/>
              <path d="M20 680 C320 280 520 480 1000 480" stroke="#D1D5DB" strokeWidth="0.8"/>
            </svg>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-[32px] md:text-[38px] font-bold text-black mb-4 tracking-tight">
              Get Started Today
            </h2>
            <p className="text-[#333333] max-w-[700px] text-center text-[15.5px] md:text-[17px] leading-[1.6] mb-8">
              Digitize your logistics with intelligent eWB automation. Join over 500+<br className="hidden md:block" /> enterprises who trust Sharkship for their daily logistics compliance.
            </p>
            <Link 
              href="https://app.sharkship.in/sign-up?source=landing_page"
              className="bg-gradient-to-r from-[#2B8ED2] to-[#4DB6F1] hover:opacity-90 transition-opacity duration-300 text-white font-medium text-[16px] px-8 py-3 rounded-[8px] flex items-center justify-center gap-2"
            >
              Sign Up For Free
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
