// app/search/page.tsx

import Footer from "@/components/footer";
import Header from "@/components/header";
import NearbyPlaces from "@/components/nearby-places";
import SearchBar from "@/components/searchbar";

type SearchParams = { q?: string };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams> | SearchParams;
}) {
  const params = await searchParams;
  const q = params.q ?? "";

  return (
    <div className="flex flex-col min-h-svh">
      <Header />

      <main className="max-w-6xl grid self-center w-full grid-cols-2 gap-y-8 md:gap-y-10 gap-x-6 px-4 py-8 md:px-12 md:py-12">
        <SearchBar className="col-span-2" defaultValue={q} />

        <NearbyPlaces searchTerm={q} className="col-span-2" />
      </main>

      <Footer />
    </div>
  );
}