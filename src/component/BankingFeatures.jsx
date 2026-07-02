const cards = [
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1782999229/Frame_1707479004_uzg7zn.png",
        large: true,
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1782999413/Frame_1707479003_feouox.png",
        large: true,
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1782999229/Frame_1707479006_pc77ja.png",
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1782999229/Frame_1707479005_qgpxup.png",
    },
    {
        image: "https://res.cloudinary.com/dor2qddak/image/upload/v1782999231/Frame_1707479007_elraan.png",
    },
];

export default function BankingSection() {
    return (
        <section className="relative overflow-hidden bg-[#651919] py-24">
            {/* Background Lines */}
            <img
                src="https://res.cloudinary.com/dor2qddak/image/upload/v1782999228/Abstract_Design_syal8t.png"
                alt=""
                className="absolute inset-0  object-cover  pointer-events-none select-none"
            />

            {/* Red Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#7A1B1B]/40 via-transparent to-[#551313]/40" />

            <div className="relative z-10 mx-auto max-w-[1180px] xl:max-w-[1200px] px-6">
                {/* Badge */}
                <div className="flex justify-center">
                    <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs text-white/70 backdrop-blur">
                        Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 text-center text-[56px] font-semibold leading-none tracking-[-2px] text-white">
                    Banking. Lending. Payments.
                </h2>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-12 gap-5">
                    {/* Row 1 */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="h-[430px] w-full overflow-hidden rounded-[18px]">
                            <img
                                src={cards[0].image}
                                alt=""
                                draggable={false}
                                className="h-full w-full object-fill"
                            />
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                        <div className="h-[430px] w-full overflow-hidden rounded-[18px]">
                            <img
                                src={cards[1].image}
                                alt=""
                                draggable={false}
                                className="h-full w-full object-fill"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="col-span-12 md:col-span-4">
                        <div className="h-[430px] w-full overflow-hidden rounded-[18px]">
                            <img
                                src={cards[2].image}
                                className="h-full w-full object-fill"
                                draggable={false}
                            />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-4">
                        <div className="h-[430px] w-full overflow-hidden rounded-[18px]">
                            <img
                                src={cards[3].image}
                                className="h-full w-full object-fill"
                                draggable={false}
                            />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-4">
                        <div className="h-[430px] w-full overflow-hidden rounded-[18px]">
                            <img
                                src={cards[4].image}
                                className="h-full w-full object-fill"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}