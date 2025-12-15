"use client"

import Link from "next/link";
import PlaceCard from "./place-card";

export default function PlaceList({result, title, className, verTodos} : {result: any, title: string, className: string, verTodos?:boolean}) {

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* Título sessão */}
      <div className="flex gap-3 justify-between items-baseline">
        <p className="text-xl font-semibold">{title}</p>
        {verTodos && <Link href={""} className="font-semibold">Ver todos</Link>}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6">
        {result.map((p: any) => (
          <PlaceCard key={p.id} imageUrl={p.image_url} name={p.name} neighborhood={p.neighborhood} city={p.city} dist_meters={p.dist_meters} />
        ))}
      </div>
    </div>
  );
}
