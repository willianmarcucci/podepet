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

import { Star } from "lucide-react";

// Inspo: https://dribbble.com/shots/26803134-Listings-Navigation-Lookscout-Design-System

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
      <PlaceItem />
    </div>
  );
}
