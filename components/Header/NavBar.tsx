'use client'

import { FaBars } from "react-icons/fa";

export default function NavBar() {
  return <>
    <nav className="bg-gray-900 w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/logo-white-img.png" className="h-10" alt="Icarus Roc Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Icarus Roc</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="cursor-pointer text-gray-900 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-4 py-2 text-center">Contato</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <FaBars className="w-6 h-6" />
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#quem-somos" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-600 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Quem somos</a>
            </li>
            <li>
              <a href="#como-funciona" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-600 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Como Funciona</a>
            </li>
            <li>
              <a href="#pricing-card" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-600 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Serviços</a>
            </li>
            {/* <li>
              <a href="#" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-600 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Trabalhos</a>
            </li> */}
            <li>
              <a href="#contato" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-600 md:hover:bg-transparent md:hover:text-blue-600 md:p-0">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  </>
}