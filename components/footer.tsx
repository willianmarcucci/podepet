// components/footer.tsx

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FEFAE6] px-4 py-6 md:px-12 flex justify-center mt-auto">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between gap-3 items-center">
        <Link href="/" aria-label="Página inicial">
          <Image src="/logo.svg" alt="Pode Pet" width={149} height={36} />
        </Link>
        <p className="text-sm">
          PodePet © {currentYear}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}