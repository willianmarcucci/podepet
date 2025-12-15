// contexts/location-context.tsx

"use client";

import { createContext, useContext, ReactNode } from "react";
import { useGeolocation } from "@/hooks/use-geolocation";

type Coordinates = {
  lat: number;
  long: number;
};

type LocationContextType = {
  coordinates: Coordinates | null;
  error: string | null;
  loading: boolean;
  requestLocation: () => void;
};

const LocationContext = createContext<LocationContextType | null>(null);

export function LocationProvider({ children }: { children: ReactNode }) {
  const geolocation = useGeolocation();

  return (
    <LocationContext.Provider value={geolocation}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  
  if (!context) {
    throw new Error("useLocation deve ser usado dentro de LocationProvider");
  }
  
  return context;
}