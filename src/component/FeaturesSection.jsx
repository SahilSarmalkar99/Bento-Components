const cards = [
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012491/Frame_2147240431_rvdx9z.png",
        alt: "Analytics",
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012492/Frame_2147240432_dcxagl.png",
        alt: "Connectivity",
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012492/Frame_2147240433_i7zeih.png",
        alt: "Efficiency",
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012492/Frame_2147240434_vkrm8h.png",
        alt: "Reliability",
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative overflow-hidden bg-[#FAFAFA] py-24">

            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px,#d9d9d9 1px,transparent 1px)",
                    backgroundSize: "18px 18px",
                    maskImage:
                        "linear-gradient(to bottom,black 0%,black 70%,transparent 100%)",
                }}
            />

            {/* Floating Squares */}

            <div className="pointer-events-none absolute inset-0">

                {/* Left */}

                <div className="absolute left-[6%] top-[28%] grid grid-cols-2 gap-8 opacity-40">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="h-20 w-20 rounded-xl bg-white shadow-xl"
                        />
                    ))}
                </div>

                {/* Right */}

                <div className="absolute right-[6%] top-[28%] grid grid-cols-2 gap-8 opacity-40">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="h-20 w-20 rounded-xl bg-white shadow-xl"
                        />
                    ))}
                </div>

            </div>

            <div className="relative mx-auto max-w-[980px] xl:max-w-[1040px] px-5">

                {/* Badge */}

                <div className="flex justify-center">

                    <div className="rounded-full border border-gray-200 bg-white px-6 py-2 shadow-sm">
                        <span className="text-sm font-medium text-gray-700">
                            Features that Empower
                        </span>
                    </div>

                </div>

                {/* Heading */}

                <h2 className="mt-8 text-center text-[36px] font-semibold leading-none text-[#181818] md:text-[56px]">
                    Everything You Need in One Place
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-500">
                    Powerful features designed to streamline your workflow and boost
                    productivity across every aspect of your business
                </p>

                {/* Cards */}

                <div className="mt-16 grid justify-center gap-5 md:grid-cols-2">

                    {cards.map((card) => (
                        <div
                            key={card.alt}
                            className="mx-auto w-full max-w-[470px] overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}