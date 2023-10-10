import ImageModal from "../../components/ImageModal";
import { useBreed } from "../../context/useBreed";
import { useHomePage } from "./useHomePage";

export default function HomePage() {
  const { breed } = useBreed();
  const { images, modalOpen, selectedImage, openModal, closeModal } =
    useHomePage(breed);

  return (
    <div>
      <h2 className="text-4xl text-gray-400 mb-10 mt-10">
        Home Page {`{${breed}}`}
      </h2>
      <div className="grid md:grid-cols-5 lg:grid-cols-6 sm:grid-cols-3  gap-4">
        {images.map((imageUrl) => (
          <div
            key={imageUrl}
            className="relative bg-slate-200 px-4 pb-8 pt-2 rounded-md"
          >
            <img
              src={imageUrl}
              onClick={() => openModal(imageUrl)}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>
      {modalOpen && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}
