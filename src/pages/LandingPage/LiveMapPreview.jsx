import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";
import "mapbox-gl-style-switcher/styles.css";

const markers = [
  { lat: 28.6315, lng: 77.2167, label: "Connaught Place - High Demand" },
  { lat: 19.1197, lng: 72.8464, label: "Andheri - Evening Rush" },
  { lat: 12.9352, lng: 77.6245, label: "Koramangala - Strong Footfall" },
];

export default function LiveMapPreview() {
  const [currentView, setCurrentView] = useState("Global");
  const [isHovering, setIsHovering] = useState(false);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  const defaultCenter = { lat: 28.6315, lng: 77.2167 };
  const globalCenter = { lat: 21.0, lng: 78.0 };

  useEffect(() => {
    if (!token) return;
    if (!mapContainerRef.current || mapRef.current) return;

    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [globalCenter.lng, globalCenter.lat],
      zoom: 3.4,
    });
    mapRef.current = map;

    map.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      "top-right"
    );

    const styles = [
      { title: "Streets", uri: "mapbox://styles/mapbox/streets-v12" },
      {
        title: "Satellite",
        uri: "mapbox://styles/mapbox/satellite-streets-v12",
      },
      { title: "Dark", uri: "mapbox://styles/mapbox/dark-v11" },
    ];
    map.addControl(new MapboxStyleSwitcherControl(styles), "top-left");

    map.on("load", () => {
      markers.forEach((m) => {
        const popup = new mapboxgl.Popup({ offset: 24 }).setText(m.label);
        new mapboxgl.Marker()
          .setLngLat([m.lng, m.lat])
          .setPopup(popup)
          .addTo(map);
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [token]);

  const handleMouseEnter = () => {
    if (mapRef.current && currentView === "Global") {
      setIsHovering(true);
      setCurrentView("City");

      mapRef.current.flyTo({
        center: [defaultCenter.lng, defaultCenter.lat],
        zoom: 11,
        duration: 2500,
        essential: true,
      });
    }
  };

  const handleMouseLeave = () => {
    if (mapRef.current && currentView === "City") {
      setIsHovering(false);
      setCurrentView("Global");

      mapRef.current.flyTo({
        center: [globalCenter.lng, globalCenter.lat],
        zoom: 3.4,
        duration: 2000,
        essential: true,
      });
    }
  };

  return (
    <section id="live-map" className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-gray-900 dark:text-white">
          Live Demand Map
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Hover to zoom into a high-demand zone. Move away for the wider city view.
        </p>
        <div
          className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-800 relative cursor-pointer transition-all duration-300 hover:shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {!token ? (
            <div className="w-full h-full flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
              Set VITE_MAPBOX_TOKEN in client1/.env to view the map.
            </div>
          ) : (
            <>
              <div ref={mapContainerRef} className="w-full h-full" />

              {currentView === "Global" && (
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200 dark:border-neutral-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    India Demand View
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Hover to explore Delhi, Mumbai, Bengaluru
                  </p>
                </div>
              )}

              {currentView === "City" && (
                <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-blue-500">
                  <p className="text-sm text-white font-medium">
                    Connaught Place
                  </p>
                  <p className="text-xs text-blue-100 mt-1">
                    Best time: 6-9 PM · Footfall 2,000+
                  </p>
                </div>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                {isHovering ? "Exploring demand zones..." : "Hover to zoom in"}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}