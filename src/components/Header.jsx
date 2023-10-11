import { Link,useLocation } from "react-router-dom";

export default function Header(){
  const location = useLocation();
  const activePage = location.pathname;

  
  
  return (

      <header>
        <div className="flex justify-between items-center">
          <div className="">
            <Link to = {"/"} className={`font-bold text-lg rounded-md px-4 py-3 sm:w-auto sm:px-6 
            sm:py-4 md:px-8 md:py-5 m-4  ${ activePage === '/' ? 'bg-slate-200 text-gray-800' : 'bg-gray-800 text-slate-200'
            }`}>
              Doggo
            </Link>
          </div>
          <div className="flex  gap-7">
            <Link to = {"/list"} className={`font-bold text-lg rounded-md px-8 py-5 m-4 
            sm:w-auto sm:px-6 sm:py-4 md:px-8 md:py-5 ${ activePage === '/list' ? 'bg-slate-200 text-gray-800' : 'bg-gray-800 text-slate-200'
            }`}>
              List
            </Link>
            <Link to = {"/location"} className={`font-bold text-lg rounded-md px-8 py-5 m-4
            sm:w-auto sm:px-6 sm:py-4 md:px-8 md:py-5 ${ activePage === '/location' ? 'bg-slate-200 text-gray-800' : 'bg-gray-800 text-slate-200'
            }`}>
              Track
            </Link>
          </div>
        </div>
      </header>
    )
}