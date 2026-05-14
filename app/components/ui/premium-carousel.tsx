"use client";
import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";

export interface PremiumCard {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  color: string;
}

interface PremiumCarouselProps {
  cards: PremiumCard[];
  header: React.ReactNode;
}

const PremiumCarousel: React.FC<PremiumCarouselProps> = ({ cards, header }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Group cards into sets of 3
  const cardGroups = useMemo(() => {
    const groups = [];
    for (let i = 0; i < cards.length; i += 3) {
      groups.push(cards.slice(i, i + 3));
    }
    return groups;
  }, [cards]);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % cardGroups.length;
    animateTransition(nextIndex, 1);
  };

  const handlePrev = () => {
    const nextIndex = (activeIndex - 1 + cardGroups.length) % cardGroups.length;
    animateTransition(nextIndex, -1);
  };

  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(0);

  const animateTransition = (nextIndex: number, direction: number) => {
    if (nextIndex === activeIndex) return;
    
    const oldGroup = groupRefs.current[activeIndex];
    const newGroup = groupRefs.current[nextIndex];
    if (!oldGroup || !newGroup) {
      setActiveIndex(nextIndex);
      return;
    }

    // Set new group to starting position
    gsap.set(newGroup, { 
      display: 'grid',
      x: direction * 50, 
      opacity: 0,
      zIndex: 20 
    });
    
    gsap.set(oldGroup, { zIndex: 10 });

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(nextIndex);
        gsap.set(oldGroup, { display: 'none' });
      }
    });

    tl.to(Array.from(oldGroup.children), {
      x: -direction * 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.inOut"
    })
    .to(Array.from(newGroup.children), {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.03,
      ease: "power3.out"
    }, "-=0.3"); // Overlap the animations
  };

  const groupRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center py-10 md:py-20 px-2 md:px-4 select-none"
    >
      {/* Optimized Background Blobs (No filters) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] pointer-events-none opacity-40" 
           style={{ background: 'radial-gradient(circle, rgba(24,79,162,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] pointer-events-none opacity-40" 
           style={{ background: 'radial-gradient(circle, rgba(39,170,226,0.15) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#184FA2 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Navigation Sticks - Section Edges */}
      <div className="absolute left-2 md:left-4 top-0 bottom-0 w-[40px] md:w-[6vw] flex items-center justify-center z-50">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="group relative w-[4px] md:w-[6px] h-[30%] md:h-[40%] bg-gradient-to-b from-transparent via-[#184FA2]/30 to-transparent cursor-pointer hover:via-[#184FA2]/80 transition-all duration-700 rounded-full shadow-[0_0_20px_rgba(24,79,162,0.2)]"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-16 md:w-14 md:h-24 rounded-full bg-white/40 md:bg-white/20 backdrop-blur-3xl border border-white/40 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] group-hover:scale-110 group-active:scale-95 transition-all duration-300">
            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-[#184FA2] drop-shadow-md" />
            <div className="absolute inset-0 rounded-full border-2 border-white/40 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      </div>

      <div className="absolute right-2 md:right-4 top-0 bottom-0 w-[40px] md:w-[6vw] flex items-center justify-center z-50">
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="group relative w-[4px] md:w-[6px] h-[30%] md:h-[40%] bg-gradient-to-b from-transparent via-[#27AAE2]/30 to-transparent cursor-pointer hover:via-[#27AAE2]/80 transition-all duration-700 rounded-full shadow-[0_0_20px_rgba(39,170,226,0.2)]"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-16 md:w-14 md:h-24 rounded-full bg-white/40 md:bg-white/20 backdrop-blur-3xl border border-white/40 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] group-hover:scale-110 group-active:scale-95 transition-all duration-300">
            <ChevronRight className="w-5 h-5 md:w-8 md:h-8 text-[#184FA2] drop-shadow-md" />
            <div className="absolute inset-0 rounded-full border-2 border-white/40 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      </div>

      {/* Optimized Container */}
      <div className="relative w-[95%] sm:w-[90%] md:w-[85%] max-w-[1500px] flex flex-col items-center justify-center p-6 sm:p-10 md:p-12 lg:p-16 bg-[#fbfdff] rounded-[30px] md:rounded-[50px] lg:rounded-[70px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-gray-100"
           style={{ transformStyle: 'preserve-3d' }}>

        {/* Extreme Bevel & Specular Highlights */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Light Shine - SPECULAR */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20" />
          <div className="absolute top-0 left-[20%] w-[60%] h-[3px] bg-white/40 blur-[2px] z-20" />

          {/* Bottom Glow Reflectance */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#27AAE2]/40 to-transparent z-20" />

          {/* Dynamic Prism Sheen - Extreme Lustre */}
          <div className="absolute inset-[-100%] bg-gradient-to-br from-white/10 via-transparent to-[#184FA2]/5 opacity-50 z-10" />
          <div className="absolute -top-[50%] -left-[50%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none" />

          {/* Texture: Ultra-Fine Noise for Glass Detail */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        </div>

        {/* Atmosphere Glow (Gradient-based) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none opacity-20 z-0" 
             style={{ background: 'radial-gradient(circle, rgba(39,170,226,0.1) 0%, transparent 70%)' }} />

        <div className="w-full text-center mb-6 md:mb-12 relative z-10">
          {header}
        </div>

        <div
          ref={cardsRef}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-4 items-center relative z-10"
        >
          {cardGroups[activeIndex].map((card, idx) => (
            <GlassCard key={`${activeIndex}-${idx}`} card={card} />
          ))}
        </div>

        {/* Group Indicators */}
        <div className="mt-6 md:mt-10 lg:mt-12 flex gap-4 relative z-10">
          {cardGroups.map((_, i) => (
            <div
              key={i}
              onClick={() => animateTransition(i, i > activeIndex ? 1 : -1)}
              className={`h-[4px] md:h-[6px] rounded-full cursor-pointer transition-all duration-700 ${i === activeIndex ? 'w-10 sm:w-16 bg-[#184FA2] shadow-[0_0_15px_rgba(24,79,162,0.4)]' : 'w-4 sm:w-6 bg-[#184FA2]/10 hover:bg-[#184FA2]/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const GlassCard = ({ card }: { card: PremiumCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[450px] md:h-[500px] lg:h-[550px] w-full [perspective:2500px] cursor-pointer transition-all duration-500 ease-out hover:-translate-y-8"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-all duration-1000 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.15)] rounded-[24px] md:rounded-[36px] lg:rounded-[45px]"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div 
          className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-[24px] md:rounded-[36px] lg:rounded-[45px] p-8 md:p-10 flex flex-col justify-between shadow-md overflow-hidden transition-all duration-700 hover:shadow-xl will-change-transform"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          {/* Card Glow (Gradient-based) */}
          <div className="absolute top-[-30%] left-[-30%] w-[160%] h-[160%] pointer-events-none opacity-10" 
               style={{ background: 'radial-gradient(circle, rgba(24,79,162,0.1) 0%, transparent 70%)' }} />

          {/* Badge */}
          <div className="relative z-10 flex justify-center">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl bg-white/40 backdrop-blur-3xl border border-[#184FA2]/20 text-[#184FA2] text-[10px] md:text-[12px] font-black uppercase tracking-[0.25em] shadow-lg group-hover:bg-[#184FA2]/10 transition-colors">
              <Sparkles className="w-3 h-3 text-[#27AAE2]" />
              {card.badge}
            </span>
          </div>

          <div className="relative w-full h-[140px] md:h-[160px] lg:h-[200px] flex items-center justify-center p-2">
            <div className="absolute w-[140px] h-[140px] md:w-[170px] md:h-[170px] lg:w-[220px] lg:h-[220px] pointer-events-none opacity-20" 
                 style={{ background: 'radial-gradient(circle, rgba(39,170,226,0.2) 0%, transparent 70%)' }} />
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-contain p-2 md:p-6 group-hover:scale-110 transition-transform duration-1000 ease-out z-10"
            />
          </div>

          <div className="relative z-10 space-y-4 text-center flex flex-col items-center">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-[#184FA2] leading-tight tracking-tighter drop-shadow-sm">
              {card.title}
            </h3>
            <p className="text-[#184FA2]/80 text-xs sm:text-sm font-bold leading-relaxed tracking-wide max-w-[90%]">
              {card.subtitle}
            </p>

            <div className="pt-4 flex items-center justify-center gap-4 border-t border-[#184FA2]/10 mt-6 w-full">
              <button className="flex items-center gap-2 text-[#184FA2] text-[10px] md:text-[12px] font-black tracking-[0.2em] uppercase hover:gap-4 transition-all group/btn">
                View Details
                <div className="w-10 h-10 rounded-full bg-[#184FA2] flex items-center justify-center text-white shadow-[0_5px_15px_rgba(24,79,162,0.4)] group-hover:shadow-[0_8px_25px_rgba(24,79,162,0.6)] transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>

          <div className="absolute inset-0 rounded-[45px] border-[2px] border-transparent bg-gradient-to-br from-white/60 via-white/20 to-[#184FA2]/30 opacity-40 [mask-image:linear-gradient(white,white)] pointer-events-none" />
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#E1F5FE] to-[#B3E5FC] border border-white/50 rounded-[24px] md:rounded-[36px] lg:rounded-[45px] p-8 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden ring-1 ring-white/30 transition-all duration-700"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Decorative Back Glow */}
          <div className="absolute top-[-20%] right-[-20%] w-[150%] h-[150%] bg-white/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-xl flex items-center justify-center mx-auto mb-4 border border-white/50 shadow-sm">
                <Sparkles className="w-6 h-6 text-[#184FA2]" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-[#184FA2] leading-tight tracking-tighter">
                {card.title}
              </h3>
              <div className="w-12 h-[2px] bg-[#184FA2]/20 mx-auto" />
              <p className="text-[#184FA2]/80 text-[10px] sm:text-xs md:text-sm font-medium leading-relaxed italic px-2">
                &quot;{card.description}&quot;
              </p>
            </div>

            <div className="pt-4 flex items-center justify-center gap-4 border-t border-[#184FA2]/10 mt-6 w-full">
              <button className="flex items-center gap-2 text-[#184FA2] text-xs font-black tracking-widest uppercase hover:gap-3 transition-all group/back-btn">
                Go Back
                <div className="w-8 h-8 rounded-full bg-[#184FA2] flex items-center justify-center text-white shadow-lg transition-transform">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </div>
              </button>
            </div>
          </div>

          {/* Animated Prism Edge for Back Side */}
          <div className="absolute inset-0 rounded-[45px] border-[1.5px] border-transparent bg-gradient-to-br from-white/60 via-white/20 to-[#27AAE2]/40 opacity-30 [mask-image:linear-gradient(white,white)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default PremiumCarousel;
