"use client"

import { fetchPlaces } from "@/app/actions";
import PlaceCard from "./place-card";
import { useEffect, useState } from "react";

type Place = {
  id: string | number;
  name: string;
  neighborhood: string;
  city: string;
  dist_meters: number;
  image_url: string;
};

export default function PlaceList() {

  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
      async function load() {
        const data = await fetchPlaces();
        console.log(data);
        setPlaces(data)
      }
      load();
    }, []);

  return (
    <div className="flex flex-col gap-4 mx-4">
      {/* Título sessão */}
      <div>
        <p className="text-xl font-semibold">Locais próximos</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {places.map((p) => (
          <PlaceCard key={p.id} imageUrl={p.image_url} name={p.name} neighborhood={p.neighborhood} city={p.city} dist_meters={p.dist_meters} />
        ))}
      </div>
    </div>
  );
}
