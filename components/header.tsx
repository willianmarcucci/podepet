import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center px-4 py-6 md:px-12 md:py-6 bg-[#F4CE05]">
      <div className="max-w-5xl w-full flex justify-center md:justify-start ">

        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="Pode Pet" width={149} height={36} />
        </Link>
      
      </div>
    </header>
  );
}
