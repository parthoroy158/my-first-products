import Image from "next/image";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto dark:bg-white min-h-screen dark:text-black">
      <Carousel></Carousel>

    </div>
  );
}
