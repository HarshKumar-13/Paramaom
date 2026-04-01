import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ContactResponse = {
  page: {
    title: string;
    contactPageFields: {
      heroTitle?: string | null;
      subtitle?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
      heading?: string | null;
      mapUrl?: string | null;
    };
  } | null;
};

const GET_CONTACT_PAGE = gql`
  query GetContactPage {
    page(id: "contact-us", idType: URI) {
      title
      contactPageFields {
        heroTitle
        subtitle
        email
        phone
        address
        heading
        mapUrl
      }
    }
  }
`;

export default async function ContactPage() {
  const { data } =
    await client.query<ContactResponse>({
      query: GET_CONTACT_PAGE,
      fetchPolicy: "no-cache",
    });

  const fields = data?.page?.contactPageFields;

  return (
    <main className="bg-[#f6f6f3] min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-8 pt-8">
        <div className="relative h-[240px] md:h-[300px] lg:h-[340px] rounded-[32px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600"
            alt="contact banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/70 via-[#1a1a1a]/30 to-[#1a1a1a]/40" />

          <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-12 pb-10 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              {fields?.heroTitle || "Contact Us"}
            </h1>

            <div className="mt-5 border-t border-white/30 pt-4 flex justify-between text-sm md:text-base">
              <span>
                {fields?.subtitle ||
                  "Get in touch with us"}
              </span>

              <span className="hidden md:block opacity-90">
                We’re ready to help
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-[1100px] mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Mail us",
            value:
              fields?.email ||
              "contact@paramaom.com",
          },
          {
            title: "Call us",
            value:
              fields?.phone ||
              "+91 98765 43210",
          },
          {
            title: "Our Location",
            value:
              fields?.address ||
              "Bengaluru, India",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-[28px] p-8 border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="w-14 h-14 rounded-full bg-lime-300 mb-5" />

            <h3 className="text-2xl font-medium mb-3">
              {item.title}
            </h3>

            <p className="text-gray-500 whitespace-pre-line leading-7">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* FORM */}
      <section className="max-w-[1100px] mx-auto px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 bg-[#efefe9] rounded-[32px] overflow-hidden">
          {/* LEFT IMAGE */}
          <div className="min-h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1000"
              alt="contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="p-8 md:p-12">
            <p className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-3">
              Get a quote
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-10">
              {fields?.heading ||
                "Let’s grow together."}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                className="border border-gray-200 rounded-xl px-4 py-4 bg-white outline-none"
                placeholder="Your Name"
              />
              <input
                className="border border-gray-200 rounded-xl px-4 py-4 bg-white outline-none"
                placeholder="Phone Number"
              />
              <input
                className="border border-gray-200 rounded-xl px-4 py-4 bg-white outline-none"
                placeholder="Email Address"
              />
              <input
                className="border border-gray-200 rounded-xl px-4 py-4 bg-white outline-none"
                placeholder="Subject"
              />
            </div>

            <textarea
              className="w-full border border-gray-200 rounded-xl px-4 py-4 h-36 bg-white mb-6 outline-none"
              placeholder="Message"
            />

            <button className="px-10 py-4 rounded-full bg-[#2b3a7d] text-white font-medium hover:opacity-90 transition">
              Submit Now
            </button>
          </div>
        </div>
      </section>

      {/* MAP */}
      {fields?.mapUrl && (
        <section className="max-w-[1600px] mx-auto px-6 lg:px-8 pb-20">
          <div className="rounded-[32px] overflow-hidden h-[420px]">
            <iframe
              title="map"
              src={fields.mapUrl}
              className="w-full h-full"
            />
          </div>
        </section>
      )}

      
    </main>
  );
}