"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import projelerData from "@/public/sitedata/projeler.json";

export default function HaberDetay({ params }) {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: null,
    currentIndex: 0,
  });

  const haber = projelerData.projeler.find((p) => p.id === params.projeAdi);

  if (!haber) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Haber Bulunamadı</h1>
      </div>
    );
  }

  const openLightbox = (index) => {
    setLightbox({
      isOpen: true,
      currentImage: haber.resimler[index],
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
        haber.resimler[(prev.currentIndex + 1) % haber.resimler.length],
      currentIndex: (prev.currentIndex + 1) % haber.resimler.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentImage:
        haber.resimler[
          prev.currentIndex === 0
            ? haber.resimler.length - 1
            : prev.currentIndex - 1
        ],
      currentIndex:
        prev.currentIndex === 0
          ? haber.resimler.length - 1
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
    <div className="py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/projelerimiz"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800"
        >
          ← Haberlere Dön
        </Link>

        <article className="mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{haber.tarih}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{haber.konum}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">{haber.baslik}</h1>
            <p className="text-xl text-gray-600 mb-8">{haber.ozet}</p>
          </div>

          <div
            className="relative h-[500px] mb-8 cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={haber.resimler[0]}
              alt={haber.baslik}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed">{haber.detay}</p>
          </div>

          {haber.resimler.length > 1 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Fotoğraf Galerisi</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {haber.resimler.slice(1).map((resim, index) => (
                  <div
                    key={index}
                    className="relative h-[200px] cursor-pointer group"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <Image
                      src={resim}
                      alt={`${haber.baslik} - Fotoğraf ${index + 2}`}
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

          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {haber.etiketler.map((etiket, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {etiket}
                </span>
              ))}
            </div>
          </div>
        </article>
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
              alt={`${haber.baslik} - Fotoğraf ${lightbox.currentIndex + 1}`}
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
    </div>
  );
}
