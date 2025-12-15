// components/place-card.tsx

import Image from "next/image";
import Link from "next/link";
import { Place } from "@/types";

type PlaceCardProps = Omit<Place, "image_url"> & {
  imageUrl: string;
};

function formatDistance(meters: number): string {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(1)} km`;
  }
  return `${Math.round(meters)} m`;
}

export default function PlaceCard({
  id,
  name,
  neighborhood,
  city,
  imageUrl,
  dist_meters,
}: PlaceCardProps) {
  return (
    <Link href={`/place/${id}`} className="group space-y-3">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={`Foto de ${name}`}
          width={900}
          height={600}
          className="w-full aspect-3/2 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{name}</p>
          <p className="text-sm text-gray-500 truncate">
            {neighborhood} - {city}
          </p>
        </div>

        <div className="shrink-0">
          <p className="text-sm text-gray-500">{formatDistance(dist_meters)}</p>
        </div>
      </div>
    </Link>
  );
}