import Button from "@/components/button";
import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import Input from "@/components/input";
import PlaceList from "@/components/place-list";
import SearchBar from "@/components/searchbar";

export default function Home() {
  return (
    <div className="grid gap-6">
      <Header />
      <SearchBar />
      <CategoryList />
      <PlaceList />
    </div>
  );
}
