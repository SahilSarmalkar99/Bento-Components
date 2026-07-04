import React from "react";

const reports = [
  {
    icon: "📈",
    title: "Project Progress Reports",
    active: true,
  },
  {
    icon: "📋",
    title: "Task Status Overview",
  },
  {
    icon: "👥",
    title: "Team Workload Report",
  },
  {
    icon: "📊",
    title: "Productivity Reports",
  },
];

export default function ReportsInsights() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7FC] py-24">
      <div className="mx-auto max-w-[1220px] px-5">

        {/* Heading */}

        <div className="text-center">

          <span className="tracking-[0.35em] text-[12px] font-semibold uppercase text-[#6C6C83]">
            SMART ANALYTICS
          </span>

          <h2 className="mt-5 text-[58px] leading-none font-bold tracking-[-2px] text-[#181824] md:text-[72px]">
            Reports & Insights
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-8 text-[#72727F]">
            Track progress, measure performance, and make smarter
            decisions with powerful analytics at your fingertips.
          </p>
        </div>

        {/* Card */}

       <div className="relative mt-16 md:mt-20 flex justify-center">
  <div className="w-full max-w-full">
    <img
      src="https://res.cloudinary.com/dor2qddak/image/upload/v1783147560/Frame_2147236922_wm433o.png"
      alt="Reports Dashboard"
      className="w-full h-auto object-contain select-none"
      draggable={false}
    />
  </div>
</div>
      </div>

      {/* Background Blur */}

      <div className="absolute -left-56 bottom-0 h-[500px] w-[500px] rounded-full bg-[#8F6BFF]/10 blur-[140px]" />

      <div className="absolute -right-56 top-0 h-[500px] w-[500px] rounded-full bg-[#4D7CFE]/10 blur-[140px]" />
    </section>
  );
}