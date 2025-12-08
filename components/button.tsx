import { Search } from "lucide-react";

export default function Button() {
    return (
        <button className="size-12 rounded-full bg-[#D87148] hover:bg-[#c26641] text-white flex justify-center items-center shrink-0">
            <Search />
        </button>
    );
}