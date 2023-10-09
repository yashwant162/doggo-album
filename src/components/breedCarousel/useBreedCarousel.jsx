import axios from "axios";
import { useEffect, useState } from "react";

export default function useBreedCarousel() {
  const [breedsList, setBreedsList] = useState([]);
  const [breed, setBreed] = useState("");

  const handleSelect = (breedName) => {
    setBreed(breedName);
    console.log(breedName)
  };

  async function getAllBreeds() {
    try {
      const breedListResponse = await axios.get(
        "https://dog.ceo/api/breeds/list/all"
      );
      if (breedListResponse.status == 200) {
        var breedNames = breedListResponse.data.message;
        breedNames = Object.keys(breedNames);
        console.log(breedNames);
        setBreedsList(breedNames);
      } else {
        console.error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  useEffect(() => {
    getAllBreeds();
  }, []);

  return { breedsList, setBreedsList, breed, setBreed, handleSelect };
}
