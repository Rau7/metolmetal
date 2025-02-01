import React from "react";
import Image from "next/image";
import g500sq from "@/public/assets/mockup-assets/images/gray-500-square.png";
import u1 from "@/public/assets/mockup-assets/images/mmurunler/urun1.jpeg";
import u2 from "@/public/assets/mockup-assets/images/mmurunler/urun2.jpeg";
import u3 from "@/public/assets/mockup-assets/images/mmurunler/urun3.jpeg";
import u4 from "@/public/assets/mockup-assets/images/mmurunler/urun4.jpeg";
const ASHizmetler = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-16">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                <div className="h-80 lg:h-40">
                  <Image
                    className="w-full h-full object-cover rounded-lg"
                    src={u1}
                    alt
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3 px-4">
                <h2 className="mb-2 text-3xl font-bold font-heading">
                  Köşeli Oluk Kapağı
                </h2>
                <p className="mb-4 text-lg text-gray-500 leading-loose">
                  Köşeli oluk kapağı, yağmur suyu tahliye sistemlerinde açık
                  uçları kapatarak suyun doğru yönlendirilmesini sağlar.
                  Dayanıklı malzemesi sayesinde uzun ömürlüdür ve her türlü hava
                  koşuluna karşı yüksek direnç gösterir.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-16">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                <div className="h-80 lg:h-40">
                  <Image
                    className="w-full h-full object-cover rounded-lg"
                    src={u2}
                    alt
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3 px-4">
                <h2 className="mb-2 text-3xl font-bold font-heading">
                  Köşeli Dirsek
                </h2>
                <p className="mb-4 text-lg text-gray-500 leading-loose">
                  Köşeli dirsek, yağmur suyu tahliye sistemlerinde kullanılan
                  bir dirsekdir. Dirsek, suyun akısını kontrol ederek suyun
                  doğru yönlendirilmesini sağlar.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-16">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                <div className="h-80 lg:h-40">
                  <Image
                    className="w-full h-full object-cover rounded-lg"
                    src={u3}
                    alt
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3 px-4">
                <h2 className="mb-2 text-3xl font-bold font-heading">
                  Deve Boynu
                </h2>
                <p className="mb-4 text-lg text-gray-500 leading-loose">
                  Deve boynu, oluk sistemlerinde suyun akış yönünü değiştirmek
                  için kullanılan özel bir parçadır. Özellikle eğimli çatılarda
                  suyun sorunsuz tahliyesini sağlarken, estetik görünümüyle
                  yapıya uyum sağlar. Paslanmaz ve dayanıklı malzemesi sayesinde
                  uzun yıllar güvenle kullanılabilir.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-16">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
                <div className="h-80 lg:h-40">
                  <Image
                    className="w-full h-full object-cover rounded-lg"
                    src={u4}
                    alt
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3 px-4">
                <h2 className="mb-2 text-3xl font-bold font-heading">Kanca</h2>
                <p className="mb-4 text-lg text-gray-500 leading-loose">
                  Kanca, oluk sistemlerini çatıya sağlam ve güvenli bir şekilde
                  monte etmek için kullanılan kritik bir bağlantı elemanıdır.
                  Yüksek taşıma kapasitesi ve dayanıklı yapısı sayesinde, oluk
                  sisteminin uzun ömürlü olmasını sağlar ve dış etkenlere karşı
                  ekstra direnç sunar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center align-middle">
          <h3 className="mb-2 text-2xl font-bold font-heading">Daha Fazlası</h3>
        </div>
      </div>
    </section>
  );
};

export default ASHizmetler;
