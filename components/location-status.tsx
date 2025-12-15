// components/location-status.tsx

"use client";

import { useLocation } from "@/contexts/location-context";
import { MapPin, Loader2 } from "lucide-react";

export default function LocationStatus() {
  const { loading, error } = useLocation();

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-[#6B290D]">
        <Loader2 className="size-4 animate-spin" />
        <span>Obtendo localização...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm text-[#6B290D]">
      <MapPin className="size-4" />
      <span>
        {error ? "Usando localização padrão (SP)" : "Usando sua localização"}
      </span>
    </div>
  );
}