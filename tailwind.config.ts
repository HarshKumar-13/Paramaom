import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F26B24",
          navy: "#23225A",
          light: "#F5F5F5",
          white: "#FFFFFF",
          muted: "#EAEAEA",
          text: "#1A1A1A",
        },
      },

      fontFamily: {
        sans: ["'Instrument Sans'", "sans-serif"],
      },

      borderRadius: {
        xl2: "24px",
        xl3: "32px",
        xl4: "40px",
      },

      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;