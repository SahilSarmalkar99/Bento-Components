import React from "react";

export default function Footer2() {
  return (
    <section className="relative bg-[#fafafa] overflow-hidden pt-16 md:pt-24">
      {/* Footer Card */}
      <div className="max-w-[1240px] mx-auto px-5 relative z-20">
        <div className="bg-white border border-[#E7E7E7] rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden">

          {/* Main Footer */}
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 px-8 md:px-10 lg:px-14 py-10 lg:py-10">

            {/* Left */}
            <div>

              {/* Logo */}
              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-lg bg-[#2EB8F6] flex items-center justify-center">

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 18L17 5"
                      stroke="white"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 5H17V12"
                      stroke="white"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

                <h2 className="font-bold text-[36px] leading-none tracking-[-1px] text-[#262626]">
                  axen
                </h2>

              </div>

              <p className="mt-7 text-[17px] leading-[31px] text-[#595959] max-w-[350px] font-medium">
                Next-gen Performance Marketing for your company
                Next-gen Performance Marketing for your company
              </p>

              {/* Social Icons */}

              <div className="flex gap-4 mt-10">

                {/* Linkedin */}

                <div className="social">

                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">

                    <path
                      d="M7 9H4V20H7V9ZM5.5 4C4.67 4 4 4.67 4 5.5C4 6.33 4.67 7 5.5 7C6.33 7 7 6.33 7 5.5C7 4.67 6.33 4 5.5 4ZM20 13.1C20 10.56 18.67 9 16.2 9C14.9 9 14.1 9.72 13.7 10.23V9H11V20H13.7V14.2C13.7 12.67 14.35 11.8 15.56 11.8C16.75 11.8 17.3 12.63 17.3 14.2V20H20V13.1Z"
                      fill="#2C2C2C"
                    />

                  </svg>

                </div>

                {/* X */}

                <div className="social">

                  <svg width="18" height="18" viewBox="0 0 24 24">

                    <path
                      d="M5 5L19 19M19 5L5 19"
                      stroke="#2C2C2C"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>

                {/* Instagram */}

                <div className="social">

                  <svg width="18" height="18" viewBox="0 0 24 24">

                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="4"
                      stroke="#2C2C2C"
                      strokeWidth="2"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="3.4"
                      stroke="#2C2C2C"
                      strokeWidth="2"
                    />

                    <circle cx="17" cy="7" r="1.2" fill="#2C2C2C" />

                  </svg>

                </div>

              </div>

            </div>

            {/* Column */}

            <div>

              <h4 className="footerTitle">Primary</h4>

              <ul className="footerLinks">

                <li>Product</li>
                <li>Use Cases</li>
                <li>Pricing</li>
                <li>Download</li>

              </ul>

            </div>

            <div>

              <h4 className="footerTitle">Primary</h4>

              <ul className="footerLinks">

                <li>Product</li>
                <li>Use Cases</li>
                <li>Pricing</li>
                <li>Download</li>

              </ul>

            </div>

            <div>

              <h4 className="footerTitle">Company</h4>

              <ul className="footerLinks">

                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>

              </ul>

            </div>

          </div>
                      {/* Bottom Bar */}

          <div className="border-t border-[#ECECEC] bg-[#F7F7F7]">

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 md:px-10 lg:px-14 py-6">

              <p className="text-[14px] text-[#787878] font-medium">
                © 2025 Stackly. All rights reserved.
              </p>

              <div className="flex items-center gap-6">

                <button className="text-[14px] text-[#787878] hover:text-black transition">
                  Privacy Policy
                </button>

                <div className="w-px h-4 bg-[#D8D8D8]" />

                <button className="text-[14px] text-[#787878] hover:text-black transition">
                  Terms & Conditions
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Huge Background Text */}

      <div
        aria-hidden="true"
        className="pointer-events-none select-none
        mt-8 md:mt-0
        flex justify-center
        relative z-10"
      >
        <h1
          className="
          font-black
          tracking-[-0.08em]
          leading-none

          text-[120px]
          sm:text-[170px]
          md:text-[240px]
          lg:text-[310px]
          xl:text-[360px]

          text-white
        "
          style={{
            WebkitTextStroke: "2px rgba(225,225,225,0.95)",
            textShadow: `
            0 2px 2px rgba(255,255,255,.9),
            0 8px 18px rgba(0,0,0,.08),
            0 25px 45px rgba(0,0,0,.05),
            0 0 35px rgba(255,240,180,.35),
            0 0 40px rgba(130,230,255,.35)
          `,
            filter: "drop-shadow(0 25px 45px rgba(0,0,0,.08))",
          }}
        >
          axen
        </h1>
      </div>

      <style>{`
.footerTitle{
    font-size:15px;
    font-weight:600;
    color:#7A7A7A;
    margin-bottom:22px;
}

.footerLinks{
    list-style:none;
    padding:0;
    margin:0;
    display:flex;
    flex-direction:column;
    gap:16px;
}

.footerLinks li{
    font-size:17px;
    font-weight:600;
    color:#242424;
    cursor:pointer;
    transition:all .25s ease;
}

.footerLinks li:hover{
    color:#2EB8F6;
}

.social{
    width:42px;
    height:42px;
    border:1px solid #E7E7E7;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#fff;
    cursor:pointer;
    transition:all .25s ease;
}

.social:hover{
    transform:translateY(-3px);
    box-shadow:0 12px 28px rgba(0,0,0,.08);
}

@media(max-width:1024px){

.footerTitle{
    margin-bottom:18px;
}

.footerLinks li{
    font-size:16px;
}

}

@media(max-width:768px){

.footerTitle{
    text-align:center;
}

.footerLinks{
    align-items:center;
}

.footerLinks li{
    font-size:15px;
}

.social{
    width:40px;
    height:40px;
}

}

@media(max-width:480px){

.footerTitle{
    font-size:14px;
}

.footerLinks li{
    font-size:14px;
}

.social{
    width:38px;
    height:38px;
}

}
`}</style>

    </section>
  );
}