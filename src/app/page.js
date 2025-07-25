import Carousel from "./components/Carousel";
import Collections from "./components/Collections";
import StartNow from "./components/StartNow";
import BrowseByCategory from "./components/BrowseByCategory";
export const metadata = {
  title: 'Home | Kinnun.com',
  description:
    'Welcome to Kinnun.com — your destination for the cutest cable protectors and tech accessories in Bangladesh. Shop adorable, durable, and creative wire savers that add personality to your devices.',
  keywords: [
    'kinnun',
    'kinnun.com',
    'kinnun bd',
    'cute cable protectors',
    'cartoon usb protector',
    'tech gadgets bd',
    'iphone cable protector',
    'android wire saver',
    'buy cable guard online',
    'kinnun official store',
    'wire organizer bd',
    'cable accessories bangladesh',
    'kinnun home page',
    'usb protector shop bd'
  ],
  robots: 'index, follow',
  authors: [{ name: 'Kinnun Team', url: 'https://kinnun.com' }],
  openGraph: {
    title: 'Home | Kinnun.com',
    description:
      'Shop cable protectors and tech accessories at Kinnun.com — where cuteness meets durability. Delivered across Bangladesh.',
    url: 'https://kinnun.com',
    siteName: 'Kinnun.com',
    images: [
      {
        url: 'https://kinnun.com/og-image/home-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Kinnun Home Page Banner',
      },
    ],
    type: 'website',
  },
};



export default function Home() {


  return (
    <div className="w-full bg-[#F5F5F5] text-[#1A1A1A] min-h-screen">

      <div className="max-w-7xl mx-auto min-h-screen dark:text-black pr-2 pl-2">
        <Carousel />
        <StartNow />
        <BrowseByCategory />
        <Collections />
      </div>
    </div>
  );
}
