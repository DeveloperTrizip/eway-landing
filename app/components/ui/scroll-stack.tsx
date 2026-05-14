"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollStackCard {
  title: string;
  subtitle?: string;
  badge?: string;
  image: string;
  color?: string;
  content?: React.ReactNode;
}

interface ScrollStackProps {
  cards: ScrollStackCard[];
  backgroundColor?: string;
  cardHeight?: string;
  animationDuration?: string;
  className?: string;
  header?: React.ReactNode;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  cards,
  backgroundColor = "bg-white",
  cardHeight = "500px", 
  className = "",
  header,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!triggerRef.current || !cardsContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Create the main pin and animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", 
          end: () => `+=${cards.length * 100}%`, 
          pin: true,
          scrub: 1, 
        },
        force3D: true,
      });

      // Animate cards
      cards.forEach((_, index) => {
        if (index === 0) {
           tl.to(cardRefs.current[index], {
               y: -20,
               scale: 0.96,
               opacity: 0,
               duration: 1,
               ease: "power2.inOut",
               force3D: true,
           }, 0.5); 
           return;
        }

        gsap.set(cardRefs.current[index], {
          y: 100,
          opacity: 0,
          scale: 0.95,
          zIndex: 10 + index,
          force3D: true,
        });

        tl.to(cardRefs.current[index], {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          force3D: true,
        }, index - 0.5);

        if (index < cards.length - 1) {
            tl.to(cardRefs.current[index], {
                y: -20,
                scale: 0.96,
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                force3D: true,
            }, index + 0.5);
        }
      });
    });

    return () => ctx.revert();
  }, [cards]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className} ${backgroundColor}`}
      style={{ minHeight: "100vh" }}
    >
      <div 
        ref={triggerRef}
        className="w-full h-screen flex flex-col items-center justify-start overflow-hidden pt-[6vh] lg:pt-[8vh]"
      >
        <div className="container px-6 lg:px-8 mx-auto flex flex-col items-center">
          {header && (
            <div className="w-full text-center mb-6 lg:mb-8">
              {header}
            </div>
          )}
          
          <div
            ref={cardsContainerRef}
            className="relative w-full max-w-5xl mx-auto"
            style={{ height: cardHeight }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="absolute inset-0 w-full rounded-[30px] shadow-[0_15px_60px_rgba(0,0,0,0.05)] border border-gray-100 bg-white p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12 will-change-transform"
                style={{ 
                    zIndex: 10 + index,
                    opacity: index === 0 ? 1 : 0, 
                    transform: index === 0 ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.95)'
                }}
              >
                <div className="flex-1 space-y-4 lg:space-y-6">
                  {card.badge && (
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#184FA2]/10 text-[#184FA2] text-[10px] font-extrabold uppercase tracking-[0.2em]">
                      {card.badge}
                    </span>
                  )}
                  <h3 className="text-3xl md:text-5xl font-black text-[#184FA2] leading-[1.1] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                    {card.subtitle}
                  </p>
                  {card.content}
                </div>
                
                <div className="flex-1 w-full h-[250px] md:h-full relative group">
                    <div className="absolute inset-0 bg-blue-50/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain relative z-10 p-2"
                        priority={index === 0}
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
