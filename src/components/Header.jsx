import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const activePage = location.pathname;
  console.log("active path is ", activePage);

  return (
    <header>
      <div className="flex flex-row lg:justify-between md:justify-between items-center">
        <div className="">
          <Link
            to={"/"}
            className={`font-bold text-lg rounded-md px-4 py-3 sm:w-auto sm:px-6 
            sm:py-4 md:px-8 md:py-5 m-4  ${
              activePage === "/"
                ? "bg-slate-200 text-gray-800  border-2 border-gray-800 hover:border-gray-800"
                : "bg-gray-800 border-gray-800 text-slate-200 border-2 hover:border-slate-200"
            }`}
          >
            Doggo
          </Link>
        </div>
        <div className="flex lg:gap-7 sm:gap-1">
          <Link
            to={"/list"}
            className={`font-bold text-lg rounded-md px-4 py-3 sm:w-auto sm:px-6 
            sm:py-4 md:px-8 md:py-5 m-4 ${
              activePage === "/list"
                ? "bg-slate-200 text-gray-800 border-2 border-slate-200 hover:border-gray-800"
                : "bg-gray-800 text-slate-200 border-2 border-gray-800 hover:border-slate-200"
            }`}
          >
            List
          </Link>
          <Link
            to={"/location"}
            className={`font-bold text-lg rounded-md px-4 py-3 sm:w-auto sm:px-6 
            sm:py-4 md:px-8 md:py-5 m-4 ${
              activePage === "/location"
                ? "bg-slate-200 text-gray-800 border-2 border-slate-200 hover:border-gray-800"
                : "bg-gray-800 text-slate-200 border-2 border-gray-800 hover:border-slate-200"
            }`}
          >
            Track
          </Link>
        </div>
      </div>
    </header>
  );
}
