import Navbar from "../../components/ui/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      <section className="pt-5 max-w-4xl">
         <div className='absolute top-8 z-0'> 
                  <Image
                    src="/about pic.jpg"
                    alt="About Page Image"
                    width={200}
                    height={200}
                    className=" mt-10 w-7xl h-215 "
                  />
                </div>
        <div className="relative pl-20 mt-5 mb-20 z-10">
        <h2 className="text-2xl font-bold mb-6 text-white font-serif">About The Food Loft</h2>
        <p className="text-white leading-relaxed mb-6 font-serif">
          Welcome to <span className="font-semibold">The Food Loft</span> — a modern,
          stylish dining space crafted for food lovers. We believe great food should
          be enjoyed in a warm and inspiring environment. Our restaurant blends
          elevated flavors with a contemporary atmosphere, giving you a memorable
          dining experience every time.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-white font-serif">Our Philosophy</h3>
        <p className="text-white leading-relaxed mb-6 font-serif">
          At The Food Loft, we focus on freshness, creativity, and flavor. Every dish
          is prepared with high-quality ingredients and a passion for making food that
          tastes as good as it looks. Whether you're here for a casual bite or a
          special dinner, our goal is to serve you food that brings comfort and joy.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-white font-serif">Our Space</h3>
        <p className="text-white leading-relaxed mb-6 font-serif">
          Inspired by open loft-style architecture, The Food Loft features a cozy yet
          modern interior — high ceilings, warm lighting, and a spacious layout
          designed to help you relax and enjoy your meal. It’s the perfect place to
          dine, chill, and create beautiful memories with the people you love.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-white font-serif">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-white space-y-2 font-serif">
          <li>Fresh and high-quality ingredients</li>
          <li>A curated menu with unique and bold flavors</li>
          <li>Modern & cozy dining atmosphere</li>
          <li>Passionate chefs and friendly service</li>
          <li>Perfect for families, friends, and special occasions</li>
        </ul>

        <p className="text-amber-400 text-xl leading-relaxed mt-6 font-serif ml-40">
          Thank you for choosing <span className="font-bold">The Food Loft</span>.
          We look forward to serving you!
        </p>
        </div>
    </section>
    </div>
  );
}
