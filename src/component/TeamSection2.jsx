import React from "react";

const tabs = ["All", "Design", "Development", "Marketing"];

const team = [
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088977/Frame_29_1_dnix1q.png",
    left: "8%",
    top: "32%",
    active: false,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088978/Frame_18_mmqf8t.png",
    left: "22%",
    top: "18%",
    active: false,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088978/Frame_30_yoo3ju.png",
    left: "40%",
    top: "16%",
    active: false,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088978/Frame_31_jxhnuh.png",
    left: "61%",
    top: "18%",
    active: false,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088979/Frame_28_shljxe.png",
    left: "79%",
    top: "32%",
    active: false,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088979/Frame_29_vubmud.png",
    left: "22%",
    top: "48%",
    active: false,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088976/Frame_28_1_btpcwi.png",
    left: "43%",
    top: "42%",
    active: true,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088974/Frame_30_2_xd60lc.png",
    left: "60%",
    top: "50%",
    active: false,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088975/Frame_29_2_sdwzbu.png",
    left: "80%",
    top: "48%",
    active: false,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088975/Frame_31_1_efvbkh.png",
    left: "28%",
    top: "70%",
    active: true,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088975/Frame_34_ipbpic.png",
    left: "52%",
    top: "70%",
    active: true,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088976/Frame_30_1_qnbukv.png",
    left: "74%",
    top: "70%",
    active: false,
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
          linear-gradient(to right,#ececec 1px,transparent 1px),
          linear-gradient(to bottom,#ececec 1px,transparent 1px)
        `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 py-24">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-[13px] tracking-wide text-neutral-600">
            <span className="w-6 h-px bg-black"></span>
            Team Members
            <span className="w-6 h-px bg-black"></span>
          </div>

          <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            The talent powering
            <br />
            every success
          </h2>

          <button className="mt-8 md:mt-10 px-6 md:px-8 py-3 rounded-full text-sm md:text-base">
            MEET THE TEAM
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-12 md:mt-16 overflow-x-auto">
  <div className="border border-neutral-300 flex bg-white min-w-max">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`px-6 py-3 text-sm border-r last:border-r-0 transition
                ${tab === "Design"
                    ? "text-[#ff6420] bg-[#fffaf8]"
                    : "text-neutral-500"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Team Area */}
<div className="mt-16 flex justify-center">
  {/* Desktop / Tablet */}
  <div className="relative hidden md:block w-full max-w-5xl aspect-[1.75] border border-neutral-300 bg-white overflow-hidden">
    {team.map((member, i) => (
      <img
        key={i}
        src={member.image}
        alt=""
        className={`absolute object-contain transition-all duration-500
          ${
            member.active
              ? "w-[15%] lg:w-[16%] z-20"
              : "w-[14%] lg:w-[15%] opacity-70"
          }`}
        style={{
          left: member.left,
          top: member.top,
          transform: "translate(-50%, -50%)",
          filter: member.active
            ? `
              drop-shadow(0 0 0 #FF6420)
              drop-shadow(2px 0 0 #FF6420)
              drop-shadow(-2px 0 0 #FF6420)
              drop-shadow(0 2px 0 #FF6420)
              drop-shadow(0 -2px 0 #FF6420)
            `
            : "blur(3px)",
        }}
      />
    ))}
  </div>

  {/* Mobile */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:hidden w-full">
    {team.map((member, i) => (
      <div
        key={i}
        className={`flex justify-center ${
          member.active ? "scale-105" : "opacity-70"
        }`}
      >
        <img
          src={member.image}
          alt=""
          className="w-full max-w-[150px] object-contain"
          style={{
            filter: member.active
              ? `
                drop-shadow(0 0 0 #FF6420)
                drop-shadow(2px 0 0 #FF6420)
                drop-shadow(-2px 0 0 #FF6420)
                drop-shadow(0 2px 0 #FF6420)
                drop-shadow(0 -2px 0 #FF6420)
              `
              : "blur(2px)",
          }}
        />
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}