"use client";
import React, { useState } from "react";
import Image from "next/image";
import urun1 from "@/public/assets/mockup-assets/images/mmurunler/urun1.jpeg";

const Galeri = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, name: "Çatı Sistemleri" },
    { id: 2, name: "Metal Konstrüksiyon" },
    { id: 3, name: "Özel Projeler" },
    { id: 4, name: "Tüm Projeler" },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mb-8 mx-auto text-center">
          <span className="text-sm uppercase text-gray-500">Galeri</span>
          <h2 className="mt-2 text-4xl lg:text-5xl font-bold font-heading">
            Projelerimizden Örnekler
          </h2>
        </div>
        <div className="mb-8 lg:mb-16 text-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg mr-6 border-b-4 pb-3 ${
                activeTab === tab.id
                  ? "border-gray-500 text-gray-900"
                  : "text-gray-500 border-transparent"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="flex flex-wrap w-full md:w-1/2 lg:h-screen">
            <div className="w-1/2 h-64 lg:h-1/3 p-2">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={urun1}
                alt="Proje 1"
              />
            </div>
            <div className="w-1/2 h-64 lg:h-1/3 p-2">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={urun1}
                alt="Proje 2"
              />
            </div>
            <div className="w-full h-96 md:h-64 lg:h-2/3 p-2">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={urun1}
                alt="Proje 3"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2 lg:h-screen">
            <div className="w-full h-96 md:h-64 lg:h-2/3 p-2">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={urun1}
                alt="Proje 4"
              />
            </div>
            <div className="w-1/2 h-64 lg:h-1/3 p-2">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={urun1}
                alt="Proje 5"
              />
            </div>
            <div className="w-1/2 h-64 lg:h-1/3 p-2">
              <Image
                className="w-full h-full object-cover rounded-lg"
                src={urun1}
                alt="Proje 6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeri;
