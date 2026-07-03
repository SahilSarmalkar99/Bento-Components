import React from "react";

/**
 * MilestonesSection
 * Pixel-matched recreation of the "Product Growth through key milestones" section,
 * including the layered "3D paper card" effect: a rotated, hatched shadow card sits
 * behind each real card, plus small corner rivets on the card itself.
 * Tailwind CSS required. Fully responsive.
 */

const milestones = [
  {
    year: "2022",
    color: "teal",
    kind: "stat",
    stat: "1K+",
    statLabel: "Early Users",
    title: "Public Launch",
    description: "Introduced automation, tools, and performance upgrades.",
  },
  {
    year: "2023",
    color: "orange",
    kind: "person",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    title: "New CEO \u2013 Verona Nov",
    description:
      "Introduced automation, tools, and performance upgrades based on user feedback.",
  },
  {
    year: "2024",
    color: "blue",
    kind: "stat",
    stat: "$15M",
    statLabel: "Seed Round A",
    title: "Funding secured",
    description: "Introduced automation, tools, and performance upgrades.",
  },
  {
    year: "2025",
    color: "purple",
    kind: "plain",
    title: "Global Adoption",
    description:
      "Scaled infrastructure and expanded worldwide as teams adopted the platform globally.",
  },
];

const colorStyles = {
  teal: {
    gradient: "linear-gradient(135deg,#34d399,#0d9488)",
    statBg: "bg-white/20",
    dot: "bg-emerald-500",
    stub: "bg-emerald-300",
    hatch: "rgba(16,185,129,0.35)",
    hatchBorder: "border-emerald-200",
  },
  orange: {
    gradient: "linear-gradient(135deg,#fb923c,#ea580c)",
    statBg: "bg-white/25",
    dot: "bg-orange-500",
    stub: "bg-orange-300",
    hatch: "rgba(249,115,22,0.35)",
    hatchBorder: "border-orange-200",
  },
  blue: {
    gradient: "linear-gradient(135deg,#38bdf8,#2563eb)",
    statBg: "bg-white/30",
    dot: "bg-blue-500",
    stub: "bg-blue-300",
    hatch: "rgba(59,130,246,0.35)",
    hatchBorder: "border-blue-200",
  },
  purple: {
    gradient: "linear-gradient(135deg,#a78bfa,#7c3aed)",
    statBg: "bg-white/20",
    dot: "bg-purple-500",
    stub: "bg-purple-300",
    hatch: "rgba(139,92,246,0.35)",
    hatchBorder: "border-purple-200",
  },
};

/** Small rivet/screw dot rendered at each corner of a card. */
function Rivet({ className = "" }) {
  return (
    <span
      className={`absolute h-2.5 w-2.5 rounded-full border border-white/70 bg-white/25 ${className}`}
    />
  );
}

