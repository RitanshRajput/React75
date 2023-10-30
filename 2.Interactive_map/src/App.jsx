import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup} from  "react-leaflet" ;
import { Icon, divIcon } from "leaflet";
import placeholder from "./assets/placeholder.png";
import MarkerClusterGroup from "react-leaflet-cluster" ;


function App() {

  const markers = [
    {
      id: 1,
      geocode: [18.5314, 73.8446],
      popUp: "Hello, I am Here"
    },
    {
      id: 2,
      geocode: [18.5120, 73.8310],
      popUp : "Now I am Here"
    },
    {
      id: 3,
      geocode: [18.51, 73.8570],
      popUp: "And Finally I am here"
    }
  ];

  const customIcon = new Icon({
    iconUrl: placeholder,
    iconSize: [38, 38]  // size of icon in pixels
  });

  const createCustomClusterIcon = (cluster) => {
      return new divIcon({
        html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
        className: "custom-marker-cluster",
        iconSize: L.point(33, 33, true),
      });
  };

  return (
    <MapContainer center={[18.5204,73.8567]} zoom={13}>
      <TileLayer 
        attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup 
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
      {
        markers.map(marker => (
          <Marker key={marker.id} position={marker.geocode} icon={customIcon} >
              <Popup> {marker.popUp} </Popup>
          </Marker>
        ))
      }
      </MarkerClusterGroup>

    </MapContainer>
  )
}

export default App
