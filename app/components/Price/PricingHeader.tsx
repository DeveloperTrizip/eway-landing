import React from 'react';
import { Tag, ShieldCheck, Clock, HeadphonesIcon } from 'lucide-react';

const features = [
    { icon: <Tag className="w-6 h-6 text-[#2764a8]" />, title: "Transparent Pricing", desc: "No hidden fees" },
    { icon: <ShieldCheck className="w-6 h-6 text-[#2764a8]" />, title: "Enterprise Grade", desc: "Security" },
    { icon: <Clock className="w-6 h-6 text-[#2764a8]" />, title: "Save Time & Money", desc: "Automate EWB operations" },
    { icon: <HeadphonesIcon className="w-6 h-6 text-[#2764a8]" />, title: "Priority Support", desc: "When you need it" },
];

export default function PricingHeader() {
    return (
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
            <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 opacity-10 pointer-events-none hidden md:block">
                {/* Decorative dots left */}
                <div className="w-32 h-32 grid grid-cols-4 gap-3">
                    {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-[#2764a8] rounded-full"></div>)}
                </div>
            </div>
            
            <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 opacity-10 pointer-events-none hidden md:block">
                {/* Decorative dots right */}
                <div className="w-32 h-32 grid grid-cols-4 gap-3">
                    {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-[#2764a8] rounded-full"></div>)}
                </div>
            </div>

            <span className="text-[#2764a8] font-bold tracking-wider uppercase text-sm mb-4 block">PRICING</span>
            <h1 className="text-[40px] md:text-[56px] font-extrabold text-[#0B1A2D] leading-[1.2] mb-6 tracking-tight">
                Simple, Transparent &<br />
                Built for Businesses of <span className="text-[#2764a8]">All Sizes</span>
            </h1>
            <p className="text-[18px] text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
                Choose the plan that fits your organisation and pay only for what you use.<br />
                No hidden charges. No surprises.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {features.map((f, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="w-[72px] h-[72px] rounded-full bg-[#f0f5fa] flex items-center justify-center mb-5 border border-[#e1ecf6]">
                            {f.icon}
                        </div>
                        <h3 className="font-bold text-[#2764a8] mb-1">{f.title}</h3>
                        <p className="text-[13px] text-gray-500">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
