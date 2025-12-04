import PlaceItem from "@/components/place-item";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

export default function Home() {
  return (
    <div>
      <div className="p-6 mx-auto max-w-6xl grid gap-2">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Locais próximos</h2>
          <Button variant={"link"}>Ver todos</Button>
        </div>

        <ItemGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
        </ItemGroup>
      </div>

      <div className="p-6 mx-auto max-w-6xl grid gap-2">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Hotéis</h2>
          <Button variant={"link"}>Ver todos</Button>
        </div>

        <ItemGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
        </ItemGroup>
      </div>

      <div className="p-6 mx-auto max-w-6xl grid gap-2">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Pontos de hidratação</h2>
          <Button variant={"link"}>Ver todos</Button>
        </div>

        <ItemGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
        </ItemGroup>
      </div>
    </div>
  );
}
