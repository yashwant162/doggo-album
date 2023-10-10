import useBreedCarousel from "./useBreedCarousel";
import { DogIcon1, DogIcon2 } from "../svg/DogIcon";
import { useBreed } from "../../context/useBreed";
export default function BreedCarousel() {
  const { breedsList} = useBreedCarousel();
  const { updateBreed}  = useBreed()
  let i = 0;
  return (
       <div className="flex flex-row items-center overflow-hidden overflow-x-auto scrollbar-hidden">
        {breedsList.map((breedName) => {
          const displayIcon = i % 2 === 0 ? <DogIcon1 /> : <DogIcon2 />;
          i++; // Increment i for the next iteration
          return (
            <div
              key={breedName}
              onClick={() => updateBreed(breedName)}
              className="bg-gray-800 m-4 p-4 rounded-md cursor-pointer text-xl text-gray-300 flex items-center gap-2 w"
            >
              {displayIcon}
              <div className="">{breedName}</div>
            </div>
          );
        })}
      </div>
   
  );
}
