// lib/data.ts

import { createClient } from "./supabase/server";
import { Place } from "@/types";

export async function nearbyPlaces(lat: number, long: number): Promise<Place[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("nearby_places", {
    lat,
    long,
  });

  if (error) {
    console.error("Error fetching nearby places:", error);
    return [];
  }

  return data ?? [];
}

export async function searchNearbyPlaces(
  searchTerm: string,
  lat: number,
  long: number
): Promise<Place[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("search_nearby_places", {
    lat,
    long,
    search_term: searchTerm,
  });

  if (error) {
    console.error("Error searching places:", error);
    return [];
  }

  return data ?? [];
}