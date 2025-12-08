import Link from "next/link";

export default function PlaceCard({name, neighborhood, city, dist_meters} : {name: string, neighborhood: string, city: string, dist_meters: number}) {
  return (
    <Link href={""} className="space-y-3">
      {/* Imagem */}
      <div className="h-60 w-full bg-gray-300 rounded-2xl"></div>

      {/* Informações */}
      <div className="flex gap-3 px-3">
        {/* Nome e endereço */}
        <div className="w-full">
          <p className="font-semibold">{name}</p>
          <p>{neighborhood} - {city}</p>
        </div>

        {/* Distância */}
        <div>
          <p className="whitespace-nowrap">{dist_meters}m</p>
        </div>
      </div>
    </Link>
  );
}
