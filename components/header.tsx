import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-center p-4 bg-[#F4CE05]">
            <Image src={"/logo.svg"} alt="Pode Pet" width={150} height={50} />
        </header>
    );
}