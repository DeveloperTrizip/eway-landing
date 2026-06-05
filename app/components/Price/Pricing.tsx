import Link from "next/link";
import { BOOK_DEMO_HREF } from "../../data/routes";
import {
    ArrowRight,
    BellRing,
    Building2,
    CheckCircle2,
    Clock3,
    FileSpreadsheet,
    LayoutDashboard,
    ShieldCheck,
    Wallet,
} from "lucide-react";

const billingCycles = [
    {
        name: "Quarterly",
        months: "3 months",
        pay: "Rs 1,497",
        listPrice: "Rs 5,997",
    },
    {
        name: "Half-yearly",
        months: "6 months",
        pay: "Rs 2,994",
        listPrice: "Rs 11,994",
    },
    {
        name: "Annual",
        months: "12 months",
        pay: "Rs 5,988",
        listPrice: "Rs 23,988",
    },
];

const includedFeatures = [
    {
        title: "Warehouse auto-extension",
        description: "Set recurring rules for routes and warehouses that regularly need validity extensions.",
        icon: Clock3,
    },
    {
        title: "Bulk actions from Excel",
        description: "Update, extend, and manage large E-Way Bill batches without doing one record at a time.",
        icon: FileSpreadsheet,
    },
    {
        title: "Unified dashboard",
        description: "Track expiring, extended, and active E-Way Bills from one operational screen.",
        icon: LayoutDashboard,
    },
    {
        title: "Multi-GSTIN visibility",
        description: "Operate across entities and teams without splitting your workflow into separate tools.",
        icon: Building2,
    },
    {
        title: "Expiry alerts and follow-ups",
        description: "Get ahead of delays before they become compliance or delivery issues.",
        icon: BellRing,
    },
    {
        title: "Role-based team access",
        description: "Keep dispatch, compliance, and operations aligned without exposing everything to everyone.",
        icon: ShieldCheck,
    },
];

const pricingPoints = [
    "One platform fee per organisation",
    "Usage billed only on E-Way Bills generated",
    "Recharge usage through wallet top-up",
    "Quarterly, half-yearly, and annual billing cycles",
];

