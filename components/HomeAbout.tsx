type HomeAboutProps = {
  image?: string;
};

export default function HomeAbout({
  image = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
}: HomeAboutProps) {
  return (
    <section className="w-full px-6 py-28">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[12px] uppercase tracking-[0.22em] text-[#111]/60">
            // ABOUT US
          </p>

          <h2
            className="mt-4 font-semibold text-[#111] leading-[1.1]"
            style={{
              fontSize: "42px",
              letterSpacing: "0.4px",
            }}
          >
            Partnering with you to scale and sell more products in Asia Pacific
          </h2>

          <p className="mt-8 text-[20px] leading-[1.8] text-[#555] max-w-[620px]">
            Reliable, quality and consistency can make the best impression on
            your customers and keep them coming back again and again.
          </p>

          <button className="mt-10 rounded-full border border-[#23225A] px-8 py-4 text-[16px] font-medium text-[#23225A] transition-all duration-300 hover:bg-[#23225A] hover:text-white">
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="overflow-hidden rounded-tl-[32px] rounded-tr-none rounded-br-[32px] rounded-bl-none">
          <img
            src={image}
            alt="About"
            className="h-[560px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}