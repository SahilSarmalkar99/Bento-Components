import React from "react";

const features = [
  { icon: "👜", title: "Smart Intake" },
  { icon: "🧠", title: "Deep Reasoning" },
  { icon: "📚", title: "Model Fusion" },
  { icon: "🛡️", title: "Secure Shield" },
  { icon: "🗂️", title: "Context Memory" },
  { icon: "✔️", title: "Validation Check" },
];

const layerImages = [
  {
    img: "https://res.cloudinary.com/dor2qddak/image/upload/v1783145899/Frame_2147236970_fcitmd.png",
    top: "13%",
    // right: "10%",
    width: "220px",
  },
  {
    img: "https://res.cloudinary.com/dor2qddak/image/upload/v1783145899/Frame_2147240172_d0rmzo.png",
    top: "30%",
    // right: "18%",
    width: "210px",
  },
  {
    img: "https://res.cloudinary.com/dor2qddak/image/upload/v1783145899/Frame_2147240171_ilvu2h.png",
    top: "42%",
    // left: "4%",
    width: "225px",
  },
  {
    img: "https://res.cloudinary.com/dor2qddak/image/upload/v1783145899/Frame_2147240174_bjdfmq.png",
    top: "53%",
    // left: "18%",
    width: "220px",
  },
  {
    img: "https://res.cloudinary.com/dor2qddak/image/upload/v1783145899/Frame_2147240173_lgjugr.png",
    top: "63%",
    // left: "2%",
    width: "220px",
  },
  {
    img: "https://res.cloudinary.com/dor2qddak/image/upload/v1783145899/Frame_2147240175_kl2jqy.png",
    top: "79%",
    // left: "16%",
    width: "220px",
  },
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
text-[38px]
sm:text-[48px]
lg:text-[66px]

leading-[0.95]
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

            <div
className="
mt-8

flex
flex-wrap

justify-center
lg:justify-start

gap-4
"
>

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

          <div className="grid grid-cols-2 gap-3 text-center p-4">

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
text-[#C5C5C5] py-4
            "
            >
              Other companies
            </div>

          </div>

          {/* ================= CONTENT ================= */}

          <div
  className="
    grid

    grid-cols-1
    md:grid-cols-1
    lg:grid-cols-[220px_minmax(480px,1fr)_250px]

    items-center

    gap-8
    lg:gap-10

    px-5
    md:px-7

    pb-10
    pt-6
  "
>

            {/* LEFT TEXT */}

            <div
className="
order-1

max-w-full
lg:max-w-[220px]

text-center
lg:text-left

mx-auto
lg:mx-0

font-mono
text-[16px]
lg:text-[18px]

leading-[1.6]

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
order-2

relative

flex
justify-center
items-center

mt-10
lg:mt-0
"
>

              <img
                src="https://res.cloudinary.com/dor2qddak/image/upload/v1783107392/Frame_2147240170_wxqslp.png"
                alt=""
                className="
w-[280px]

sm:w-[360px]

md:w-[430px]

lg:w-[500px]

xl:w-[540px]

object-contain

drop-shadow-[0_35px_40px_rgba(0,0,0,.10)]

transition-all
duration-500

hover:scale-[1.02]
"
              />

            </div>
            {/* right section */}
            <div
className="
order-3

relative

hidden
lg:block

h-[520px]
w-[250px]
"
>
              {layerImages.map((item, index) => (
                <img
                  key={index}
                  src={item.img}
                  alt=""
                  className="
        absolute
        object-contain
        transition-all
        duration-300
        hover:scale-105
      "
                  style={{
                    top: item.top,
                    left: item.left,
                    width: item.width,
                  }}
                />
              ))}
            </div>

            <div
className="
order-3

mt-10

grid
grid-cols-2
gap-4

lg:hidden
"
>
  {layerImages.map((item, index) => (
    <img
      key={index}
      src={item.img}
      alt=""
      className="
        w-full
        max-w-[180px]
        mx-auto
        object-contain
      "
    />
  ))}
</div>

          </div>

        </div>

      </div>
    </section>
  );
}