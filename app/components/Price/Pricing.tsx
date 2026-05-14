import React from 'react';
import PricingHeader from './PricingHeader';
import PlatformFee from './PlatformFee';
import BillingTotals from './BillingTotals';
import UsageRate from './UsageRate';
import DemoCallout from './DemoCallout';

export default function Pricing() {
    return (
        <div className="pt-32 pb-20 bg-[#fafbfc]">
            <div className="max-w-[1000px] mx-auto px-6 md:px-5">
                <PricingHeader />
                <PlatformFee />
                <BillingTotals />
                <UsageRate />
                <DemoCallout />
            </div>
        </div>
    )
}
