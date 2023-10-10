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
      <div className="masonry sm:masonry-sm md:masonry-md">
        {images.map((imageUrl) => (
          <div
            key={imageUrl}
            className="rounded-lg bg-slate-200 px-4 pt-4 pb-12 break-inside mb-2 inline-block"
          >
            <img
              src={imageUrl}
              onClick={() => openModal(imageUrl)}
              className="w-auto h-auto object-contain cursor-pointer"
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
