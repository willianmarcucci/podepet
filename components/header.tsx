import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-center p-4 bg-[#F4CE05]">
            <Link href={"/"}><Image src={"/logo.svg"} alt="Pode Pet" width={150} height={50} /></Link>
        </header>
    );
}