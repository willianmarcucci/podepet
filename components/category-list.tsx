// components/category-list.tsx

import CategoryCard from "./category-card";
import { Category } from "@/types";

const categories: Category[] = [
  { name: "Restaurantes", iconUrl: "/icons/restaurante.png", slug: "restaurante" },
  { name: "Parques", iconUrl: "/icons/parque.png", slug: "parque" },
  { name: "Shoppings", iconUrl: "/icons/shopping.png", slug: "shopping" },
  { name: "Hotéis", iconUrl: "/icons/hotel.png", slug: "hotel" },
  { name: "Cafés", iconUrl: "/icons/cafe.png", slug: "cafe" },
  { name: "Água", iconUrl: "/icons/agua.png", slug: "agua" },
];

export default function CategoryList({ className }: { className?: string }) {
  return (
    <nav aria-label="Categorias">
      <div className={`grid gap-3 ${className}`}>
        {categories.map((category) => (
          <CategoryCard key={category.slug} {...category} />
        ))}
      </div>
    </nav>
  );
}