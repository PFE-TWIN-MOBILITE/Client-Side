import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "./Maps.css"
import Counters from "../../data/counters.json"



// Create a custom marker icon
const DefaultIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

// Set the custom icon as the default icon for all markers
L.Marker.prototype.options.icon = DefaultIcon;
const Maps = () => {
  useEffect(() => {
    const map = L.map("map").setView([47.312666, 5.041106], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
    }).addTo(map);

    const markers = L.markerClusterGroup(); // Create a marker cluster group
    Counters.forEach((markerData) => {
      const marker = L.marker([markerData.controller_lat, markerData.controller_long]);
      marker.bindPopup(`<b>${markerData.measuring_station}</b>`); // Customize the popup content as needed.
      markers.addLayer(marker);
    });

    
    map.addLayer(markers); // Add the marker cluster group to the map
    // tajet
    L.Routing.control({
      waypoints: [
        L.latLng(47.312666, 5.041106), // Starting point
        L.latLng(47.3266818, 5.053012893), // Ending point
      ],
      geocoder: L.Control.Geocoder.nominatim(),
      fitSelectedRoutes: true,
    }).addTo(map);
  }, []);
  return <div id="map" className="map-container" />;

};

export default Maps;