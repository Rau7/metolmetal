import React from "react";
import Image from "next/image";
import map from "@/public/assets/mockup-assets/images/map1.png";

{
  /* 
    Soldaki foto kaldı!
    
    */
}
const IletisimSayfasi = () => {
  return (
    <section className="relative py-20">
      <div className="container px-4 mx-auto mb-10 lg:mb-0">
        <div className="w-full lg:w-1/2 ml-auto">
          <div className="flex flex-wrap lg:h-112 sm:max-w-md lg:ml-auto lg:mr-5">
            <div>
              <h2 className="mb-4 text-5xl font-bold font-heading">
                Sorularınız mı var?
              </h2>
              <p className="text-gray-500 leading-loose">
                Size en iyi hizmeti sunmak için buradayız. Ürünlerimiz veya
                projeleriniz hakkında bilgi almak için bizimle iletişime
                geçebilirsiniz.
              </p>
            </div>
            <div className="mt-12 lg:mt-auto w-full flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-0">
                <svg
                  className="mb-2"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                    fill="#67798E"
                  />
                  <circle cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
                </svg>
                <p className="text-2xl font-semibold text-gray-800">
                  Ziyaret Edin
                </p>
                <p className="text-lg text-gray-500 leading-loose">
                  5. Sk. No:18, Saray
                </p>
                <p className="text-lg text-gray-500 leading-loose">
                  06980, Kahramankazan/Ankara
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <svg
                  className="mb-2"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                    fill="#67798E"
                  />
                  <circle cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
                </svg>
                <p className="text-2xl font-semibold text-gray-800">
                  Bize Ulaşın
                </p>
                <p className="text-lg text-gray-500 leading-loose">
                  hello@wireframes.org(email)
                </p>
                <p className="text-lg text-gray-500 leading-loose">
                  +90 536 925 10 85
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:top-0 lg:mt-20 lg:left-0">
        <Image
          className="h-112 w-full lg:pr-8 object-cover lg:rounded-r-xl"
          src={map}
          alt
        />
      </div>
    </section>
  );
};

export default IletisimSayfasi;
