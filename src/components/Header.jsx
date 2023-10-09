import { Link } from "react-router-dom";

export default function Header(){
  
  
  
  return (

      <header>
        <div className="flex justify-between items-center">
          <div className="">
            <Link to = {"/"} className=" text-white rounded-2xl p-3 w-full bg-gray-500">
              Doggo
            </Link>
          </div>
          <div className="flex  gap-7">
            <Link to = {"/list"} className=" text-white rounded-2xl p-3 w-full bg-gray-500">
              List
            </Link>
            <Link to = {"/location"} className=" text-white rounded-2xl p-3 w-full bg-gray-500">
              Track
            </Link>
          </div>
        </div>
      </header>
    )
}