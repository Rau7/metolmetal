"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import urunlerData from "@/public/sitedata/urunler.json";

const Urunlerimiz = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [visibleProducts, setVisibleProducts] = useState(6);

  const categories = ["Tümü", ...urunlerData.kategoriler];

  const filteredProducts =
    selectedCategory === "Tümü"
      ? urunlerData.urunler
      : urunlerData.urunler.filter(
          (urun) => urun.kategori === selectedCategory
        );

  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  const loadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 6, filteredProducts.length));
  };

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">
            Ürünlerimiz
          </h2>
          <p className="text-lg text-gray-500 leading-loose">
            Yüksek kaliteli metal ürünlerimiz ve çözümlerimiz
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProducts(6); // Reset visible products when category changes
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((urun) => (
            <div key={urun.id} className="flex">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full flex flex-col">
                <div className="relative h-64">
                  <Image
                    src={urun.resimler[0]}
                    alt={urun.baslik}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm font-semibold text-gray-500 mb-2">
                    {urun.kategori}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{urun.baslik}</h3>
                  <p className="text-gray-600 flex-grow mb-4">{urun.ozet}</p>
                  <Link
                    href={`/urunlerimiz/${urun.id}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-200"
                  >
                    Detayları Gör
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < filteredProducts.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Daha Fazla Ürün
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Urunlerimiz;
