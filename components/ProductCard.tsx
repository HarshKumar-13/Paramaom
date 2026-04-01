import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  href: string;
  image: string;
}

export default function ProductCard({
  title,
  href,
  image,
}: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      {/* OUTER HOVER BORDER */}
      <div className="rounded-tl-[28px] rounded-tr-none rounded-bl-none rounded-br-[28px] p-[2px] transition-all duration-300 group-hover:bg-[#F26B24] bg-transparent">
        
        {/* GAP BETWEEN BORDER + IMAGE */}
        <div className="rounded-tl-[26px] rounded-tr-none rounded-bl-none rounded-br-[26px] p-[6px] bg-[#f4f4f2]">
          
          {/* IMAGE CARD */}
          <div className="relative overflow-hidden rounded-tl-[24px] rounded-tr-none rounded-bl-none rounded-br-[24px] h-[400px] bg-white">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* subtle image overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />

            {/* hover arrow */}
            <div className="absolute top-5 right-5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-[20px] font-semibold text-black mt-5 leading-tight transition-colors duration-300 group-hover:text-[#F26B24]">
        {title}
      </h3>
    </Link>
  );
}