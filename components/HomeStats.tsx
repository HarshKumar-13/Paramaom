export default function HomeStats() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 py-24">
      <div className="rounded-[36px] bg-[#25246B] text-white px-8 md:px-16 py-14 md:py-18 shadow-lg">
        <p className="text-xs uppercase tracking-[0.22em] text-white/70">
          WHY PARAMAOM //
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mt-4">
          Trusted Global Supply Network
        </h2>

        <div className="border-t border-white/20 mt-8 pt-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-6xl font-semibold">250+</h3>
            <p className="mt-4 text-white/70">
              Products across global network
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-semibold">97%</h3>
            <p className="mt-4 text-white/70">
              Client retention rate
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-semibold">85%</h3>
            <p className="mt-4 text-white/70">
              Repeat distributors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}