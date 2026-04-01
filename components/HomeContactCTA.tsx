import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

type HomeContactCTAProps = {
  image?: string;
};

export default function HomeContactCTA({
  image = "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=1200",
}: HomeContactCTAProps) {
  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[36px] bg-[#23225A] px-10 md:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-[20px]">
            <img
              src={image}
              alt="Contact us"
              className="h-[320px] w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2
              className="font-medium text-white leading-[1.08]"
              style={{
                fontSize: "72px",
                letterSpacing: "0.4px",
              }}
            >
              GET IN TOUCH
            </h2>

            <p className="mt-6 max-w-[700px] text-[22px] leading-[1.7] text-white/90">
              How can we help you? Would you like some product advice,
              sample, or quote? Get in touch with our team.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">
              {/* PRIMARY */}
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-[16px] font-medium text-[#23225A] transition-all duration-300 hover:bg-[#F26B24] hover:text-white hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2">
                  <ArrowUpRight size={18} />
                  Get in touch
                </span>
              </Link>

              {/* SECONDARY */}
              <Link
                href="/contact"
                className="rounded-full border border-white/70 px-8 py-4 text-[16px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#23225A]"
              >
                <span className="flex items-center gap-2">
                  <FileText size={18} />
                  Request a quote
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}