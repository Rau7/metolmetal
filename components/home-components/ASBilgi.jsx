import React from "react";
import Image from "next/image";
import g500h from "@/public/assets/mockup-assets/images/gray-500-horizontal.png";
import asbilgi from "@/public/assets/mockup-assets/images/asbilgi.jpg";

const ASBilgi = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center mb-12 lg:mb-16">
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-lg">
              <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">
                Kurumsal
              </h2>
              <div className="max-w-lg">
                <p className="mb-6 lg:mb-0 text-lg text-gray-500 leading-loose">
                  20 yılı aşkın süredir inşaat sektöründe faaliyet gösteren
                  firmamız, deneyimli ekibiyle kaliteli hizmet anlayışını
                  benimsemiştir. Metol Metal, sektöründe kendini kanıtlamış
                  uzman kadrosuyla, güven ve kaliteyi ilke edinerek, her projede
                  en yüksek standartları sunmaktadır. Geleceğin inşaat
                  çözümlerini tanıtan ve pazarlayan firmamız, her zaman güvenli
                  ve sağlam yapılar inşa etmek için çalışmaktadır.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Image
              className="w-full max-h-80 object-cover rounded-lg"
              src={asbilgi}
              alt
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASBilgi;
