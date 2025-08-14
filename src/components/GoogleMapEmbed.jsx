// src/components/GoogleMapEmbed.jsx
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "610px",
  borderRadius: "6px",
};

const center = {
  lat: 26.2389,
  lng: 73.0243,
};

export default function GoogleMapEmbed() {
  return (
    <div className="mil-map-frame">
      <LoadScript googleMapsApiKey="AIzaSyA85T9MI0IKiEAFL1ltvTUsiR5zsNFZAwE">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}