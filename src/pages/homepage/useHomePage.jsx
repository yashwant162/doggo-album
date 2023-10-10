import { useEffect, useState } from "react";
import axios from "axios";

export function useHomePage(breed) {
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  async function getImagesByBreed() {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random/50`
      );
      setImages(response.data.message);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }
  useEffect(() => {
    if (breed) {
      getImagesByBreed();
    }
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
  };
}
