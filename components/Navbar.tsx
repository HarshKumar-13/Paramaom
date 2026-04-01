"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  X,
  ArrowUpRight,
} from "lucide-react";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <nav className="w-full border-b border-[#EAEAEA] bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 py-5">
            {/* LOGO */}
            <Link
              href="/"
              className="text-[30px] font-semibold tracking-[-0.03em] text-[#23225A]"
            >
              Paramaom
            </Link>

            {/* CENTER NAV */}
            <div className="hidden lg:flex items-center gap-10 text-[16px] font-medium text-[#23225A]">
              <Link
                href="/"
                className="hover:text-[#F26B24] transition-colors duration-300"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="hover:text-[#F26B24] transition-colors duration-300"
              >
                About
              </Link>

              <Link
                href="/products"
                className="hover:text-[#F26B24] transition-colors duration-300"
              >
                Products
              </Link>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-6">
              {/* SEARCH BUTTON */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 text-[16px] font-medium text-[#23225A] hover:text-[#F26B24] transition-colors duration-300"
              >
                <Search size={18} />
                Search
              </button>

              {/* CTA */}
              <Link
                href="/contact"
                className="rounded-full bg-[#23225A] px-7 py-4 text-[16px] font-medium text-white transition-all duration-300 hover:bg-[#F26B24] hover:scale-[1.03]"
              >
                <span className="flex items-center gap-2">
                  <ArrowUpRight size={18} />
                  Get in touch
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/30">
          <div className="absolute left-0 top-0 w-full bg-white px-6 md:px-10 py-16">
            <div className="mx-auto max-w-[1200px]">
              {/* CLOSE */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center gap-2 text-[18px] font-medium text-[#23225A]"
                >
                  Close <X size={18} />
                </button>
              </div>

              {/* TITLE */}
              <h2
                className="mt-10 text-center font-medium text-[#23225A]"
                style={{
                  fontSize: "72px",
                  letterSpacing: "0.4px",
                }}
              >
                SEARCH
              </h2>

              {/* SEARCH BAR */}
              <div className="mt-10 flex justify-center gap-4">
                <div className="flex w-full max-w-[700px] items-center border border-[#E5E5E5] px-5 py-5">
                  <Search
                    size={20}
                    className="text-[#23225A]"
                  />

                  <input
                    type="text"
                    value={query}
                    onChange={(e) =>
                      setQuery(e.target.value)
                    }
                    placeholder="Enter your query here"
                    className="ml-4 w-full text-[18px] outline-none placeholder:text-gray-400"
                  />
                </div>

                <Link
                  href={`/products?search=${query}`}
                  className="rounded-full bg-[#23225A] px-8 py-5 text-[16px] font-medium text-white hover:bg-[#F26B24] transition-all duration-300"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}