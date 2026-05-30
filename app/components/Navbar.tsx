"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Truck,
    FileSpreadsheet,
    Clock,
    LayoutDashboard,
    MousePointerClick,
    BellRing,
    RefreshCcw,
    ShieldCheck,
    Building2,
    FileText,
    ChevronDown,
    ArrowRight,
    Phone,
    Users
} from 'lucide-react';

const features = [
    {
        title: "Auto-Extension for Warehouse EWBs",
        description: "Assign once. We extend automatically.",
        icon: <Truck className="w-5 h-5 text-[#2764a8]" />
    },
    {
        title: "Bulk EWB actions via Excel",
        description: "Extend or update hundreds of EWBs in one go.",
        icon: <FileSpreadsheet className="w-5 h-5 text-[#2764a8]" />
    },
    {
        title: "Pre-schedule before deadline",
        description: "Queue your extensions up to 4 hours early.",
        icon: <Clock className="w-5 h-5 text-[#2764a8]" />
    },
    {
        title: "Unified Real-Time Dashboard",
        description: "Every EWB across all your GSTINs in one view.",
        icon: <LayoutDashboard className="w-5 h-5 text-[#2764a8]" />
    },
    {
        title: "One-Click Bulk Extensions",
        description: "Select all expiring EWBs and extend them together.",
        icon: <MousePointerClick className="w-5 h-5 text-[#2764a8]" />
    },
    {
        title: "Automated Expiry Alerts",
        description: "Get notified before an EWB expires",
        icon: <BellRing className="w-5 h-5 text-[#2764a8]" />
    },
    {
        title: "Part-B Updates & Consolidations",
        description: "Handle transporter assignments and EWB consolidations",
        icon: <RefreshCcw className="w-5 h-5 text-[#2764a8]" />
    },
    {
        title: "Role-Based Access Control",
        description: "Assign specific EWBs to specific team members.",
        icon: <ShieldCheck className="w-5 h-5 text-[#2764a8]" />
    },
    {
        title: "Multi-GSTIN Management",
        description: "Manage EWBs across multiple entities and GSTINs",
        icon: <Building2 className="w-5 h-5 text-[#2764a8]" />
    },
    {
        title: "One-Click Reporting",
        description: "Download EWB status reports instantly",
        icon: <FileText className="w-5 h-5 text-[#2764a8]" />
    }
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
    const [isMobileHubOpen, setIsMobileHubOpen] = useState(false);
    const [isMobileOrgOpen, setIsMobileOrgOpen] = useState(false);
    const featuresRef = useRef<HTMLDivElement>(null);
    const hubRef = useRef<HTMLDivElement>(null);
    const orgRef = useRef<HTMLDivElement>(null);

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

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                (featuresRef.current && !featuresRef.current.contains(event.target as Node)) &&
                (hubRef.current && !hubRef.current.contains(event.target as Node)) &&
                (orgRef.current && !orgRef.current.contains(event.target as Node))
            ) {
                setActiveDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="w-full font-sans sticky top-0 z-[110] bg-white shadow-sm border-b border-gray-100">


            {/* Main Navbar */}
            <div className="w-full bg-white h-[76px] flex items-center justify-between px-10 md:px-32 mx-auto relative z-[120]">
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <Image
                        src="/Sharkship_eWay.svg"
                        alt="Sharkship Logo"
                        width={180}
                        height={50}
                        className="object-contain h-[42px]"
                        style={{ width: 'auto' }}
                        priority
                    />
                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden lg:flex items-center xl:gap-8 lg:gap-6 text-[#1a1a1a] text-[14.5px] ml-auto mr-16 font-[500]">
                    {/* Features */}
                    <div
                        className="relative py-6 cursor-pointer"
                        ref={featuresRef}
                        onClick={() => setActiveDropdown(activeDropdown === 'features' ? null : 'features')}
                    >
                        <button
                            type="button"
                            className={`flex items-center gap-1 transition-colors leading-normal ${activeDropdown === 'features' ? 'text-[#2764a8]' : 'hover:text-[#2764a8]'}`}
                        >
                            Features
                            <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
                        </button>

                        {activeDropdown === 'features' && (
                            <div
                                className="absolute top-[100%] left-[-190px] w-[560px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="px-6 py-5">
                                    <p className="text-[10.5px] uppercase tracking-[0.05em] text-gray-400 font-medium mb-3.5 whitespace-nowrap">
                                        Discover All Features That Simplify Shipping!
                                    </p>

                                    <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                                        {features.map((feature, idx) => (
                                            <Link
                                                key={idx}
                                                href="#"
                                                className="flex items-start gap-3 group/item p-2.5 rounded-2xl hover:bg-blue-50/50 transition-all"
                                                onClick={() => setActiveDropdown(null)}
                                            >
                                                <div className="mt-0.5 shrink-0">
                                                    {feature.icon}
                                                </div>
                                                <div className="flex flex-col">
                                                    <h4 className="text-[12.5px] font-medium text-[#1a1a1a] group-hover/item:text-[#2764a8] transition-colors leading-tight">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-[10.5px] text-gray-400 leading-snug mt-0.5 font-normal">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        )}
                    </div>

                    <Link href="/pricing" className="hover:text-[#2764a8] transition-colors leading-normal">
                        Pricing
                    </Link>

                    {/* Knowledge Hub */}
                    <div
                        className="relative py-6 cursor-pointer"
                        ref={hubRef}
                        onClick={() => setActiveDropdown(activeDropdown === 'hub' ? null : 'hub')}
                    >
                        <button
                            type="button"
                            className={`flex items-center gap-1 transition-colors leading-normal ${activeDropdown === 'hub' ? 'text-[#2764a8]' : 'hover:text-[#2764a8]'}`}
                        >
                            Knowledge Hub
                            <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${activeDropdown === 'hub' ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === 'hub' && (
                            <div
                                className="absolute top-[100%] left-[-150px] w-[520px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="px-6 py-5">
                                    <p className="text-[10.5px] uppercase tracking-[0.05em] text-gray-400 font-medium mb-3.5 whitespace-nowrap">
                                        Learn How To Scale Your Shipping
                                    </p>

                                    <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                                        <div className="flex items-start gap-3.5 p-3.5 rounded-2xl">
                                            <div className="mt-1 shrink-0">
                                                <FileText className="w-4.5 h-4.5 text-[#2764a8]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-[12.5px] font-medium text-gray-900 leading-tight">Blog</h4>
                                                <p className="text-[10.5px] text-gray-400 mt-1 font-normal leading-tight">Read the latest news, guides and industry updates.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3.5 p-3.5 rounded-2xl">
                                            <div className="mt-1 shrink-0">
                                                <ShieldCheck className="w-4.5 h-4.5 text-[#2764a8]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-[12.5px] font-medium text-gray-900 leading-tight">FAQ&apos;s</h4>
                                                <p className="text-[10.5px] text-gray-400 mt-1 font-normal leading-tight">Find answers to common questions about our platform.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50/50 border border-dashed border-gray-200 opacity-60">
                                            <div className="mt-1 shrink-0">
                                                <Clock className="w-4.5 h-4.5 text-gray-400" />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="text-[12.5px] font-medium text-gray-900">Tutorials</h4>
                                                    <span className="text-[8px] bg-blue-100 text-[#2764a8] px-1.5 py-0.5 rounded-full font-medium uppercase">Soon</span>
                                                </div>
                                                <p className="text-[10.5px] text-gray-400 mt-1 font-normal leading-tight">Step-by-step video guides for our platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Organization */}
                    <div
                        className="relative py-6 cursor-pointer"
                        ref={orgRef}
                        onClick={() => setActiveDropdown(activeDropdown === 'org' ? null : 'org')}
                    >
                        <button
                            type="button"
                            className={`flex items-center gap-1 transition-colors leading-normal ${activeDropdown === 'org' ? 'text-[#2764a8]' : 'hover:text-[#2764a8]'}`}
                        >
                            Organization
                            <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${activeDropdown === 'org' ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === 'org' && (
                            <div
                                className="absolute top-[100%] left-[-150px] w-[520px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="px-6 py-5">
                                    <p className="text-[10.5px] uppercase tracking-[0.05em] text-gray-400 font-medium mb-3.5 whitespace-nowrap">
                                        Explore Our Full Company Information!
                                    </p>

                                    <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                                        <Link href="#" className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-blue-50/50 transition-all group/item" onClick={() => setActiveDropdown(null)}>
                                            <div className="mt-1 shrink-0">
                                                <Users className="w-4.5 h-4.5 text-[#2764a8]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-[12.5px] font-medium text-gray-900 group-hover/item:text-[#2764a8] transition-colors leading-tight">About Us</h4>
                                                <p className="text-[10.5px] text-gray-400 mt-1 font-normal leading-tight">Sharkship is more than just a deliver...</p>
                                            </div>
                                        </Link>

                                        <Link href="#" className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-blue-50/50 transition-all group/item" onClick={() => setActiveDropdown(null)}>
                                            <div className="mt-1 shrink-0">
                                                <Phone className="w-4.5 h-4.5 text-[#2764a8]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-[12.5px] font-medium text-gray-900 group-hover/item:text-[#2764a8] transition-colors leading-tight">Contact Us</h4>
                                                <p className="text-[10.5px] text-gray-400 mt-1 font-normal leading-tight">Have a question? We&apos;d love to hear...</p>
                                            </div>
                                        </Link>

                                        <Link href="/privacy-policy" className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-blue-50/50 transition-all group/item" onClick={() => setActiveDropdown(null)}>
                                            <div className="mt-1 shrink-0">
                                                <ShieldCheck className="w-4.5 h-4.5 text-[#2764a8]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-[12.5px] font-medium text-gray-900 group-hover/item:text-[#2764a8] transition-colors leading-tight">Privacy Policy</h4>
                                                <p className="text-[10.5px] text-gray-400 mt-1 font-normal leading-tight">We are committed to protecting you...</p>
                                            </div>
                                        </Link>

                                        <Link href="/privacy-policy#terms-conditions" className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-blue-50/50 transition-all group/item" onClick={() => setActiveDropdown(null)}>
                                            <div className="mt-1 shrink-0">
                                                <FileText className="w-4.5 h-4.5 text-[#2764a8]" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-[12.5px] font-medium text-gray-900 group-hover/item:text-[#2764a8] transition-colors leading-tight">Terms &amp; Conditions</h4>
                                                <p className="text-[10.5px] text-gray-400 mt-1 font-normal leading-tight">Read our terms and conditions.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-3 shrink-0">
                    <a
                        href="https://ewb.sharkship.in/#/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-gray-100 text-gray-800 font-bold text-[13px] px-5 py-2 rounded-lg hover:bg-blue-50/50 transition-all duration-200"
                    >
                        Login
                    </a>
                    <a
                        href="https://ewb.sharkship.in/#/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#2764a8] text-white font-bold text-[13px] px-5 py-2 rounded-lg shadow-sm hover:bg-[#1e4f8a] transition-all duration-200 whitespace-nowrap"
                    >
                        Sign up
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="lg:hidden p-2 text-black transition-transform"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7H20" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M4 12H20" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M4 17H14" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Accordion Menu */}
            {isMobileMenuOpen && (
                <div className="fixed top-[76px] left-0 w-full h-[calc(100vh-76px)] bg-white z-[105] overflow-y-auto flex flex-col px-6 py-6 lg:hidden animate-in fade-in slide-in-from-top-2 duration-300">

                    <div className="text-gray-400 font-bold text-[10.5px] uppercase tracking-[0.05em] mb-5">
                        Get Started
                    </div>

                    <div className="flex flex-col gap-3 mb-8 w-full">
                        <a
                            href="https://ewb.sharkship.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full flex items-center justify-center bg-white border border-gray-100 text-gray-800 font-bold text-[15px] py-3 rounded-xl shadow-sm transition-all active:scale-[0.98]"
                        >
                            <span>Login</span>
                        </a>
                        <a
                            href="https://ewb.sharkship.in/#/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full flex items-center justify-center bg-[#2764a8] text-white font-bold text-[15px] py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
                        >
                            <span>Sign up</span>
                        </a>
                    </div>

                    <div className="text-gray-400 font-bold text-[10.5px] uppercase tracking-[0.05em] mb-5">
                        Navigation
                    </div>

                    <nav className="flex flex-col gap-1 text-[#1a1a1a] text-[15px] pb-10">
                        {/* Features Accordion Mobile */}
                        <div className="w-full">
                            <div
                                onClick={() => setIsMobileFeaturesOpen(!isMobileFeaturesOpen)}
                                className={`w-full flex items-center justify-between font-bold cursor-pointer px-4 py-3 rounded-xl transition-all duration-200 ${isMobileFeaturesOpen ? 'bg-blue-50/50 text-[#2764a8]' : 'hover:bg-blue-50/50'}`}
                            >
                                <span>Features</span>
                                <ChevronDown className={`w-4.5 h-4.5 transition-transform duration-200 ${isMobileFeaturesOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {isMobileFeaturesOpen && (
                                <div className="mt-2 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-300">
                                    {features.map((feature, idx) => (
                                        <Link
                                            key={idx}
                                            href="#"
                                            className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-blue-50/50 transition-colors"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setIsMobileFeaturesOpen(false);
                                            }}
                                        >
                                            <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-lg shrink-0">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">{feature.title}</h4>
                                                <p className="text-[11.5px] text-gray-400 mt-1 font-normal leading-tight">{feature.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/pricing" className="w-full flex items-center justify-between font-bold px-4 py-3 rounded-xl hover:bg-blue-50/50 transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                            <span>Pricing</span>
                        </Link>

                        {/* Knowledge Hub Accordion Mobile */}
                        <div className="w-full">
                            <div
                                onClick={() => setIsMobileHubOpen(!isMobileHubOpen)}
                                className={`w-full flex items-center justify-between font-bold cursor-pointer px-4 py-3 rounded-xl transition-all duration-200 ${isMobileHubOpen ? 'bg-blue-50/50 text-[#2764a8]' : 'hover:bg-blue-50/50'}`}
                            >
                                <span>Knowledge Hub</span>
                                <ChevronDown className={`w-4.5 h-4.5 transition-transform duration-200 ${isMobileHubOpen ? 'rotate-180' : 'text-gray-300'}`} />
                            </div>

                            {isMobileHubOpen && (
                                <div className="mt-2 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-300">
                                    <div className="flex items-start gap-4 p-3.5 rounded-xl">
                                        <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-lg shrink-0">
                                            <FileText className="w-5 h-5 text-[#2764a8]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">Blog</h4>
                                            <p className="text-[11.5px] text-gray-400 mt-1 font-normal leading-tight">Read the latest news, guides and industry updates.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-3.5 rounded-xl">
                                        <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-lg shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-[#2764a8]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">FAQ's</h4>
                                            <p className="text-[11.5px] text-gray-400 mt-1 font-normal leading-tight">Find answers to common questions about our platform.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-3.5 rounded-xl bg-gray-50/50 border border-dashed border-gray-200 opacity-60">
                                        <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-lg shrink-0">
                                            <Clock className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">Tutorials</h4>
                                                <span className="text-[8px] bg-blue-100 text-[#2764a8] px-1.5 py-0.5 rounded-full font-medium uppercase">Soon</span>
                                            </div>
                                            <p className="text-[11.5px] text-gray-400 mt-1 font-normal leading-tight">Step-by-step video guides for our platform.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Organization Accordion Mobile */}
                        <div className="w-full">
                            <div
                                onClick={() => setIsMobileOrgOpen(!isMobileOrgOpen)}
                                className={`w-full flex items-center justify-between font-bold cursor-pointer px-4 py-3 rounded-xl transition-all duration-200 ${isMobileOrgOpen ? 'bg-blue-50/50 text-[#2764a8]' : 'hover:bg-blue-50/50'}`}
                            >
                                <span>Organization</span>
                                <ChevronDown className={`w-4.5 h-4.5 transition-transform duration-200 ${isMobileOrgOpen ? 'rotate-180' : 'text-gray-300'}`} />
                            </div>

                            {isMobileOrgOpen && (
                                <div className="mt-2 flex flex-col gap-1 animate-in slide-in-from-top-2 duration-300">
                                    <Link href="#" className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-blue-50/50 transition-colors" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOrgOpen(false); }}>
                                        <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-lg shrink-0">
                                            <Users className="w-5 h-5 text-[#2764a8]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">About Us</h4>
                                            <p className="text-[11.5px] text-gray-400 mt-1 font-normal leading-tight">Sharkship is more than just a deliver...</p>
                                        </div>
                                    </Link>
                                    <Link href="#" className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-blue-50/50 transition-colors" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOrgOpen(false); }}>
                                        <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-lg shrink-0">
                                            <Phone className="w-5 h-5 text-[#2764a8]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">Contact Us</h4>
                                            <p className="text-[11.5px] text-gray-400 mt-1 font-normal leading-tight">Have a question? We'd love to hear...</p>
                                        </div>
                                    </Link>
                                    <Link href="/privacy-policy" className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-blue-50/50 transition-colors" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOrgOpen(false); }}>
                                        <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-lg shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-[#2764a8]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">Privacy Policy</h4>
                                            <p className="text-[11.5px] text-gray-400 mt-1 font-normal leading-tight">We are committed to protecting you...</p>
                                        </div>
                                    </Link>
                                    <Link href="/privacy-policy#terms-conditions" className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-blue-50/50 transition-colors" onClick={() => { setIsMobileMenuOpen(false); setIsMobileOrgOpen(false); }}>
                                        <div className="p-2.5 bg-white shadow-sm border border-gray-100 rounded-lg shrink-0">
                                            <FileText className="w-5 h-5 text-[#2764a8]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">Terms & Conditions</h4>
                                            <p className="text-[11.5px] text-gray-400 mt-1 font-normal leading-tight">Read our terms and conditions.</p>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Social media footer */}
                    <div className="mt-auto pt-8 border-t border-gray-50 flex flex-col items-center gap-4">
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/people/Sharkship/61585188826964/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#1877F2] flex items-center justify-center text-white shadow-sm transition-transform active:scale-90">
                                <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/sharkshipindia/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-sm transition-transform active:scale-90">
                                <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a href="https://x.com/Sharkship_india" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-black flex items-center justify-center text-white shadow-sm transition-transform active:scale-90">
                                <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-[11px] text-gray-400 font-medium pb-4">© 2026 Sharkship. All rights reserved.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
