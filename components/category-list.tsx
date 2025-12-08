import CategoryCard from "./category-card";

export default function CategoryList() {
    return (
        <div className="grid grid-cols-2 min-[375px]:grid-cols-3 gap-3 mx-4">
            <CategoryCard name="Restaurantes" iconUrl="/icons/restaurante.png" />
            <CategoryCard name="Parques" iconUrl="/icons/parque.png" />
            <CategoryCard name="Shoppings" iconUrl="/icons/shopping.png" />
            <CategoryCard name="Hotéis" iconUrl="/icons/hotel.png" />
            <CategoryCard name="Cafés" iconUrl="/icons/cafe.png" />
            <CategoryCard name="Água" iconUrl="/icons/agua.png" />
        </div>
    );
}