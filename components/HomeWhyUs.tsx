type HomeWhyUsProps = {
  image?: string;
};

const features = [
  {
    title: "Reliable Supply Chain",
    description:
      "Strong sourcing and distribution network across Asia Pacific and global markets.",
  },
  {
    title: "Premium Quality Standards",
    description:
      "Strict quality checks and consistent product standards across all categories.",
  },
  {
    title: "Trusted B2B Partnerships",
    description:
      "Long-term relationships with manufacturers, distributors and importers.",
  },
];

export default function HomeWhyUs({
  image = "/images/why-us-placeholder.jpg",
}: HomeWhyUsProps) {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-[36px] p-8 lg:p-12 shadow-sm">
        {/* IMAGE */}
        <div className="rounded-[32px] overflow-hidden">
          <img
            src={image}
            alt="Why Choose Us"
            className="w-full h-[560px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#25246B]/70 mb-6">
            // Why us
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight text-[#111111]">
            Why choose Paramaom?
          </h2>

          <div className="mt-10 space-y-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#ecece8] p-6 hover:shadow-md transition"
              >
                <h3 className="text-2xl font-semibold text-[#111]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#555] leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}