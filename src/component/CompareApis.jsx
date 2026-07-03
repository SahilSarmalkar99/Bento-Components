import React, { useState } from "react";

const tabs = ["Speed", "Accuracy", "Integration", "Scalability"];

const cards = [
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1783087480/Frame_2147238859_k3fqb9.png",
    title: "Accurate data, slower in heavy loads.",
  },
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1783087480/Frame_2147238870_y0dzdp.png",
    title: "Reliable, limited data customization options.",
  },
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1783087480/Frame_2147238872_wlrngz.png",
    title: "Faster, smarter, and scales effortlessly.",
  },
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1783087480/Frame_2147238871_i5ighu.png",
    title: "Easy integration, limited analytics depth.",
  },
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1783087543/Frame_2147238868_narhaa.png",
    title: "Powerful communication, slightly higher latency.",
  },
];

export default function CompareApis() {
  const [active, setActive] = useState("Speed");

  return (
    <section className="relative overflow-hidden bg-[#faf8f6] py-20 lg:py-28">
      {/* Glow */}
      <div className="absolute left-1/2 top-[35%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#ffb84d]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1350px] px-5">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-[#FFB547]" />
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#4B4B4B]">
              WHAT YOU GET
            </p>
            <span className="h-px w-6 bg-[#FFB547]" />
          </div>

          <h2 className="text-[34px] font-bold leading-[1.1] text-[#2D2D2D] md:text-[52px]">
            Compare Leading APIs. Choose
            <br />
            Performance that Scales.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#666]">
            See how Nova API outperforms Google Maps, OpenWeather,
            Stripe, and Twilio in speed, accuracy, and scalability —
            all in one visual dashboard.
          </p>

          {/* Tabs */}

          <div className="mt-10 inline-flex rounded-full bg-[#F0EEEC] p-1 shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 ${
                  active === tab
                    ? "bg-white shadow-lg"
                    : "text-[#555] hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison */}

        <div className="mt-20">
          <div className="grid grid-cols-2 gap-y-16 md:grid-cols-3 lg:grid-cols-5">
            {cards.map((card, index) => (
              <div
  key={index}
  className={`relative flex flex-col items-center transition-all duration-500
    ${
      index === 0
        ? "lg:mt-10 lg:z-20"
        : index === 1
        ? "lg:-mt-6 lg:z-10"
        : index === 2
        ? "lg:-mt-16 lg:z-30"
        : index === 3
        ? "lg:-mt-6 lg:z-10"
        : "lg:mt-10 lg:z-20"
    }
  `}
>
  <img
    src={card.image}
    alt=""
    className={`object-contain transition-transform duration-500 hover:scale-105
      ${
        index === 2
          ? "w-[260px] lg:w-[290px]"
          : "w-[180px] md:w-[200px] lg:w-[220px]"
      }
    `}
  />

  <p className="mt-5 max-w-[180px] text-center text-[14px] leading-6 text-[#5D5D5D]">
    {card.title}
  </p>
</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}