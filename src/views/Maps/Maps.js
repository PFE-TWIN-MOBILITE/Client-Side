// import React, { useEffect } from "react";
// import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
// import L from "leaflet";
// import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import "leaflet.markercluster/dist/MarkerCluster.css";
// import "leaflet.markercluster/dist/MarkerCluster.Default.css";
// import "leaflet.markercluster";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
// import "./Maps.css"
// import Counters from "../../data/counters.json"
// import Mesures from "../../data/mesure.json"


// // Create a custom marker icon
// const DefaultIcon = L.icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
//   iconSize: [38, 38],
//   iconAnchor: [10, 41],
//   popupAnchor: [2, -40],
// });

// // Set the custom icon as the default icon for all markers
// L.Marker.prototype.options.icon = DefaultIcon;
// const Maps = () => {
//   useEffect(() => {
//     const map = L.map("map").setView([47.312666, 5.041106], 13);

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
//     }).addTo(map);

//     const markers = L.markerClusterGroup(); // Create a marker cluster group
//     Counters.forEach((markerData) => {
//       const marker = L.marker([markerData.controller_lat, markerData.controller_long]);
//       marker.bindPopup(`<b>${markerData.measuring_station}</b>`); // Customize the popup content as needed.
//       markers.addLayer(marker);
//     });

    
//     map.addLayer(markers); // Add the marker cluster group to the map
//     // tajet
//     L.Routing.control({
//       waypoints: [
//         L.latLng(47.312666, 5.041106), // Starting point
//         L.latLng(47.3266818, 5.053012893), // Ending point
//       ],
//       geocoder: L.Control.Geocoder.nominatim(),
//       fitSelectedRoutes: true,
//     }).addTo(map);
//   }, []);
//   return <div id="map" className="map-container" />;

// };

// export default Maps;

import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "./Maps.css";
import Counters from "../../data/counters.json";
import Mesures from "../../data/mesure.json";

const DefaultIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

L.Marker.prototype.options.icon = DefaultIcon;

function calculateColor(value, maxValue) {
  const green = Math.min(255, Math.floor((1 - value / maxValue) * 255));
  const red = Math.min(255, Math.floor((value / maxValue) * 255));
  return `rgb(${red}, ${green}, 0)`;
}

const Maps = () => {
  useEffect(() => {
    const map = L.map("map").setView([47.312666, 5.041106], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
    }).addTo(map);

    const markers = L.markerClusterGroup({
      iconCreateFunction: function (cluster) {
        const markersInCluster = cluster.getAllChildMarkers();
        let sum = 0;
        markersInCluster.forEach((marker) => {
          const counterId = marker.options.counterId;
          const mesure = Mesures.find((m) => m.id_capteur === counterId);
          if (mesure) {
            sum += mesure.valeur;
          }
        });

        const backgroundColor = calculateColor(sum, 1000); // 1000 est la valeur maximale (à adapter à vos données)
   
        console.log(backgroundColor)

        const clusterIcon = L.divIcon({
          html: `${sum} nb/v/h </div>`,
          iconSize: [36, 36],
          iconAnchor: [18, 18],
          className: "custom-cluster-icon",
        });
        

        return clusterIcon;
      },
    });

    Counters.forEach((counterData) => {
      const marker = L.marker([
        counterData.controller_lat,
        counterData.controller_long,
      ]);
    
      marker.options.counterId = counterData.id;
    
      const mesure = Mesures.find((m) => m.id_capteur === counterData.id);
    
      if (mesure) {
        marker.bindPopup(`<b>${counterData.measuring_station}</b><br>Valeur : ${mesure.valeur} nb/v/h`);
      } else {
        marker.bindPopup(`<b>${counterData.measuring_station}</b><br>Pas de mesure disponible`);
      }
    
      markers.addLayer(marker);
    });
    

    map.addLayer(markers);

    L.Routing.control({
      waypoints: [
        L.latLng(47.312666, 5.041106),
        L.latLng(47.3266818, 5.053012893),
      ],
      geocoder: L.Control.Geocoder.nominatim(),
      fitSelectedRoutes: true,
    }).addTo(map);
  }, []);

  return <div id="map" className="map-container" />;
};

export default Maps;
