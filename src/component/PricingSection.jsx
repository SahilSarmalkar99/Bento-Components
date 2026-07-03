import { useState } from "react";

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      title: "Basic Plan",
      description:
        "Ideal for individuals and small teams getting started.",
      price: billing === "monthly" ? 10 : 8,
      users: "Per User",
      featured: false,
      features: [
        "Task Management",
        "Project Planning",
        "Basic Analytics",
        "Email Support",
      ],
    },
    {
      title: "Pro Plan",
      description:
        "Perfect for growing businesses that need collaboration.",
      price: billing === "monthly" ? 25 : 20,
      users: "20 Users",
      featured: true,
      features: [
        "Everything in Basic",
        "Team Collaboration",
        "Unlimited Projects",
        "Advanced Analytics",
        "Custom Dashboards",
        "Priority Support",
      ],
    },
    {
      title: "Enterprise Plan",
      description:
        "Designed for organizations requiring advanced security.",
      price: billing === "monthly" ? 39 : 32,
      users: "50 Users",
      featured: false,
      features: [
        "Everything in Pro",
        "Dedicated Manager",
        "SSO Authentication",
        "Enterprise Security",
        "Unlimited Storage",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070707] py-24 lg:py-32">

      {/* Glow */}

      {/* Background */}
<div className="absolute inset-0 bg-[#080808]" />

{/* White Bottom Fade */}
<div
  className="absolute bottom-0 left-0 right-0 h-[340px]"
  style={{
    background:
      "linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 18%, rgba(255,255,255,0) 65%)",
  }}
/>

{/* Left Cyan Glow */}
<div
  className="absolute -bottom-44 -left-40 h-[520px] w-[520px] rounded-full blur-[120px]"
  style={{
    background:
      "radial-gradient(circle, rgba(170,255,255,0.95) 0%, rgba(120,220,255,.7) 30%, rgba(40,110,255,.35) 60%, transparent 85%)",
  }}
/>

{/* Right Cyan Glow */}
<div
  className="absolute -bottom-44 -right-40 h-[520px] w-[520px] rounded-full blur-[120px]"
  style={{
    background:
      "radial-gradient(circle, rgba(170,255,255,0.95) 0%, rgba(120,220,255,.7) 30%, rgba(40,110,255,.35) 60%, transparent 85%)",
  }}
/>

{/* Center Blue Glow */}
<div
  className="absolute left-1/2 bottom-[-140px] h-[420px] w-[1100px] -translate-x-1/2 rounded-full blur-[90px]"
  style={{
    background:
      "radial-gradient(ellipse at center, rgba(45,85,255,.65) 0%, rgba(55,90,255,.38) 40%, transparent 75%)",
  }}
/>

{/* Dotted Pattern */}
<div
  className="absolute inset-x-0 bottom-0 h-[360px] opacity-[0.18]"
  style={{
    backgroundImage:
      "radial-gradient(rgba(255,255,255,.7) 1px, transparent 1px)",
    backgroundSize: "10px 10px",
    maskImage:
      "linear-gradient(to top, black 10%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to top, black 10%, transparent 100%)",
  }}
/>

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 lg:px-8">

        {/* Header */}

        <div className="mb-20 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-[#171717] px-5 py-2 text-sm text-white">

              Pricing & Plans

            </div>

            <h2 className="text-[42px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[68px]">

              Affordable Pricing
              <br />
              Plans

            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">

              Flexible, transparent pricing to support your team's
              productivity and growth at every stage.

            </p>

          </div>

          {/* Billing Toggle */}

          <div className="flex items-center gap-4">

            <span
              className={`transition ${
                billing === "monthly"
                  ? "text-white"
                  : "text-zinc-500"
              }`}
            >
              Billed Monthly
            </span>

            <button
              onClick={() =>
                setBilling(
                  billing === "monthly"
                    ? "yearly"
                    : "monthly"
                )
              }
              className={`relative h-8 w-14 rounded-full transition ${
                billing === "yearly"
                  ? "bg-blue-600"
                  : "bg-zinc-700"
              }`}
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                  billing === "yearly"
                    ? "left-7"
                    : "left-1"
                }`}
              />
            </button>

            <span
              className={`transition ${
                billing === "yearly"
                  ? "text-white"
                  : "text-zinc-500"
              }`}
            >
              Billed Yearly
            </span>

          </div>

        </div>

        {/* Pricing Grid */}

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-[28px] border p-8 transition duration-300 ${
                plan.featured
                  ? "border-blue-500 bg-[#141414] shadow-[0_0_80px_rgba(70,90,255,.18)] lg:-translate-y-6"
                  : "border-white/10 bg-[#131313] hover:-translate-y-2"
              }`}
            >

              {plan.featured && (
                <div className="absolute left-0 right-0 top-0 rounded-t-[28px] bg-gradient-to-r from-blue-600 to-indigo-500 py-3 text-center text-sm font-medium text-white">

                  Our Recommendation ✦

                </div>
              )}

              <div className={`${plan.featured ? "mt-10" : ""}`}>

                <div className="mb-8 text-4xl">
                  ⚡
                </div>

                <h3 className="text-3xl font-semibold text-white">

                  {plan.title}

                </h3>

                <p className="mt-3 text-zinc-400">

                  {plan.description}

                </p>

                <div className="mt-8 flex items-end gap-4">

                  <h4 className="text-[58px] font-bold leading-none tracking-[-0.06em] text-white lg:text-[72px]">

                    ${plan.price}

                  </h4>

                  <span className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black">

                    👥 {plan.users}

                  </span>

                </div>

                <div className="my-8 h-px bg-white/10" />
                                <ul className="flex flex-1 flex-col gap-5">

                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[15px] text-zinc-300"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}

                </ul>

                <button
                  className={`mt-10 h-16 w-full rounded-2xl text-lg font-semibold transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-b from-[#5E6EFF] to-[#4455FF] text-white shadow-[0_20px_40px_rgba(68,85,255,.35)] hover:scale-[1.02]"
                      : "bg-[#232323] text-white hover:bg-[#2d2d2d]"
                  }`}
                >
                  Get Started
                  <span className="ml-2">→</span>
                </button>

                <p className="mt-5 text-center text-xs text-zinc-500">
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