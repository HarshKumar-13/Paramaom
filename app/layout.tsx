import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className="font-[var(--font-instrument)]">
        {children}
        <Footer/>
      </body>
    </html>
  );
}