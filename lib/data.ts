import { createClient } from "./supabase/server";

export async function nearbyPlaces() {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("nearby_places", {
    lat: -23.57758341659117,
    long: -46.62779125260631,
  });

  if (error) {
    console.log(error);
    return [];
  }

  return data;
}

export async function searchNearbyPlaces(searchTerm: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("search_nearby_places", {
    lat: -23.57758341659117,
    long: -46.62779125260631,
    search_term: searchTerm,
  });

  if (error) {
    console.log(error);
    return [];
  }

  return data;
}
