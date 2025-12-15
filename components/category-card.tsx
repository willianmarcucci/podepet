// components/category-card.tsx

import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types";

export default function CategoryCard({ name, iconUrl, slug }: Category) {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(slug)}`}
      className="bg-[#FFEFE9] w-full h-full rounded-2xl flex flex-col justify-center items-center p-3 text-xs text-[#6B290D] hover:bg-[#FFCEBA] transition-colors"
    >
      <Image width={100} height={100} alt="" src={iconUrl} aria-hidden="true" />
      <span>{name}</span>
    </Link>
  );
}