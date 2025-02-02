"use client";
import React, { useState } from "react";
import Image from "next/image";
import gal1 from "@/public/assets/mockup-assets/images/mmurunler/urun1.jpeg";

const Galeri = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      image: gal1,
      title: "Çatı Sistemleri",
      description:
        "Modern ve dayanıklı çatı sistemleri ile projelerinize değer katıyoruz. Yüksek kaliteli malzemeler ve uzman işçilik ile uzun ömürlü çözümler sunuyoruz.",
    },
    {
      image: gal1,
      title: "Metal Konstrüksiyon",
      description:
        "Endüstriyel ve ticari yapılar için özel tasarlanmış metal konstrüksiyon çözümlerimiz ile projelerinizi hayata geçiriyoruz. Güvenli ve estetik yapılar inşa ediyoruz.",
    },
    {
      image: gal1,
      title: "Özel Projeler",
      description:
        "Her projeye özel çözümler üreterek, müşterilerimizin ihtiyaçlarını en iyi şekilde karşılıyoruz. Modern tasarım ve sağlam yapı anlayışımızla fark yaratıyoruz.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-end -mx-4 mb-6">
          <div className="w-full lg:w-3/5 px-4 mb-6 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Galeri
            </h2>
          </div>
          <div className="w-full lg:w-2/5 px-4 flex lg:justify-end">
            <button
              className="mr-4 w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100"
              onClick={handlePrev}
            >
              <svg
                className="text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100"
              onClick={handleNext}
            >
              <svg
                className="text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${galleryItems.length * 100}%`,
            }}
          >
            {galleryItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 px-5">
                <Image
                  className="mb-6 w-full h-112 object-cover rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
                <div>
                  <h3 className="mb-4 text-2xl font-bold font-heading">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-loose">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full border border-gray-500 ${
                currentIndex === index ? "bg-gray-500" : "bg-transparent"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeri;
