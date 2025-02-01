import React from "react";
import Image from "next/image";
import refers from "@/public/assets/mockup-assets/images/gray-300-avatar.png";

const Referanslar = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
          <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">
            Referanslar
          </h2>
          <p className="text-lg text-gray-500 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-center justify-center bg-gray-50 py-12 rounded-lg">
              <div className="text-center">
                <Image
                  className="w-20 h-20 mx-auto rounded-full mb-6"
                  src={refers}
                  alt
                />
                <h3 className="text-2xl font-bold font-heading">
                  Danny Bailey
                </h3>
                <p className="text-lg text-gray-500">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-center justify-center bg-gray-50 py-12 rounded-lg">
              <div className="text-center">
                <Image
                  className="w-20 h-20 mx-auto rounded-full mb-6"
                  src={refers}
                  alt
                />
                <h3 className="text-2xl font-bold font-heading">
                  Danny Bailey
                </h3>
                <p className="text-lg text-gray-500">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-center justify-center bg-gray-50 py-12 rounded-lg">
              <div className="text-center">
                <Image
                  className="w-20 h-20 mx-auto rounded-full mb-6"
                  src={refers}
                  alt
                />
                <h3 className="text-2xl font-bold font-heading">
                  Danny Bailey
                </h3>
                <p className="text-lg text-gray-500">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-center justify-center bg-gray-50 py-12 rounded-lg">
              <div className="text-center">
                <Image
                  className="w-20 h-20 mx-auto rounded-full mb-6"
                  src={refers}
                  alt
                />
                <h3 className="text-2xl font-bold font-heading">
                  Danny Bailey
                </h3>
                <p className="text-lg text-gray-500">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-center justify-center bg-gray-50 py-12 rounded-lg">
              <div className="text-center">
                <Image
                  className="w-20 h-20 mx-auto rounded-full mb-6"
                  src={refers}
                  alt
                />
                <h3 className="text-2xl font-bold font-heading">
                  Danny Bailey
                </h3>
                <p className="text-lg text-gray-500">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-center justify-center bg-gray-50 py-12 rounded-lg">
              <div className="text-center">
                <img
                  className="w-20 h-20 mx-auto rounded-full mb-6"
                  src="mockup-assets/images/gray-300-avatar.png"
                  alt
                />
                <h3 className="text-2xl font-bold font-heading">
                  Danny Bailey
                </h3>
                <p className="text-lg text-gray-500">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referanslar;
