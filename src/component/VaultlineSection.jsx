const cards = [
    {
        image:
            "https://res.cloudinary.com/dor2qddak/image/upload/v1783000969/Frame_2147240607_nothgq.png",
    },
    {
        image:
            "https://res.cloudinary.com/dor2qddak/image/upload/v1783000896/Frame_2147240608_egyraz.png",
    },
    {
        image:
            "https://res.cloudinary.com/dor2qddak/image/upload/v1783000896/Frame_2147240608_egyraz.png",
    },
    {
        image:
            "https://res.cloudinary.com/dor2qddak/image/upload/v1783000896/Frame_2147240609_oeordz.png",
    },
    {
        image:
            "https://res.cloudinary.com/dor2qddak/image/upload/v1783000897/Frame_2147240611_mleclk.png",
    },
    {
        image:
            "https://res.cloudinary.com/dor2qddak/image/upload/v1783000898/Frame_2147240614_guljex.png",
    },
];

export default function VaultlineSection() {
    return (
        <section className="relative overflow-hidden h-fit bg-[#F8FCFE] py-20 lg:py-28">
            {/* Top Glow */}
            <div className="absolute top-0 right-0 h-[650px] w-[650px] rounded-full bg-[#7CE8FF]/30 blur-[180px]" />

            {/* Bottom Glow */}
            <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full bg-[#57C6FF]/25 blur-[180px]" />

            {/* Dots */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage:
                        "radial-gradient(circle,#67D4FF 1px,transparent 1px)",
                    backgroundSize: "16px 16px",
                    maskImage:
                        "linear-gradient(to bottom,transparent 0%,black 15%,black 85%,transparent 100%)",
                }}
            />

            <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
                {/* Heading */}

                <div className="max-w-[620px]">
                    <h2
                        className="
            text-[36px]
            sm:text-[46px]
            lg:text-[60px]
            font-semibold
            leading-[1.08]
            tracking-[-0.04em]
            text-[#111]
          "
                    >
                        Everything You Need to
                        <br />
                        Build, Scale, and Succeed in
                        <br />

                        <span className="text-[#14B8FF]">
                            One Powerful Platform
                        </span>
                    </h2>
                </div>

                {/* Cards */}

                <div className="mt-10 md:mt-14 space-y-4 md:space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-4 md:gap-5">
                        {cards.slice(0, 2).map((card, i) => (
                            <Card key={i} image={card.image} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {cards.slice(2, 5).map((card, i) => (
                            <Card key={i} image={card.image} />
                        ))}
                    </div>

                    {/* Row 3 */}
                    <Card image={cards[5].image} />
                </div>
            </div>
        </section>
    );
}

function Card({ image }) {
    return (
        <div className="overflow-hidden rounded-2xl md:rounded-[24px]">
            <img
                src={image}
                alt=""
                draggable={false}
                className="
          block
          w-full
          h-auto
          select-none
          object-contain
        "
            />
        </div>
    );
}