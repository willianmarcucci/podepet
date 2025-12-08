import PlaceCard from "./place-card";

const places = [
  { name: "Café do Parque", neighborhood: "Paraíso", city: "São Paulo", dist_meters: 320 },
  { name: "Pátio da Praça", neighborhood: "Jardins", city: "São Paulo", dist_meters: 850 },
  { name: "Bistrô Animal Friendly", neighborhood: "Pinheiros", city: "São Paulo", dist_meters: 1200 },
  { name: "Espaço Verde Café", neighborhood: "Vila Mariana", city: "São Paulo", dist_meters: 600 },
  { name: "Parque Cães & Gente", neighborhood: "Moema", city: "São Paulo", dist_meters: 1500 },
  { name: "Bar do Doguinho", neighborhood: "Brooklin", city: "São Paulo", dist_meters: 2000 },
  { name: "Terraço Pet", neighborhood: "Liberdade", city: "São Paulo", dist_meters: 1100 },
  { name: "Cantinho da Praça", neighborhood: "Aclimação", city: "São Paulo", dist_meters: 900 },
  { name: "Praça dos Peludos", neighborhood: "Ipiranga", city: "São Paulo", dist_meters: 2400 },
  { name: "Vila do Pet", neighborhood: "Tatuapé", city: "São Paulo", dist_meters: 3500 },
  { name: "Casa Amiga", neighborhood: "Santana", city: "São Paulo", dist_meters: 5000 },
  { name: "Pet Coffee House", neighborhood: "Bela Vista", city: "São Paulo", dist_meters: 780 },
  { name: "Pet Garden Lounge", neighborhood: "Higienópolis", city: "São Paulo", dist_meters: 1800 },
  { name: "Estação Pet", neighborhood: "Vila Madalena", city: "São Paulo", dist_meters: 2200 },
  { name: "Refúgio dos Pets", neighborhood: "Lapa", city: "São Paulo", dist_meters: 2600 },
  { name: "Dog Friendly Hub", neighborhood: "Chácara Klabin", city: "São Paulo", dist_meters: 1250 },
  { name: "Parque das Patinhas", neighborhood: "Butantã", city: "São Paulo", dist_meters: 3300 },
  { name: "Café Au Au", neighborhood: "Cambuci", city: "São Paulo", dist_meters: 1400 },
  { name: "Dog Station", neighborhood: "Vila Olímpia", city: "São Paulo", dist_meters: 2100 },
  { name: "Jardim do Pet", neighborhood: "Consolação", city: "São Paulo", dist_meters: 1600 },
];

export default function PlaceList() {
  return (
    <div className="flex flex-col gap-4 mx-4">
      {/* Título sessão */}
      <div>
        <p className="text-xl font-semibold">Locais próximos</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {places.map((p, idx) => (
          <PlaceCard key={idx} name={p.name} neighborhood={p.neighborhood} city={p.city} dist_meters={p.dist_meters} />
        ))}
      </div>
    </div>
  );
}
