"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="w-full font-sans sticky top-0 z-[110] bg-white/80 backdrop-blur-md shadow-sm">
            {/* Top Banner - hidden below 1024px as requested */}
            <div className="hidden lg:flex w-full bg-[#2764a8] text-white items-center justify-center py-[10px] px-4 text-sm transition-all duration-300">
                <div className="flex items-center flex-wrap justify-center gap-[6px] text-[13px] tracking-wide max-w-[1400px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-[18px] h-[18px] mr-1 mt-[1px]"
                    >
                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                        <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                    </svg>
                    <span className="font-[400]">
                        Recharge ₹1,000 Today and Get ₹1,750* in Your Wallet! Use Code: GET750 | Limited Time Offer for First Recharge!* <Link href="#" className="underline font-[400] text-gray-100 hover:text-white ml-[2px]">T&C Apply.</Link>
                    </span>
                    <button className="bg-white text-black font-[600] text-[12px] leading-none rounded-full px-4 py-[6px] ml-2 hover:bg-gray-50 transition-colors">
                        Signup Now
                    </button>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="w-full bg-transparent border-b border-gray-200/50 h-[76px] flex items-center justify-between px-6 md:px-10 mx-auto relative z-[120]">
                {/* Logo - Stays intact at same position when menu is open */}
                <Link href="/" className="flex items-center shrink-0">
                    <Image
                        src="/shark_logo.svg"
                        alt="Sharkship Logo"
                        width={180}
                        height={50}
                        className="object-contain h-[45px] w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav Links - hidden below 768px */}
                <nav className="hidden md:flex items-center xl:gap-8 lg:gap-5 md:gap-4 text-[#333] text-[14px] lg:text-[15px] ml-auto lg:ml-0 mr-6 lg:mr-0">
                    <Link href="#" className="flex items-center gap-1 hover:text-[#2764a8] transition-colors leading-normal group">
                        Features
                        <svg className="w-[14px] h-[14px] text-gray-500 group-hover:text-[#2764a8] mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </Link>
                    <Link href="#" className="hover:text-[#2764a8] transition-colors leading-normal">
                        Pricing
                    </Link>
                    <Link href="#" className="flex items-center gap-1 hover:text-[#2764a8] transition-colors leading-normal group">
                        Partners
                        <svg className="w-[14px] h-[14px] text-gray-500 group-hover:text-[#2764a8] mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </Link>
                    <Link href="#" className="hover:text-[#2764a8] transition-colors leading-normal">
                        Track Order
                    </Link>
                    <Link href="#" className="flex items-center gap-1 hover:text-[#2764a8] transition-colors leading-normal group">
                        Resources
                        <svg className="w-[14px] h-[14px] text-gray-500 group-hover:text-[#2764a8] mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </Link>
                    <Link href="#" className="flex items-center gap-1 hover:text-[#2764a8] transition-colors leading-normal group">
                        Company
                        <svg className="w-[14px] h-[14px] text-gray-500 group-hover:text-[#2764a8] mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </Link>
                </nav>

                {/* Desktop Buttons - hidden below 1024px */}
                <div className="hidden lg:flex items-center gap-[14px] shrink-0">
                    <Link
                        href="#"
                        className="group flex items-center justify-center bg-white border border-[#a1c1ec] text-gray-900 font-[500] text-[14px] px-[22px] py-[8px] rounded-md hover:bg-[#ebf4fc] hover:border-[#8dafe2] transition-all duration-300"
                    >
                        <span>Login</span>
                        <svg className="w-0 h-[16px] text-[#2c5eb3] opacity-0 overflow-hidden group-hover:w-[16px] group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link
                        href="#"
                        className="group flex items-center justify-center bg-gradient-to-r from-[#2177be] to-[#51c4f5] text-white font-[500] text-[14px] px-[22px] py-[9px] rounded-md shadow-[0_2px_4px_rgba(33,119,190,0.15)] hover:opacity-90 transition-all duration-300 whitespace-nowrap"
                    >
                        <span>Try For Free</span>
                        <svg className="w-0 h-[16px] text-white opacity-0 overflow-hidden group-hover:w-[16px] group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="lg:hidden p-2 text-black transition-transform"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-[28px] h-[28px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* 3 stacked lines styling matching standard hamburger */}
                            <path d="M4 7H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 17H16" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Accordion Menu */}
            {isMobileMenuOpen && (
                <div className="fixed top-[76px] left-0 w-full h-[calc(100vh-76px)] bg-white z-[105] overflow-y-auto flex flex-col px-6 py-5 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">

                    <div className="text-black font-semibold text-[17px] mb-5 tracking-wide">
                        Get Started
                    </div>

                    <div className="flex justify-center gap-6 mb-8 w-full">
                        <Link
                            href="#"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="group flex items-center justify-center bg-white border-[1.5px] border-[#a1c1ec] text-[#111] font-[500] text-[15px] px-[26px] py-[10px] rounded-[6px] hover:bg-[#ebf4fc] hover:border-[#8dafe2] transition-all duration-300 shadow-sm"
                        >
                            <span>Login</span>
                            <svg className="w-0 h-[17px] text-[#2c5eb3] opacity-0 overflow-hidden group-hover:w-[17px] group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="#"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="group flex items-center justify-center bg-[#2a7ebd] text-white font-[500] text-[15px] px-[26px] py-[10px] rounded-[6px] shadow-sm hover:opacity-90 transition-all duration-300"
                        >
                            <span>Try For Free</span>
                            <svg className="w-0 h-[17px] text-white opacity-0 overflow-hidden group-hover:w-[17px] group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="text-black font-semibold text-[17px] mb-5 tracking-wide">
                        Browse
                    </div>

                    <nav className="flex flex-col gap-[14px] text-[#111] text-[16px] pb-[20px]">
                        <div className="group w-full flex items-center justify-between font-[400] cursor-pointer px-[16px] py-[12px] rounded-[6px] transition-all duration-200 hover:bg-[#1f59a6] hover:text-white active:scale-[0.98]">
                            <span>Features</span>
                            <svg className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <div className="group w-full flex items-center justify-between font-[400] cursor-pointer px-[16px] py-[12px] rounded-[6px] transition-all duration-200 hover:bg-[#1f59a6] hover:text-white active:scale-[0.98]">
                            <span>Pricing</span>
                        </div>
                        <div className="group w-full flex items-center justify-between font-[400] cursor-pointer px-[16px] py-[12px] rounded-[6px] transition-all duration-200 hover:bg-[#1f59a6] hover:text-white active:scale-[0.98]">
                            <span>Integrations</span>
                            <svg className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <div className="group w-full flex items-center justify-between font-[400] cursor-pointer px-[16px] py-[12px] rounded-[6px] transition-all duration-200 hover:bg-[#1f59a6] hover:text-white active:scale-[0.98]">
                            <span>Order Tracking</span>
                        </div>
                        <div className="group w-full flex items-center justify-between font-[400] cursor-pointer px-[16px] py-[12px] rounded-[6px] transition-all duration-200 hover:bg-[#1f59a6] hover:text-white active:scale-[0.98]">
                            <span>Knowledge Hub</span>
                            <svg className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <div className="group w-full flex items-center justify-between font-[400] cursor-pointer px-[16px] py-[12px] rounded-[6px] transition-all duration-200 hover:bg-[#1f59a6] hover:text-white active:scale-[0.98]">
                            <span>Organization</span>
                            <svg className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </nav>

                    {/* Social media footer */}
                    <div className="mt-auto pt-10 pb-[20px] flex justify-end gap-[10px]">
                        {/* FB */}
                        <a href="https://www.facebook.com/people/Sharkship/61585188826964/" target="_blank" rel="noopener noreferrer" className="w-[26px] h-[26px] rounded bg-[#1877F2] flex items-center justify-center text-white transition-opacity hover:opacity-80">
                            <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        {/* Insta */}
                        <a href="https://www.instagram.com/sharkshipindia/" target="_blank" rel="noopener noreferrer" className="w-[26px] h-[26px] rounded bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white transition-opacity hover:opacity-80">
                            <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="https://x.com/Sharkship_india" target="_blank" rel="noopener noreferrer" className="w-[26px] h-[26px] rounded bg-black flex items-center justify-center text-white transition-opacity hover:opacity-80">
                            <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        {/* Youtube */}
                        <a href="https://www.youtube.com/oops" target="_blank" rel="noopener noreferrer" className="w-[26px] h-[26px] rounded bg-[#FF0000] flex items-center justify-center text-white transition-opacity hover:opacity-80">
                            <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/sharkshipz/" target="_blank" rel="noopener noreferrer" className="w-[26px] h-[26px] rounded bg-[#0A66C2] flex items-center justify-center text-white transition-opacity hover:opacity-80">
                            <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}
