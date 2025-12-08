import CategoryCard from "./category-card";

export default function CategoryList() {
    return (
        <div className="grid grid-cols-2 min-[375px]:grid-cols-3 gap-3 mx-4">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
    );
}