/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import Pin from "../components/common/Pin";
import "mapbox-gl/dist/mapbox-gl.css";
import { useBreed } from "../context/useBreed";

export default function LocationPage(){
  const {breed} = useBreed()
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
     <div onClick={() => {setPopupInfo(mark)}}>
      <Pin />
      </div> 
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
        {console.log("popup",popupInfo)}
        {popupInfo  && (
  
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
              closeOnClick={false}
              style={{}}
            >
              <div className="flex-row">
                <div><span className="font-bold">Breed:</span>{breed}</div>
                <div><span className="font-bold">Latitude:</span> {popupInfo.latitude}<br/></div>
                <div><span className="font-bold">Longitude:</span> {popupInfo.longitude}</div>
              </div>
            </Popup>
      
        )}
      </Map>
    </div>
  );
}