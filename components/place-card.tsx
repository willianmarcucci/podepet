import Image from "next/image";
import Link from "next/link";

export default function PlaceCard({name, neighborhood, city, imageUrl, dist_meters} : {name: string, neighborhood: string, city: string, imageUrl: string, dist_meters: number}) {
  
  return (
    <Link href={""} className="space-y-3">
      {/* Imagem */}
      <Image style={{objectFit: "cover"}} src={imageUrl} alt={name} width={600} height={600} className="h-60 w-full bg-gray-300 rounded-2xl" />

      {/* Informações */}
      <div className="flex gap-3 px-3">
        
        {/* Nome e endereço */}
        <div className="w-full">
          <p className="font-semibold">{name}</p>
          <p>{neighborhood} - {city}</p>
        </div>

        {/* Distância */}
        <div>
          <p className="whitespace-nowrap">{dist_meters > 500 ? `${(dist_meters / 1000).toFixed(1)} km` : `${dist_meters.toFixed(0)} m`}</p>
        </div>
      </div>
    </Link>
  );
}
