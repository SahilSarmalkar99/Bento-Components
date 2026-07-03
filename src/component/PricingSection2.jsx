import { useState } from "react";

export default function PricingSection2() {
    const [yearly, setYearly] = useState(false);

    const plans = [
        {
            icon: "⚡",
            title: "Basic Plan",
            subtitle: "Perfect for small teams and startups.",
            monthly: 10,
            yearly: 8,
            users: "Per User",
            featured: false,
            features: [
                "Task Management",
                "AI Summary",
                "Progress Tracking",
                "Smart Labels",
            ],
        },
        {
            icon: "🏳️",
            title: "Pro Plan",
            subtitle: "Ideal for growing teams and projects.",
            monthly: 25,
            yearly: 20,
            users: "20 Users",
            featured: true,
            features: [
                "Everything in Basic Plan +",
                "Team Collaboration",
                "Bulk Actions",
                "2-way Translation",
                "Advanced Reporting",
                "Customizable Dashboards",
            ],
        },
        {
            icon: "⭐",
            title: "Enterprise Plan",
            subtitle: "Built for large organizations needs.",
            monthly: 39,
            yearly: 32,
            users: "50 Users",
            featured: false,
            features: [
                "Everything in Pro Plan +",
                "SAML SSO",
                "Dedicated Account Manager",
                "Enterprise Integrations",
                "Data Analytics",
                "Security Enhancements",
                "Priority Support",
            ],
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#F5F5F5] py-24">
            <div className="mx-auto max-w-[1280px] px-6">

                {/* Header */}

                <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

                    <div>

                        <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm">
                            Pricing & Plans
                        </span>

                        <h2 className="mt-6 text-[56px] font-semibold leading-[1.05] tracking-[-0.05em] text-black">
                            Affordable Pricing Plans
                        </h2>

                        <p className="mt-5 max-w-xl text-[18px] leading-8 text-neutral-500">
                            Flexible, transparent pricing to support your team's productivity
                            and growth at every stage.
                        </p>

                    </div>

                    {/* Billing Toggle */}

                    <div className="flex items-center gap-4">

                        <span
                            className={`text-sm font-medium transition ${!yearly ? "text-black" : "text-neutral-400"
                                }`}
                        >
                            Billed Monthly
                        </span>

                        <button
                            onClick={() => setYearly(!yearly)}
                            className={`relative h-7 w-12 rounded-full transition ${yearly ? "bg-[#4655FF]" : "bg-neutral-300"
                                }`}
                        >
                            <span
                                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${yearly ? "left-6" : "left-1"
                                    }`}
                            />
                        </button>

                        <span
                            className={`text-sm font-medium transition ${yearly ? "text-black" : "text-neutral-400"
                                }`}
                        >
                            Billed yearly
                        </span>

                    </div>

                </div>

                {/* Cards */}

                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col rounded-[26px] border bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 ${plan.featured
                                    ? "border-[#4655FF] ring-1 ring-[#4655FF]"
                                    : "border-black/5"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute inset-x-0 top-0 rounded-t-[26px] bg-gradient-to-r from-[#5867FF] to-[#3E4EFF] py-2 text-center text-xs font-semibold text-white">
                                    Our Recommendation ✦
                                </div>
                            )}

                            <div className={plan.featured ? "mt-8" : ""}>
                                <div className="text-4xl">{plan.icon}</div>

                                <h3 className="mt-8 text-[32px] font-semibold">
                                    {plan.title}
                                </h3>

                                <p className="mt-2 text-neutral-500">
                                    {plan.subtitle}
                                </p>

                                <div className="mt-8 flex items-end gap-3">
                                    <div className="text-[58px] font-bold leading-none tracking-[-0.05em]">
                                        $
                                        {yearly ? plan.yearly : plan.monthly}
                                    </div>

                                    <div className="rounded-md bg-black px-3 py-1 text-xs text-white">
                                        👥 {plan.users}
                                    </div>
                                </div>

                                <div className="my-8 h-px bg-neutral-200" />

                                <ul className="space-y-4">
                                    {plan.features.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-3 text-[15px]"
                                        >
                                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#31C55F] text-xs text-white">
                                                ✓
                                            </div>

                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`mt-10 h-14 w-full rounded-xl font-semibold transition ${plan.featured
                                            ? "bg-[#4655FF] text-white hover:bg-[#3647f0]"
                                            : "bg-[#F3F3F3] hover:bg-[#EAEAEA]"
                                        }`}
                                >
                                    Get Started →
                                </button>

                                <p className="mt-4 text-center text-xs text-neutral-400">
                                    Renews automatically. Cancel anytime.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
