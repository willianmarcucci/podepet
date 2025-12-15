// components/nearby-places.tsx

"use client";

import { useEffect, useState } from "react";
import { useLocation } from "@/contexts/location-context";
import { fetchNearbyPlaces, fetchSearchPlaces } from "@/actions/places";
import { Place } from "@/types";
import PlaceList from "./place-list";
import { Loader2 } from "lucide-react";

type NearbyPlacesProps = {
  searchTerm?: string;
  className?: string;
};

export default function NearbyPlaces({ searchTerm, className }: NearbyPlacesProps) {
  const { coordinates, loading: locationLoading } = useLocation();
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Guard clause - não faz fetch se não tiver coordenadas
    if (!coordinates) {
      setLoading(false);
      return;
    }

    async function loadPlaces() {
      // Segundo check para garantir que coordinates existe (TypeScript narrowing)
      if (!coordinates) return;
      
      setLoading(true);

      try {
        const data = searchTerm
          ? await fetchSearchPlaces(searchTerm, coordinates)
          : await fetchNearbyPlaces(coordinates);

        setPlaces(data);
      } catch (error) {
        console.error("Erro ao carregar lugares:", error);
        setPlaces([]);
      } finally {
        setLoading(false);
      }
    }

    loadPlaces();
  }, [coordinates, searchTerm]);

  if (locationLoading || loading) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 gap-3 ${className}`}>
        <Loader2 className="size-8 animate-spin text-[#ff621f]" />
        <p className="text-gray-500">
          {locationLoading ? "Obtendo sua localização..." : "Carregando lugares..."}
        </p>
      </div>
    );
  }

  // Caso coordinates seja null após carregar (edge case)
  if (!coordinates) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 gap-3 ${className}`}>
        <p className="text-gray-500">
          Não foi possível obter sua localização. Tente novamente.
        </p>
      </div>
    );
  }

  const title = searchTerm ? `Resultados para "${searchTerm}"` : "Locais próximos";

  return (
    <PlaceList
      places={places}
      title={title}
      verTodos={!searchTerm}
      className={className}
    />
  );
}