import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function UsageRate() {
    return (
        <div className="bg-[#f0f9f4] border border-[#d3ecd9] shadow-sm rounded-2xl p-8 md:p-10 mb-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6 md:w-[45%]">
                <div className="w-[84px] h-[84px] bg-[#d3ecd9] rounded-2xl flex items-center justify-center shrink-0">
                    <FileText className="w-10 h-10 text-[#00b087]" />
                </div>
                <div>
                    <h2 className="text-[20px] font-bold text-[#0B1A2D] mb-1">3. EWB Usage Rate</h2>
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-[#00b087] text-[36px] font-extrabold tracking-tight">₹0.25</span>
                        <span className="text-gray-600 font-medium">/ ewb</span>
                    </div>
                    <div className="text-[15px] text-gray-700 font-medium">Recharged using Topup</div>
                </div>
            </div>

            <div className="md:w-[55%] md:border-l border-[#c4e5cf] md:pl-10">
                <h3 className="font-bold text-[#0B1A2D] text-[17px] mb-4">How it works?</h3>
                <ul className="space-y-3.5">
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-[22px] h-[22px] text-[#00b087] shrink-0" />
                        <span className="text-gray-700 text-[16px] font-medium">Add money to your wallet (Topup)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-[22px] h-[22px] text-[#00b087] shrink-0" />
                        <span className="text-gray-700 text-[16px] font-medium">Pay ₹0.25 for every eWay Bill generated</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
