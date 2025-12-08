import PlaceCard from "./place-card";

export default function PlaceList() {
  return (
    <div className="flex flex-col gap-4 mx-4">
      {/* Título sessão */}
      <div>
        <p className="text-xl font-semibold">Locais próximos</p>
      </div>

      {/* Cards */}
      <div className="grid gap-6">
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </div>
    </div>
  );
}
