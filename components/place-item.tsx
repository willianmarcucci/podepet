import { FaStar } from "react-icons/fa";

export default function PlaceItem() {
  return (
    <div className="flex gap-4 items-center">
      {/* Imagem */}
      <div className="h-[72px] w-[72px] bg-muted rounded-lg shrink-0"></div>

      <div className="flex gap-4 w-full">
        {/* Informações */}
        <div className="flex flex-col w-full">
          <p className="text-xs text-muted-foreground">0.3 km</p>
          <p className="text-sm font-semibold">Parque da Aclimação</p>
          <p className="text-xs text-muted-foreground">Aclimação - São Paulo</p>
        </div>

        {/* Avaliações */}
        <div>
          <div className="flex gap-1 items-center">
            <span className="text-sm font-semibold">4.5</span>
            <FaStar className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
