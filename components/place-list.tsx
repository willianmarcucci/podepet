// components/place-list.tsx

import Link from "next/link";
import PlaceCard from "./place-card";
import { Place } from "@/types";

type PlaceListProps = {
  places: Place[];
  title: string;
  className?: string;
  verTodos?: boolean;
};

export default function PlaceList({
  places,
  title,
  className,
  verTodos,
}: PlaceListProps) {
  return (
    <section className={`flex flex-col gap-6 ${className}`}>
      <div className="flex gap-3 justify-between items-baseline">
        <h2 className="text-xl font-semibold">{title}</h2>
        {verTodos && (
          <Link href="/search" className="font-semibold hover:underline">
            Ver todos
          </Link>
        )}
      </div>

      {places.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          Nenhum lugar encontrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              id={place.id}
              name={place.name}
              neighborhood={place.neighborhood}
              city={place.city}
              imageUrl={place.image_url}
              dist_meters={place.dist_meters}
            />
          ))}
        </div>
      )}
    </section>
  );
}