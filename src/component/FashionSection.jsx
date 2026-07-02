const cards = [
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783002204/Frame_7_pdqcpl.png",
    alt: "Trending outfits",
    large: true,
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783002203/Frame_1_vvxsun.png",
    alt: "Analytics",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783002204/Frame_5_kpgupy.png",
    alt: "Ideas",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783002205/Frame_6_ziaget.png",
    alt: "Rating",
    tall: true,
  },
];

export default function FashionSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-8 md:py-12 lg:py-16">
  <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 md:gap-4">

      {/* Left Side */}
      <div className="flex flex-col gap-3 md:gap-4">

        {/* Top Card */}
        <div className="overflow-hidden rounded-2xl lg:rounded-[24px]">
          <img
            src={cards[0].image}
            alt={cards[0].alt}
            className="block w-full h-auto"
            draggable={false}
          />
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">

          <div className="overflow-hidden rounded-2xl lg:rounded-[24px]">
            <img
              src={cards[1].image}
              alt={cards[1].alt}
              className="block w-full h-auto"
              draggable={false}
            />
          </div>

          <div className="overflow-hidden rounded-2xl lg:rounded-[24px]">
            <img
              src={cards[2].image}
              alt={cards[2].alt}
              className="block w-full h-auto"
              draggable={false}
            />
          </div>

        </div>
      </div>

      {/* Right Card */}
      <div className="overflow-hidden rounded-2xl lg:rounded-[24px]">
        <img
          src={cards[3].image}
          alt={cards[3].alt}
          className="block w-full h-full"
          draggable={false}
        />
      </div>

    </div>
  </div>
</section>
  );
}