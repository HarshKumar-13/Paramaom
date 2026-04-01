import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import HeroBanner from "@/components/HeroBanner";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type SubCategoryNode = {
  name: string;
  slug: string;
  parentMainCategory?: {
    parentMainCategory?: {
      edges?: {
        node?: {
          name: string;
          slug: string;
        };
      }[];
    };
  };
};

type MainCategoriesResponse = {
  subCategories: {
    nodes: SubCategoryNode[];
  };
};

const GET_SUBCATEGORIES = gql`
  query GetSubCategories {
    subCategories {
      nodes {
        name
        slug
        parentMainCategory {
          parentMainCategory {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export default async function CategoryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const { data } =
    await client.query<MainCategoriesResponse>({
      query: GET_SUBCATEGORIES,
      fetchPolicy: "no-cache",
    });

  const allSubCategories =
    data?.subCategories?.nodes || [];

  const filteredSubCategories =
    allSubCategories.filter((sub) => {
      const parentSlug =
        sub.parentMainCategory?.parentMainCategory
          ?.edges?.[0]?.node?.slug;

      return parentSlug === slug;
    });

  const pageTitle =
    filteredSubCategories[0]
      ?.parentMainCategory?.parentMainCategory
      ?.edges?.[0]?.node?.name ?? "Category";

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
          {filteredSubCategories.map((sub) => (
            <ProductCard
              key={sub.slug}
              title={sub.name}
              href={`/products/subcategory/${sub.slug}`}
              image="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}