// hooks/use-geolocation.ts

import { useState, useEffect, useCallback } from "react";

type Coordinates = {
  lat: number;
  long: number;
};

type GeolocationState = {
  coordinates: Coordinates | null;
  error: string | null;
  loading: boolean;
};

const DEFAULT_COORDINATES: Coordinates = {
  lat: -23.57758341659117,
  long: -46.62779125260631,
};

const STORAGE_KEY = "user-location";

// Helper para acessar sessionStorage de forma segura (evita erros no SSR)
function getStoredLocation(): Coordinates | null {
  if (typeof window === "undefined") return null;
  
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function setStoredLocation(coords: Coordinates): void {
  if (typeof window === "undefined") return;
  
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(coords));
  } catch {
    // Silently fail if storage is not available
  }
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    loading: true,
  });

  const requestLocation = useCallback(() => {
    if (typeof window === "undefined") return;
    
    if (!navigator.geolocation) {
      setState({
        coordinates: DEFAULT_COORDINATES,
        error: "Geolocalização não suportada",
        loading: false,
      });
      return;
    }

    setState((prev) => ({ ...prev, loading: true }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords: Coordinates = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
        
        setStoredLocation(coords);
        
        setState({
          coordinates: coords,
          error: null,
          loading: false,
        });
      },
      (error) => {
        let errorMessage = "Erro ao obter localização";
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Permissão de localização negada";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Localização indisponível";
            break;
          case error.TIMEOUT:
            errorMessage = "Tempo esgotado ao obter localização";
            break;
        }

        setState({
          coordinates: DEFAULT_COORDINATES,
          error: errorMessage,
          loading: false,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  useEffect(() => {
    const stored = getStoredLocation();
    
    if (stored) {
      setState({
        coordinates: stored,
        error: null,
        loading: false,
      });
      return;
    }

    requestLocation();
  }, [requestLocation]);

  return {
    ...state,
    requestLocation,
    defaultCoordinates: DEFAULT_COORDINATES,
  };
}