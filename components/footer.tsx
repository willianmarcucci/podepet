import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-6 text-center items-center justify-center px-4 py-8 bg-[#F4CE05]">
            <Link href={"/"}><Image src={"/logo.svg"} alt="Pode Pet" width={150} height={50} /></Link>
            <p>PodePet © 2026. Todos os direitos reservados.</p>
        </footer>
    );
}