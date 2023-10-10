import ImageModal from "../../components/ImageModal";
import { useBreed } from "../../context/useBreed";
import useListPage from "./useListPage";

export default function ListPage() {
  const { breed } = useBreed();
  const {
    subBreeds,
    loading,
    openModal,
    closeModal,
    selectedImage,
    modalOpen,
  } = useListPage(breed);

  return (
    <div className="flex flex-col items-center justify-center mt-10 font-bold underline mb-10 text-xl">
      <div>{breed} Sub-Breeds</div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left text-gray-400 rounded-2xl overflow-hidden">
            <thead className="text-xs text-gray-200 uppercase bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3 text-left">
                  Sub-Breed
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  Open 1 Image (MODAL)
                </th>
              </tr>
            </thead>
            <tbody className="border-t">
              {subBreeds.map((imageData, index) => (
                <tr
                  key={index}
                  className="bg-gray-800 border-gray-700 border-t"
                >
                  <td className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap">
                    {imageData.subBreed}
                  </td>
                  <td
                    onClick={() => openModal(imageData.imageUrl)}
                    className="px-6 py-4 text-right text-gray-300 cursor-pointer underline"
                  >
                    Link
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}
