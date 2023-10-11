/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Pin from "../../components/svg/Pin";
import { Marker } from "react-map-gl";

export function useLocationPage(breed) {
  const [popupInfo, setPopupInfo] = useState(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const storedCoordinates = sessionStorage.getItem(`${breed.toString()}-coordinates`)

    if (storedCoordinates) {
      setCoordinates(JSON.parse(storedCoordinates));
    } else {
      const breedCoordinates = getRandomCoordinates();
      setCoordinates(breedCoordinates);
      sessionStorage.setItem(`${breed.toString()}-coordinates`,JSON.stringify(breedCoordinates))
      console.log("coordinates: ", breedCoordinates);
    }

  }, [breed]);

  function getRandomCoordinate(min, max) {
    return (Math.random() * (max - min) + min).toFixed(6);
  }

  function getRandomCoordinates() {
    const minLatitude = 19.4;
    const maxLatitude = 27.6;
    const minLongitude = 74.7;
    const maxLongitude = 81.4;

    const arraySize = Math.floor(Math.random() * 6) + 3;

    const coordinatesArray = [];

    for (let i = 0; i < arraySize; i++) {
      const latitude = getRandomCoordinate(minLatitude, maxLatitude);
      const longitude = getRandomCoordinate(minLongitude, maxLongitude);

      coordinatesArray.push({
        latitude,
        longitude,
      });
    }

    return coordinatesArray;
  }

  const markers = coordinates.map((mark, index) => (
    <Marker key={index} latitude={mark.latitude} longitude={mark.longitude}>
      <div
        onClick={() => {
          setPopupInfo(mark);
        }}
      >
        <Pin />
      </div>
    </Marker>
  ));
  return { markers, popupInfo, setPopupInfo };
}
