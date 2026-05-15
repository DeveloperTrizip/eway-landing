"use client";
import React, { useState, useRef, useMemo, useEffect } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect screen size to adjust cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Reset active index if it exceeds new group length on resize
  useEffect(() => {
    setActiveIndex(0);
  }, [cardsPerView]);

  // Group cards dynamically based on screen size
  const cardGroups = useMemo(() => {
    const groups: PremiumCard[][] = [];
    for (let i = 0; i < cards.length; i += cardsPerView) {
      groups.push(cards.slice(i, i + cardsPerView));
    }
    return groups;
  }, [cards, cardsPerView]);

  // Initialize: show only activeIndex group on mount, hide all others
  useEffect(() => {
    groupRefs.current.forEach((ref, i) => {
      if (!ref) return;
      gsap.set(ref, {
        display: i === activeIndex ? "grid" : "none",
        opacity: i === activeIndex ? 1 : 0,
        x: 0,
      });
    });
  }, [activeIndex, cardGroups]);

  const animateTransition = (nextIndex: number, direction: number) => {
    if (nextIndex === activeIndex || isAnimating) return;

    const oldGroup = groupRefs.current[activeIndex];
    const newGroup = groupRefs.current[nextIndex];

    if (!oldGroup || !newGroup) {
      setActiveIndex(nextIndex);
      return;
    }

    setIsAnimating(true);

    // Prepare new group
    gsap.set(newGroup, {
      display: "grid",
      x: direction * 40, // Reduced distance for lighter feel
      opacity: 0,
      zIndex: 20,
      force3D: true,
    });
    gsap.set(oldGroup, { zIndex: 10 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(oldGroup, { display: "none", zIndex: 0 });
        gsap.set(newGroup, { zIndex: 1 });
        setActiveIndex(nextIndex);
        setIsAnimating(false);
      },
    });

    // Animate old group out
    tl.to(Array.from(oldGroup.children), {
      x: -direction * 20,
      opacity: 0,
      duration: 0.25, // Slightly faster
      stagger: 0.02,
      ease: "power2.inOut",
      force3D: true,
    })
      // Animate new group in (overlapping)
      .to(
        Array.from(newGroup.children),
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.03,
          ease: "power2.out",
          force3D: true,
        },
        "-=0.15"
      );
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % cardGroups.length;
    animateTransition(next, 1);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + cardGroups.length) % cardGroups.length;
    animateTransition(prev, -1);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center py-10 md:py-20 px-2 md:px-4 select-none"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(24,79,162,0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(39,170,226,0.15) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#184FA2 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Left Nav */}
      <div className="absolute left-2 md:left-4 top-0 bottom-0 w-[40px] md:w-[6vw] flex items-center justify-center z-50">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="group relative w-[4px] md:w-[6px] h-[30%] md:h-[40%] bg-gradient-to-b from-transparent via-[#184FA2]/30 to-transparent cursor-pointer hover:via-[#184FA2]/80 transition-all duration-700 rounded-full shadow-[0_0_20px_rgba(24,79,162,0.2)]"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-16 md:w-14 md:h-24 rounded-full bg-white/40 md:bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] group-hover:scale-110 group-active:scale-95 transition-all duration-300">
            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-[#184FA2] drop-shadow-md" />
            <div className="absolute inset-0 rounded-full border-2 border-white/40 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      </div>

      {/* Right Nav */}
      <div className="absolute right-2 md:right-4 top-0 bottom-0 w-[40px] md:w-[6vw] flex items-center justify-center z-50">
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="group relative w-[4px] md:w-[6px] h-[30%] md:h-[40%] bg-gradient-to-b from-transparent via-[#27AAE2]/30 to-transparent cursor-pointer hover:via-[#27AAE2]/80 transition-all duration-700 rounded-full shadow-[0_0_20px_rgba(39,170,226,0.2)]"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-16 md:w-14 md:h-24 rounded-full bg-white/40 md:bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] group-hover:scale-110 group-active:scale-95 transition-all duration-300">
            <ChevronRight className="w-5 h-5 md:w-8 md:h-8 text-[#184FA2] drop-shadow-md" />
            <div className="absolute inset-0 rounded-full border-2 border-white/40 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      </div>

      {/* Main Container */}
      <div
        className="relative w-full sm:w-[92%] md:w-[88%] max-w-[1500px] flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 bg-[#fbfdff] rounded-[24px] md:rounded-[50px] lg:rounded-[70px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-gray-100"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glass shine effects */}
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#27AAE2]/40 to-transparent z-20" />
          <div className="absolute inset-[-100%] bg-gradient-to-br from-white/10 via-transparent to-[#184FA2]/5 opacity-50 z-10" />
        </div>

        {/* Header */}
        <div className="w-full text-center mb-6 md:mb-12 relative z-10 px-4">
          {header}
        </div>

        {/* All card groups — absolutely positioned to prevent layout shifts during animation */}
        <div className="w-full relative z-10 min-h-[460px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
          {cardGroups.map((group, groupIdx) => (
            <div
              key={`${cardsPerView}-${groupIdx}`} // Key includes cardsPerView to force re-render on resize
              ref={(el) => { groupRefs.current[groupIdx] = el; }}
              className={`absolute inset-0 w-full grid gap-6 md:gap-8 lg:gap-10 px-2 md:px-8 justify-center justify-items-center items-center max-w-[1400px] mx-auto ${cardsPerView === 1 ? "grid-cols-1" : cardsPerView === 2 ? "grid-cols-2" : "grid-cols-3"
                }`}
              style={{
                display: groupIdx === activeIndex ? "grid" : "none",
                opacity: groupIdx === activeIndex ? 1 : 0,
                pointerEvents: groupIdx === activeIndex ? "auto" : "none",
                willChange: "opacity, transform",
              }}
            >
              {group.map((card) => (
                <GlassCard key={card.title} card={card} />
              ))}
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-6 md:mt-10 lg:mt-12 flex gap-4 relative z-10">
          {cardGroups.map((_, i) => (
            <div
              key={i}
              onClick={() => animateTransition(i, i > activeIndex ? 1 : -1)}
              className={`h-[4px] md:h-[6px] rounded-full cursor-pointer transition-all duration-700 ${i === activeIndex
                ? "w-10 sm:w-16 bg-[#184FA2] shadow-[0_0_15px_rgba(24,79,162,0.4)]"
                : "w-4 sm:w-6 bg-[#184FA2]/10 hover:bg-[#184FA2]/30"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── GlassCard: CSS 3D flip on click ─────────────────────────────────────────
const GlassCard = ({ card }: { card: PremiumCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // Outer: hover lift only — no transform-style preserve-3d here
    <div
      className="group relative h-[450px] md:h-[500px] lg:h-[550px] w-full cursor-pointer transition-transform duration-300 hover:-translate-y-3"
      style={{
        perspective: "2000px",
      }}
      onClick={() => setIsFlipped((f) => !f)}
    >
      {/* Inner: 3D flip — completely independent of the lift */}
      <div
        className="relative w-full h-full rounded-[24px] md:rounded-[36px] lg:rounded-[45px]"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        {/* ── Front Face ─────────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-[24px] md:rounded-[36px] lg:rounded-[45px] p-8 md:p-10 flex flex-col justify-between shadow-md overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-[-30%] left-[-30%] w-[160%] h-[160%] pointer-events-none opacity-10"
            style={{ background: "radial-gradient(circle, rgba(24,79,162,0.1) 0%, transparent 70%)" }} />

          {/* Badge */}
          <div className="relative z-10 flex justify-center">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl bg-white/60 backdrop-blur-xl border border-[#184FA2]/20 text-[#184FA2] text-[10px] md:text-[12px] font-black uppercase tracking-[0.25em] shadow-lg group-hover:bg-[#184FA2]/10 transition-colors">
              <Sparkles className="w-3 h-3 text-[#27AAE2]" />
              {card.badge}
            </span>
          </div>

          {/* Image */}
          <div className="relative w-full h-[140px] md:h-[160px] lg:h-[200px] flex items-center justify-center p-2">
            <div className="absolute w-[140px] h-[140px] md:w-[170px] md:h-[170px] lg:w-[220px] lg:h-[220px] pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle, rgba(39,170,226,0.2) 0%, transparent 70%)" }} />
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-2 md:p-6 group-hover:scale-110 transition-transform duration-1000 ease-out z-10"
            />
          </div>

          {/* Text */}
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

        {/* ── Back Face ──────────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#E1F5FE] to-[#B3E5FC] border border-white/50 rounded-[24px] md:rounded-[36px] lg:rounded-[45px] p-8 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden ring-1 ring-white/30"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            willChange: "transform",
          }}
        >
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

          <div className="absolute inset-0 rounded-[45px] border-[1.5px] border-transparent bg-gradient-to-br from-white/60 via-white/20 to-[#27AAE2]/40 opacity-30 [mask-image:linear-gradient(white,white)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default PremiumCarousel;
