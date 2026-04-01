type HomeHeroProps = {
  backgroundImage?: string;
};

export default function HomeHero({
  backgroundImage = "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1800",
}: HomeHeroProps) {
  return (
    <section className="relative w-full px-6 py-6">
      {/* FULL WIDTH HERO IMAGE */}
      <div className="relative h-[760px] w-full overflow-hidden rounded-[28px]">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* FLOATING CONTENT BOX */}
        <div className="absolute left-16 top-1/2 z-20 -translate-y-1/2">
          <div className="w-[620px] rounded-[32px] bg-[#F6F5F2] px-14 py-14">
            {/* SMALL LABEL */}
            <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.22em] text-[#1A1A1A]/60">
              GLOBAL TRADE PARTNER //
            </p>

            {/* MAIN HEADING */}
            <h1
              className="text-[#111111] font-semibold leading-[1.08]"
              style={{
                fontSize: "52px",
                letterSpacing: "0.4px",
              }}
            >
              Global Supplier of Food Raw Materials & Industrial Products
            </h1>

            {/* SUBTEXT */}
            <p className="mt-8 max-w-[480px] text-[20px] leading-[1.7] text-[#444]">
              High-quality food ingredients, polymers, PVC sheets, pipes &
              fittings, and industrial commodities for manufacturers and
              distributors worldwide.
            </p>

            {/* CTA BUTTON */}
            <button className="mt-10 rounded-full bg-[#B7E05B] px-8 py-4 text-[16px] font-medium text-[#111] transition-all duration-300 hover:scale-105">
              Explore →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}