import React from 'react';

export default function BillingTotals() {
    return (
        <div className="bg-white border border-gray-100 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.05)] rounded-2xl p-8 md:p-10 mb-8">
            <h2 className="text-[22px] font-bold text-[#0B1A2D] mb-8">
                2. Billing Cycle Totals <span className="font-medium text-gray-500">(Platform Fee Only)</span>
            </h2>
            
            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-[#0557eb] text-white">
                                <th className="py-4 px-6 font-medium text-[15px]">Cycle</th>
                                <th className="py-4 px-6 font-medium text-[15px]">Months</th>
                                <th className="py-4 px-6 font-medium text-[15px]">You Pay</th>
                                <th className="py-4 px-6 font-medium text-[15px]">List Price (Struck Through)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-[15px] bg-white">
                            <tr>
                                <td className="py-5 px-6 font-bold text-[#0B1A2D]">Quarterly</td>
                                <td className="py-5 px-6 text-gray-600">3</td>
                                <td className="py-5 px-6 text-[#2764a8] font-bold text-lg">₹1,497</td>
                                <td className="py-5 px-6 text-gray-400 line-through">₹5,997</td>
                            </tr>
                            <tr>
                                <td className="py-5 px-6 font-bold text-[#0B1A2D]">Half-yearly</td>
                                <td className="py-5 px-6 text-gray-600">6</td>
                                <td className="py-5 px-6 text-[#2764a8] font-bold text-lg">₹2,994</td>
                                <td className="py-5 px-6 text-gray-400 line-through">₹11,994</td>
                            </tr>
                            <tr>
                                <td className="py-5 px-6 font-bold text-[#0B1A2D]">Annual</td>
                                <td className="py-5 px-6 text-gray-600">12</td>
                                <td className="py-5 px-6 text-[#2764a8] font-bold text-lg">₹5,988</td>
                                <td className="py-5 px-6 text-gray-400 line-through">₹23,988</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
