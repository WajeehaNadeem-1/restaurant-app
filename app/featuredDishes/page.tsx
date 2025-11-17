import Navbar from "../../components/ui/Navbar";
import Image from "next/image";
export default function FeaturedDishesPage() {
  return (
    <div>
      <Navbar />

      <section className="">
        <div className='absolute top-10 z-0 opacity-70'> 
          <Image
            src="/fdBg.jpg"
            alt="Featured Dishes Background"
            width={200}
            height={200}
            className="mt-10  w-7xl h-180 "
          />
        </div>
        <div className="relative p-10 max-w-6xl mx-auto font-serif ">
        <h2 className="text-4xl font-bold mb-6 text-center text-amber-400">Featured Dishes</h2>
        <p className="text-white mb-8 w-2xl ml-50">
          Here are our top-rated dishes that our customers love the most. Each
          dish is prepared with fresh ingredients and cooked to perfection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dish 1 */}
          <div className=" p-5 ">
            <div className='ml-10'> 
              <Image
                src="/Grilled.jpg"
                alt=" Grilled Chicken"
                width={200}
                height={200}
                className="rounded-2xl mt-10 w-50 h-55 "
              />
            </div>
            <h3 className="font-bold text-xl mb-2 ml-16">Grilled Chicken</h3>
            <p className="text-white mb-2 ml-2">
              Tender grilled chicken served with fresh vegetables and signature
              sauce.
            </p>
            <span className="font-semibold text-lg ml-30">$18</span>
          </div>

          {/* Dish 2 */}
          <div className=" p-5 ">
           <div className='ml-10'> 
              <Image
                src="/Cake.jpg"
                alt=" Chocolate Lava Cake"
                width={200}
                height={200}
                className="rounded-2xl mt-10 w-50 h-55 "
              />
            </div>
            <h3 className="font-bold text-xl mb-2 ml-10">Chocolate Lava Cake</h3>
            <p className="text-white mb-2 ml-2">
              Warm and gooey chocolate cake filled with rich molten chocolate.
            </p>
            <span className="font-semibold text-lg ml-30">$37.98</span>
          </div>

          {/* Dish 3 */}
          <div className=" p-5">
           <div className='ml-10'> 
              <Image
                src="/shrimps.jpg"
                alt=" Shrimp Alfredo Pasta"
                width={200}
                height={200}
                className="rounded-2xl mt-10 w-50 h-55 "
              />
            </div>
            <h3 className="font-bold text-xl mb-2 ml-10">Shrimp Alfredo Pasta</h3>
            <p className="text-white mb-2 ml-6">
              Creamy Alfredo pasta topped with perfectly seasoned shrimp.
            </p>
            <span className="font-semibold text-lg ml-32">$15</span>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}