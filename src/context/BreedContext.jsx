/* eslint-disable react/prop-types */
// import axios from "axios";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BreedContext = createContext({});

export function BreedContextProvider({ children }) {
  const [breed, setBreed] = useState("");

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(({ data }) => {
      console.log(data.message.split("/")[4]);
      const breedName = data.message.split("/")[4].split("-")[0];
      console.log("breed from random url:", breedName);
      setBreed(breedName);
    });
  }, []);
  const updateBreed = (newBreed) => {
    setBreed(newBreed);
    console.log("breed in context :", newBreed);
  };

  return (
    <BreedContext.Provider value={{ breed, setBreed, updateBreed }}>
      {children}
    </BreedContext.Provider>
  );
}