export default function Pricing() {
    return (
        <section className="bg-[#f5f8fc] pt-14 pb-24">
            <div className="mx-auto max-w-[1180px] px-6 md:px-8">
                <div className="mb-8 overflow-hidden rounded-[32px] border border-[#dbe5f1] bg-white shadow-[0_20px_60px_rgba(12,32,62,0.06)]">
                    <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="p-8 md:p-12">
                            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2b8ed2]">
                                Pricing
                            </p>
                            <h1 className="max-w-[700px] text-[36px] font-bold leading-[1.1] text-[#10233e] md:text-[54px]">
                                Clear pricing for teams that run E-Way Bill operations every day.
                            </h1>
                            <p className="mt-5 max-w-[640px] text-[16px] leading-7 text-[#53657d] md:text-[18px]">
                                No decorative plan maze, no fake enterprise tiers. You pay one discounted platform fee for the
                                organisation, then a simple per E-Way Bill usage charge through top-up.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {pricingPoints.map((point) => (
                                    <span
                                        key={point}
                                        className="rounded-full border border-[#d9e6f4] bg-[#f8fbff] px-4 py-2 text-[13px] font-medium text-[#204266]"
                                    >
                                        {point}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[linear-gradient(180deg,#123968_0%,#0b2546_100%)] p-8 text-white md:p-12">
                            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/85">
                                Launch offer
                            </div>
                            <div className="mt-8">
                                <p className="text-[14px] font-medium text-white/70">Platform access</p>
                                <div className="mt-3 flex items-end gap-3">
                                    <span className="text-[54px] font-bold leading-none">Rs 499</span>
                                    <span className="pb-1 text-[17px] font-medium text-white/72">/ month</span>
                                </div>
                                <div className="mt-3 flex items-center gap-3">
                                    <span className="text-[18px] text-white/40 line-through">Rs 1,999</span>
                                    <span className="rounded-full bg-[#1dd1a1]/15 px-3 py-1 text-[13px] font-semibold text-[#8bf0cf]">
                                        75% off
                                    </span>
                                </div>
                            </div>

                            <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
                                <div className="flex items-start gap-3">
                                    <Wallet className="mt-0.5 h-5 w-5 shrink-0 text-[#8fd1ff]" />
                                    <div>
                                        <p className="font-semibold">Usage rate</p>
                                        <p className="text-[14px] leading-6 text-white/72">Rs 0.25 per E-Way Bill generated, billed from top-up balance.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8fd1ff]" />
                                    <div>
                                        <p className="font-semibold">Billing scope</p>
                                        <p className="text-[14px] leading-6 text-white/72">One organisation account with access to the core E-Way Bill operating stack.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#8fd1ff]" />
                                    <div>
                                        <p className="font-semibold">Billing cycles</p>
                                        <p className="text-[14px] leading-6 text-white/72">Quarterly, half-yearly, or annual commitments depending on your buying preference.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[28px] border border-[#dbe5f1] bg-white p-8 shadow-[0_14px_40px_rgba(12,32,62,0.05)] md:p-10">
                        <div className="mb-8 flex items-start justify-between gap-6">
                            <div>
                                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2b8ed2]">What is included</p>
                                <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#10233e]">
                                    Built for dispatch, compliance, and operations teams.
                                </h2>
                            </div>
                            <div className="hidden min-w-[190px] rounded-2xl bg-[#eef6ff] px-5 py-4 text-left md:block">
                                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#2b8ed2]">Simple model</div>
                                <div className="mt-1 text-[15px] font-medium leading-6 text-[#204266]">Platform fee + usage</div>
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            {includedFeatures.map(({ title, description, icon: Icon }) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-[#e5edf6] bg-[#fbfdff] p-5"
                                >
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf4ff]">
                                        <Icon className="h-5 w-5 text-[#2764a8]" />
                                    </div>
                                    <h3 className="text-[16px] font-semibold text-[#10233e]">{title}</h3>
                                    <p className="mt-2 text-[14px] leading-6 text-[#5b6d84]">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="rounded-[28px] border border-[#dbe5f1] bg-[#f7fbff] p-8 shadow-[0_12px_35px_rgba(12,32,62,0.05)] md:p-10">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2b8ed2]">How billing works</p>
                            <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#10233e]">
                                Short, practical, and easy to explain internally.
                            </h2>

                            <div className="mt-8 space-y-5">
                                {[
                                    "Choose a quarterly, half-yearly, or annual billing cycle for platform access.",
                                    "Keep your usage wallet topped up for the E-Way Bills you generate.",
                                    "Usage is deducted at Rs 0.25 per E-Way Bill, so spend scales with activity.",
                                ].map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2b8ed2]" />
                                        <p className="text-[15px] leading-7 text-[#36536d]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-[#dbe5f1] bg-white p-8 shadow-[0_12px_35px_rgba(12,32,62,0.05)] md:p-10">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2b8ed2]">3. E-Way Bill Usage Rate</p>
                            <div className="mt-4 flex items-end gap-2">
                                <span className="text-[42px] font-bold leading-none text-[#10233e]">Rs 0.25</span>
                                <span className="pb-1 text-[17px] font-medium text-[#61748b]">/ E-Way Bill</span>
                            </div>
                            <p className="mt-3 text-[15px] font-medium text-[#36536d]">Recharged using Topup</p>

                            <div className="mt-8 rounded-2xl bg-[#f7faff] p-5">
                                <h2 className="text-[18px] font-semibold text-[#10233e]">How it works?</h2>
                                <div className="mt-4 space-y-4">
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2b8ed2]" />
                                        <p className="text-[15px] leading-7 text-[#36536d]">Add money to your wallet (Topup)</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2b8ed2]" />
                                        <p className="text-[15px] leading-7 text-[#36536d]">Pay Rs 0.25 for every E-Way Bill generated</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-[28px] border border-[#dbe5f1] bg-white p-8 shadow-[0_14px_40px_rgba(12,32,62,0.05)] md:p-10">
                    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2b8ed2]">Billing cycle totals</p>
                            <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#10233e]">
                                Platform fee totals by commitment period.
                            </h2>
                        </div>
                        <p className="max-w-[320px] text-[14px] leading-6 text-[#61748b]">
                            These totals cover the platform fee only. Usage top-up remains separate and depends on E-Way Bill activity.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {billingCycles.map((cycle) => (
                            <div
                                key={cycle.name}
                                className="rounded-[24px] border border-[#e5edf6] bg-[#fbfdff] p-6"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[18px] font-semibold text-[#10233e]">{cycle.name}</h3>
                                    <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-[12px] font-semibold text-[#2b8ed2]">
                                        {cycle.months}
                                    </span>
                                </div>
                                <div className="mt-8 text-[30px] font-bold leading-none text-[#10233e]">{cycle.pay}</div>
                                <div className="mt-3 text-[14px] text-[#7b8ca1] line-through">{cycle.listPrice}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 rounded-[28px] bg-[linear-gradient(135deg,#10345f_0%,#1e5d98_55%,#36a4dd_100%)] p-8 text-white shadow-[0_18px_50px_rgba(16,52,95,0.22)] md:p-10">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-[620px]">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/72">Need a walkthrough?</p>
                            <h2 className="mt-3 text-[30px] font-bold leading-tight md:text-[38px]">
                                We can help you estimate cost based on your actual dispatch volume.
                            </h2>
                            <p className="mt-4 text-[16px] leading-7 text-white/78">
                                If you want pricing mapped to branches, GSTINs, or expected monthly E-Way Bill generation, speak to the team and get a realistic estimate.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href={BOOK_DEMO_HREF}
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-[15px] font-semibold text-[#10345f] transition-transform hover:-translate-y-0.5"
                            >
                                Talk to Sales
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="https://ewb.sharkship.in/#/register"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/8 px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                            >
                                Start Free
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
