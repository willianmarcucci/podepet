import Button from "./button";
import Input from "./input";

export default function SearchBar() {
    return (
        <div className="flex gap-3 mx-4">
            <Input />
            <Button />
        </div>
    );
}