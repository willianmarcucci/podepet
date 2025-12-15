import Image from "next/image";
import Link from "next/link";

export default function PlaceCard({
  name,
  neighborhood,
  city,
  imageUrl,
  dist_meters,
}: {
  name: string;
  neighborhood: string;
  city: string;
  imageUrl: string;
  dist_meters: number;
}) {
  return (
    <Link href={""} className="space-y-3">
      <Image
        style={{ objectFit: "cover" }}
        src={imageUrl}
        alt={name}
        width={900}
        height={600}
        className="w-full aspect-3/2 rounded-2xl"
      />

      <div className="flex gap-3">
        <div className="flex-1 w-full">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">
            {neighborhood} - {city}
          </p>
        </div>

        <div className="shrink-0">
          <p className="text-sm text-gray-500">
            {dist_meters > 500
              ? `${(dist_meters / 1000).toFixed(1)} km`
              : `${dist_meters.toFixed(0)} m`}
          </p>
        </div>
      </div>
    </Link>
  );
}
