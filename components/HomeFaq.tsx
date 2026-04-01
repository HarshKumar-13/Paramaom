"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve food manufacturing, construction, industrial materials, packaging, and distributor networks across global markets.",
  },
  {
    question: "Can products be customized?",
    answer:
      "Yes, products and supply requirements can be customized based on client specifications and bulk orders.",
  },
  {
    question: "Do you support international supply?",
    answer:
      "Yes, we work with clients and distributors across multiple international markets and regions.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-6 py-28">
      <div className="mx-auto max-w-[1600px]">
        <p className="text-[12px] uppercase tracking-[0.22em] text-[#111]/60">
          FAQ //
        </p>

        <h2
          className="mt-4 font-semibold text-[#111]"
          style={{ fontSize: "52px", letterSpacing: "0.4px" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-[28px] border border-[#D9D9D9] bg-white"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full px-8 py-7 flex items-center justify-between"
                >
                  <span className="text-[20px] font-medium text-[#111]">
                    {faq.question}
                  </span>

                  <div className="h-12 w-12 rounded-full border border-[#CFCFCF] flex items-center justify-center">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-8 pb-7">
                    <p className="text-[18px] leading-8 text-[#555]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}