import Image from "next/image"
import Link from "next/link";

export default function CategoryCard({name, iconUrl} : {name:string, iconUrl: string}) {
    return (
        <Link href={""} className="bg-[#fbf1ed] hover:bg-[#f9eae4] font-medium text-[#4c2819] w-full h-28 rounded-2xl flex flex-col justify-end items-center p-3 gap-2 text-xs">
            <Image width={65} height={65} alt={name} src={iconUrl} />
            <p>{name}</p>
        </Link>
    );
}