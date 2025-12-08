export default function PlaceCard() {
  return (
    <div className="space-y-3">
      {/* Imagem */}
      <div className="h-60 w-full bg-gray-300 rounded-2xl"></div>

      {/* Informações */}
      <div className="flex gap-3 px-3">
        {/* Nome e endereço */}
        <div className="w-full">
          <p className="font-semibold">Praça Barão de Japurá</p>
          <p>Vila Guarani - São Paulo</p>
        </div>

        {/* Distância */}
        <div>
          <p className="whitespace-nowrap">0.3 km</p>
        </div>
      </div>
    </div>
  );
}
