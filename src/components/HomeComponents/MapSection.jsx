"use client";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "250px", // Adjust height as needed
};

const center = {
  lat: 55.80657, // Replace with actual latitude
  lng: 37.504691, // Replace with actual longitude
};

const MapSection = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <section className="w-full bg-gray-100 mt-5">
      <div className="container ">
        <LoadScript
          googleMapsApiKey="AIzaSyA0Eye1UJZe8o9fNNWFF-J_wL_CQiXborI"
          language="ru"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            {/* Marker */}
            <Marker
              position={center}
              onClick={() => setSelectedMarker(center)}
            />

            {/* Info Window (Appears slightly above the marker) */}
            {selectedMarker && (
              <InfoWindow
                position={{
                  lat: center.lat + 0.002, // Move slightly upward
                  lng: center.lng,
                }}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div>
                  <h3 className="font-semibold">PathoLogica Service</h3>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=55.80657,37.504691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 underline"
                  >
                    Как добраться
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default MapSection;
