import Banner from "@/components/banner";
import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import PlaceList from "@/components/place-list";
import SearchBar from "@/components/searchbar";

export default function Home() {
  return (
    <div>
      <div className="grid gap-6">
        <Header />
        <SearchBar />
        <Banner />
        <CategoryList />
        <PlaceList />
      </div>
    </div>
  );
}
