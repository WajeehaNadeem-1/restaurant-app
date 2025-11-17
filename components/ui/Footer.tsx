export default function Footer() {
  return (
    <footer className="bg-black text-amber-400 py-5 mt-60 font-serif pt-15">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
 
        <div className="ml-15 border border-amber-400 rounded-3xl">
          <h2 className="text-xl font-bold mb-2 ml-25">Our Address</h2>
          <p className="ml-25">123 Food Street</p>
          <p className="ml-25">City, Country</p>
          <p className="ml-25">Phone: +92 300 1234567</p>
        </div>


        <div className="ml-15 border border-amber-400 rounded-3xl">
          <h2 className="text-xl font-bold mb-2 ml-25">Quick Links</h2>
          <ul>
            <li><a href="/" className="hover:underline ml-35">Home</a></li>
            <li><a href="/menu" className="hover:underline ml-35">Menu</a></li>
            <li><a href="/about" className="hover:underline ml-35">About Us</a></li>
            <li><a href="/contact" className="hover:underline ml-35">Contact</a></li>
          </ul>
        </div>


        <div className="ml-15 border border-amber-400 rounded-3xl">
          <h2 className="text-xl font-bold mb-2 ml-25">Follow Us</h2>
          <div className="ml-30">
            <ul>
            <li><a href="#" className="hover:text-white">Facebook</a></li>
           <li> <a href="#" className="hover:text-white">Instagram</a></li>
           <li> <a href="#" className="hover:text-white">Twitter</a></li>
           </ul>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-amber-400">
        © 2025 The Food Loft.
      </div>
    </footer>
  );
}