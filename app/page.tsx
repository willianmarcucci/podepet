// app/page.tsx

import CategoryList from "@/components/category-list";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PlaceList from "@/components/place-list";
import SearchBar from "@/components/searchbar";
import { Slider } from "@/components/slider";
import { nearbyPlaces } from "@/lib/data";

export default async function Home() {

  const places = await nearbyPlaces();

  return (
      <div className="flex flex-col min-h-svh">
        <Header />

        <main className="max-w-6xl grid self-center w-full grid-cols-2 gap-y-8 md:gap-y-10 gap-x-6 px-4 py-8 md:px-12 md:py-12">
          
          {/* Barra de busca */}
          <SearchBar className="col-span-2" />

          {/* Banner e categorias */}
          <Slider className="col-span-2 lg:col-span-1" />
          <CategoryList className="col-span-2 grid-cols-3 md:grid-cols-6 lg:col-span-1 lg:grid-cols-3" />

          <PlaceList verTodos title="Locais próximos" result={places} className="col-span-2" />

        </main>

        <Footer />
      </div>
  );
}
