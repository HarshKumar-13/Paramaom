type HeroBannerProps = {
  title: string;
  image: string;
  backHref?: string;
  backLabel?: string;
};

export default function HeroBanner({
  title,
  image,
  backHref,
  backLabel,
}: HeroBannerProps) {
  return (
    <section className="max-w-[1600px] mx-auto px-8 pt-8">
      <div className="relative rounded-[40px] overflow-hidden h-[340px]">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#3b4fa1]/30" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b3a7d]/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-12 pb-10">
          {/* Premium Breadcrumb */}
          {backHref && backLabel && (
            <div className="mb-8">
              <a
                href={backHref}
                className="
                  inline-flex items-center gap-3
                  px-5 py-2.5
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  border border-white/30
                  text-white
                  text-sm
                  font-medium
                  transition-all duration-300
                  hover:bg-white/30
                  hover:scale-[1.02]
                "
              >
                <span className="text-base">←</span>
                <span>{backLabel}</span>
              </a>
            </div>
          )}

          {/* Title */}
          <h1 className="text-white text-[72px] leading-none font-light mb-8">
            {title}
          </h1>

          {/* Bottom divider row */}
          <div className="border-t border-white/20 pt-5 flex justify-between items-center">
            <p className="text-white/90 text-lg">
              Explore premium products in this category
            </p>

            <p className="text-white/80 text-lg">
              High Quality • Trusted Supply
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}