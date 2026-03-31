import React from 'react';

const Video = () => {
    return (
        <section className="relative w-full h-[650px] lg:h-[850px] font-sans flex flex-col overflow-hidden bg-[#111]">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/video.jpg')" }}
            />

            {/* Highly Dark Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/60 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full max-w-[1550px] mx-auto px-6 md:px-12 lg:px-[100px] pt-[80px] pb-[40px] lg:pt-[100px] lg:pb-[60px] flex flex-col justify-between">

                {/* TOP ROW */}
                <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10 md:gap-10">
                    {/* Top Left */}
                    <div className="text-white">
                        <h3 className="text-[39px] lg:text-[39px] font-[600] mb-0.5 drop-shadow-md ">
                            Sharkship eWayBill Product overview:
                        </h3>
                        <h2 className="text-[45px] lg:text-[45px] font-[650] tracking-wide drop-shadow-md mt-1 lg:mt-2">
                            From Signup to Go Live
                        </h2>
                    </div>

                    {/* Top Right */}
                    <div className="text-white text-[18px] lg:text-[20px] text-left md:text-right font-[500] leading-[1.6] drop-shadow-md ">
                        We save you from penalties with our simplified software.<br className="hidden md:block" />
                        Experience frictionless logistics compliance built for the<br className="hidden md:block" />
                        modern enterprise.
                    </div>
                </div>

                {/* MIDDLE CONTENT ROW */}
                <div className="flex-1 w-full relative">
                    {/* Watch video - Positioned absolutely to match the background image */}
                    <div className="absolute top-[48%] -translate-y-[50%] left-[4%] md:left-[43%] flex items-center gap-3 cursor-pointer group hover:scale-105 transition-transform pb-2 lg:pb-3 drop-shadow-lg z-20">
                        <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white flex items-center justify-center bg-black/20 backdrop-blur-sm">
                            <svg className="w-[20px] h-[20px] text-white ml-1" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <span className="text-white text-[18px] lg:text-[22px] font-[900]">Watch Video</span>
                    </div>
                </div>

                {/* BOTTOM LEFT ROW (Socials) */}
                <div className="w-full flex items-center gap-[12px] z-20 pb-2">
                    {/* Youtube - White background, red icon */}
                    <a href="https://www.youtube.com/oops" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-white rounded-[10px] flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                        <svg className="w-[28px] h-[28px] text-[#FF0000]" fill="currentColor" stroke="currentColor" strokeWidth="0.8" viewBox="0 0 24 24">
                            <path d="M21.582 6.186a2.68 2.68 0 00-1.884-1.892C18.033 3.842 12 3.842 12 3.842s-6.033 0-7.698.452a2.68 2.68 0 00-1.884 1.892C2 7.864 2 12 2 12s0 4.136.418 5.814a2.68 2.68 0 001.884 1.892c1.665.451 7.698.451 7.698.451s6.033 0 7.698-.451a2.68 2.68 0 001.884-1.892C22 16.136 22 12 22 12s0-4.136-.418-5.814zM10.02 15.113V8.887L15.42 12l-5.4 3.113z" />
                        </svg>
                    </a>
                    {/* LinkedIn - White background, blue icon */}
                    <a href="https://www.linkedin.com/company/sharkshipz/" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-white rounded-[10px] flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                        <svg className="w-[26px] h-[26px] text-[#0A66C2]" fill="currentColor" stroke="currentColor" strokeWidth="0.8" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                        </svg>
                    </a>
                    {/* Instagram - White background, gradient icon */}
                    <a href="https://www.instagram.com/sharkshipindia/" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-white rounded-[10px] flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                        <svg className="w-[28px] h-[28px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#f09433" />
                                    <stop offset="25%" stopColor="#e6683c" />
                                    <stop offset="50%" stopColor="#dc2743" />
                                    <stop offset="75%" stopColor="#cc2366" />
                                    <stop offset="100%" stopColor="#bc1888" />
                                </linearGradient>
                            </defs>
                            <path fill="url(#igGradient)" fillRule="evenodd" clipRule="evenodd" d="M12 4.161c2.67 0 2.987.01 4.042.06.975.045 1.504.21 1.857.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.05 1.055.06 1.373.06 4.042 0 2.67-.01 2.987-.06 4.042-.045.975-.21 1.504-.344 1.857-.182.467-.398.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.055.05-1.373.06-4.042.06-2.67 0-2.987-.01-4.042-.06-.975-.045-1.504-.21-1.857-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.05-1.055-.06-1.373-.06-4.042 0-2.67.01-2.987.06-4.042.045-.975.21-1.504.344-1.857.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344C8.983 4.17 9.3 4.16 12 4.161zM12 2C8.717 2 8.306 2.014 7.054 2.071c-1.25.057-2.108.257-2.859.55-.778.302-1.439.704-2.101 1.365-.66.662-1.063 1.323-1.365 2.102-.293.75-.493 1.608-.55 2.859C2.014 8.306 2 8.717 2 12c0 3.283.014 3.694.071 4.946.057 1.25.257 2.108.55 2.859.302.778.704 1.439 1.365 2.101.662.66 1.323 1.063 2.102 1.365.75.293 1.608.493 2.859.55C8.306 23.986 8.717 24 12 24c3.283 0 3.694-.014 4.946-.071 1.25-.057 2.108-.257 2.859-.55.778-.302 1.439-.704 2.101-1.365.66-.662 1.063-1.323 1.365-2.102.293-.75.493-1.608.55-2.859C21.986 15.694 22 15.283 22 12c0-3.283-.014-3.694-.071-4.946-.057-1.25-.257-2.108-.55-2.859-.302-.778-.704-1.439-1.365-2.101-.662-.66-1.323-1.063-2.102-1.365-.75-.293-1.608-.493-2.859-.55C15.694 2.014 15.259 2 12 2zm0 4.838a5.162 5.162 0 100 10.324 5.162 5.162 0 000-10.324zM12 15a3 3 0 110-6 3 3 0 010 6zm3.536-7.7a1.182 1.182 0 111.671-1.671 1.182 1.182 0 01-1.671 1.671z" />
                        </svg>
                    </a>
                    {/* Facebook - White background, blue icon */}
                    <a href="https://www.facebook.com/people/Sharkship/61585188826964/" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-white rounded-[10px] flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                        <svg className="w-[28px] h-[28px] text-[#1877F2]" fill="currentColor" stroke="currentColor" strokeWidth="0.8" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    {/* X - White background, black icon */}
                    <a href="https://x.com/Sharkship_india" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] bg-white rounded-[10px] flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                        <svg className="w-[22px] h-[22px] text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.5h-3.31l7.685-8.784L1.14 2h6.81l4.717 6.275L18.244 2zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.394z" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Video;















