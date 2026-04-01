import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ProductNode = {
  title: string;
  slug: string;
  content?: string | null;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  } | null;
  productDetails?: {
    shortDescription?: string | null;
    specifications?: string | null;
    productImage?: {
      node?: {
        sourceUrl?: string;
        altText?: string;
      };
    } | null;
  } | null;
};

type ProductsResponse = {
  products: {
    nodes: ProductNode[];
  };
};

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      nodes {
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        productDetails {
          shortDescription
          specifications
          productImage {
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

export default async function ProductDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const { data } =
    await client.query<ProductsResponse>({
      query: GET_PRODUCTS,
      fetchPolicy: "no-cache",
    });

  const product =
    data?.products?.nodes?.find(
      (item) => item.slug === slug
    ) || null;

  if (!product) {
    return (
      <main className="bg-[#f4f4f2] min-h-screen">
        <Navbar />
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Product not found
          </h1>
        </section>
        <Footer />
      </main>
    );
  }

  const image =
    product.productDetails?.productImage?.node
      ?.sourceUrl ||
    product.featuredImage?.node?.sourceUrl ||
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6";

  return (
    <main className="bg-[#f4f4f2] min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white border border-gray-200 text-xs sm:text-sm text-[#111] hover:shadow-md transition"
        >
          ← Back to Products
        </Link>
      </section>

      {/* Main PDP */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 lg:gap-16 items-start">
          {/* Product Image */}
          <div className="rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden bg-white shadow-sm max-w-full lg:max-w-[520px]">
            <img
              src={image}
              alt={product.title}
              className="w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px] object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="pt-2 sm:pt-4">
            <p className="text-[11px] sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#4a4a8a] mb-4 sm:mb-5">
              Premium Product
            </p>

            <h1 className="text-[34px] leading-[1.05] sm:text-[44px] md:text-[50px] lg:text-[56px] font-semibold text-[#111] mb-6 sm:mb-8">
              {product.title}
            </h1>

            {/* Short Description */}
            <p className="text-[16px] leading-8 sm:text-[18px] md:text-[19px] lg:text-[20px] sm:leading-9 text-[#444] mb-8 sm:mb-10">
              {product.productDetails
                ?.shortDescription ||
                "Premium industrial product supplied with quality assurance and trusted sourcing."}
            </p>

            {/* Specifications */}
            {product.productDetails
              ?.specifications && (
              <div className="mb-10 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-medium mb-4 text-[#111]">
                  Specifications
                </h2>

                <div className="rounded-[18px] sm:rounded-[24px] bg-white p-4 sm:p-6 border border-gray-200 text-[#444] whitespace-pre-line leading-7 sm:leading-8 text-sm sm:text-base">
                  {
                    product.productDetails
                      .specifications
                  }
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#2b3a7d] text-white text-sm sm:text-base font-medium hover:opacity-90 transition">
                Enquire Now
              </button>

              <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#2b3a7d] text-[#2b3a7d] text-sm sm:text-base font-medium hover:bg-[#2b3a7d]/5 transition">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}