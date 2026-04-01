import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import HeroBanner from "@/components/HeroBanner";

const GET_MAIN_CATEGORIES = gql`
  query GetMainCategories {
    mainCategories {
      nodes {
        name
        slug
        categoryImage {
          mainCategoryDetails {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

type Category = {
  name: string;
  slug: string;
  categoryImage?: {
    mainCategoryDetails?: {
      node?: {
        sourceUrl?: string;
        altText?: string;
      };
    };
  };
};

type Response = {
  mainCategories: {
    nodes: Category[];
  };
};

export default async function ProductsPage() {
  const { data } = await client.query<Response>({
    query: GET_MAIN_CATEGORIES,
    fetchPolicy: "no-cache",
  });

  const categories = data?.mainCategories?.nodes || [];

  return (
    <main className="bg-[#f4f4f2] min-h-screen">
      <Navbar />

      <HeroBanner
        title="Products"
        image="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
      />

      <section className="max-w-[1600px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category) => (
            <ProductCard
              key={category.slug}
              title={category.name}
              href={`/products/category/${category.slug}`}
              image={
                category.categoryImage?.mainCategoryDetails?.node
                  ?.sourceUrl || "/placeholder.jpg"
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}