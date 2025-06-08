'use client'

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavBarToggle = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="border-b-1 bg-[#151819]">
      <div className="container mx-auto py-4  px-4 md:px-0 md:flex md:justify-between">
        <div className="flex justify-between w-full md:w-auto">
          <h1>
            <Image src="/assets/logo-white-img.png" alt="Logo" width={580} height={580} className="w-12 h-12 md:h-14 md:w-14" />
          </h1>
          <button
            className="md:hidden flex items-center text-white ml-auto"
            onClick={handleNavBarToggle}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <ul
            className={`${isMenuOpen ? "block" : "hidden"
              } md:flex md:text-base shadow-lg md:gap-4 md:shadow-none text-black md:text-white pl-4 py-4 md:py-0 md:pl-10 items-center justify-center absolute md:static top-20 left-0 w-full bg-white md:bg-transparent md:w-auto z-50`}
          >
            <li className="py-4 md:py-0 ">
              <a href="#como-funciona" className="hover:text-gray-500">Como Funciona?</a>
            </li>
            <li className="py-4 md:py-0 ">
              <a href="#quem-somos" className="hover:text-gray-500">Quem Somos</a>
            </li>
            <li className="py-4 md:py-0 ">
              <a href="#servicos" className="hover:text-gray-500">Serviços</a>
            </li>
            <li className="py-4 md:py-0 ">
              <a href="#contato" className="hover:text-gray-500">Contato</a>
            </li>

          </ul>          <div className="hidden">
            <a href="#">Contato</a>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:justify-end ">
          <a href="#" className="bg-white text-[#151819] rounded-xs px-4 py-2 hover:bg-gray-200  hover:text-black transition">Contato</a>
        </div>
      </div>
    </nav>
  )
}