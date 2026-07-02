const cards = [
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1782998268/Frame_1261156628_tsw5xh.png",
  },
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1782998268/Frame_1261156633_ntxcxx.png",
  },
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1782998268/Frame_1261156635_fruwca.png",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#07090F] px-5 py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-md">
            🔊 3 Step Process
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[#E2DCF8] sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Custom URL in 3 Simple Steps ?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Easily create your own personalized, trackable and secure links
            within minutes. No technical knowledge required.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 place-items-center gap-8 sm:mt-20 md:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group w-full max-w-[420px]"
            >
              <img
                src={card.image}
                alt={`Step ${index + 1}`}
                draggable={false}
                className="w-full select-none transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}