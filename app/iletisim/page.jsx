import React from "react";
import Image from "next/image";
import map from "@/public/assets/mockup-assets/images/map.png";
import fb from "@/public/assets/mockup-assets/socials/facebook.svg";
import ig from "@/public/assets/mockup-assets/socials/instagram.svg";
import tw from "@/public/assets/mockup-assets/socials/twitter.svg";

const SocialIcon = ({ src }) => {
  return <Image className="mr-3" src={src} alt="Social Icon" />;
};

const IletisimSayfasi = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Harita */}
          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-[600px] object-cover rounded-lg"
              src={map}
              alt="Harita"
            />
          </div>

          {/* İletişim Bilgileri */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="mb-4 text-5xl font-bold font-heading">
                İletişim Bilgileri
              </h2>
              <p className="mb-12 text-gray-500">
                Bizimle iletişime geçmek için aşağıdaki bilgileri
                kullanabilirsiniz.
              </p>
              <div className="flex mb-6">
                <span className="mr-4 font-semibold">Telefon:</span>
                <span className="text-gray-500">0 (535) 961 58 58</span>
              </div>
              <div className="flex mb-6">
                <span className="mr-4 font-semibold">Email:</span>
                <span className="text-gray-500">info@metolmetal.com</span>
              </div>
              <div className="flex mb-6">
                <span className="mr-4 font-semibold">Adres:</span>
                <span className="text-gray-500">
                  5. Sk. No:18, Saray 06980, Kahramankazan/Ankara
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-4 font-semibold">Sosyal Medya:</span>
                <div className="flex">
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <SocialIcon src={fb} />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <SocialIcon src={ig} />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <SocialIcon src={tw} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IletisimSayfasi;
