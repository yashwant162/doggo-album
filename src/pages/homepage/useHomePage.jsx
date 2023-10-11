import { useEffect, useState } from "react";
import axios from "axios";

export function useHomePage(breed) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  async function getImagesByBreed(breed) {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random/50`
      );
      setImages(response.data.message);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }
  useEffect(() => {
    setLoading(true);
    getImagesByBreed(breed);
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
    images,
    modalOpen,
    selectedImage,
    openModal,
    closeModal,
    loading,
  };
}
