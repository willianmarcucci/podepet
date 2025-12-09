"use client";

import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import PlaceList from "@/components/place-list";
import SearchBar from "@/components/searchbar";
import { EmblaCarousel } from "@/components/slider";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <Header />
        <SearchBar />
        <EmblaCarousel />
        <CategoryList />
        <PlaceList />
      </div>
    </div>
  );
}
