import React from "react";
import fi from "../public/assets/mockup-assets/logos/shuffle-ux.svg";
import fx from "../public/assets/mockup-assets/images/gray-500-square.png";
import Image from "next/image";
import Link from "next/link";
import mlogo from "../public/assets/mockup-assets/images/eblogo2.png";

const Navbar = () => {
  return (
    <section>
      <div className="container px-4 mx-auto">
        <nav className="flex justify-between items-center py-8">
          <Link className="text-gray-600 text-2xl leading-none" href="/">
            <Image className="h-16" src={mlogo} alt width="160" />
          </Link>
          <div className="lg:hidden">
            <button className="block text-gray-500 hover:text-gray-600 focus:outline-none">
              <svg
                className="h-4 w-4"
                fill="currentColor "
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">
            <li>
              <Link
                className="text-lg text-gray-500 hover:text-gray-700"
                href="/hakkimizda"
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                className="text-lg text-gray-500 hover:text-gray-700"
                href="/urunler"
              >
                Ürünler
              </Link>
            </li>
            <li>
              <Link
                className="text-lg text-gray-500 hover:text-gray-700"
                href="/galeri"
              >
                Galeri
              </Link>
            </li>
            <li>
              <Link
                className="text-lg text-gray-500 hover:text-gray-700"
                href="/referanslar"
              >
                Referanslar
              </Link>
            </li>
          </ul>
          <Link
            className="hidden lg:block px-6 py-3 text-sm text-gray-500 hover:text-gray-600 font-bold border border-gray-100 hover:border-gray-200 rounded"
            href="/iletisim"
          >
            İletişim
          </Link>
        </nav>
      </div>
      <div className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link
              className="mr-auto text-2xl font-semibold leading-none"
              href="/"
            >
              <Image className="h-8" src={fi} alt width="auto" />
            </Link>
            <button>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="/hakkimizda"
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="/urunler"
                >
                  Ürünler
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="/galeri"
                >
                  Galeri
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="/referanslar"
                >
                  Referanslar
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
                href="/iletisim"
              >
                Iletişim
              </Link>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-400">
              <span>© 2025 Alp Toker All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
