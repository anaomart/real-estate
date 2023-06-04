import React, { useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
export default function Map({ lat, lng }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA-HkGNPyZQYsaxzHMqJ0xH0nCqFC8f7q0",
  });
  const center = useMemo(() => ({ lat, lng }), []);
  if (!isLoaded) return <div>Loading ...</div>;
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
