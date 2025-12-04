import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "./ui/item";

export default function PlaceItem() {
  return (
    <Item variant={"outline"}>
      <ItemHeader>
        <div className="h-40 bg-muted aspect-square rounded-sm w-full"></div>
      </ItemHeader>
      <ItemContent>
        <ItemTitle>Shopping Pátio Paulista</ItemTitle>
        <ItemDescription>à 320 metros</ItemDescription>
      </ItemContent>
    </Item>
  );
}
