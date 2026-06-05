"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONTACT_FORM_ID,
  scrollToContactForm,
} from "../../data/routes";
import {
  Mail,
  Headphones,
  Lock,
  Plus,
  Minus,
  ArrowRight,
  FileText,
  Upload,
  BellRing,
  Radar,
  BarChart3,
  Check,
} from "lucide-react";
import {
  CONTACT_FAQ_PREVIEW,
  CONTACT_FINAL_CTA,
  CONTACT_FORM_COPY,
  CONTACT_HERO,
  CONTACT_QUICK_CARDS,
  CONTACT_WHY_CHOOSE,
  MONTHLY_EWB_OPTIONS,
} from "../../data/contactPage";
import AboutHeroMockup from "../About/AboutHeroMockup";
import AboutCTAIllustration from "../About/AboutCTAIllustration";

const WHY_ICONS = [FileText, Upload, BellRing, Radar, BarChart3, Headphones];

const CARD_ICONS = {
  email: Mail,
  sales: Headphones,
} as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    Name: "",
    Company: "",
    Contact: "",
    Email: "",
    MonthlyEWB: "",
    Message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(
    CONTACT_FAQ_PREVIEW[0]?.id ?? null
  );

  useEffect(() => {
    const scrollIfHash = () => {
      if (window.location.hash === `#${CONTACT_FORM_ID}`) {
        window.setTimeout(() => scrollToContactForm(), 100);
      }
    };

    scrollIfHash();
    window.addEventListener("hashchange", scrollIfHash);
    return () => window.removeEventListener("hashchange", scrollIfHash);
  }, []);

  const handleScrollToForm = () => {
    scrollToContactForm();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const messageBody = formData.MonthlyEWB
      ? `Monthly eWay Bills (Approx.): ${formData.MonthlyEWB}\n\n${formData.Message}`
      : formData.Message;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: formData.Name,
          Company: formData.Company,
          Contact: formData.Contact,
          Email: formData.Email,
          Message: messageBody,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Request sent successfully!" });
        setFormData({
          Name: "",
          Company: "",
          Contact: "",
          Email: "",
          MonthlyEWB: "",
          Message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Failed to send request.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6fc] via-[#f5f9fd] to-white pt-24 pb-14 md:pb-16">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg
            className="absolute bottom-0 left-0 w-full h-32 text-[#2764a8]/10"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,64 C360,120 720,0 1440,48 L1440,120 L0,120 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-5 text-center">
          <h1 className="text-[40px] md:text-[52px] font-extrabold text-[#0B1A2D] leading-tight mb-5 tracking-tight">
            {CONTACT_HERO.heading}
          </h1>
          <p className="text-[16px] md:text-[17px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12">
            {CONTACT_HERO.subheading}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {CONTACT_QUICK_CARDS.map((card) => {
              const Icon = CARD_ICONS[card.id as keyof typeof CARD_ICONS];
              const cardClassName =
                "bg-white rounded-2xl border border-[#e8eef5] shadow-[0_4px_20px_rgba(39,100,168,0.08)] p-6 text-left hover:border-[#d6e4fa] hover:shadow-md transition-all duration-200 cursor-pointer group block";
              const cardContent = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-[#f0f7ff] border border-[#d6e8f8] flex items-center justify-center mb-4 group-hover:bg-[#2764a8] transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[#2764a8] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h2 className="text-[16px] font-bold text-[#0B1A2D] mb-1">
                    {card.title}
                  </h2>
                  <p className="text-[14px] text-[#2764a8] font-medium">
                    {card.primary}
                  </p>
                </>
              );

              if (card.href.startsWith("mailto:")) {
                return (
                  <a key={card.id} href={card.href} className={cardClassName}>
                    {cardContent}
                  </a>
                );
              }

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={handleScrollToForm}
                  className={cardClassName}
                >
                  {cardContent}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Visual */}
      <section id={CONTACT_FORM_ID} className="py-16 md:py-20 bg-white scroll-mt-24">
        <div className="max-w-[1300px] mx-auto px-6 md:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#0B1A2D] leading-tight mb-3">
                {CONTACT_FORM_COPY.headline}
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
                {CONTACT_FORM_COPY.subtext}
              </p>
              <AboutHeroMockup />
            </div>

            <div className="bg-white rounded-2xl border border-[#e8eef5] shadow-[0_4px_24px_rgba(39,100,168,0.08)] p-6 md:p-8">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="Name"
                      className="block text-[13px] font-medium text-gray-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#e1ecf6] rounded-lg px-4 py-3 text-[15px] text-[#0B1A2D] focus:outline-none focus:ring-2 focus:ring-[#2764a8]/30 focus:border-[#2764a8] transition-shadow"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Company"
                      className="block text-[13px] font-medium text-gray-700 mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="Company"
                      name="Company"
                      value={formData.Company}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#e1ecf6] rounded-lg px-4 py-3 text-[15px] text-[#0B1A2D] focus:outline-none focus:ring-2 focus:ring-[#2764a8]/30 focus:border-[#2764a8] transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="Contact"
                      className="block text-[13px] font-medium text-gray-700 mb-1.5"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="Contact"
                      name="Contact"
                      value={formData.Contact}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#e1ecf6] rounded-lg px-4 py-3 text-[15px] text-[#0B1A2D] focus:outline-none focus:ring-2 focus:ring-[#2764a8]/30 focus:border-[#2764a8] transition-shadow"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Email"
                      className="block text-[13px] font-medium text-gray-700 mb-1.5"
                    >
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#e1ecf6] rounded-lg px-4 py-3 text-[15px] text-[#0B1A2D] focus:outline-none focus:ring-2 focus:ring-[#2764a8]/30 focus:border-[#2764a8] transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="MonthlyEWB"
                    className="block text-[13px] font-medium text-gray-700 mb-1.5"
                  >
                    Monthly eWay Bills (Approx.)
                  </label>
                  <select
                    id="MonthlyEWB"
                    name="MonthlyEWB"
                    value={formData.MonthlyEWB}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#e1ecf6] rounded-lg px-4 py-3 text-[15px] text-[#0B1A2D] bg-white focus:outline-none focus:ring-2 focus:ring-[#2764a8]/30 focus:border-[#2764a8] transition-shadow cursor-pointer"
                  >
                    <option value="" disabled>
                      Select volume
                    </option>
                    {MONTHLY_EWB_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="Message"
                    className="block text-[13px] font-medium text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="Message"
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border border-[#e1ecf6] rounded-lg px-4 py-3 text-[15px] text-[#0B1A2D] focus:outline-none focus:ring-2 focus:ring-[#2764a8]/30 focus:border-[#2764a8] transition-shadow resize-none"
                  />
                </div>

                {status.type && (
                  <p
                    className={`text-sm font-medium ${status.type === "success" ? "text-green-600" : "text-red-500"}`}
                  >
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0557eb] hover:bg-[#0441b3] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-lg transition-colors duration-200 cursor-pointer text-[15px]"
                >
                  {isSubmitting ? "Sending..." : "Request a Demo"}
                </button>

                <p className="flex items-center justify-center gap-2 text-[12px] text-gray-400">
                  <Lock className="w-3.5 h-3.5" />
                  Your information is safe with us
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-20 bg-[#f0f7ff]/60">
        <div className="max-w-[1300px] mx-auto px-6 md:px-5">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#0B1A2D] text-center leading-tight mb-12 md:mb-14">
            Why Businesses Choose Sharkship eWayBill
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {CONTACT_WHY_CHOOSE.map((item, index) => {
              const Icon = WHY_ICONS[index];
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-[#e8eef5] shadow-sm p-6 text-center hover:shadow-md hover:border-[#d6e4fa] transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7ff] border border-[#d6e8f8] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-[#2764a8]" />
                  </div>
                  <div className="flex items-start justify-center gap-2 mb-2">
                    <Check
                      className="w-4 h-4 text-[#2764a8] mt-0.5 shrink-0"
                      strokeWidth={3}
                    />
                    <h3 className="text-[15px] font-bold text-[#0B1A2D] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-5">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#0B1A2D] text-center leading-tight mb-10 md:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {CONTACT_FAQ_PREVIEW.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? "border-[#2764a8]/30 shadow-[0_4px_16px_rgba(39,100,168,0.08)]"
                      : "border-[#e8eef5] shadow-sm hover:border-[#d6e4fa]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] md:text-[15px] font-semibold text-[#0B1A2D] leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#2764a8] text-white"
                          : "bg-[#f0f7ff] text-[#2764a8]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
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
                      <p className="px-5 pb-4 text-[14px] text-gray-500 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center mt-8">
            <Link
              href="/faq"
              className="text-[14px] font-semibold text-[#2764a8] hover:text-[#0441b3] transition-colors"
            >
              View all FAQs →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-[#fafbfc]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-5">
          <div className="rounded-2xl bg-gradient-to-r from-[#2764a8] to-[#0557eb] p-8 md:p-10 lg:p-12 overflow-hidden relative">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <AboutCTAIllustration />
              <div className="text-center lg:text-left">
                <h2 className="text-[26px] md:text-[32px] font-extrabold text-white leading-tight mb-3">
                  {CONTACT_FINAL_CTA.heading}
                </h2>
                <p className="text-[15px] text-white/85 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                  {CONTACT_FINAL_CTA.subheading}
                </p>
                <button
                  type="button"
                  onClick={handleScrollToForm}
                  className="inline-flex items-center gap-2 bg-white text-[#2764a8] hover:bg-[#f0f7ff] font-semibold py-3.5 px-7 rounded-lg transition-colors duration-200 cursor-pointer text-[15px]"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
