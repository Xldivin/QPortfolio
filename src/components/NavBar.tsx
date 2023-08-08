import React from "react";
import Image from "next/image";

function NavBar() {
  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0 bg-[#000614] z-[30]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
          <a href="#" className="flex items-center">
            <Image src='/Q.svg' alt="FedEx" width={100} height={100} />
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-[#0047FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Hire us
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded md:p-0"
                  aria-current="page"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded md:p-0"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded md:p-0"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded md:p-0"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
