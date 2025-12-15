// app/page.tsx

import CategoryList from "@/components/category-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NearbyPlaces from "@/components/nearby-places";
import SearchBar from "@/components/searchbar";
import { Slider } from "@/components/slider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />

      <main className="max-w-6xl grid self-center w-full grid-cols-2 gap-y-8 md:gap-y-10 gap-x-6 px-4 py-8 md:px-12 md:py-12">
        <SearchBar className="col-span-2" />

        <Slider className="col-span-2 lg:col-span-1" />
        <CategoryList className="col-span-2 grid-cols-3 md:grid-cols-6 lg:col-span-1 lg:grid-cols-3" />

        <NearbyPlaces className="col-span-2" />
      </main>

      <Footer />
    </div>
  );
}