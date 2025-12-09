"use server";

import { createClient } from "@/lib/supabase/server";

export async function fetchPlaces(lat: number, long: number) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("nearby_places", {
    lat: lat,
    long: long,
  });

  if (error) {
    console.error("Erro ao buscar lugares:", error);
    return [];
  }

  return data;
}
