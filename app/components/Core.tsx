"use client";
import React, { memo } from "react";
import PremiumCarousel from "./ui/premium-carousel";
import { services } from "@/app/data/services";

// Memoized Header for zero re-render overhead
const Header = memo(() => (
    <div className="relative z-20 text-center px-4 mb-8 md:mb-12">
        <h4 className="text-[#184FA2] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[14px] mb-3 opacity-90">Core Features</h4>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#184FA2] tracking-tighter mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 drop-shadow-sm">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#184FA2] to-[#27AAE2]">Core Capabilities</span>
        </h2>
        <div className="w-[80px] md:w-[120px] h-[4px] bg-gradient-to-r from-[#184FA2] to-[#27AAE2] mx-auto rounded-full shadow-sm" />
    </div>
));

Header.displayName = "Header";

const Core = () => {
    return (
        <section
            id="capabilities"
            className="relative w-full bg-[#fbfdff] overflow-hidden py-4 md:py-8 lg:py-10"
        >
            {/* Ultra-Lightweight Background (Only essential CSS gradients) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-10" 
                     style={{ background: 'radial-gradient(circle, rgba(39,170,226,0.2) 0%, transparent 70%)' }} />
                <div className="absolute bottom-[-5%] left-[-5%] w-[700px] h-[700px] opacity-10" 
                     style={{ background: 'radial-gradient(circle, rgba(24,79,162,0.2) 0%, transparent 70%)' }} />
            </div>

            <PremiumCarousel
                cards={services}
                header={<Header />}
            />
        </section>
    );
};

export default memo(Core);