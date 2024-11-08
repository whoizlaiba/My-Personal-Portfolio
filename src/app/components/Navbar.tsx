"use client";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { useState } from "react";

const caveat = Caveat({ subsets: ["latin"] });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-gray-950 sticky top-0">
      <div className="h-14 flex justify-between items-center w-[95%] m-auto">
        <div className="text-white font-serif text-2xl font-bold hover:underline">
          <h1 className={`${caveat.className}`}>Laiba Parvez</h1>
        </div>

        <ul className="hidden sm:flex gap-10 text-white font-bold">
          <li className={`${caveat.className}`}>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className={`${caveat.className}`}>
            <Link href="#about" className="hover:underline">
              About
            </Link>
          </li>
          <li className={`${caveat.className}`}>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li className={`${caveat.className}`}>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li className={`${caveat.className}`}>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
          </li>
        </ul>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-gray-950 text-white font-bold py-4">
          <ul className="flex flex-col items-center gap-4">
            <li className={`${caveat.className}`}>
              <Link href="#home" className="hover:underline">
                Home
              </Link>
            </li>
            <li className={`${caveat.className}`}>
              <Link href="#about" className="hover:underline">
                About
              </Link>
            </li>
            <li className={`${caveat.className}`}>
              <Link href="#skills" className="hover:underline">
                Skills
              </Link>
            </li>
            <li className={`${caveat.className}`}>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li className={`${caveat.className}`}>
              <Link href="#projects" className="hover:underline">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
