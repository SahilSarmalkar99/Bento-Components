import React from "react";

const MilestonesSection = () => {

  const milestones = [
    { x: 330, y: 450 },
    { x: 590, y: 500 },
    { x: 1040, y: 430 },
    { x: 1370, y: 170 },
  ];
  return (
    <section className="relative  overflow-hidden bg-[#F7F8F4] py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">

        {/* Soft Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#ffffff_0%,transparent_55%)]" />

        {/* Left Fade */}
        <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-[#F7F8F4] via-[#F7F8F4]/90 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1550px] px-5 lg:px-10">
        <div className="relative flex flex-col lg:block gap-8 min-h-screen lg:h-[820px]">
          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
    relative
    lg:absolute

    left-0
    top-0

    z-20

    max-w-full
    lg:max-w-[470px]

    text-center
    lg:text-left

    mx-auto
  "
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-[#E3E6E0] bg-white px-5 py-2 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#70D349]" />

              <span className="text-[13px] font-medium text-[#555]">
                Our Proud Successful Milestones
              </span>



              <svg
                width="13"
                height="13"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#555"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2 className="mt-10 text-[66px] font-semibold leading-[72px] tracking-[-3px] text-[#2F3135]">
              Milestones
              <br />
              That Shaped
              <br />
              Our Journey
            </h2>

            <p className="mt-8 max-w-[430px] text-[20px] leading-[36px] text-[#666]">
              A look at the key breakthroughs that accelerated our growth and
              strengthened our vision.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="rounded-xl bg-[#2F3135] px-8 py-4 text-[15px] font-semibold text-white shadow-xl transition hover:-translate-y-1">
                Explore Our Story
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-[#E4E4E4] bg-white px-8 py-4 text-[15px] font-semibold text-[#444] shadow-md">
                See More

                <svg
                  width="15"
                  height="15"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="#444"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div className="block lg:hidden h-6" />
            </div>
          </div>

          {/* ================= GRAPH ================= */}

          <svg
            className="absolute top-[15%] inset-0 hidden lg:block h-full w-full"
            viewBox="0 0 1500 820"
            preserveAspectRatio="none"
          >

            {/* AREA */}

            <path
              d="
             M0 760
             L190 620
             L330 620
             L330 500
             L590 500
             L760 360
             L930 360
             L1040 430
             L1180 170
             L1370 170
             L1500 40
             L1500 760
             Z
            "
              fill="#DDF0D7"
            />

            {/* LINE */}

            <path
              d="
             M0 760
             L190 620
             L330 620
             L330 500
             L590 500
             L760 360
             L930 360
             L1040 430
             L1180 170
             L1370 170
             L1500 40
            "
              stroke="#7CC144"
              strokeWidth="4"
              fill="none"
              strokeLinejoin="round"
            />

            {/* GUIDE */}

            {milestones.map((point, i) => (
              <line
                key={i}
                x1={point.x}
                y1={point.y}
                x2={point.x}
                y2="760"
                stroke="#A9D986"
                strokeWidth="2"
              />
            ))}

            {/* DOTS */}

            {[
              [330, 500],
              [590, 500],
              [1040, 430],
              [1370, 170],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="13" fill="white" />
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  fill="#7CC144"
                  stroke="white"
                  strokeWidth="5"
                />
              </g>
            ))}
          </svg>

          {/* YEARS */}

          <div className="lg:block hidden absolute -bottom-23 left-[300px] text-[20px] font-medium text-[#666]">
            2022
          </div>

          <div className="lg:block hidden absolute -bottom-23 left-[540px] text-[20px] font-medium text-[#666]">
            2023
          </div>

          <div className="lg:block hidden absolute -bottom-23 left-[980px] text-[20px] font-medium text-[#666]">
            2024
          </div>

          <div className="lg:block hidden absolute -bottom-23 right-[100px] text-[20px] font-medium text-[#666]">
            2025
          </div>

          {/* ================= FUNDING CARD ================= */}
          <div
            className="
relative
lg:absolute

w-full
max-w-[340px]

mx-auto
mt-12

lg:mx-0
lg:mt-0

lg:left-[16%]
lg:bottom-[3%]

rounded-[28px]
overflow-hidden
bg-white
border
border-[#ECECEC]
shadow-[0_25px_70px_rgba(15,23,42,.08)]
z-30

"
          >
            {/* Header */}

            <div
              className="relative h-[108px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg,#1D5A37 0%,#2F8B55 55%,#53D78C 100%)",
              }}
            >
              {/* Glow */}

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-[60px]" />

              <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-black/10 blur-3xl" />

              <div className="relative flex h-fit items-center justify-between p-8">
                <div>
                  <h2 className="text-[40px] font-bold leading-none tracking-[-3px] text-white">
                    $10M
                  </h2>
                </div>

                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[2px] text-white/70">
                    FUNDING
                  </p>

                  <h3 className="mt-1 text-[15px] font-semibold text-white">
                    Secured
                  </h3>
                </div>
              </div>
            </div>

            {/* Body */}

            <div className="p-3">
              <div className="flex gap-3">
                <div className="flex items-center gap-2 rounded-full bg-[#F7F8FA] px-4 py-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />

                  <span className="text-[13px] font-semibold text-[#333]">
                    Google
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-[#F7F8FA] px-4 py-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#0866FF]" />

                  <span className="text-[13px] font-semibold text-[#333]">
                    Meta
                  </span>
                </div>
              </div>

              <div className="my-2 h-px bg-[#ECECEC]" />

              <p className="text-[12px] leading-tight text-[#6D6D6D]">
                This funding empowers us to scale faster,
                strengthen our AI capabilities and deliver
                even more value to customers worldwide.
              </p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-[#A0A0A0]">
                    Milestone
                  </p>

                  <h4 className="mt-2 text-[14px] font-semibold text-[#333]">
                    Series A Closed
                  </h4>
                </div>

                <button
                  className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-[#5AD789]
        to-[#2E8D56]
        shadow-xl
      "
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
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
                </button>
              </div>
            </div>
          </div>

          {/* ================= BETA CARD ================= */}

          <div
           className="
relative
lg:absolute

w-full
max-w-[300px]

mx-auto
mt-8

lg:mx-0
lg:mt-0

lg:left-[60%]
lg:top-[50%]
lg:-translate-x-1/2

rounded-[24px]
border
border-[#ECECEC]
bg-white
p-6

shadow-[0_18px_50px_rgba(0,0,0,.08)]
z-30
"
          >
            {/* Title */}

            <h3 className="text-[25px] font-semibold tracking-[-1px] text-[#2F3135]">
              Beta launch
            </h3>

            <p className=" text-[12px] leading-tight tracking-tight text-[#767676]">
              A faster, smarter product experience.
            </p>

            {/* Cards */}

            <div className="mt-2 grid grid-cols-2 gap-4">

              {/* OLD */}

              <div className="rounded-[18px] h-fit bg-[#F7F7F7] p-2">

                <div className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[#3E713B] shadow-md">

                  <img
                    src="YOUR_OLD_ICON"
                    className="h-7"
                    alt=""
                  />

                </div>

                <h4 className="mt-4 text-center text-[15px] font-semibold text-[#444]">
                  Old version
                </h4>

                <p className="mt-2 text-center text-[12px] leading-tight tracking-tight text-[#8A8A8A]">
                  Basic features
                  <br />
                  slower flow.
                </p>

              </div>

              {/* NEW */}

              <div
                className="rounded-[18px] p-2"
                style={{
                  background:
                    "linear-gradient(180deg,#C9F8A8 0%,#ECFFE3 100%)",
                }}
              >

                <div className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[#7ADA51] shadow-lg">

                  <img
                    src="YOUR_NEW_ICON"
                    className="h-7"
                    alt=""
                  />

                </div>

                <h4 className="mt-4 text-center text-[15px] font-semibold text-[#333]">
                  New version
                </h4>

                <p className="mt-2 text-center text-[12px] leading-tight tracking-tight text-[#666]">
                  Faster
                  <br />
                  Better UX.
                </p>

              </div>

            </div>

          </div>

          {/* ================= CEO CARD ================= */}

          <div
            className="
relative
lg:absolute

w-full
max-w-[295px]

mx-auto
mt-8

lg:mx-0
lg:mt-0

lg:right-[3%]
lg:top-[2%]

rounded-[24px]
overflow-hidden

border
border-[#ECECEC]
bg-white

shadow-[0_20px_55px_rgba(0,0,0,.08)]
z-30
"
          >
            {/* ================= HEADER ================= */}

            <div
              className="relative h-[170px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg,#2B5E20 0%,#5FAE3D 60%,#8EE03E 100%)",
              }}
            >
              {/* Glow */}

              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20 blur-3xl" />

              <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-black/10 blur-2xl" />

              {/* CEO IMAGE */}

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

            {/* ================= BODY ================= */}

            <div className="p-6">

              {/* Name */}

              <div className="flex items-center gap-2">

                <h3 className="text-[25px] font-semibold text-[#2F3135]">
                  New CEO
                </h3>

                <span className="text-[#888]">
                  —
                </span>

                <span className="text-[22px] text-[#444]">
                  Darlene
                </span>

                {/* Verified */}

                <svg
                  width="17"
                  height="17"
                  fill="#1D9BF0"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12l-2.1-2.4.3-3.2-3.1-.7L15.5 3 12 4.5 8.5 3 6.9 5.7 3.8 6.4l.3 3.2L2 12l2.1 2.4-.3 3.2 3.1.7L8.5 21l3.5-1.5 3.5 1.5 1.6-2.7 3.1-.7-.3-3.2L22 12z" />
                </svg>

              </div>

              {/* Description */}

              <p className="mt-2 text-[16px] font-medium leading-tight text-[#3D3D3D]">
                Leading our next chapter
                with vision and focus.
              </p>

              <p className="mt-2 text-[14px] leading-tight text-[#777]">
                Jordan brings deep experience
                in scaling technology and driving
                sustainable growth.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;