import { useContext } from "react";
import { BreedContext } from "./BreedContext";

export const useBreed = () => {
  const breedContext = useContext(BreedContext);
  return breedContext;
};
