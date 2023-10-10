import { useEffect, useState } from "react";
import axios from "axios";

function useListPage(breed) {
  const [subBreeds, setSubBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  async function getAllSubBreeds(breed) {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/list`
      );
      const subBreedsData = response.data.message;
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
    setLoading(true); // Show loading indicator while fetching data
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
