import React from "react";

const team = [
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088112/Frame_2147239727_2_e0asm9.png",
        name: "John mark",
        role: "Product Manager",
        exp: "2Y",
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088112/Frame_2147239727_1_lbfdg8.png",
        name: "Devon Lane",
        role: "Software Developer",
        exp: "8Y",
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088113/Frame_2147239727_kan6f4.png",
        name: "Nagy Timea",
        role: "Head Developer",
        exp: "3Y",
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783088112/Frame_2147239727_2_e0asm9.png",
        name: "Bessie Cooper",
        role: "Team Leader",
        exp: "5Y",
    },
];

export default function TeamSection() {
    return (
        <section className="relative overflow-hidden bg-[#fafafa] py-20 lg:py-28">

            {/* Decorative Pixels */}

            <div className="absolute left-0 top-4 scale-75 md:scale-100">
                <Pixel />
            </div>

            <div className="absolute right-0 top-0 scale-75 md:scale-100 rotate-180">
                <PixelLarge />
            </div>

            <div className="absolute right-0 top-[35%] hidden md:block">
                <Pixel />
            </div>

            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <div className="relative mx-auto mb-14 sm:mb-20 lg:mb-24 w-fit">

                    {/* Meet Our */}
                    <h2
                        className="
    font-serif
    font-light
    text-[#2D66C5]
    leading-[0.82]
    text-[56px]
    sm:text-[80px]
    md:text-[110px]
    lg:text-[140px]
    xl:text-[165px]
    "
                    >
                        Meet Our
                    </h2>

                    {/* Paragraph */}

                    <p
                        className="
      hidden lg:block
      absolute
      left-[3.5rem]
      top-[62%]
      w-[180px]
      text-[18px]
      leading-[1.25]
      text-[#2D66C5]
    "
                    >
                        A passionate team
                        <br />
                        bringing ideas to life
                        <br />
                        with expertise and
                        <br />
                        creativity.
                    </p>

                    {/* Team */}

                    <h2
                        className="
      font-serif
      font-light
      text-[#2D66C5]
      leading-[0.82]
      ml-0
      sm:ml-20
      md:ml-32
      lg:ml-44
      xl:ml-56
      text-[56px]
      sm:text-[80px]
      md:text-[110px]
      lg:text-[140px]
      xl:text-[165px]
    "
                    >
                        Team
                    </h2>

                </div>
                <p className="lg:hidden mb-10 text-center text-[#2D66C5] text-base leading-6 max-w-xs mx-auto">
                    A passionate team bringing ideas to life with expertise and creativity.
                </p>

                {/* Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">

                    {team.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}

                </div>

                {/* Buttons */}

                <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4">

                    <button className="rounded-full bg-[#2D66C5] px-6 sm:px-8 py-3 text-sm text-white hover:scale-105 transition">
                        Start to Grow
                    </button>

                    <button className="rounded-full border border-gray-300 bg-white px-6 sm:px-8 py-3 text-sm hover:bg-gray-100 transition">
                        Explore More
                    </button>

                </div>

            </div>

        </section>
    );
}

const TeamCard = ({ image, name, role, exp }) => {
    return (
        <div className="relative bg-white p-3 sm:p-4">

            <StampBorder />

            <div className="relative">

                <img
                    src={image}
                    alt={name}
                    className="
            w-full
            h-[240px]
            sm:h-[260px]
            md:h-[290px]
            lg:h-[270px]
            object-cover
            object-top
            "
                />

                <div className="mt-4">

                    <h3
                        className="
                font-serif
                italic
                text-[#2D66C5]
                text-[28px]
                sm:text-[30px]
                lg:text-[34px]
                leading-none
                "
                    >
                        {name}
                    </h3>

                    <div className="mt-2 flex justify-between items-end">

                        <p className="text-[#2D66C5] text-sm sm:text-[15px]">
                            {role}
                        </p>

                        <span className="text-[#2D66C5] text-lg sm:text-xl font-semibold">
                            {exp}
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
};


/* Small Pixel */

function Pixel() {
    return (
        <div className="grid grid-cols-5 gap-[3px]">
            {Array.from({ length: 25 }).map((_, i) => (
                <span
                    key={i}
                    className={`${Math.random() > 0.45 ? "opacity-100" : "opacity-0"} h-[6px] w-[6px] bg-[#2D66C5]`}
                />
            ))}
        </div>
    );
}

/* Large Pixel */

function PixelLarge() {
    return (
        <div className="grid grid-cols-14 gap-[3px]">
            {Array.from({ length: 196 }).map((_, i) => (
                <span
                    key={i}
                    className={`${Math.random() > 0.52 ? "opacity-100" : "opacity-0"} h-[5px] w-[5px] bg-[#2D66C5]`}
                />
            ))}
        </div>
    );
}

const StampBorder = () => {
    const r = 2; // radius of each cut
    const w = 100;
    const h = 100;

    let d = `M ${r} 0`;

    // Top
    for (let x = r; x < w - r; x += r * 2) {
        d += ` A ${r} ${r} 0 0 0 ${x + r} 0`;
    }

    // Right
    for (let y = r; y < h - r; y += r * 2) {
        d += ` A ${r} ${r} 0 0 0 ${w} ${y + r}`;
    }

    // Bottom
    for (let x = w - r; x > r; x -= r * 2) {
        d += ` A ${r} ${r} 0 0 0 ${x - r} ${h}`;
    }

    // Left
    for (let y = h - r; y > r; y -= r * 2) {
        d += ` A ${r} ${r} 0 0 0 0 ${y - r}`;
    }

    d += " Z";

    return (
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <path
                d={d}
                fill="white"
                stroke="#041A37"
                strokeWidth="0.7"
            />
        </svg>
    );
};