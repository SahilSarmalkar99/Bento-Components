const cards = [
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783001849/Frame_2147236827_rxz7md.png",
    title: "AI Development",
    description:
      "Custom AI models and automation tools that streamline operations, reduce effort, and unlock data-driven decisions.",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783001848/Frame_2147236827_1_ar01dt.png",
    title: "Front-End Development",
    description:
      "We create responsive, polished user interfaces that feel fluid, intuitive, and visually consistent across platforms.",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783001849/Frame_2147236828_hqvozj.png",
    title: "Mobile Development",
    description:
      "We develop seamless native and cross-platform apps that improve user engagement and drive business results.",
  },
  {
    image: "https://res.cloudinary.com/dor2qddak/image/upload/v1783001848/Frame_2147236827_2_ba5cxa.png",
    title: "Back-End Development",
    description:
      "Our backend systems ensure performance, security, and reliability that support long-term product growth and stability.",
  },
];

export default function DevelopmentPartner() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBF9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sl font-medium text-[#0E8B6D]">
              Product Features
            </p>

            <h2 className="text-4xl font-bold tracking-tight leading-tight text-[#111] md:text-6xl">
              Your Trusted
              <br />
              <span className="text-[#145C49]">
                Development Partner
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[17px] font-semibold leading-7 text-[#555]">
            We help you build, scale, and refine digital products with
            reliable expertise and transparent collaboration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
  {cards.map((card, index) => (
    <FeatureCard key={index} {...card} />
  ))}
</div>
      </div>
    </section>
  );
}

function FeatureCard({ image, title, description }) {
  return (
    <div className="group rounded-[28px] p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="overflow-hidden rounded-[20px] ">
        <img
          src={image}
          alt={title}
          draggable={false}
          className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-[24px] font-semibold text-[#111827]">
          {title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-[#667085]">
          {description}
        </p>

        <button className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#0F766E] hover:gap-3 transition-all">
          Learn More
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m-6-6 6 6-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}