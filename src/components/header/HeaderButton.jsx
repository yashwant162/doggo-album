/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export default function HeaderButton({ to, text}) {
  const activePage = useLocation().pathname;
  return(
    <Link
            to={to}
            className={`font-bold text-lg rounded-md px-4 py-3 sm:w-auto sm:px-6 
            sm:py-4 md:px-8 md:py-5 m-4  ${
              activePage === to
                ? "bg-slate-200 text-gray-800  border-2 border-gray-800 hover:border-gray-800"
                : "bg-gray-800 border-gray-800 text-slate-200 border-2 hover:border-slate-200"
            }`}
          >
            {text}
          </Link>
  )
}