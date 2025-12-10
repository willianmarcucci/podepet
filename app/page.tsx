import CategoryList from "@/components/category-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PlaceList from "@/components/place-list";
import PlaceListSkeleton from "@/components/place-list-skeleton";
import SearchBar from "@/components/searchbar";
import { EmblaCarousel } from "@/components/slider";
import { Suspense } from "react";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <div className="flex flex-col">
        <Header />

        <main className="flex flex-col gap-4 p-4">
          <SearchBar />
          <EmblaCarousel />
          <CategoryList />
          <PlaceList />
        </main>

        <Footer />
      </div>
    </div>
  );
}
