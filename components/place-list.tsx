"use client"

import PlaceCard from "./place-card";

export default function PlaceList({result, title} : {result: any, title: string}) {

  return (
    <div className="flex flex-col gap-4">
      {/* Título sessão */}
      <div>
        <p className="text-xl font-semibold">{title}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {result.map((p: any) => (
          <PlaceCard key={p.id} imageUrl={p.image_url} name={p.name} neighborhood={p.neighborhood} city={p.city} dist_meters={p.dist_meters} />
        ))}
      </div>
    </div>
  );
}
