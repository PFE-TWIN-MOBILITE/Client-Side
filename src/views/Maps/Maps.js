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

    

    // Create markers and add them to the marker cluster group
    // const marker1 = L.marker([47.312666, 5.041106]);
    // marker1.bindPopup("<b>2-12 Rue le Notre, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker1);

    // const marker2 = L.marker([47.3266818, 5.053012893]);
    // marker2.bindPopup("<b>2 Bd de Verdun, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker2);

    // const marker3 = L.marker([47.30254944, 5.070800632]); // Coordonnées du deuxième marqueur
    // marker3.bindPopup("<b>Poussots, Dijon</b>").openPopup();
    // markers.addLayer(marker3);

    // const marker4 = L.marker([47.30402634, 5.009223819]); // Coordonnées du deuxième marqueur
    // marker4.bindPopup("<b>1 Rue Henri Dunant A, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker4);

    // const marker5 = L.marker([47.30901833, 5.037947595]); // Coordonnées du deuxième marqueur
    // marker5.bindPopup("<b>Parc-Chevreul, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker5);

    // const marker6 = L.marker([47.32963, 5.02449]); // Coordonnées du deuxième marqueur
    // marker6.bindPopup("<b>2 Rue Philippe , 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker6);

    // const marker7 = L.marker([47.31258, 5.06233]); // Coordonnées du deuxième marqueur
    // marker7.bindPopup("<b>4 Bd Dr Petitjean, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker7);

    // const marker8 = L.marker([47.3004, 5.0601]); // Coordonnées du deuxième marqueur
    // marker8.bindPopup("<b>68 Rue des Tamaris, 21600 Longvic</b>").openPopup();
    // markers.addLayer(marker8);

    // const marker9 = L.marker([47.34125917, 5.05185619]); // Coordonnées du deuxième marqueur
    // marker9.bindPopup("<b>24 Bd Maréchal Joffre, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker9);

    // const marker10 = L.marker([47.30508921, 5.052681305]); // Coordonnées du deuxième marqueur
    // marker10.bindPopup("<b>18 Bd Robert Schuman, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker10);

    // const marker11 = L.marker([47.30583377, 5.034121424]); // Coordonnées du deuxième marqueur
    // marker11.bindPopup("<b>38 Rue du Goujon, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker11);

    // const marker12 = L.marker([47.30367304, 5.024812147]); // Coordonnées du deuxième marqueur
    // marker12.bindPopup("<b>4 Bd Edmé Nicolas, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker12);

    // const marker13 = L.marker([47.31417124, 5.019792393]); // Coordonnées du deuxième marqueur
    // marker13.bindPopup("<b>54 Av. Gustave Eiffel, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker13);

    // const marker14 = L.marker([47.33669966, 5.033370405]); // Coordonnées du deuxième marqueur
    // marker14.bindPopup("<b>56 Rue des Maziéres, 21121 Dijon</b>").openPopup();
    // markers.addLayer(marker14);

    // const marker15 = L.marker([47.31698481, 5.065585077]); // Coordonnées du deuxième marqueur
    // marker15.bindPopup("<b>25 Bd Gabriel A, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker15);

    // const marker16 = L.marker([47.32049872, 4.999034777]); // Coordonnées du deuxième marqueur
    // marker16.bindPopup("<b>32 Rue Tire Psseau, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker16);

    // const marker17 = L.marker([47.31184809, 5.039165989]); // Coordonnées du deuxième marqueur
    // marker17.bindPopup("<b>60 Rue Daubenton, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker17);

    // const marker18 = L.marker([47.32977103, 4.998109415]); // Coordonnées du deuxième marqueur
    // marker18.bindPopup("<b> 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker18);

    // const marker19 = L.marker([47.29651223, 5.023070723]); // Coordonnées du deuxième marqueur
    // marker19.bindPopup("<b>33 Rue  Aristide, 21300 Chenôve</b>").openPopup();
    // markers.addLayer(marker19);

    // const marker20 = L.marker([47.33411391, 5.015788525]); // Coordonnées du deuxième marqueur
    // marker20.bindPopup("<b>162B Av. Victor Hugo, 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker20);

    // const marker21 = L.marker([47.33528047, 5.025832057]); // Coordonnées du deuxième marqueur
    // marker21.bindPopup("<b>D107, 21121 Fontaine-lès-Dijon</b>").openPopup();
    // markers.addLayer(marker21);

    // const marker22 = L.marker([47.33959064, 5.041870996]); // Coordonnées du deuxième marqueur
    // marker22.bindPopup("<b>19 Bd Maréchal , 21000 Dijon</b>").openPopup();
    // markers.addLayer(marker22);
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