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
    <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V21h-4z"/>
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
    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.2L6.6 22H3.5l7.3-8.4L1 2h6.2l4.3 5.6L18.9 2z"/>
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
                        backgroundSize: "120px 120px",
                    }}
                />

                <div className="relative z-10 max-w-[1600px] mx-auto">

                    {/* ================= HEADER ================= */}

                    <div className="px-5 sm:px-8 lg:px-12 pt-10 lg:pt-14">

                        <div className="flex items-start justify-between gap-8">

                            <div>

                                <h2 className="pixel-title">
                                    PIXELIA.
                                </h2>

                            </div>

                            <button
                                className="
              hidden
              md:flex
              w-14
              h-14
              border
              border-white
              items-center
              justify-center
              hover:bg-white
              hover:text-black
              transition
              "
                            >
                                <ArrowUpRightIcon size={28} />
                            </button>

                        </div>

                        {/* ================= INPUT + SOCIAL ================= */}

                        <div className="mt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                            {/* Left */}

                            <div className="w-full max-w-[720px]">

                                <div
                                    className="
                bg-white
                flex
                h-[72px]
                border-[3px]
                border-white
                "
                                >
                                    <div className="flex items-center flex-1 px-6 gap-4">

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
                    outline-none
                    text-black
                    placeholder:text-black
                    text-lg
                    "
                                        />

                                    </div>

                                    <button
                                        className="
                  bg-black
                  text-white
                  px-10
                  text-lg
                  font-semibold
                  hover:bg-neutral-900
                  transition
                  "
                                    >
                                        Join us now
                                    </button>

                                </div>

                            </div>

                            {/* Right */}

                            <div className="flex gap-5">

                                <a
                                    href="#"
                                    className="
                w-16
                h-16
                bg-white
                text-black
                flex
                items-center
                justify-center
                hover:scale-105
                transition
                "
                                >
                                    <LinkedinIcon size={28} />
                                </a>

                                <a
                                    href="#"
                                    className="
                w-16
                h-16
                bg-white
                text-black
                flex
                items-center
                justify-center
                hover:scale-105
                transition
                "
                                >
                                    <TwitterIcon size={28} />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Pixel Divider */}
                    <PixelDivider />

                    {/* ================= BOTTOM ================= */}

                    <div className="bg-white text-black">

                        <div
                            className="
            px-5
            sm:px-8
            lg:px-12
            py-6
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            "
                        >
                            <p className="text-sm font-medium">
                                © 2025 axen. All rights reserved.
                            </p>

                            <div className="flex items-center gap-4 text-sm">

                                <button className="hover:underline">
                                    Privacy Policy
                                </button>

                                <span>|</span>

                                <button className="hover:underline">
                                    Terms & Conditions
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
        [
            4, 5, 10, 11, 16, 17, 22, 23, 30, 31, 38, 39, 45, 46, 53, 54, 60, 61,
            67, 68, 75, 76, 83, 84, 90, 91, 97, 98,
        ],
        [
            2, 3, 8, 9, 13, 14, 18, 19, 25, 26, 33, 34, 41, 42, 48, 49, 56, 57,
            64, 65, 72, 73, 80, 81, 88, 89, 95, 96,
        ],
        [
            1, 6, 7, 12, 20, 21, 27, 28, 35, 36, 43, 44, 50, 51, 58, 59, 66, 69,
            70, 77, 78, 85, 86, 92, 93, 99,
        ],
        [
            0, 4, 5, 11, 15, 16, 24, 29, 30, 37, 40, 47, 52, 55, 63, 71, 74, 79,
            82, 87, 94,
        ],
        [
            3, 9, 17, 18, 31, 39, 46, 47, 60, 61, 68, 76, 84, 91, 98,
        ],
        [
            6, 13, 22, 27, 34, 43, 49, 56, 64, 71, 79, 86, 94,
        ],
    ];

    return (
        <div className="relative w-full bg-black overflow-hidden">
            {/* Main pixel wave */}
            <div
                className="grid w-full"
                style={{
                    gridTemplateColumns: "repeat(100,1fr)",
                    gridTemplateRows: "repeat(6,12px)",
                }}
            >
                {Array.from({ length: 600 }).map((_, i) => {
                    const row = Math.floor(i / 100);
                    const col = i % 100;

                    const active = rows[row]?.includes(col);

                    return (
                        <div
                            key={i}
                            className={active ? "bg-white" : "bg-black"}
                        />
                    );
                })}
            </div>

            {/* White block */}
            <div className="bg-white h-24 sm:h-28 md:h-32 lg:h-36 relative">

                {/* Floating pixels */}
                {[
                    [2, 18],
                    [6, 8],
                    [10, 31],
                    [15, 48],
                    [18, 67],
                    [22, 80],
                    [28, 95],
                    [35, 12],
                    [40, 56],
                    [48, 72],
                    [55, 38],
                    [60, 88],
                    [68, 25],
                    [76, 44],
                    [84, 97],
                    [92, 14],
                ].map(([x, y], index) => (
                    <span
                        key={index}
                        className="absolute bg-black"
                        style={{
                            width: 8,
                            height: 8,
                            left: `${x}%`,
                            top: `${y / 2}%`,
                        }}
                    />
                ))}
            </div>
        </div>
    );

}