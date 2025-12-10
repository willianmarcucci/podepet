import { Search } from "lucide-react";

export default function Button() {
    return (
        <button className="size-12 rounded-full bg-[#ff621f] hover:bg-[#e8591c] text-white flex justify-center items-center shrink-0">
            <Search />
        </button>
    );
}