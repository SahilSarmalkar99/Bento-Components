const cards = [
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012910/Frame_2147240120_yv4cux.png",
    title: "Personalized Insights",
    description:
      "Delivers data-driven recommendations tailored to your unique workflow.",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012910/Frame_2147240120_1_anjit3.png",
    title: "Anomaly Detection",
    description:
      "Spots unusual patterns instantly so threats never go unnoticed.",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012910/Frame_2147240120_2_ucwdox.png",
    title: "Error Prevention",
    description:
      "Catches mistakes in real-time before they become costly problems.",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012910/Frame_2147240120_5_wlrfh6.png",
    title: "Workflow Suggestions",
    description:
      "Learns your habits and recommends faster ways to complete tasks.",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012910/Frame_2147240120_4_ytdtdl.png",
    title: "Predictive Alerts",
    description:
      "Warns you of potential issues before they impact your operations.",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783012910/Frame_2147240120_3_hhsz4h.png",
    title: "Smart Autofill",
    description:
      "Completes repetitive data entry automatically based on your history.",
  },
];

export default function AIFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFC] py-24">

      {/* Background Pattern */}

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg,#f1f1f1 0px,#f1f1f1 2px,transparent 2px,transparent 10px)",
        }}
      />

      <div className="relative mx-auto max-w-[1220px] px-5">

        {/* Badge */}

        <div className="flex justify-center">

          <div className="relative flex items-center">

            <span className="absolute -left-20 h-px w-16 bg-[#A7D948]" />

            <div className="rounded-full border border-[#A7D948]/40 bg-white px-5 py-2 shadow-sm">
              <span className="text-sm font-medium text-[#5D8A18]">
                Features
              </span>
            </div>

            <span className="absolute -right-20 h-px w-16 bg-[#A7D948]" />

          </div>

        </div>

        {/* Heading */}

        <h2 className="mx-auto mt-8 max-w-3xl text-center text-[34px] font-semibold leading-tight text-[#191919] md:text-[54px]">
          AI That Anticipates Your Needs
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-[18px] leading-8 text-[#737373]">
          Intelligent automation that learns your patterns, prevents errors,
          and streamlines your workflow getting smarter with every interaction.
        </p>

        {/* Cards */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {cards.map((card) => (
            <div
              key={card.title}
              className="group overflow-hidden rounded-[22px] border border-[#ECECEC] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}

              <div className="overflow-hidden rounded-t-[22px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}

              <div className="px-5 pb-6 pt-4">

                <h3 className="text-[18px] font-semibold text-[#1D1D1D]">
                  {card.title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-[#7B7B7B]">
                  {card.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}