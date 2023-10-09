import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BreedCarousel from "./breedCarousel/BreedCarousel";


export default function Layout() {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      <Header/>
      <BreedCarousel/>
      <Outlet />
      <Footer/>
    </div>
  );
}
