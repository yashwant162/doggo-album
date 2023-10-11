import { useEffect, useState } from "react";
import axios from "axios";

function useListPage(breed) {
  const [subBreeds, setSubBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  async function getAllSubBreeds(breed) {
    const storedSubBreeds = sessionStorage.getItem(`${breed.toString()}-subBreed`)
    let subBreedsData
    try {
      if (storedSubBreeds) {
         subBreedsData = JSON.parse(storedSubBreeds)
         console.log("in session subbreed",subBreedsData);
      }
      else {
        const response = await axios.get(
          `https://dog.ceo/api/breed/${breed}/list`
        );
        subBreedsData = response.data.message;
        sessionStorage.setItem(`${breed.toString()}-subBreed`,JSON.stringify(subBreedsData))
      }
      const imageRequests = subBreedsData.map(async (subBreed) => {
        const response = await axios.get(
          `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`
        );
        return { subBreed, imageUrl: response.data.message };
      });

      const images = await Promise.all(imageRequests);
      setSubBreeds(images);
      setLoading(false);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    setLoading(true);
    getAllSubBreeds(breed);
  }, [breed]);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return {
    subBreeds,
    loading,
    openModal,
    closeModal,
    selectedImage,
    setLoading,
    setSubBreeds,
    modalOpen,
    setModalOpen,
  };
}

export default useListPage;
