import React from "react";
import Image from "next/image";
import Link from "next/link";
import urunlerData from "@/public/sitedata/urunler.json";

const ASHizmetler = () => {
  // Select first 4 products to display
  const featuredProducts = urunlerData.urunler.slice(0, 8);

  return (
    <section id="urunlerimiz" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 justify-center align-middle">
          <h3 className="mb-20 text-3xl font-bold font-heading">
            Başlıca Ürünlerimiz
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((urun) => (
            <Link
              href={`/urunlerimiz/${urun.id}`}
              key={urun.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 group-hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src={urun.resimler[0]}
                    alt={urun.baslik}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block text-sm text-gray-500 bg-gray-100 rounded-full px-3 py-1">
                      {urun.kategori}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {urun.baslik}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {urun.ozet}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/urunlerimiz"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Tüm Ürünlerimizi Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ASHizmetler;
