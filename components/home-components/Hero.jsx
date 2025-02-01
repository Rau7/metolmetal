import React from "react";
import Image from "next/image";
import fx from "@/public/assets/mockup-assets/images/gray-500-square.png";
import heroimg from "@/public/assets/mockup-assets/images/herox.png";

const Hero = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap items-center -mx-4 lg:my-10">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="mb-8 text-4xl lg:text-5xl font-bold max-w-sm">
            Ercan Baran / Metolmetal
          </h2>
          <p className="mb-6 text-lg text-gray-500 leading-loose max-w-lg">
            Güçlü, dayanıklı ve estetik çatı & oluk sistemleriyle yapılarınızı
            yıllarca güvenle koruyun. Kaliteli malzeme ve kusursuz işçilikle
            üretilen çözümlerimiz, her türlü hava koşuluna meydan okuyor.
          </p>
          <div className="flex flex-wrap">
            <a
              className="inline-block px-6 py-2 mr-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200"
              href="#"
            >
              Ürünlerimiz
            </a>
            <a
              className="inline-block px-6 py-2 text-sm text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
              href="#"
            >
              Hakkımızda
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <Image className="object-cover w-full rounded-xl" src={heroimg} alt />
        </div>
        <button className="block mt-10 lg:mt-20 mx-auto w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100">
          <svg
            className="mx-auto text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
