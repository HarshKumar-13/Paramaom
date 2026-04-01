import { gql } from "@apollo/client";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import HeroBanner from "@/components/HeroBanner";
import { client } from "@/lib/apollo";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      nodes {
        title
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        subCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

type Product = {
  title: string;
  slug: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
  subCategories?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
};

type Response = {
  products: {
    nodes: Product[];
  };
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SubCategoryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const { data } = await client.query<Response>({
    query: GET_PRODUCTS,
    fetchPolicy: "no-cache",
  });

  const allProducts = data?.products?.nodes || [];

  const filteredProducts = allProducts.filter(
    (product) =>
      product.subCategories?.nodes?.some(
        (sub) => sub.slug === slug
      )
  );

  const pageTitle =
    filteredProducts[0]?.subCategories?.nodes?.find(
      (sub) => sub.slug === slug
    )?.name || "Products";

  return (
    <main className="bg-[#f4f4f2] min-h-screen">
      <Navbar />

      <HeroBanner
        title={pageTitle}
        image="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
        backHref="/products"
        backLabel="Back to Categories"
      />

      <section className="max-w-[1600px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              title={product.title}
              href={`/products/${product.slug}`}
              image={
                product.featuredImage?.node
                  ?.sourceUrl || "/placeholder.jpg"
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}