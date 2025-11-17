
import Link from 'next/link';
import Navbar from '../components/ui/Navbar';
import Image from 'next/image';
import {AnimatedGradientText} from "../components/ui/animated-gradient-text";
import Footer from '@/components/ui/Footer';
export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
     <Navbar/>
      <section className="">
         <div className='absolute top-11 z-0 ml-47 opacity-70'> 
          <Image
            src="/MainPic.jpg"
            alt="Main Image"
            width={200}
            height={200}
            className="mt-10  ml-10 w-3xl h-125 shadow-2xl shadow-gray-200"
          />
        </div>
        <div className='relative ml-20 mt-48'>
        <AnimatedGradientText
      speed={2}
      colorFrom="#fbbf24"
      colorTo="#d97706"
      className="text-5xl font-bold font-serif text-center ml-52  tracking-tight"
    >
      Welcome to The Food Loft
    </AnimatedGradientText>
        <p className="text-lg font-serif text-white ml-65">A modern dining space serving elevated flavors, crafted fresh every day.</p>
        <button className="bg-amber-400 text-black font-serif px-4 py-2 rounded-2xl mt-6 ml-109 hover:bg-amber-500 transition"> <Link href='/menu'>Explore Our Menu</Link></button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
