"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import urunlerData from "@/public/sitedata/urunler.json";

export default function UrunDetay({ params }) {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: null,
    currentIndex: 0,
  });

  const urun = urunlerData.urunler.find((p) => p.id === params.urunId);

  if (!urun) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Ürün Bulunamadı</h1>
      </div>
    );
  }

  const openLightbox = (index) => {
    setLightbox({
      isOpen: true,
      currentImage: urun.resimler[index],
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
        urun.resimler[(prev.currentIndex + 1) % urun.resimler.length],
      currentIndex: (prev.currentIndex + 1) % urun.resimler.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentImage:
        urun.resimler[
          prev.currentIndex === 0
            ? urun.resimler.length - 1
            : prev.currentIndex - 1
        ],
      currentIndex:
        prev.currentIndex === 0
          ? urun.resimler.length - 1
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
        <div className=" mx-auto">
          <Link
            href="/urunlerimiz"
            className="inline-block mb-8 text-blue-600 hover:text-blue-800"
          >
            ← Ürünlere Dön
          </Link>

          <div className="flex flex-wrap -mx-4">
            {/* Ürün Görseli */}
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div
                className="relative overflow-hidden rounded-lg bg-gray-50 p-2 cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <div className="relative h-[500px]">
                  <Image
                    src={urun.resimler[0]}
                    alt={urun.baslik}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Ürün Detayları */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:pl-8">
                <div className="mb-6">
                  <span className="inline-block text-gray-600 bg-gray-100 px-4 py-2 rounded-full text-sm mb-4">
                    {urun.kategori}
                  </span>
                  <h1 className="text-4xl font-bold font-heading">
                    {urun.baslik}
                  </h1>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Ürün Açıklaması</h2>
                  <p className="text-gray-500 leading-relaxed">{urun.detay}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Özellikler</h2>
                  <ul className="space-y-3">
                    {urun.ozellikler.map((ozellik, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{ozellik}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href="/iletisim"
                    className="inline-block px-8 py-4 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
                  >
                    İletişime Geçin
                  </Link>
                  <Link
                    href="/urunlerimiz"
                    className="inline-block px-8 py-4 text-gray-700 font-bold bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200"
                  >
                    Tüm Ürünler
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Ürün Galerisi */}
          {urun.resimler.length > 1 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Ürün Galerisi</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {urun.resimler.slice(1).map((resim, index) => (
                  <div
                    key={index}
                    className="relative h-[200px] cursor-pointer group"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <Image
                      src={resim}
                      alt={`${urun.baslik} - Görsel ${index + 2}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
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
              alt={`${urun.baslik} - Görsel ${lightbox.currentIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
              className="w-full h-full"
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
}
