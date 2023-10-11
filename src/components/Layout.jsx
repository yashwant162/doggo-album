import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import BreedCarousel from "./breedCarousel/BreedCarousel";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <div className="relative py-4 px-8 flex flex-col min-h-fit bg-gray-600 rounded-lg">
        <Header />
        <BreedCarousel />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
