import React from "react";
import Image from "next/image";
import mlogo from "@/public/assets/mockup-assets/images/eblogo2.png";

const HakkimizdaSayfasi = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">
            Hakkımızda
          </h2>
          <p className="text-lg text-gray-500 leading-loose">
            Metol Metal, 20 yılı aşkın deneyimiyle oluk, çatı ve çelik
            konstrüksiyon sektöründe güven ve kaliteyi ön planda tutan bir
            firmadır. Kurulduğumuz günden bu yana müşteri memnuniyetini esas
            alarak, dayanıklı ve yenilikçi çözümler sunmaktayız. Uzman ekibimiz
            ve modern üretim teknolojilerimizle, projelerinize özel en iyi çatı
            ve yapı sistemlerini sağlamak için çalışıyoruz. Güçlü altyapımız,
            tecrübeli kadromuz ve sürdürülebilir üretim anlayışımızla sektörün
            öncüsü olmayı hedefliyoruz. Metol Metal olarak, geleceğin yapılarını
            inşa ederken estetik, güvenlik ve dayanıklılığı bir araya
            getiriyoruz. Sizi de kaliteli ve uzun ömürlü çözümlerimizle
            tanışmaya davet ediyoruz.
          </p>
        </div>
        <div className="flex items-center justify-around">
          <Image
            className="mx-auto mb-6"
            src={mlogo}
            alt="Metol Metal Logo"
            width="300"
            height="160"
          />
        </div>
        <div className="flex items-center justify-around">
          <button className="flex-shrink-0 hidden md:block w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100">
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
          <div className="overflow-hidden pt-12">
            <div className="flex transition-transform duration-500 ease-in-out -m-5">
              <div className="flex-shrink-0 w-full p-5">
                <div className="relative">
                  <div className="max-w-2xl mx-auto py-16 px-12 mb-6 lg:mb-12 bg-gray-50 rounded-lg text-center">
                    <div className="absolute inset-0 -mt-10"></div>
                    <h3 className="text-2xl font-bold font-heading">
                      Vizyonumuz
                    </h3>
                    <p className="text-gray-500 text-lg leading-loose">
                      Metol Metal olarak, çatı ve yapı sistemleri sektöründe
                      yenilikçi, sürdürülebilir ve kaliteli çözümler sunarak
                      lider bir marka olmayı hedefliyoruz. Güçlü altyapımız ve
                      müşteri odaklı yaklaşımımızla, geleceğin yapı
                      teknolojilerine yön veren bir firma olarak sektörde fark
                      yaratmayı amaçlıyoruz.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full p-5">
                <div className="relative">
                  <div className="max-w-2xl mx-auto py-16 px-12 mb-6 lg:mb-12 bg-gray-50 rounded-lg text-center">
                    <div className="absolute inset-0 -mt-10"></div>
                    <h3 className="text-2xl font-bold font-heading">
                      Misyonumuz
                    </h3>
                    <p className="text-gray-500 text-lg leading-loose">
                      Müşterilerimize en kaliteli, dayanıklı ve estetik çatı ve
                      yapı çözümlerini sunarak, yapı sektöründe güvenilir bir
                      partner olmak. Teknolojik gelişmeleri yakından takip
                      ederek, sürdürülebilir üretim anlayışıyla çevre dostu ve
                      yenilikçi ürünler geliştirmek. Kalite, güven ve müşteri
                      memnuniyetini her zaman ön planda tutarak sektörde kalıcı
                      değerler yaratmak.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex-shrink-0 hidden md:block w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100">
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
        <div className="hidden md:block w-full text-center">
          <button className="w-3 h-3 mr-2 rounded-full bg-gray-500 border border-gray-500" />
          <button className="w-3 h-3 mr-2 rounded-full bg-transparent border border-gray-500" />
        </div>
        <div className="md:hidden w-full text-center">
          <button className="w-12 h-12 p-2 rounded-full bg-gray-50">
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
          <button className="w-12 h-12 p-2 rounded-full bg-gray-50">
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
    </section>
  );
};

export default HakkimizdaSayfasi;
