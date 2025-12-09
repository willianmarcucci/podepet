"use server";

import { createClient } from "@/lib/supabase/server";

export async function fetchPlaces() {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("nearby_places", {
    lat: -23.636962203775493,
    long: -46.642099946030164,
  });

  if (error) {
    console.error("Erro ao buscar lugares:", error);
    return [];
  }

  return data;
}
