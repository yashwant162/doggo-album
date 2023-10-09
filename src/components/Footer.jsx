import { useContext } from "react"
import BreedCarousel from "./breedCarousel/BreedCarousel"
import { BreedContext } from "./BreedContext"

export default function Footer(){
  const {breed} = useContext(BreedContext)

  return (
      <footer className="md:gap-6 px-20 border-t border-t-gray-200 py-4 flex justify-between w-full text-sm  bg-white items-center">
         <div>
            <span className="font-bold mr-4">DOGGO</span>
            <span className="mr-1">Looks like you love</span>
             <span className="underline font-bold">{breed}</span>
         </div>
      </footer>
  )
}