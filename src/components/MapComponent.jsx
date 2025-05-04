// components/MapComponent.jsx
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "1rem",
};

const center = {
  lat: 5.6506,
  lng: -0.1869,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png" />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
