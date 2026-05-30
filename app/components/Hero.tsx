"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[40vh] md:min-h-[85vh] flex items-center overflow-hidden font-sans">
            {/* Background GIF */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
                <Image
                    src="/bg.gif"
                    alt="Background Animation"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-white/5 opacity-20" />
            </div>

            {/* Main Content Container - Reset to items-center for the left side */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 py-10 pb-0">

                {/* Left Section: Logo, Headline, Buttons - Back to center layout */}
                <div className="flex flex-col space-y-9 max-w-[600px] lg:w-1/2 mb-10 lg:mb-0">
                    {/* Logo/Identity */}
                    <div className="flex transform -translate-x-3">
                        <Image
                            src="/Sharkship_eWay.svg"
                            alt="Sharkship eWayBill"
                            width={400}
                            height={120}
                            className="h-[60px] md:h-[82px] object-contain drop-shadow-sm"
                            style={{ width: 'auto' }}
                            priority
                        />
                    </div>

                    {/* Headline Detail */}
                    <div className="space-y-4">
                        <p className="text-[#333] text-lg md:text-xl lg:text-[21px] leading-[1.6] font-medium opacity-90">
                            We save you from penalties with our simplified software.
                        </p>
                        <p className="text-[#333] text-lg md:text-xl lg:text-[21px] leading-[1.6] font-medium opacity-90">
                            Experience frictionless logistics compliance built for the modern enterprise.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-9 py-4 rounded-2xl text-white font-black text-lg shadow-[0_10px_25px_rgba(24,79,162,0.25)] hover:shadow-[0_15px_35px_rgba(24,79,162,0.35)] hover:-translate-y-1 active:scale-95 transition-all duration-300"
                            style={{ background: 'linear-gradient(135deg, #184FA2 0%, #27AAE2 49.83%, #91D3EE 100%)' }}
                        >
                            Request Demo
                        </button>
                        <button className="px-9 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-[#91D3EE]/40 text-[#184FA2] font-black text-lg shadow-sm hover:bg-white hover:-translate-y-1 active:scale-95 transition-all duration-300">
                            Watch Overview
                        </button>
                    </div>
                </div>

                {/* Right Section: Visual Illustration - Complete image, but flush to bottom */}
                <div className="relative w-full lg:w-1/2 flex items-end justify-center lg:justify-end h-[350px] md:h-[450px] lg:h-[650px] self-end mt-auto">
                    <div className="relative w-full h-full overflow-visible">
                        <Image
                            src="/Group.png"
                            alt="Sharkship Dashboard and Team"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain object-bottom transition-all duration-1000"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Slider Pagination Indicators - Reset to original bottom cental position */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                <div className="w-10 h-3.5 rounded-full bg-[#184FA2] shadow-md" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#91D3EE]/40" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#91D3EE]/40" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#91D3EE]/40" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#91D3EE]/40" />
            </div>
        </section>
    );
};

export default Hero;
