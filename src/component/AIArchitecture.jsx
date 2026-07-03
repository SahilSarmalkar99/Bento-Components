import React from "react";

const features = [
  { icon: "👜", title: "Smart Intake" },
  { icon: "🧠", title: "Deep Reasoning" },
  { icon: "📚", title: "Model Fusion" },
  { icon: "🛡️", title: "Secure Shield" },
  { icon: "🗂️", title: "Context Memory" },
  { icon: "✔️", title: "Validation Check" },
];

export default function AIArchitecture() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundColor: "#FAFAFA",
          backgroundImage: `
      repeating-linear-gradient(
        135deg,
        rgba(0,0,0,0.025) 0px,
        rgba(0,0,0,0.025) 1px,
        transparent 1px,
        transparent 6px
      )
    `,
        }}
      />

      <div className="relative mx-auto max-w-[1450px] px-5 lg:px-10">

        {/* ================= TOP ================= */}

        <div className="flex flex-col justify-between gap-10 lg:flex-row">

          {/* Left */}

          <div className="max-w-[620px]">

            <p
              className="
              text-[13px]
              font-semibold
              tracking-wide
              text-[#7EA6F8]
            "
            >
              The 7-layer intelligent engine
            </p>

            <h2
              className="
mt-3
max-w-[620px]
font-bold
text-[#1D1D1D]
leading-[0.93]
tracking-[-0.055em]
text-[clamp(42px,5vw,66px)]
"
            >
              Smarter Architecture,
              <br />
              Superior Outcomes
            </h2>

          </div>

          {/* Right */}

          <div className="max-w-[470px]">

            <p
              className="
max-w-[420px]
text-[16px]
leading-[1.65]
text-[#676767]
font-[450]
"
            >
              Process every request through seven intelligent layers
              designed to deliver cleaner, safer, and more accurate
              results
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button
                className="
rounded-full
bg-[#221C1D]
px-8
py-[15px]
text-[15px]
font-semibold
text-white
shadow-[0_8px_25px_rgba(0,0,0,.12)]
transition-all
duration-300
hover:-translate-y-[2px]
hover:shadow-[0_20px_35px_rgba(0,0,0,.15)]
"
              >
                Upgrade to Multi-Layer AI
              </button>

              <button
                className="
rounded-full
border
border-[#DDDDDD]
bg-white
px-8
py-[15px]
text-[15px]
font-medium
text-[#666]
transition-all
duration-300
hover:bg-[#F7F7F7]
"
              >
                See How It Works
              </button>

            </div>

          </div>

        </div>

        {/* ================= MAIN BOX ================= */}

        <div
          className="
          relative
          mt-20
          overflow-hidden
          rounded-[24px]
          border
          border-[#ECECEC]
          bg-white
          shadow-[0_25px_70px_rgba(0,0,0,.05)]
        "
        >

          {/* Tabs */}

          <div className="grid grid-cols-2 gap-3 p-4">

            <div
              className="
              rounded-2xl
border
border-[#EAEAEA]
bg-white
shadow-[0_5px_20px_rgba(0,0,0,.04)]
py-4
font-semibold
text-[20px]
            "
            >
              LayerIQ
            </div>

            <div
              className="
              rounded-2xl
border
border-[#ECECEC]
bg-[#FCFCFC]
text-[#C5C5C5]
            "
            >
              Other companies
            </div>

          </div>

          {/* ================= CONTENT ================= */}

          <div
            className="
            grid
            items-center
            gap-10
            px-7
            pb-10
            pt-6
            lg:grid-cols-[220px_1fr_330px]
          "
          >

            {/* LEFT TEXT */}

            <div
              className="
font-mono
text-[18px]
leading-[1.45]
tracking-[-0.04em]
text-[#5B5B5B]
"
            >

              <p
                className="
                whitespace-pre-line
                text-[18px]
                leading-[1.45]
                tracking-[-0.02em]
                text-[#595959]
              "
              >
                Every request is refined
                {"\n"}
                through 7 AI layers—
                {"\n"}
                cleaning,
                validating,
                {"\n"}
                securing, and
                optimizing
                {"\n"}
                your data.
              </p>

            </div>

            {/* CENTER IMAGE */}

            <div
              className="
              order-1
              lg:order-2
              flex
              justify-center
            "
            >

              <img
    src="https://res.cloudinary.com/dor2qddak/image/upload/v1783107392/Frame_2147240170_wxqslp.png"
    alt=""
    className="
    w-[330px]
    sm:w-[430px]
    md:w-[520px]
    object-contain
    drop-shadow-[0_35px_40px_rgba(0,0,0,.10)]
    transition-all
    duration-500
    hover:scale-[1.02]
"
/>

            </div>

            {/* RIGHT FEATURES */}

            <div
              className="
              order-3
              flex
              flex-col
              gap-5
            "
            >

              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                  group
                  flex
                  items-center
                  gap-4
                "
                >
{/* Card */}

                  <div

                    className="
                    relative
                    flex
                    items-center
                    gap-4
                    rounded-full
                    border
                    border-[#ECECEC]
                    bg-white
                    px-5
                    py-4
                    shadow-[0_8px_25px_rgba(0,0,0,.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_35px_rgba(0,0,0,.08)]
                    "

                  >

                    <div
className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-[#ECECEC]
bg-[#F9F9F9]
text-lg
shrink-0
"
>
                      {item.icon}
                    </div>

                    <span
                      className="
                      text-[17px]
                      font-medium
                      text-[#505050]
                    "
                    >
                      {item.title}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}