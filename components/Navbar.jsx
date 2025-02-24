"use client";
import React, { useState } from "react";
import fi from "../public/assets/mockup-assets/logos/shuffle-ux.svg";
import fx from "../public/assets/mockup-assets/images/gray-500-square.png";
import Image from "next/image";
import Link from "next/link";
import mlogo from "../public/assets/mockup-assets/images/eblogo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="container px-4 mx-auto">
        <nav className="flex justify-between items-center py-8">
          <Link className="text-gray-600 text-2xl leading-none ml-3" href="/">
            <Image className="h-16" src={mlogo} alt width="160" />
          </Link>
          <div className="lg:hidden">
            <button
              className="block text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
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
            <li>
              <Link
                className="text-lg text-gray-500 hover:text-gray-700"
                href="/projelerimiz"
              >
                Projelerimiz
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

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg absolute left-4 right-4 z-50">
            <Link
              href="/hakkimizda"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={handleLinkClick}
            >
              Hakkımızda
            </Link>
            <Link
              href="/urunler"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={handleLinkClick}
            >
              Ürünler
            </Link>
            <Link
              href="/galeri"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={handleLinkClick}
            >
              Galeri
            </Link>
            <Link
              href="/referanslar"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={handleLinkClick}
            >
              Referanslar
            </Link>
            <Link
              href="/projelerimiz"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={handleLinkClick}
            >
              Projelerimiz
            </Link>
            <Link
              href="/iletisim"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={handleLinkClick}
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
