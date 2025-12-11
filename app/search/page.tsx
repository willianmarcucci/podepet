// app/search/page.tsx

import Footer from "@/components/footer";
import Header from "@/components/header";
import PlaceList from "@/components/place-list";
import SearchBar from "@/components/searchbar";
import { searchNearbyPlaces } from "@/lib/data";

type SearchParams = { q?: string };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams> | SearchParams;
}) {
  const params = await searchParams;
  const q = params.q ?? "";

  const places = await searchNearbyPlaces(q);

  return (
      <div className="flex flex-col min-h-svh">
        <Header />

        <main className="flex flex-col gap-4 p-4 flex-1">
          <SearchBar />
          <PlaceList result={places} title={`Resultados para ${q}`} />
        </main>

        <Footer />
      </div>
  );
}
