import Navbar from "../../components/ui/Navbar";
import Image from "next/image";
export default function ContactPage() {
  return (
     <div>
          <Navbar />
    <div className="min-h-screen bg-cover bg-center" >
      <div className='absolute top-10 z-0 opacity-70'> 
        <Image
          src="/contact Bg.jpg"
          alt="Contact Background"
          width={200}
          height={200}
          className="mt-10  w-7xl h-235 "
        />
      </div>
      <div className="relative p-6 max-w-4xl mx-auto font-serif">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center max-w-2xl mx-auto mb-2 text-lg">
          Have questions or want to place an order? We're here to help! 
        </p>
         <p className="text-center max-w-2xl mx-auto mb-8 text-lg">
          Get in touch with us and we’ll be happy to assist!
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto p-8 rounded-xl shadow-lg">
          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-2">Your Name</label>
              <input
                type="text"
                className="w-full p-3  border border-white rounded-2xl text-white  focus:outline-amber-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-2">Your Email</label>
              <input
                type="email"
                className="w-full p-3 border border-white rounded-2xl text-white  focus:outline-amber-400 "
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-semibold mb-2">Your Message</label>
              <textarea
                className="w-full p-3 border border-white rounded-2xl text-white focus:outline-amber-400 h-32"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Contact Details</h2>
          <p className="text-lg">📍 Main Market, Lahore</p>
          <p className="text-lg">📞 +92 300 0000000</p>
          <p className="text-lg">📧 support@thefoodloft.com</p>
        </div>
      </div>
    </div>
    </div>
  );
}
