"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-amber-400 text-black flex p-5 sticky top-0  shadow-lg shadow-amber-300 z-1000">

      <div className="font-semibold font-serif ">
        <Link href="/" className="ml-85">Home</Link>
        <Link href="/about" className="ml-10">About</Link>
        <Link href="/menu" className="ml-10">Menu</Link>
        <Link href="/featuredDishes" className="ml-10">Featured Dishes</Link>
        <Link href="/contact" className="ml-10">Contact</Link>
      </div>
    </nav>
  );
}