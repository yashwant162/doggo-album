import { useContext } from "react";
import useBreedCarousel from "./useBreedCarousel";
import { BreedContext } from "../BreedContext";

export default function BreedCarousel() {
  const { breedsList} = useBreedCarousel();
  const { updateBreed} = useContext(BreedContext)
  return (
    <div className="flex flex-row items-center overflow-hidden overflow-x-auto scrollbar-hidden">
      {breedsList.map((breedName) => {
        return (
          <div
            key={breedName}
            onClick={() => updateBreed(breedName)}
            className="bg-gray-500 m-4 p-4 rounded-md cursor-pointer text-xl text-white"
          >
            <div className="">{breedName}</div>
          </div>
        );
      })}
    </div>
  );
}
