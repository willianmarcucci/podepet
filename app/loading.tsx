import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-svh p-4 bg-[#F4CE05]">
      <Image src={"/logo.svg"} alt="Pode Pet" width={200} height={50} />
    </div>
  );
}
