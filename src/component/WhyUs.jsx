const cards = [
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1783000409/Frame_16_xohhdg.png",
  },
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1783000409/Frame_17_rcpm95.png",
  },
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1783000410/Frame_18_vuwfdr.png",
  },
  {
    image:
      "https://res.cloudinary.com/dor2qddak/image/upload/v1783000410/Frame_19_isp3i2.png",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full bg-[#1F1F1F] px-3 py-1 text-[10px] sm:px-4 sm:text-xs text-white">
            Why us
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-center font-semibold leading-tight tracking-[-1px] text-[#191919]
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-[54px]
          lg:tracking-[-2px]"
        >
          Built for Success,
          <br />
          Designed for You
        </h2>

        {/* Cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:mt-14
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-4
            lg:gap-5
          "
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={card.image}
                alt={`Feature ${i + 1}`}
                draggable={false}
                className="block w-full h-auto select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}