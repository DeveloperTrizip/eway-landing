"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  BOOK_DEMO_HREF,
} from "../../data/routes";
import {
  Search,
  LayoutGrid,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Headphones,
  Plus,
  Minus,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import {
  FAQ_CATEGORIES,
  FAQ_ITEMS,
  getCategoryCount,
  type FAQCategoryId,
} from "../../data/faq";
import FAQHeroIllustration from "./FAQHeroIllustration";
import FAQDashboardPreview from "./FAQDashboardPreview";

const CATEGORY_ICONS: Record<string, ReactNode> = {
  all: <LayoutGrid className="w-4 h-4" />,
  general: <HelpCircle className="w-4 h-4" />,
  features: <Sparkles className="w-4 h-4" />,
  compliance: <ShieldCheck className="w-4 h-4" />,
  onboarding: <Headphones className="w-4 h-4" />,
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<FAQCategoryId | "all">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const searched = query
      ? FAQ_ITEMS.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        )
      : FAQ_ITEMS;

    return FAQ_CATEGORIES.reduce<Record<string, number>>((acc, cat) => {
      if (cat.id === "all") {
        acc[cat.id] = searched.length;
      } else {
        acc[cat.id] = searched.filter((item) => item.category === cat.id).length;
      }
      return acc;
    }, {});
  }, [searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6fc] via-[#f5f9fd] to-[#fafbfc] pt-24 pb-12 md:pb-16">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2764a8]/5 blur-[120px] rounded-full pointer-events-none -z-0" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-5">
          <nav
            className="flex items-center gap-2 text-[13px] text-gray-500 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2764a8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-600">E-Way Bill</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#2764a8] font-medium">FAQ</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="inline-block text-[#2764a8] font-bold tracking-wider uppercase text-xs mb-4">
                E-Way Bill
              </span>
              <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#0B1A2D] leading-[1.15] mb-5 tracking-tight">
                Frequently Asked{" "}
                <span className="text-[#2764a8]">Questions</span>
              </h1>
              <p className="text-[16px] md:text-[17px] text-gray-500 leading-relaxed mb-8 max-w-xl">
                Find quick answers about Sharkship E-Way Bill — from getting
                started and features to compliance, integrations, and support.
              </p>

              <label className="relative block max-w-xl" htmlFor="faq-search">
                <span className="sr-only">Search your question</span>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  id="faq-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setOpenId(null);
                  }}
                  placeholder="Search your question..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-[#e1ecf6] shadow-[0_4px_20px_rgba(39,100,168,0.08)] text-[15px] text-[#0B1A2D] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2764a8]/30 focus:border-[#2764a8] transition-shadow"
                />
              </label>
            </div>

            <div className="hidden md:block">
              <FAQHeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-5 pb-16 md:pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Sidebar */}
          <aside className="lg:w-[280px] shrink-0">
            <nav
              className="bg-white rounded-2xl border border-[#e8eef5] shadow-sm p-2"
              aria-label="FAQ categories"
            >
              {FAQ_CATEGORIES.map((category) => {
                const isActive = activeCategory === category.id;
                const count =
                  categoryCounts[category.id] ??
                  getCategoryCount(category.id);

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenId(null);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-[14px] font-medium transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#f0f7ff] text-[#2764a8]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#2764a8]"
                    }`}
                  >
                    <span
                      className={
                        isActive ? "text-[#2764a8]" : "text-gray-400"
                      }
                    >
                      {CATEGORY_ICONS[category.id]}
                    </span>
                    <span className="flex-1 truncate">{category.label}</span>
                    <span
                      className={`text-[12px] font-semibold px-2 py-0.5 rounded-full min-w-[28px] text-center ${
                        isActive
                          ? "bg-[#2764a8] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 rounded-2xl bg-[#f0f7ff] border border-[#d6e8f8] p-6">
              <div className="w-11 h-11 rounded-xl bg-white border border-[#d6e8f8] flex items-center justify-center mb-4">
                <Headphones className="w-5 h-5 text-[#2764a8]" />
              </div>
              <p className="text-[14px] font-semibold text-[#0B1A2D] mb-1">
                Still have questions?
              </p>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                Our team is here to help you.
              </p>
              <Link
                href={BOOK_DEMO_HREF}
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg border-2 border-[#2764a8] text-[#2764a8] text-[14px] font-semibold hover:bg-[#2764a8] hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Book a Demo
              </Link>
            </div>
          </aside>

          {/* Accordion */}
          <div className="flex-1 min-w-0">
            {filteredItems.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#e8eef5] p-10 text-center">
                <p className="text-[16px] font-semibold text-[#0B1A2D] mb-2">
                  No questions found
                </p>
                <p className="text-[14px] text-gray-500">
                  Try a different search term or browse another category.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredItems.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`bg-white rounded-xl border transition-all duration-200 ${
                        isOpen
                          ? "border-[#2764a8]/30 shadow-[0_4px_20px_rgba(39,100,168,0.08)]"
                          : "border-[#e8eef5] shadow-sm hover:border-[#d6e4fa] hover:shadow-md"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenId(isOpen ? null : item.id)
                        }
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[15px] md:text-[16px] font-semibold text-[#0B1A2D] leading-snug">
                          {item.question}
                        </span>
                        <span
                          className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                            isOpen
                              ? "bg-[#2764a8] text-white"
                              : "bg-[#f0f7ff] text-[#2764a8]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-200 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 md:px-6 pb-5 text-[14px] md:text-[15px] text-gray-600 leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-5 pb-20 md:pb-24">
        <div className="rounded-2xl bg-gradient-to-r from-[#eef5fc] to-[#e8f2fa] border border-[#d6e4fa] p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#0B1A2D] leading-tight mb-3">
              Simplify. Automate. Stay Compliant.
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Built for manufacturers, distributors, and logistics teams who need
              reliable E-Way Bill compliance at scale.
            </p>
            <Link
              href={BOOK_DEMO_HREF}
              className="inline-flex items-center gap-2 bg-[#0557eb] hover:bg-[#0441b3] text-white font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 cursor-pointer text-[15px]"
            >
              Book a Live Demo
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <FAQDashboardPreview />
        </div>
      </section>
    </>
  );
}
