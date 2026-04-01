import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import HomeAbout from "@/components/HomeAbout";
import HomeCategories from "@/components/HomeCategories";
import HomeStats from "@/components/HomeStats";
import HomeWhyUs from "@/components/HomeWhyUs";
import HomeFaq from "@/components/HomeFaq";
import HomeContactCTA from "@/components/HomeContactCTA";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query GetCategories {
    mainCategories {
      nodes {
        name
        slug
        categoryImage {
          mainCategoryDetails {
            node {
              sourceUrl
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
      };
    };
  };
};

type CategoriesQuery = {
  mainCategories?: {
    nodes?: Category[];
  };
};

export default async function HomePage() {
  let categories: Category[] = [];

  try {
    const { data } = await client.query<CategoriesQuery>({
      query: GET_CATEGORIES,
      fetchPolicy: "no-cache",
    });

    categories = data?.mainCategories?.nodes ?? [];
  } catch (error) {
    console.log("CMS unavailable, using empty categories");
  }

  return (
    <main className="min-h-screen bg-[#F7F7F2]">
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeCategories categories={categories} />
      <HomeStats />
      <HomeWhyUs />
      <HomeFaq />
      <HomeContactCTA />
      <Footer />
    </main>
  );
}