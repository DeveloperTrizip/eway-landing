"use client";

import { useCallback, useEffect, useState } from "react";

export type TocItem = {
  id: string;
  title: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

const BRAND = "#2B9AEE";
const BRAND_DARK = "#1a6fb8";
const SCROLL_OFFSET = 96;

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: [0, 0.1, 0.5] }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && items.some((item) => item.id === hash)) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [items, scrollToSection]);

  const mobileLabel = (title: string) =>
    title.replace("SECTION ", "").replace(" – ", ": ");

  return (
    <>
      <nav
        className="lg:hidden not-prose sticky top-[76px] z-40 -mx-5 mb-6 border-b border-gray-200 bg-[#fafbfc]/95 px-5 py-3 backdrop-blur-sm sm:-mx-6 sm:px-6"
        aria-label="Table of contents"
      >
        <ul className="flex gap-2 min-w-min overflow-x-auto overscroll-x-contain pb-1">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium leading-snug transition-colors cursor-pointer whitespace-nowrap border ${
                  activeId === item.id
                    ? "border-[#2B9AEE] bg-[#2B9AEE] text-white shadow-sm"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {mobileLabel(item.title)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="hidden lg:block lg:w-52 xl:w-56 shrink-0">
        <nav
          className="sticky top-[76px] z-30 max-h-[calc(100vh-76px)] overflow-y-auto rounded-lg border border-gray-200/90 bg-gray-50 shadow-sm"
          aria-label="Table of contents"
        >
          <div className="border-b border-gray-200/80 px-4 py-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              On this page
            </p>
          </div>
          <ul className="py-2">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2.5 text-[12px] leading-snug transition-all cursor-pointer border-l-[3px] ${
                      isActive
                        ? "border-[#2B9AEE] bg-white font-semibold shadow-sm"
                        : "border-transparent text-gray-600 hover:bg-gray-100/90 hover:text-gray-900"
                    }`}
                    style={
                      isActive
                        ? { borderLeftColor: BRAND, color: BRAND_DARK }
                        : undefined
                    }
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
