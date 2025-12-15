// actions/places.ts

"use server";

import { createClient } from "@/lib/supabase/server";
import { Place } from "@/types";

type Coordinates = {
  lat: number;
  long: number;
};

type PlacesResult = {
  data: Place[];
  error: string | null;
};

export async function fetchNearbyPlaces(coords: Coordinates): Promise<Place[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("nearby_places", {
    lat: coords.lat,
    long: coords.long,
  });

  if (error) {
    console.error("Erro ao buscar lugares próximos:", error.message);
    return [];
  }

  return data ?? [];
}

export async function fetchSearchPlaces(
  searchTerm: string,
  coords: Coordinates
): Promise<Place[]> {
  // Sanitiza o termo de busca
  const sanitizedTerm = searchTerm.trim();
  
  if (!sanitizedTerm) {
    return fetchNearbyPlaces(coords);
  }

  const supabase = await createClient();

  const { data, error } = await supabase.rpc("search_nearby_places", {
    lat: coords.lat,
    long: coords.long,
    search_term: sanitizedTerm,
  });

  if (error) {
    console.error("Erro ao buscar lugares:", error.message);
    return [];
  }

  return data ?? [];
}

// Versão com resultado estruturado (útil para tratamento de erro no cliente)
export async function fetchNearbyPlacesWithResult(
  coords: Coordinates
): Promise<PlacesResult> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("nearby_places", {
    lat: coords.lat,
    long: coords.long,
  });

  if (error) {
    console.error("Erro ao buscar lugares próximos:", error.message);
    return { data: [], error: error.message };
  }

  return { data: data ?? [], error: null };
}

export async function fetchSearchPlacesWithResult(
  searchTerm: string,
  coords: Coordinates
): Promise<PlacesResult> {
  const sanitizedTerm = searchTerm.trim();
  
  if (!sanitizedTerm) {
    return fetchNearbyPlacesWithResult(coords);
  }

  const supabase = await createClient();

  const { data, error } = await supabase.rpc("search_nearby_places", {
    lat: coords.lat,
    long: coords.long,
    search_term: sanitizedTerm,
  });

  if (error) {
    console.error("Erro ao buscar lugares:", error.message);
    return { data: [], error: error.message };
  }

  return { data: data ?? [], error: null };
}