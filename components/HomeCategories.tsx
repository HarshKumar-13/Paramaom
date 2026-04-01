import ProductCard from "./ProductCard";

interface Props {
  categories?: any[];
}

export default function HomeCategories({
  categories = [],
}: Props) {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-[#25246B]/70">
          Explore
        </p>

        <h2 className="mt-4 text-5xl font-semibold text-[#111111]">
          Our Products
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <ProductCard
            key={cat.slug}
            title={cat.name}
            image={
              cat.categoryImage?.mainCategoryDetails?.node?.sourceUrl ||
              "/placeholder.jpg"
            }
            href={`/products/category/${cat.slug}`}
          />
        ))}
      </div>
    </section>
  );
}