const cards = [
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012134/Frame_2147237736_uhqe7t.png",
        alt: "Forms handling",
        large: true,
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012134/Frame_2147237767_j1khfq.png",
        alt: "Frontend flexibility",
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012134/Frame_2147237770_wcloit.png",
        alt: "Backend flexibility",
    },
];

export default function FlexibilitySection() {
    return (
        <section className="relative overflow-hidden bg-black py-24">
            <div className="mx-auto max-w-[1280px] px-5 lg:px-8">

                {/* Heading */}

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0E0E0E] px-4 py-2">

                        <span className="h-2.5 w-2.5 rounded-full bg-[#00F5D4]" />

                        <span className="text-sm text-gray-300">
                            Developer-Friendly
                        </span>

                    </div>

                    <h2 className="text-white text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight leading-none">
                        Built for Flexibility
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-[18px] leading-8 text-gray-400">
                        Inertia connects frontend and backend smoothly,
                        without the complexity of SPAs.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-6 lg:grid-cols-2">

                    {/* Left */}

                    <div>
                        <img
                            src={cards[0].image}
                            alt={cards[0].alt}
                            className="w-full rounded-xl object-cover"
                        />
                    </div>

                    {/* Right */}

                    <div className="flex flex-col gap-6">

                        <img
                            src={cards[1].image}
                            alt={cards[1].alt}
                            className="w-full rounded-xl object-cover"
                        />

                        <img
                            src={cards[2].image}
                            alt={cards[2].alt}
                            className="w-full rounded-xl object-cover"
                        />

                    </div>

                </div>

            </div>

            {/* Bottom Strip */}

            <div className="mt-20 w-full overflow-hidden">
                <img
                    src="https://res.cloudinary.com/dor2qddak/image/upload/v1783012134/Rectangle_1000001897_ljidei.png"
                    alt=""
                    className="w-full object-cover"
                />
            </div>

        </section>
    );
}