"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import u1 from "@/public/assets/mockup-assets/images/mmurunler/urun1.jpeg";
import u2 from "@/public/assets/mockup-assets/images/mmurunler/urun2.jpeg";
import u3 from "@/public/assets/mockup-assets/images/mmurunler/urun3.jpeg";
import u4 from "@/public/assets/mockup-assets/images/mmurunler/urun4.jpeg";

const products = [
  {
    id: 1,
    name: "A-80 Dirsek",
    image: u2,
    slug: "a-80-dirsek",
    description:
      "Yüksek kaliteli A-80 dirsek, dayanıklı ve uzun ömürlü kullanım için tasarlandı.",
    features: ["Yüksek dayanıklılık", "Kolay montaj", "Uzun ömürlü kullanım"],
    specifications: {
      material: "Galvaniz Çelik",
      thickness: "0.50mm - 0.70mm",
      finish: "Elektrostatik Toz Boya",
    },
  },
  {
    id: 2,
    name: "Deve Boynu",
    image: u3,
    slug: "deve-boynu",
    description:
      "Özel tasarım deve boynu, maksimum performans ve estetik görünüm sağlar.",
    features: ["Estetik tasarım", "Su geçirmez", "Kolay bakım"],
    specifications: {
      material: "Galvaniz Çelik",
      thickness: "0.50mm - 0.70mm",
      finish: "Elektrostatik Toz Boya",
    },
  },
  {
    id: 3,
    name: "İç Askı",
    image: u4,
    slug: "ic-aski",
    description:
      "Güçlendirilmiş iç askı sistemi, maksimum yük taşıma kapasitesi sunar.",
    features: ["Yüksek taşıma kapasitesi", "Kolay montaj", "Uzun ömürlü"],
    specifications: {
      material: "Galvaniz Çelik",
      thickness: "0.50mm - 0.70mm",
      finish: "Elektrostatik Toz Boya",
    },
  },
  {
    id: 4,
    name: "Kapak",
    image: u1,
    slug: "kapak",
    description: "Su geçirmez kapak sistemi, mükemmel koruma sağlar.",
    features: ["Su geçirmez", "Dayanıklı", "Kolay montaj"],
    specifications: {
      material: "Galvaniz Çelik",
      thickness: "0.50mm - 0.70mm",
      finish: "Elektrostatik Toz Boya",
    },
  },
  {
    id: 5,
    name: "B-80",
    image: u2,
    slug: "b-80",
    description: "B-80 serisi, endüstriyel uygulamalar için ideal çözüm sunar.",
    features: ["Endüstriyel kullanım", "Yüksek dayanım", "Kolay kurulum"],
    specifications: {
      material: "Galvaniz Çelik",
      thickness: "0.50mm - 0.70mm",
      finish: "Elektrostatik Toz Boya",
    },
  },
  {
    id: 6,
    name: "A-50",
    image: u2,
    slug: "a-50",
    description: "A-50 serisi, kompakt ve etkili çözümler sunar.",
    features: ["Kompakt tasarım", "Verimli kullanım", "Kolay montaj"],
    specifications: {
      material: "Galvaniz Çelik",
      thickness: "0.50mm - 0.70mm",
      finish: "Elektrostatik Toz Boya",
    },
  },
];

// Export products array for use in detail pages
export { products };

const Urunler = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
          <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">
            Ürünlerimiz
          </h2>
          <p className="text-lg text-gray-500 leading-loose">
            Metol Metal olarak, dayanıklı, estetik ve uzun ömürlü çatı ve oluk
            sistemleri sunuyoruz. Her projeye özel, kaliteli malzemeler ve
            yenilikçi çözümlerle binalarınıza değer katıyoruz. Sektördeki
            tecrübemiz ve müşteri memnuniyetine verdiğimiz önemle, ihtiyacınıza
            en uygun ürünleri sizlerle buluşturuyoruz.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <Link href={`/urunler/${product.slug}`}>
                <div className="group p-6 pb-12 bg-gray-50 rounded-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                  <h4 className="text-xl font-bold font-heading mt-6 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h4>
                  <p className="mt-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Detaylar için tıklayın
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Urunler;
