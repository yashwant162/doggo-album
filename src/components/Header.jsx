import { Link } from "react-router-dom";

export default function Header(){
  
  
  
  return (

      <header>
        <div className="flex justify-between items-center">
          <div className="">
            <Link to = {"/"} className="text-gray-300 font-bold text-lg rounded-md px-4 py-3 sm:w-auto sm:px-6 sm:py-4 md:px-8 md:py-5 m-4 w-full bg-gray-800">
              Doggo
            </Link>
          </div>
          <div className="flex  gap-7">
            <Link to = {"/list"} className=" text-gray-300 font-bold text-lg rounded-md px-8 py-5 m-4 w-full bg-gray-800 sm:w-auto sm:px-6 sm:py-4 md:px-8 md:py-5">
              List
            </Link>
            <Link to = {"/location"} className=" text-gray-300 font-bold text-lg rounded-md px-8 py-5 m-4 w-full bg-gray-800 sm:w-auto sm:px-6 sm:py-4 md:px-8 md:py-5">
              Track
            </Link>
          </div>
        </div>
      </header>
    )
}