import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-28 w-full border-t border-[#E8E5E0] bg-[#Ffffff]">
      {/* TOP STATEMENT */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 border-b border-[#E8E5E0]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
          <h2
            className="max-w-[920px] font-medium text-[#1D3568] leading-[1.08]"
            style={{
              fontSize: "42px",
              letterSpacing: "0.4px",
            }}
          >
            Global Supplier Of Genuine Industrial Raw Materials 
            Across Asia &
            Pacific.
          </h2>

          
        </div>
      </div>

      {/* MAIN LINKS AREA */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* LEFT LINKS */}
          <div className="space-y-6">
            <Link
              href="/products"
              className="block text-[20px] font-medium text-[#0B5C6B] hover:opacity-70 transition-opacity"
            >
              All products
            </Link>


            <Link
              href="/process"
              className="block text-[20px] font-medium text-[#0B5C6B] hover:opacity-70 transition-opacity"
            >
              Our process
            </Link>

            <Link
              href="/faq"
              className="block text-[20px] font-medium text-[#0B5C6B] hover:opacity-70 transition-opacity"
            >
              FAQs
            </Link>
          </div>

          {/* MIDDLE LINKS */}
          <div className="space-y-6">
            <Link
              href="/news"
              className="block text-[20px] font-medium text-[#0B5C6B] hover:opacity-70 transition-opacity"
            >
              News
            </Link>

            <Link
              href="/about"
              className="block text-[20px] font-medium text-[#0B5C6B] hover:opacity-70 transition-opacity"
            >
              Our story
            </Link>

            <Link
              href="/sustainability"
              className="block text-[20px] font-medium text-[#0B5C6B] hover:opacity-70 transition-opacity"
            >
              Sustainability
            </Link>

            <Link
              href="/showroom"
              className="block text-[20px] font-medium text-[#0B5C6B] hover:opacity-70 transition-opacity"
            >
              Showroom
            </Link>
          </div>

          {/* CONTACT */}
          <div className="border-l border-[#E8E5E0] pl-10">
            <h3 className="text-[28px] font-medium text-[#1D3568]">
              Contact us
            </h3>

            <p className="mt-6 text-[20px] leading-[1.8] text-[#1D3568]">
              Paramaom International Pte Limited
111, Somerset Road,
#06-07P, TripleOne Somerset,
Singapore 238 164
            </p>

            <p className="mt-4 text-[20px] text-[#1D3568]">
              +91 98765 43210
            </p>

            <button className="mt-6 rounded-full border border-[#0B5C6B] px-6 py-3 text-[16px] font-medium text-[#0B5C6B] hover:bg-[#0B5C6B] hover:text-white transition-all duration-300">
              Get in touch
            </button>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#E8E5E0] bg-[#EFEAE2]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 text-[16px] text-[#1D3568]">
          <div className="flex gap-8">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>

          <p>Copyright © 2026 Paramaom</p>
        </div>
      </div>
    </footer>
  );
}