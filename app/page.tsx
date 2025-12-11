// app/page.tsx

import CategoryList from "@/components/category-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PlaceList from "@/components/place-list";
import SearchBar from "@/components/searchbar";
import { EmblaCarousel } from "@/components/slider";
import { nearbyPlaces } from "@/lib/data";

export default async function Home() {

  const places = await nearbyPlaces();

  return (
      <div className="flex flex-col min-h-svh">
        <Header />

        <main className="flex flex-col gap-4 p-4 flex-1">
          <SearchBar />
          <EmblaCarousel />
          <CategoryList />
          <PlaceList result={places} title="Locais próximos" />
        </main>

        <Footer />
      </div>
  );
}
