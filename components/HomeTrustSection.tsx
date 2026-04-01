"use client";

import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

type HomeTrustSectionProps = {
  statsImage?: string;
  whyUsImage?: string;
};

const accordionItems = [
  {
    title: "Experienced & friendly support team",
    content:
      "Our sourcing and client support team ensures seamless communication, quality assurance, and fast turnaround for every requirement.",
  },
  {
    title: "Most trusted sourcing partner in APAC",
    content:
      "We have built strong distribution and manufacturing partnerships across Asia Pacific and global markets.",
  },
];

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(target / 35);

    const timer = setInterval(() => {
      current += step;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function HomeTrustSection({
  statsImage = "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1200",
  whyUsImage = "https://images.pexels.com/photos/6231653/pexels-photo-6231653.jpeg?auto=compress&cs=tinysrgb&w=1200",
}: HomeTrustSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1600px] mx-auto px-6 py-24">
      <div className="relative">
        {/* GREEN TOP CARD */}
        <div className="relative z-20 mx-12 rounded-[40px] bg-[#23225A] px-14 lg:px-20 pt-14 pb-28">
          <img
            src={statsImage}
            alt="decorative"
            className="absolute top-[-70px] right-10 w-[180px] h-[180px] rounded-full object-cover"
          />

          <p className="text-xs uppercase tracking-[0.22em] text-[#ffffff]/70">
            GROW NATURALLY //
          </p>

          <h2 className="mt-4 text-5xl lg:text-6xl font-semibold text-[#ffffff]">
            We Complete the Work
          </h2>

          <div className="border-t border-black/10 mt-10 pt-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h3 className="text-6xl lg:text-7xl font-semibold">
                <AnimatedCounter target={229405} suffix="+" />
              </h3>
              <p className="mt-4 text-[#ffffff]/70 leading-7">
                Products shipped during last 12 months
              </p>
            </div>

            <div>
              <h3 className="text-6xl lg:text-7xl font-semibold">
                <AnimatedCounter target={97} suffix="%" />
              </h3>
              <p className="mt-4 text-[#ffffff]/70 leading-7">
                Professional sourcing services
              </p>
            </div>

            <div>
              <h3 className="text-6xl lg:text-7xl font-semibold">
                <AnimatedCounter target={85} suffix="%" />
              </h3>
              <p className="mt-4 text-[#ffffff]/70 leading-7">
                Repeat client distribution network
              </p>
            </div>
          </div>
        </div>

        {/* GRAY SECTION STARTS FROM MIDDLE */}
        <div className="relative z-10 -mt-32 rounded-[40px] bg-[#efefe9] px-12 lg:px-16 pt-40 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* IMAGE */}
            <div className="rounded-[32px] overflow-hidden">
              <img
                src={whyUsImage}
                alt="Why Us"
                className="w-full h-[560px] object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.22em] text-[#111]/60">
                WHO WE ARE //
              </p>

              <h2 className="mt-4 text-5xl lg:text-6xl font-semibold leading-tight text-[#111]">
                We Proudly Give Quality Treatments
              </h2>

              <p className="mt-6 text-[#555] leading-8 text-lg">
                During the Industrial Revolution, manufacturing emerged as a
                major driver of labor and production.
              </p>

              {/* ACCORDION */}
              <div className="mt-10 space-y-5">
                {accordionItems.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] bg-white border border-[#e5e5e5] overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                      >
                        <span className="text-lg font-medium text-[#111]">
                          {item.title}
                        </span>

                        <div className="w-10 h-10 rounded-full border border-[#ddd] flex items-center justify-center">
                          {isOpen ? (
                            <Minus size={18} />
                          ) : (
                            <Plus size={18} />
                          )}
                        </div>
                      </button>

                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? "max-h-40 pb-5 px-6" : "max-h-0"
                        }`}
                      >
                        <p className="text-[#555] leading-8">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}