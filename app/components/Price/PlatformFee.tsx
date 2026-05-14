import React from 'react';

export default function PlatformFee() {
    return (
        <div className="bg-white border border-gray-100 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.05)] rounded-2xl p-8 md:p-10 mb-8">
            <h2 className="text-[22px] font-bold text-[#0B1A2D] mb-8">
                1. Platform Fee <span className="font-medium text-gray-500">(Base Plan)</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                {/* Left side pricing info */}
                <div className="lg:w-[35%] flex flex-col justify-between">
                    <div className="mb-8">
                        <div className="text-gray-400 line-through text-2xl font-medium mb-1">₹1,999</div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-[#2764a8] text-[52px] font-extrabold tracking-tight leading-none">₹499</span>
                            <span className="text-gray-600 font-medium text-lg">/ month</span>
                        </div>
                        <div className="bg-[#e6f7ec] text-[#00b087] font-bold text-sm px-4 py-1.5 rounded-full inline-block">
                            75% OFF
                        </div>
                    </div>
                    
                    <div className="space-y-6 pt-6 border-t border-gray-100">
                        <div className="flex gap-4">
                            <div className="w-5 shrink-0 mt-0.5">
                                <svg className="w-5 h-5 text-[#2764a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-[15px] text-[#0B1A2D] leading-tight mb-1">Scope</div>
                                <div className="text-[14px] text-gray-500 leading-tight">Per organisation</div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-5 shrink-0 mt-0.5">
                                <svg className="w-5 h-5 text-[#2764a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-[15px] text-[#0B1A2D] leading-tight mb-1">Billing Cycles</div>
                                <div className="text-[14px] text-gray-500 leading-tight">Quarterly • Half-yearly • Annual</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side table */}
                <div className="lg:w-[65%]">
                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#041d3d] text-white">
                                    <th className="py-4 px-6 font-semibold w-2/5 text-[15px]">Item</th>
                                    <th className="py-4 px-6 font-semibold w-3/5 text-[15px]">Value</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-[15px] bg-white">
                                <tr>
                                    <td className="py-5 px-6 font-semibold text-[#0B1A2D]">List price</td>
                                    <td className="py-5 px-6 text-gray-400 line-through">₹1,999 / month</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-6 font-semibold text-[#0B1A2D]">Discounted price</td>
                                    <td className="py-5 px-6 text-[#2764a8] font-bold">₹499 / month</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-6 font-semibold text-[#0B1A2D]">Discount</td>
                                    <td className="py-5 px-6 text-[#00b087] font-bold">75% off</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-6 font-semibold text-[#0B1A2D]">Scope</td>
                                    <td className="py-5 px-6 text-gray-600">Per organisation</td>
                                </tr>
                                <tr>
                                    <td className="py-5 px-6 font-semibold text-[#0B1A2D]">Billing cycles</td>
                                    <td className="py-5 px-6 text-gray-600">Quarterly • Half-yearly • Annual</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
