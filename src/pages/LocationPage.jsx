/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useMemo, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import Pin from "../components/common/Pin";
import "mapbox-gl/dist/mapbox-gl.css";
import { BreedContext } from "../components/BreedContext";

export default function LocationPage(){
  const {breed} =  useContext(BreedContext)
  const [popupInfo, setPopupInfo] = useState(null);
  const [coordinates,setCoordinates] = useState([])
  
  useEffect(() => {
    const breedCoordinates = getRandomCoordinates()
    setCoordinates(breedCoordinates)
    console.log("coordinates: ",breedCoordinates)
  },[breed])

  function getRandomCoordinates() {
    const minLatitude = 19.4;
    const maxLatitude = 27.6;
    const minLongitude = 74.7;
    const maxLongitude = 81.4;
  
    const arraySize = Math.floor(Math.random() * 6) + 3;
  
    const coordinatesArray = [];
  
    for (let i = 0; i < arraySize; i++) {
      const latitude = (Math.random() * (maxLatitude - minLatitude) + minLatitude).toFixed(6);
      const longitude = (Math.random() * (maxLongitude - minLongitude) + minLongitude).toFixed(6);
  
      coordinatesArray.push({
        latitude,
        longitude,
      });
    }
  
    return coordinatesArray;
  }

  const TOKEN ='pk.eyJ1IjoieWFzaGgxNiIsImEiOiJjbG5qNnNsN2wxbTdhMmxybDJicjJ1cmEwIn0.oiWMVHcs-fQ8pxN0QkxCXA';

  const markers = coordinates.map((mark, index) => (
    <Marker
      key={index}
      latitude={mark.latitude}
      longitude={mark.longitude}
    >
      <Pin onClick={() => {setPopupInfo(coordinates)}}/>
    </Marker>
  ));
    
  return (
    <div
      className="h-[72.5vh] max-w-[100vw] pt-2"
    >
      <Map 
      initialViewState={{longitude: 80.630,latitude: 20.968,zoom: 3.8,}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={TOKEN}>
        {markers}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.mapData.longitude)}
            latitude={Number(popupInfo.mapData.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              Listing Details
            </div>
          </Popup>
        )}s
      </Map>
    </div>
  );
}