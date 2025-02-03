"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import u1 from "@/public/assets/mockup-assets/images/mmurunler/u1.jpeg";
import u2 from "@/public/assets/mockup-assets/images/mmurunler/u2.jpeg";
import u3 from "@/public/assets/mockup-assets/images/mmurunler/u3.jpeg";
import u4 from "@/public/assets/mockup-assets/images/mmurunler/u4.jpeg";
import u5 from "@/public/assets/mockup-assets/images/mmurunler/u5.jpeg";
import u6 from "@/public/assets/mockup-assets/images/mmurunler/u6.jpeg";
import u7 from "@/public/assets/mockup-assets/images/mmurunler/u7.jpeg";
import u8 from "@/public/assets/mockup-assets/images/mmurunler/u8.jpeg";
import u9 from "@/public/assets/mockup-assets/images/mmurunler/u9.jpeg";
import u10 from "@/public/assets/mockup-assets/images/mmurunler/u10.jpeg";
import u11 from "@/public/assets/mockup-assets/images/mmurunler/u11.jpeg";
import u12 from "@/public/assets/mockup-assets/images/mmurunler/u12.jpeg";
import u13 from "@/public/assets/mockup-assets/images/mmurunler/u13.jpeg";
import u14 from "@/public/assets/mockup-assets/images/mmurunler/u14.jpeg";
import u15 from "@/public/assets/mockup-assets/images/mmurunler/u15.jpeg";
import u16 from "@/public/assets/mockup-assets/images/mmurunler/u16.jpeg";
import u17 from "@/public/assets/mockup-assets/images/mmurunler/u17.jpeg";
import u18 from "@/public/assets/mockup-assets/images/mmurunler/u18.jpeg";
import u19 from "@/public/assets/mockup-assets/images/mmurunler/u19.jpeg";
import u20 from "@/public/assets/mockup-assets/images/mmurunler/u20.jpeg";
import u21 from "@/public/assets/mockup-assets/images/mmurunler/u21.jpeg";
import u22 from "@/public/assets/mockup-assets/images/mmurunler/u22.jpeg";
import u23 from "@/public/assets/mockup-assets/images/mmurunler/u23.jpeg";
import u24 from "@/public/assets/mockup-assets/images/mmurunler/u24.jpeg";

const Galeri = () => {
  const [activeTab, setActiveTab] = useState(4); // Default to Tüm Projeler
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: null,
    currentIndex: 0,
  });

  const tabs = [
    { id: 4, name: "Tüm Projeler" },
    { id: 1, name: "Çatı Sistemleri" },
    { id: 2, name: "Metal Konstrüksiyon" },
    { id: 3, name: "Özel Projeler" },
  ];

  const galleryImages = {
    1: [u1, u2, u3, u4, u5, u6], // Çatı Sistemleri
    2: [u7, u8, u9, u10, u11, u12], // Metal Konstrüksiyon
    3: [u13, u14, u15, u16, u17, u18], // Özel Projeler
    4: [u19, u20, u21, u22, u23, u24], // Tüm Projeler
  };

  const currentImages = galleryImages[activeTab];

  const openLightbox = (index) => {
    setLightbox({
      isOpen: true,
      currentImage: currentImages[index],
      currentIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      currentImage: null,
      currentIndex: 0,
    });
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentImage:
        currentImages[(prev.currentIndex + 1) % currentImages.length],
      currentIndex: (prev.currentIndex + 1) % currentImages.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentImage:
        currentImages[
          prev.currentIndex === 0
            ? currentImages.length - 1
            : prev.currentIndex - 1
        ],
      currentIndex:
        prev.currentIndex === 0
          ? currentImages.length - 1
          : prev.currentIndex - 1,
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.isOpen]);

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
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                <Image
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  src={currentImages[0]}
                  alt={`${tabs.find((t) => t.id === activeTab).name} - Proje 1`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
            <div className="w-1/2 h-64 lg:h-1/3 p-2">
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => openLightbox(1)}
              >
                <Image
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  src={currentImages[1]}
                  alt={`${tabs.find((t) => t.id === activeTab).name} - Proje 2`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
            <div className="w-full h-96 md:h-64 lg:h-2/3 p-2">
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => openLightbox(2)}
              >
                <Image
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  src={currentImages[2]}
                  alt={`${tabs.find((t) => t.id === activeTab).name} - Proje 3`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2 lg:h-screen">
            <div className="w-full h-96 md:h-64 lg:h-2/3 p-2">
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => openLightbox(3)}
              >
                <Image
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  src={currentImages[3]}
                  alt={`${tabs.find((t) => t.id === activeTab).name} - Proje 4`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
            <div className="w-1/2 h-64 lg:h-1/3 p-2">
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => openLightbox(4)}
              >
                <Image
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  src={currentImages[4]}
                  alt={`${tabs.find((t) => t.id === activeTab).name} - Proje 5`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
            <div className="w-1/2 h-64 lg:h-1/3 p-2">
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => openLightbox(5)}
              >
                <Image
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  src={currentImages[5]}
                  alt={`${tabs.find((t) => t.id === activeTab).name} - Proje 6`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Lightbox */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={closeLightbox}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
            onClick={prevImage}
          >
            ‹
          </button>
          <div className="relative w-full max-w-4xl h-[80vh] mx-4">
            <Image
              src={lightbox.currentImage}
              alt={`${tabs.find((t) => t.id === activeTab).name} - Proje ${
                lightbox.currentIndex + 1
              }`}
              className="w-full h-full object-contain"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Galeri;
