import Image from "next/image"
import Link from "next/link";

export default function CategoryCard({name, iconUrl} : {name:string, iconUrl: string}) {
    return (
        <Link href={""} className="bg-[#FFEFE9] w-full h-full rounded-2xl flex flex-col justify-center items-center p-3 text-xs text-[#6B290D] hover:bg-[#FFCEBA]">
            <Image width={100} height={100} alt={name} src={iconUrl} />
            <p>{name}</p>
        </Link>
    );
}