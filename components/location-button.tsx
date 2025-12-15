// components/location-button.tsx

"use client";

import { useLocation } from "@/contexts/location-context";
import { MapPin, Loader2 } from "lucide-react";

export default function LocationButton() {
  const { coordinates, loading, error, requestLocation } = useLocation();

  return (
    <button
      onClick={requestLocation}
      disabled={loading}
      className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-50 transition-colors"
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <MapPin className="size-4" />
      )}
      
      {loading ? (
        "Localizando..."
      ) : error ? (
        "Tentar novamente"
      ) : coordinates ? (
        "Atualizar localização"
      ) : (
        "Usar minha localização"
      )}
    </button>
  );
}