import Navbar from "../../components/ui/Navbar";
import Image from "next/image";

export default function MenuPage() {
  return (
    <div>
      <Navbar />

      <section className="max-w-6xl font-serif">
         <div className='absolute top-10 z-0 opacity-70'> 
                  <Image
                    src="/menuBG.jpg"
                    alt="Menu Background"
                    width={200}
                    height={200}
                    className=" mt-10  w-7xl h-400 "
                  />
                </div>
                <div className="relative p-10  " >
        <h1 className="text-4xl text-amber-400 font-bold mb-2 text-center ">Our Menu</h1>
        <p className="text-amber-400 mb-10 text-center">
          Explore our signature dishes, crafted with fresh ingredients & delicious flavors.
        </p>

        {/* Starters */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border rounded-2xl w-28 p-2 bg-amber-400 text-black">Starters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="ml-20">
               <div className=''> 
                  <Image
                    src="/Wings.jpg"
                    alt=" Spicy Wings"
                    width={200}
                    height={200}
                    className="rounded-2xl mt-10 w-50 h-55 "
                  />
                </div>
              <h3 className="font-bold text-xl  ml-9">Crispy Wings</h3>
              <p className="text-white">Served with spicy garlic sauce.</p>
              <span className="font-semibold ml-18">$30.26</span>
            </div>

            <div className="ml-15">
              <div className=''> 
                  <Image
                    src="/Cheesy Fries.jpg"
                    alt="Cheese Fries"
                    width={200}
                    height={200}
                    className="rounded-2xl mt-10 w-50 h-55 "
                  />
                </div>
              <h3 className="font-bold text-xl  ml-10">Cheese Fries</h3>
              <p className="text-white">Loaded fries with cheese & herbs.</p>
              <span className="font-semibold ml-20">$57.00</span>
            </div>

               <div className="ml-10">
                 <div className=''> 
                  <Image
                    src="/Soup.jpg"
                    alt="Chicken Soup"
                    width={200}
                    height={200}
                    className="rounded-2xl mt-10 w-50 h-55 "
                  />
                </div> 
            <h3 className="text-xl font-bold ml-10">Chicken Soup</h3>
            <p className="text-white">
              Warm, flavorful chicken soup made with fresh herbs. </p>
            <span className="font-semibold ml-20 ">$26.99</span>
              </div>

          </div>
        </div>

        {/* Main Course */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border rounded-2xl w-45 p-2 bg-amber-400 text-black">Main Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="ml-20 ">
              <div className=''> 
                  <Image
                    src="/Huli Huli Chicken.jpg"
                    alt="Grilled Chicken"
                    width={200}
                    height={200}
                    className="rounded-2xl mt-10 w-50 h-55"
                  />
                </div>
              <h3 className="font-bold text-xl  ml-6">Grilled Chicken</h3>
              <p className="text-white">Juicy chicken served with veggies.</p>
              <span className="font-semibold ml-18">$74.35</span>
            </div>

            <div className="ml-15">
              <div className=''> 
                  <Image
                    src="/Alfredo Pasta.jpg"
                    alt="Creamy Alfredo Pasta"
                    width={200}
                    height={200}
                    className="rounded-2xl  mt-10 w-50 h-55"
                  />
                </div>
              <h3 className="font-bold text-xl ">Creamy Alfredo Pasta</h3>
              <p className="text-white">Classic pasta with rich white sauce.</p>
              <span className="font-semibold ml-20">$52.00</span>
            </div>

             <div className="ml-10">
               <div className=''> 
                  <Image
                    src="/Steak.jpg"
                    alt="Juicy Steak"
                    width={200}
                    height={200}
                    className="rounded-2xl  mt-10 w-50 h-55 ml-2"
                  />
                </div>
            <h3 className="font-bold text-xl ">Steak with Vegetables</h3>
            <p className="text-white">Juicy grilled steak served with steamed vegetables.</p>
            <span className="font-semibold ml-22">$82.00</span>
          </div>

          </div>
        </div>

        {/* Desserts */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border rounded-2xl w-30 p-2 bg-amber-400 text-black">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className=" ml-20">
              <div className=''> 
                  <Image
                    src="/Molten.jpg"
                    alt="Chocolate Lava Cake"
                    width={200}
                    height={200}
                    className="rounded-2xl mt-10 w-50 h-55"
                  />
                </div>
              <h3 className="font-bold text-xl">Chocolate Lava Cake</h3>
              <p className="text-white">Warm cake with molten chocolate.</p>
              <span className="font-semibold ml-19">$37.98</span>
            </div>

            <div className="ml-15 ">
              <div className=''> 
                  <Image
                    src="/Vanilla IceCream.jpg"
                    alt="Vanilla Ice Cream"
                    width={200}
                    height={200}
                    className="rounded-2xl  mt-10 w-50 h-55"
                  />
                </div>
              <h3 className="font-bold text-xl ml-6">Vanilla Ice Cream</h3>
              <p className="text-white">Smooth and creamy vanilla scoop.</p>
              <span className="font-semibold ml-20">$24.99</span>
            </div>

             <div className="ml-10">
              <div className=''> 
                  <Image
                    src="/Cheesecake.jpg"
                    alt=" Strawberry Cheesecake"
                    width={200}
                    height={200}
                    className="rounded-2xl  mt-10 w-50 h-55 ml-4"
                  />
                </div>
            <h3 className="font-bold text-xl ">Strawberry Cheesecake</h3>
            <p className="text-white">Classic cheesecake topped with fresh strawberries.</p>
            <span className="font-semibold ml-24">$40.76</span>
          </div>

          </div>
        </div>
        </div>
      </section>
    </div>
  );
}