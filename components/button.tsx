import { Search } from "lucide-react";

export default function Button() {
    return (
        <button className="h-16 w-16 rounded-full bg-gray-300 flex justify-center items-center shrink-0">
            <Search />
        </button>
    );
}