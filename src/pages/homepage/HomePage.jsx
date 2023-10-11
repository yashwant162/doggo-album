import ImageModal from "../../components/common/ImageModal";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { useBreed } from "../../context/useBreed";
import { useHomePage } from "./useHomePage";

export default function HomePage() {
  const { breed } = useBreed();
  const { images, modalOpen, selectedImage, openModal, closeModal, loading } =
    useHomePage(breed);

  return (
    <div>
      <h2 className="sm:text-base md:text-3xl lg:text-4xl text-slate-200 mb-10 mt-10">
        Breed: {`${breed.charAt(0).toUpperCase() + breed.slice(1)}`}
      </h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="gap-x-6 lg:columns-5 sm:columns-1 md:columns-3">
          {images.map((imageUrl) => (
            <div
              key={imageUrl}
              className="rounded-lg bg-slate-200 px-4 pt-4 pb-12 break-inside-avoid mb-2 inline-block"
            >
              <img
                src={imageUrl}
                onClick={() => openModal(imageUrl)}
                className="w-auto h-auto object-contain cursor-pointer shadow-lg rounded-md"
              />
            </div>
          ))}
        </div>
      )}
      {modalOpen && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}
