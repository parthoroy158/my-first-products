import Carousel from "./components/Carousel";
import Collections from "./components/Collections";
import StartNow from "./components/StartNow";
import BrowseByCategory from "./components/BrowseByCategory";


export default function Home() {


  return (
    <div className="w-full bg-[#F5F5F5] text-[#1A1A1A] min-h-screen">
      <div className="max-w-7xl mx-auto min-h-screen dark:text-black">
        <Carousel />
        <StartNow />
        <BrowseByCategory />
        <Collections />
      </div>
    </div>
  );
}
