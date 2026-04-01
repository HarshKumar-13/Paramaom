import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const demoProducts = [
  {
    id: 1,
    title: "Food Raw Materials",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    slug: "food-raw-materials",
  },
  {
    id: 2,
    title: "Pipes and Fittings",
    image:
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
    slug: "pipes-and-fittings",
  },
  {
    id: 3,
    title: "Plastic Sheets",
    image:
      "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg",
    slug: "plastic-sheets",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2]">
      <Navbar />

      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm tracking-[0.4em] text-[#23225A]/60 uppercase">
            // Products
          </p>

          <h1 className="mb-14 text-[52px] leading-[1.05] font-medium tracking-[0.4px] text-[#23225A]">
            Our Products
          </h1>

          <div className="grid gap-8 md:grid-cols-3">
            {demoProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-xl font-medium text-[#23225A]">
                  {product.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
