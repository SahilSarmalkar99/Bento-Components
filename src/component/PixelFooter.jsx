import React from "react";

const MailIcon = ({ className = "", size = 20 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7L12 13 2 7" />
    </svg>
);

const ArrowUpRightIcon = ({ className = "", size = 28 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M7 17L17 7" />
        <path d="M8 7h9v9" />
    </svg>
);

const LinkedinIcon = ({ className = "", size = 28 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V21h-4z" />
    </svg>
);

const TwitterIcon = ({ className = "", size = 28 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.2L6.6 22H3.5l7.3-8.4L1 2h6.2l4.3 5.6L18.9 2z" />
    </svg>
);

export default function PixelFooter() {
    return (
        <>
            <style>{`
        .pixel-title{
          font-family: monospace;
          font-weight:900;
          text-transform:uppercase;
          color:#fff;
          line-height:.9;
          letter-spacing:-8px;
          font-size:clamp(60px,12vw,170px);
          image-rendering:pixelated;
          text-shadow:
            4px 0 #fff,
            0 4px #fff;
        }

        .pixel-arrow{
          font-size:42px;
          line-height:1;
          font-family:monospace;
          font-weight:700;
        }

        @media (max-width:1024px){
          .pixel-title{
            letter-spacing:-5px;
          }
        }

        @media (max-width:768px){
          .pixel-title{
            font-size:72px;
            letter-spacing:-3px;
          }
        }

        @media (max-width:480px){
          .pixel-title{
            font-size:52px;
            letter-spacing:-2px;
          }
        }
      `}</style>
            <footer className="relative overflow-hidden bg-black text-white">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `
      linear-gradient(to right,#fff 1px,transparent 1px),
      linear-gradient(to bottom,#fff 1px,transparent 1px)
    `,
                        backgroundSize: "clamp(60px,8vw,120px) clamp(60px,8vw,120px)",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-[1600px]">

                    {/* Header */}

                    <div className="px-5 sm:px-8 lg:px-12 pt-10 md:pt-14 lg:pt-16">

                        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                            {/* Logo */}

                            <div>

                                <h2 className="pixel-title">
                                    PIXELIA.
                                </h2>

                            </div>

                            {/* Arrow */}

                            <button
                                className="
          hidden
          md:flex

          h-14
          w-14

          lg:h-16
          lg:w-16

          items-center
          justify-center

          border
          border-white

          transition-all
          duration-300

          hover:bg-white
          hover:text-black
        "
                            >
                                <ArrowUpRightIcon size={30} />
                            </button>

                        </div>

                        {/* Newsletter */}

                        <div
                            className="
        mt-10

        flex
        flex-col

        gap-8

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
                        >

                            {/* Input */}

                            <div className="w-full lg:max-w-[760px]">

                                <div
                                    className="
            flex

            flex-col
            sm:flex-row

            overflow-hidden

            border-[3px]
            border-white

            bg-white
          "
                                >

                                    {/* Input */}

                                    <div
                                        className="
              flex
              min-h-[64px]
              flex-1
              items-center
              gap-4

              px-5
            "
                                    >

                                        <MailIcon
                                            size={20}
                                            className="text-black"
                                        />

                                        <input
                                            type="email"
                                            placeholder="Enter your mail address"
                                            className="
                flex-1

                bg-transparent

                text-[15px]
                sm:text-[17px]

                text-black

                outline-none

                placeholder:text-neutral-500
              "
                                        />

                                    </div>

                                    {/* Button */}

                                    <button
                                        className="
              h-[60px]
              sm:h-auto

              bg-black

              px-8
              lg:px-10

              text-[15px]
              lg:text-[17px]

              font-semibold

              text-white

              transition

              hover:bg-neutral-900
            "
                                    >
                                        Join us now
                                    </button>

                                </div>

                            </div>

                            {/* Social */}

                            <div
                                className="
          flex

          justify-center
          lg:justify-end

          gap-4
        "
                            >

                                <a
                                    href="#"
                                    className="
            flex

            h-14
            w-14

            lg:h-16
            lg:w-16

            items-center
            justify-center

            bg-white
            text-black

            transition-all

            hover:scale-105
          "
                                >
                                    <LinkedinIcon size={26} />
                                </a>

                                <a
                                    href="#"
                                    className="
            flex

            h-14
            w-14

            lg:h-16
            lg:w-16

            items-center
            justify-center

            bg-white
            text-black

            transition-all

            hover:scale-105
          "
                                >
                                    <TwitterIcon size={26} />
                                </a>

                                {/* Mobile Arrow */}

                                <button
                                    className="
            flex
            md:hidden

            h-14
            w-14

            items-center
            justify-center

            border
            border-white

            transition

            hover:bg-white
            hover:text-black
          "
                                >
                                    <ArrowUpRightIcon size={26} />
                                </button>

                            </div>

                        </div>

                    </div>

                    {/* Pixel Divider */}
                    <PixelDivider />

                    {/* ================= BOTTOM ================= */}

                    {/* ================= BOTTOM ================= */}

<div className="bg-white text-black">

  <div
    className="
      px-5
      sm:px-8
      lg:px-12

      py-5
      sm:py-6

      flex
      flex-col
      md:flex-row

      items-center
      justify-between

      gap-5
    "
  >

    <p
      className="
        text-center
        md:text-left

        text-[13px]
        sm:text-[14px]

        font-medium
      "
    >
      © 2025 Pixelia. All rights reserved.
    </p>

    <div
      className="
        flex

        flex-wrap

        items-center
        justify-center

        gap-3
        sm:gap-5

        text-[13px]
        sm:text-[14px]
      "
    >

      <button className="transition hover:underline">
        Privacy Policy
      </button>

      <span className="hidden sm:block">|</span>

      <button className="transition hover:underline">
        Terms & Conditions
      </button>

      <span className="hidden sm:block">|</span>

      <button className="transition hover:underline">
        Cookies
      </button>

    </div>

  </div>

</div>

</div>
</footer>
        </>
    );
}

function PixelDivider() {
  const rows = [
    [4,5,10,11,16,17,22,23,30,31,38,39,45,46,53,54,60,61,67,68,75,76,83,84,90,91,97,98],
    [2,3,8,9,13,14,18,19,25,26,33,34,41,42,48,49,56,57,64,65,72,73,80,81,88,89,95,96],
    [1,6,7,12,20,21,27,28,35,36,43,44,50,51,58,59,66,69,70,77,78,85,86,92,93,99],
    [0,4,5,11,15,16,24,29,30,37,40,47,52,55,63,71,74,79,82,87,94],
    [3,9,17,18,31,39,46,47,60,61,68,76,84,91,98],
    [6,13,22,27,34,43,49,56,64,71,79,86,94],
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black">

      {/* Pixel Wave */}

      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: "repeat(100,1fr)",
          gridTemplateRows: "repeat(6,clamp(7px,0.8vw,12px))",
        }}
      >
        {Array.from({ length: 600 }).map((_, i) => {
          const row = Math.floor(i / 100);
          const col = i % 100;

          return (
            <div
              key={i}
              className={
                rows[row]?.includes(col)
                  ? "bg-white"
                  : "bg-black"
              }
            />
          );
        })}
      </div>

      {/* White Section */}

      <div
        className="
          relative

          h-20
          sm:h-24
          md:h-28
          lg:h-36

          bg-white
        "
      >

        {[
          [2,18],
          [6,8],
          [10,31],
          [15,48],
          [18,67],
          [22,80],
          [28,95],
          [35,12],
          [40,56],
          [48,72],
          [55,38],
          [60,88],
          [68,25],
          [76,44],
          [84,97],
          [92,14],
        ].map(([x, y], index) => (
          <span
            key={index}
            className="absolute bg-black"
            style={{
              width: "clamp(4px,0.6vw,8px)",
              height: "clamp(4px,0.6vw,8px)",
              left: `${x}%`,
              top: `${y / 2}%`,
            }}
          />
        ))}

      </div>

    </div>
  );
}