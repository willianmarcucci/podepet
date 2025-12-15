import CategoryCard from "./category-card";

export default function CategoryList({ className }: { className: string }) {
  return (
    <div className={`grid gap-3 ${className}`}>
      <CategoryCard name="Restaurantes" iconUrl="/icons/restaurante.png" />
      <CategoryCard name="Parques" iconUrl="/icons/parque.png" />
      <CategoryCard name="Shoppings" iconUrl="/icons/shopping.png" />
      <CategoryCard name="Hotéis" iconUrl="/icons/hotel.png" />
      <CategoryCard name="Cafés" iconUrl="/icons/cafe.png" />
      <CategoryCard name="Água" iconUrl="/icons/agua.png" />
    </div>
  );
}
