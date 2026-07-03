import React from "react";

const companyLinks = [
  "About",
  "Careers",
  "Customers",
  "Blog",
  "Brand",
  "Research",
];

const productLinks = [
  "Pricing",
  "Integrations",
  "Changelog",
  "Documentation",
  "Download",
  "Status",
];

const socialIcons = [
  {
    name: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "X",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4l16 16M20 4L4 20" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M15 8h2V4h-2c-2.2 0-4 1.8-4 4v2H9v4h2v6h4v-6h2l1-4h-3v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M8 8c2-1 6-1 8 0l1 8c-2 2-8 2-10 0L8 8z" />
        <circle cx="10" cy="12" r="1" fill="currentColor" />
        <circle cx="14" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1d1d1d] text-white">

      {/* Background */}
      <div className="absolute inset-0">

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#ffffff 0.7px,transparent 0.7px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* Glow */}
        <div className="absolute bottom-52 left-0 right-0 h-44 bg-white/70 blur-[95px]" />

        {/* Huge NOVA */}
       <h1
  className="
    absolute
    top-20  
    left-1/2
    -translate-x-1/2
    whitespace-nowrap
    select-none
    pointer-events-none
    leading-[0.82]
    font-thin
    text-white/20
    z-0
  "
  style={{
    fontFamily: "'Helvetica Neue','Arial Narrow',sans-serif",
    fontWeight: 100,
    fontSize: "min(46vw, 720px)",   // Increase/decrease this
    letterSpacing: "-0.055em",
  }}
>
  NOVA
</h1>
      </div>

      {/* Divider */}
      <div className="relative pt-[360px] sm:pt-[430px] md:pt-[520px] lg:pt-[610px]">
        <div className="border-t border-white/10 bg-[#202020]">

          <div className="mx-auto max-w-[1350px] px-6 md:px-12 lg:px-20 py-16">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

              {/* Newsletter */}
              <div>

                <h3 className="text-[12px] tracking-[0.15em] uppercase font-medium mb-6 text-white">
                  Join Our Newsletter
                </h3>

                <div className="flex w-full max-w-[360px]">

                  <input
                    placeholder="YOUR EMAIL"
                    className="
                      flex-1
                      bg-transparent
                      border
                      border-white/40
                      h-[42px]
                      px-4
                      text-[11px]
                      tracking-[0.12em]
                      outline-none
                      placeholder:text-white/40
                    "
                  />

                  <button
                    className="
                      w-[110px]
                      h-[42px]
                      bg-white
                      text-black
                      text-[11px]
                      tracking-[0.12em]
                      font-medium
                      hover:bg-neutral-200
                      transition
                    "
                  >
                    JOIN NOW
                  </button>

                </div>

                <div className="flex gap-4 mt-16">
                  {socialIcons.map((item) => (
                    <button
                      key={item.name}
                      className="
                        w-8
                        h-8
                        border
                        border-white/20
                        flex
                        items-center
                        justify-center
                        text-white/70
                        hover:bg-white
                        hover:text-black
                        duration-300
                      "
                    >
                      {item.icon}
                    </button>
                  ))}
                </div>

              </div>

              {/* Company */}
              <div>
                <h3 className="uppercase tracking-[0.15em] text-[12px] mb-7">
                  Company
                </h3>

                <div className="space-y-4">
                  {companyLinks.map((link) => (
                    <a
                      key={link}
                      href="/"
                      className="
                        flex
                        items-center
                        gap-4
                        text-[12px]
                        uppercase
                        tracking-[0.1em]
                        text-white/65
                        hover:text-white
                        transition
                      "
                    >
                      <span className="w-3 border-t border-white/40"></span>
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Product */}
              <div>
                <h3 className="uppercase tracking-[0.15em] text-[12px] mb-7">
                  Product
                </h3>

                <div className="space-y-4">
                  {productLinks.map((link) => (
                    <a
                      key={link}
                      href="/"
                      className="
                        flex
                        items-center
                        gap-4
                        text-[12px]
                        uppercase
                        tracking-[0.1em]
                        text-white/65
                        hover:text-white
                        transition
                      "
                    >
                      <span className="w-3 border-t border-white/40"></span>
                      {link}
                    </a>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}