function MilestoneCard({ m }) {
  const c = colorStyles[m.color];

  return (
    <div className="relative">
      {/* hatched "shadow" card behind, rotated the opposite way */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl border ${c.hatchBorder}`}
        style={{
          transform: "rotate(2.5deg) translate(6px, 8px)",
          backgroundImage: `repeating-linear-gradient(135deg, ${c.hatch} 0px, ${c.hatch} 1.5px, transparent 1.5px, transparent 7px)`,
          backgroundColor: "rgba(255,255,255,0.4)",
        }}
      />

      {/* real card */}
      <div
        className="relative w-full max-w-[260px] rounded-2xl p-4 text-white shadow-xl"
        style={{
          transform: "rotate(-1.5deg)",
          backgroundImage: `${c.gradient}, repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 8px)`,
        }}
      >
        <Rivet className="left-2 top-2" />
        <Rivet className="right-2 top-2" />
        <Rivet className="left-2 bottom-2" />
        <Rivet className="right-2 bottom-2" />

        <span className="text-xs font-medium text-white/90">{m.year}</span>

        {m.kind === "stat" && (
          <div
            className={`mt-2 flex items-end justify-between rounded-xl px-3 py-2.5 ${c.statBg}`}
          >
            <span className="text-2xl font-bold leading-none text-neutral-900">
              {m.stat}
            </span>
            <span className="text-xs font-medium text-neutral-800">
              {m.statLabel}
            </span>
          </div>
        )}

        {m.kind === "person" && (
          <div className="mt-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-0.5">
              <img
                src={m.avatar}
                alt=""
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        )}

        <h3
          className={`font-semibold mt-3 ${
            m.kind === "plain" ? "text-base" : "text-sm"
          }`}
        >
          {m.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-white/85">
          {m.description}
        </p>
      </div>
    </div>
  );
}

/**
 * A single card wrapped with its connector stub + dot that reaches
 * toward the shared center line. `side` controls which edge the
 * connector grows from.
 */
function ConnectedCard({ m, side }) {
  const c = colorStyles[m.color];
  const isLeft = side === "left";
  return (
    <div className="relative">
      {/* mobile connector (always grows right, toward the left-edge line) */}
      <span
        className={`absolute top-1/2 left-0 h-px w-6 -translate-x-full -translate-y-1/2 sm:hidden ${c.stub}`}
      />
      <span
        className={`absolute top-1/2 left-0 h-2 w-2 -translate-x-[calc(100%+24px)] -translate-y-1/2 rounded-full sm:hidden ${c.dot}`}
      />

      {/* desktop connector, grows toward the shared center line */}
      <span
        className={`hidden sm:block absolute top-1/2 h-px w-8 -translate-y-1/2 ${c.stub} ${
          isLeft ? "-right-8" : "-left-8"
        }`}
      />
      <span
        className={`hidden sm:block absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full ${c.dot} ${
          isLeft ? "-right-9" : "-left-9"
        }`}
      />

      <MilestoneCard m={m} />
    </div>
  );
}

export default function MilestonesSection() {
  const [m2022, m2023, m2024, m2025] = milestones;

  return (
    <section className="w-full bg-neutral-50 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left column: copy */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-white px-1 py-1 text-xs shadow-sm ring-1 ring-black/5">
              <span className="rounded-full px-3 py-1.5 text-neutral-500">
                Milestones
              </span>
              <span className="flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1.5 font-medium text-neutral-900">
                View all
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              Product Growth
              <br />
              through key
              <br />
              milestones.
            </h2>

            <button className="mt-8 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
              View Full Journey
            </button>
          </div>

          <div className="mt-16 hidden lg:block">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-5 rounded-full bg-neutral-900" />
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-neutral-500">
              We built this platform to make learning measurable.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop&crop=faces"
                alt=""
                className="h-7 w-7 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-neutral-800">
                Alex Johnson, CEO
              </span>
            </div>
          </div>
        </div>

        {/* Right column: timeline */}
        <div className="relative">
          {/* shared straight vertical line, desktop only */}
          <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-neutral-200 sm:block" />
          {/* mobile line */}
          <div className="absolute inset-y-0 left-3 w-px bg-neutral-200 sm:hidden" />

          <div className="relative grid grid-cols-1 gap-10 pl-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-14 sm:pl-0">
            {/* left column: 2022, 2024 */}
            <div className="flex flex-col gap-14 sm:justify-self-end">
              <ConnectedCard m={m2022} side="left" />
              <ConnectedCard m={m2024} side="left" />
            </div>

            {/* right column: 2023, 2025, offset down to interleave */}
            <div className="flex flex-col gap-14 sm:mt-24 sm:justify-self-start">
              <ConnectedCard m={m2023} side="right" />
              <ConnectedCard m={m2025} side="right" />
            </div>
          </div>

          {/* mobile-only quote block */}
          <div className="mt-12 lg:hidden">
            <p className="max-w-xs text-sm text-neutral-500">
              We built this platform to make learning measurable.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop&crop=faces"
                alt=""
                className="h-7 w-7 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-neutral-800">
                Alex Johnson, CEO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
