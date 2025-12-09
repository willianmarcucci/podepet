"use client";

import { fetchPlaces } from "@/app/actions";
import PlaceCard from "./place-card";
import { useEffect, useState } from "react";

export default function PlaceList() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError("Geolocation não suportado pelo navegador.");
      setLoading(false);
      return;
    }

    // Função async separada para poder usar await
    async function loadNearby(lat: number, long: number) {
      try {
        // ATENÇÃO: fetchPlaces precisa ser chamável do cliente.
        // Se fetchPlaces for uma server action, exponha uma rota API ou faça a chamada fetch() a uma API.
        const data = await fetchPlaces(lat, long);
        setPlaces(data ?? []);
      } catch (err) {
        console.error("Erro ao buscar lugares:", err);
        setError("Erro ao buscar lugares.");
      } finally {
        setLoading(false);
      }
    }

    const onSuccess = (pos: GeolocationPosition) => {
      loadNearby(pos.coords.latitude, pos.coords.longitude);
    };

    const onError = (err: GeolocationPositionError) => {
      console.error("Erro geolocation:", err);
      setError(err.message || "Permissão de localização negada.");
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 10000, // 10s
      maximumAge: 60_000, // 1min
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-6">
        <p>Carregando locais próximos…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-600">Erro: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 mx-4">
      <div>
        <p className="text-xl font-semibold">Locais próximos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {places.map((p) => (
          <PlaceCard
            key={p.id}
            name={p.name}
            neighborhood={p.neighborhood}
            city={p.city}
            dist_meters={p.dist_meters}
          />
        ))}
      </div>
    </div>
  );
}
