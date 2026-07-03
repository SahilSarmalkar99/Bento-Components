import React from "react";

const MilestonesSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F8F6] py-24">
      <div className="mx-auto max-w-full">

        <div className="relative h-[760px]">

          {/* ---------------- GRID ---------------- */}

          <div
            className="absolute inset-0 rounded-[10px]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(175,185,160,.22) 1px, transparent 1px),
                linear-gradient(90deg, rgba(175,185,160,.22) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Border */}

          <div className="absolute inset-0 border border-dashed border-[#d8d8d8]" />

          {/* Fade */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F6] via-[#F8F8F680] to-transparent pointer-events-none" />

          {/* ---------------- LEFT CONTENT ---------------- */}

          <div className="absolute left-[36px] top-[38px] z-30 max-w-[470px]">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#E4E4E4] bg-white px-4 py-[7px] shadow-sm">

              <span className="h-2 w-2 rounded-full bg-[#72D34F]" />

              <span className="text-[13px] font-medium text-[#444]">
                Our Proud Successful Milestones
              </span>

              <svg
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </div>

            {/* Heading */}

            <h2
              className="
              mt-8
              text-[58px]
              leading-[60px]
              font-semibold
              tracking-[-2px]
              text-[#2E2F34]
            "
            >
              Milestones That Shaped
              <br />
              Our Journey
            </h2>

            {/* Description */}

            <p
              className="
              mt-6
              max-w-[430px]
              text-[20px]
              leading-[34px]
              text-[#666]
            "
            >
              A look at the key breakthroughs that accelerated our growth and
              strengthened our vision.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex items-center gap-4">

              <button
                className="
                rounded-xl
                bg-[#23252E]
                px-8
                py-4
                text-[15px]
                font-semibold
                text-white
                shadow-xl
                transition
                hover:translate-y-[-2px]
              "
              >
                Explore Our Story
              </button>

              <button
                className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-[#E7E7E7]
                bg-white
                px-8
                py-4
                text-[15px]
                font-semibold
                text-[#444]
                shadow-md
              "
              >
                See More

                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#555"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </button>

            </div>

          </div>

          {/* ---------------- SVG GRAPH ---------------- */}

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1450 760"
            preserveAspectRatio="none"
          >

            {/* Area */}

            <path
              d="
                M0 700
                L110 620
                L170 620
                L170 620
                L340 620
                L340 505
                L600 505
                L770 380
                L850 380
                L940 445
                L1060 220
                L1275 220
                L1450 60
                L1450 700
                Z
              "
              fill="#EAF4E7"
              opacity=".45"
            />

            {/* Line */}

            <path
              d="
                M0 700
                L110 620
                L170 620
                L340 620
                L340 505
                L600 505
                L770 380
                L850 380
                L940 445
                L1060 220
                L1275 220
                L1450 60
              "
              stroke="#7BC043"
              strokeWidth="3"
              fill="none"
            />

            {/* Vertical Guides */}

            {[
              340,
              600,
              940,
              1275,
            ].map((x, i) => (
              <line
                key={i}
                x1={x}
                y1="505"
                x2={x}
                y2="705"
                stroke="#7BC043"
                strokeWidth="2"
              />
            ))}

            {/* Dots */}

            {[
              [340,505],
              [600,505],
              [940,445],
              [1275,220],
            ].map((p,i)=>(
              <g key={i}>
                <circle
                  cx={p[0]}
                  cy={p[1]}
                  r="8"
                  fill="#7BC043"
                />
                <circle
                  cx={p[0]}
                  cy={p[1]}
                  r="13"
                  fill="white"
                  stroke="#7BC043"
                  strokeWidth="2"
                />
              </g>
            ))}

          </svg>

          {/* Year Labels */}

          <div className="absolute bottom-8 left-[230px] text-[20px] font-medium text-[#666]">
            2022
          </div>

          <div className="absolute bottom-8 left-[585px] text-[20px] font-medium text-[#666]">
            2023
          </div>

          <div className="absolute bottom-8 left-[925px] text-[20px] font-medium text-[#666]">
            2024
          </div>

          <div className="absolute bottom-8 left-[1260px] text-[20px] font-medium text-[#666]">
            2025
          </div>

          {/* ================= FUNDING CARD ================= */}

{/* ===================== Funding Card ===================== */}

<div
  className="
    absolute
    left-[8%]
    bottom-[8%]
    z-30

    w-[320px]
    sm:w-[340px]
    md:w-[360px]
    lg:w-[380px]

    overflow-hidden
    rounded-[26px]

    border border-white/70
    bg-white

    shadow-[0_12px_30px_rgba(15,23,42,0.05),0_30px_70px_rgba(15,23,42,0.10)]

    backdrop-blur-xl
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_20px_50px_rgba(15,23,42,0.12),0_40px_90px_rgba(15,23,42,0.18)]
  "
>
  {/* ================= Header ================= */}

  <div
    className="relative h-[92px] sm:h-[100px] overflow-hidden"
    style={{
      background: `
        radial-gradient(circle at 85% 20%,rgba(255,255,255,.35),transparent 35%),
        linear-gradient(135deg,#215D38 0%,#2D8D56 45%,#51D98E 100%)
      `,
    }}
  >
    {/* Glow */}

    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />

    <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-black/10 blur-2xl" />

    <div className="flex h-full items-center justify-between px-6">

      <div>
        <h2 className="text-[48px] sm:text-[54px] font-bold leading-none tracking-[-2px] text-white">
          $10M
        </h2>
      </div>

      <div className="text-right">
        <p className="text-[12px] uppercase tracking-[2px] text-white/70">
          Funding
        </p>

        <h4 className="text-[17px] font-semibold text-white">
          Secured
        </h4>
      </div>

    </div>
  </div>

  {/* ================= Body ================= */}

  <div className="bg-white p-6">

    {/* Companies */}

    <div className="flex items-center gap-3">

      <div className="flex items-center gap-2 rounded-full bg-[#F7F8FA] px-3 py-2">

        <div className="h-2 w-2 rounded-full bg-[#4285F4]" />

        <span className="text-[13px] font-semibold text-[#333]">
          Google
        </span>

      </div>

      <div className="flex items-center gap-2 rounded-full bg-[#F7F8FA] px-3 py-2">

        <div className="h-2 w-2 rounded-full bg-[#0866FF]" />

        <span className="text-[13px] font-semibold text-[#333]">
          Meta
        </span>

      </div>

    </div>

    {/* Divider */}

    <div className="my-5 h-px bg-[#EEEEEE]" />

    {/* Description */}

    <p className="text-[14px] leading-7 text-[#676767]">
      This funding empowers us to scale faster,
      strengthen our AI capabilities, and deliver
      even more value to our users worldwide.
    </p>

    {/* Bottom */}

    <div className="mt-6 flex items-center justify-between">

      <div>

        <p className="text-[12px] uppercase tracking-[1.5px] text-[#A0A0A0]">
          Milestone
        </p>

        <p className="mt-1 text-[15px] font-semibold text-[#333]">
          Series A Closed
        </p>

      </div>

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full

          bg-gradient-to-br
          from-[#55D487]
          to-[#2E8D56]

          shadow-lg
        "
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8 12H16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M13 9L16 12L13 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

    </div>

  </div>

</div>
{/* ================= BETA CARD ================= */}

<div
  className="
    absolute
left-[760px]
top-[445px]
w-[360px]
    rounded-[22px]
    bg-white
    border
    border-[#ECECEC]
    p-7
    shadow-[0_20px_45px_rgba(0,0,0,.08)]
    z-30
  "
>

  <h3 className="text-[30px] font-semibold text-[#2f3135]">
    Beta launch
  </h3>

  <p className="mt-2 text-[15px] leading-6 text-[#777]">
    A faster, smarter product experience.
  </p>

  <div className="mt-7 grid grid-cols-2 gap-5">

    {/* Old */}

    <div className="rounded-2xl bg-[#F7F7F7] p-5 text-center">

      <div className="mx-auto h-16 w-16 rounded-xl bg-[#3D733D] flex items-center justify-center shadow-lg">

        <img
          src="YOUR_OLD_VERSION_IMAGE"
          alt=""
          className="h-9 object-contain"
        />

      </div>

      <h4 className="mt-4 text-[18px] font-semibold text-[#444]">
        Old version
      </h4>

      <p className="mt-1 text-[14px] text-[#888] leading-6">
        Basic features,
        slower flow.
      </p>

    </div>

    {/* New */}

    <div
      className="rounded-2xl p-5 text-center"
      style={{
        background:
          "linear-gradient(135deg,#B8F48A,#EBFFE0)",
      }}
    >

      <div className="mx-auto h-16 w-16 rounded-xl bg-[#78D94F] flex items-center justify-center shadow-xl">

        <img
          src="YOUR_NEW_VERSION_IMAGE"
          alt=""
          className="h-9 object-contain"
        />

      </div>

      <h4 className="mt-4 text-[18px] font-semibold text-[#333]">
        New version
      </h4>

      <p className="mt-1 text-[14px] leading-6 text-[#666]">
        Faster.
        Smoother
        Performance.
      </p>

    </div>

  </div>

</div>
{/* ================= CEO CARD ================= */}

<div
  className="
    absolute
right-[115px]
top-[58px]
w-[340px]
    rounded-[24px]
    bg-white
    border
    border-[#ECECEC]
    overflow-hidden
    shadow-[0_25px_50px_rgba(0,0,0,.08)]
    z-30
  "
>

  <div
    className="relative h-[170px]"
    style={{
      background:
        "linear-gradient(135deg,#2E661D,#86D836)",
    }}
  >

    <img
      src="YOUR_CEO_IMAGE"
      alt=""
      className="
        absolute
        bottom-0
        left-1/2
        h-[170px]
        -translate-x-1/2
        object-contain
      "
    />

  </div>

  <div className="p-7">

    <div className="flex items-center gap-2">

      <h3 className="text-[28px] font-semibold text-[#2F3135]">
        New CEO
      </h3>

      <span className="text-[#666] text-[24px]">
        -
      </span>

      <span className="text-[24px] text-[#555]">
        Darlene
      </span>

      <svg
        width="18"
        height="18"
        fill="#1D9BF0"
        viewBox="0 0 24 24"
      >
        <path d="M22 12l-2.1-2.4.3-3.2-3.1-.7L15.5 3 12 4.5 8.5 3 6.9 5.7 3.8 6.4l.3 3.2L2 12l2.1 2.4-.3 3.2 3.1.7L8.5 21l3.5-1.5 3.5 1.5 1.6-2.7 3.1-.7-.3-3.2L22 12z"/>
      </svg>

    </div>

    <p className="mt-5 text-[18px] font-medium leading-8 text-[#3A3A3A]">
      Leading our next chapter with vision
      and focus.
    </p>

    <p className="mt-5 text-[15px] leading-7 text-[#777]">
      Jordan brings deep experience in
      scaling and strategy.
    </p>

  </div>

</div>

        </div>

      </div>
    </section>
  );
};

export default MilestonesSection;