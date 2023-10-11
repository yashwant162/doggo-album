import { useBreed } from "../context/useBreed";

export default function Footer() {
  const { breed } = useBreed();

  return (
    <footer
      className="md:gap-6 px-20 border-t border-t-gray-200 text-gray-300 mt-10
              py-4 flex justify-between w-full text-md  bg-gray-800 items-center"
    >
      <div>
        <span className="font-bold mr-1">DOGGO</span>
        <span className="mr-1">Looks like you love</span>
        <span className="underline font-bold">
          {breed.charAt(0).toUpperCase() + breed.slice(1)}
        </span>
      </div>
    </footer>
  );
}
