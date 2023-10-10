import { useContext } from "react";
import { BreedContext } from "./BreedContext";

// Create the useBreed hook
/**
 * The `useBreed` function is a custom hook that returns the breed context from the
 * `BreedContext` using the `useContext` hook.
 * @returns The `useBreed` function returns the `BreedContext` obtained from the `useContext` hook.
 * @example const { breed, setBreed, updateBreed } = useBreed()
 */
export const useBreed = () => {
  const breedContext = useContext(BreedContext);

  if (!breedContext) {
    throw new Error("useBreed must be used within an AuthProvider");
  }

  return breedContext;
};
