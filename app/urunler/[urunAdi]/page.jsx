"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../page";
import { notFound } from "next/navigation";

const ProductDetail = ({ params }) => {
  const product = products.find((p) => p.slug === params.urunAdi);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Ürün Görseli */}
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="relative overflow-hidden rounded-lg bg-gray-50 p-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Ürün Detayları */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:pl-8">
                <div className="mb-6">
                  <h1 className="mt-2 text-4xl font-bold font-heading">
                    {product.name}
                  </h1>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Ürün Açıklaması</h2>
                  <p className="text-gray-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Özellikler</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Teknik Özellikler</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-4">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </span>
                            <span className="font-medium">{value}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href="/iletisim"
                    className="inline-block px-8 py-4 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
                  >
                    İletişime Geçin
                  </Link>
                  <Link
                    href="/urunler"
                    className="inline-block px-8 py-4 text-gray-700 font-bold bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200"
                  >
                    Tüm Ürünler
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
