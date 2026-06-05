import React from 'react';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { BOOK_DEMO_HREF } from '../../data/routes';

export default function DemoCallout() {
    return (
        <div className="bg-[#f2f6ff] border border-[#d6e4fa] shadow-sm rounded-2xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="w-[60px] h-[60px] bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-[#d6e4fa]">
                    <Calendar className="w-8 h-8 text-[#0557eb]" />
                </div>
                <div>
                    <h3 className="font-bold text-[#0B1A2D] text-xl mb-1.5">Not sure which plan is right for you?</h3>
                    <p className="text-gray-600 text-[16px]">Book a free demo with our experts and we'll help you choose the best plan</p>
                </div>
            </div>

            <Link
                href={BOOK_DEMO_HREF}
                className="bg-[#0557eb] hover:bg-[#0441b3] text-white font-medium py-3.5 px-8 rounded-lg transition-colors whitespace-nowrap text-[16px]"
            >
                Book a Demo
            </Link>
        </div>
    )
}
