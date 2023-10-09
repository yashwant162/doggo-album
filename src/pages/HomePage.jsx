import { useContext, useEffect, useState } from "react"
import { BreedContext } from "../components/BreedContext"
import axios from "axios"
import ImageModal from "../components/ImageModal"


export default function HomePage(){

  const {breed} = useContext(BreedContext)
  const [images, setImages] = useState([])
  const [getImages, setGetImages] = useState(true)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  async function getImagesByBreed(breed) {
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/50`)
      setImages(response.data.message)
      console.log("images:",response.data.message)
  }

  if(getImages && breed){
    getImagesByBreed(breed)
    setGetImages(false)
  }

  useEffect(()=>{
    getImagesByBreed(breed)
  },[breed])

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
  <div>  
        <h2 className="text-2xl"> Home Page {`{${breed}}`}</h2>
        <div className="grid md:grid-cols-5 lg:grid-cols-7 sm:grid-cols-3  gap-4">
          {images.map(imageUrl=> (
            <div key={imageUrl} className="relative">
              <img src={imageUrl} onClick={() => openModal(imageUrl)} className="w-full h-full object-cover cursor-pointer"/>
            </div>
          ))}
        </div>
        {modalOpen && (
          <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}

  </div>
  )
}