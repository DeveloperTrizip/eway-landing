import Link from "next/link";
import {
  BOOK_DEMO_HREF,
  CONTACT_PAGE_HREF,
} from "../../data/routes";
import {
  ArrowRight,
  Check,
  Target,
  Eye,
  FileText,
  LayoutDashboard,
  Radar,
  BellRing,
  BarChart3,
  ShieldCheck,
  Users,
  Headphones,
  ArrowUpRight,
} from "lucide-react";
import {
  ABOUT_CTA_BODY,
  ABOUT_IMPACT_STATS,
  ABOUT_MISSION,
  ABOUT_PLATFORM_FEATURES,
  ABOUT_PURPOSE_BENEFITS,
  ABOUT_PURPOSE_BODY,
  ABOUT_VISION,
} from "../../data/about";
import AboutHeroMockup from "./AboutHeroMockup";
import AboutPurposeVisual from "./AboutPurposeVisual";
import AboutCTAIllustration from "./AboutCTAIllustration";
import type { ReactNode } from "react";

const PLATFORM_ICONS = [
  FileText,
  LayoutDashboard,
  Radar,
  BellRing,
  BarChart3,
  ShieldCheck,
];
const IMPACT_ICONS = [Users, FileText, ShieldCheck, Headphones];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-[#2764a8] font-bold tracking-wider uppercase text-xs mb-4">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6fc] via-[#f5f9fd] to-white pt-24 pb-16 md:pb-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2764a8]/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-[40px] md:text-[52px] font-extrabold text-[#0B1A2D] leading-[1.1] mb-6 tracking-tight">
                About{" "}
                <span className="text-[#2764a8]">Sharkship eWayBill</span>
              </h1>
              <p className="text-[17px] md:text-[18px] text-gray-500 leading-relaxed mb-8 max-w-xl">
                We&apos;re building the simplest and most reliable eWay Bill
                management platform for businesses to stay compliant and move
                faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={BOOK_DEMO_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-[#0557eb] hover:bg-[#0441b3] text-white font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 cursor-pointer text-[15px]"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={CONTACT_PAGE_HREF}
                  className="inline-flex items-center justify-center border-2 border-[#2764a8] text-[#2764a8] hover:bg-[#f0f7ff] font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 cursor-pointer text-[15px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <AboutHeroMockup />
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AboutPurposeVisual />
            <div>
              <SectionLabel>Our Purpose</SectionLabel>
              <h2 className="text-[30px] md:text-[36px] font-extrabold text-[#0B1A2D] leading-tight mb-5">
                Simplifying eWay Bill Management for Businesses
              </h2>
              <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed mb-8">
                {ABOUT_PURPOSE_BODY}
              </p>
              <p className="text-[14px] font-semibold text-[#0B1A2D] mb-4">
                Key Benefits
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_PURPOSE_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#f0f7ff] border border-[#d6e8f8] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#2764a8]" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] text-gray-700 font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-[#fafbfc]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-5">
          <div className="text-center mb-12 md:mb-14">
            <SectionLabel>Mission &amp; Vision</SectionLabel>
            <h2 className="text-[30px] md:text-[36px] font-extrabold text-[#0B1A2D] leading-tight">
              Driving Compliance. Enabling Growth.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-2xl bg-[#eef5fc] border border-[#d6e8f8] p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#d6e8f8] flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#2764a8]" />
              </div>
              <h3 className="text-[22px] font-bold text-[#0B1A2D] mb-3">
                Our Mission
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {ABOUT_MISSION}
              </p>
            </div>
            <div className="rounded-2xl bg-[#eef8f2] border border-[#d4eadc] p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#d4eadc] flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-[#2764a8]" />
              </div>
              <h3 className="text-[22px] font-bold text-[#0B1A2D] mb-3">
                Our Vision
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {ABOUT_VISION}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-5">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-[30px] md:text-[36px] font-extrabold text-[#0B1A2D] leading-tight">
              Designed for Efficiency. Built for Compliance.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {ABOUT_PLATFORM_FEATURES.map((feature, index) => {
              const Icon = PLATFORM_ICONS[index];
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl border border-[#e8eef5] shadow-sm hover:shadow-md hover:border-[#d6e4fa] p-6 transition-all duration-200 cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f0f7ff] border border-[#d6e8f8] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2764a8]" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0B1A2D] mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-20 bg-[#fafbfc]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-5">
          <div className="text-center mb-12 md:mb-14">
            <SectionLabel>Our Impact</SectionLabel>
            <h2 className="text-[30px] md:text-[36px] font-extrabold text-[#0B1A2D] leading-tight">
              Trusted by Thousands of Businesses Nationwide
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {ABOUT_IMPACT_STATS.map((stat, index) => {
              const Icon = IMPACT_ICONS[index];
              return (
                <div
                  key={stat.label}
                  className="text-center bg-white rounded-2xl border border-[#e8eef5] shadow-sm p-6 md:p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7ff] border border-[#d6e8f8] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#2764a8]" />
                  </div>
                  <p className="text-[28px] md:text-[32px] font-extrabold text-[#2764a8] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[14px] text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-5">
          <div className="rounded-2xl bg-gradient-to-r from-[#eef5fc] to-[#e8f2fa] border border-[#d6e4fa] p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1 text-center lg:text-left">
                <h2 className="text-[26px] md:text-[30px] font-extrabold text-[#0B1A2D] leading-tight mb-3">
                  Simplify Your eWay Bill Operations Today
                </h2>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {ABOUT_CTA_BODY}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={BOOK_DEMO_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-[#0557eb] hover:bg-[#0441b3] text-white font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 cursor-pointer text-[15px] whitespace-nowrap"
                >
                  Book a Demo
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href={CONTACT_PAGE_HREF}
                  className="inline-flex items-center justify-center border-2 border-[#2764a8] text-[#2764a8] hover:bg-white font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 cursor-pointer text-[15px] whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
              <AboutCTAIllustration />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
