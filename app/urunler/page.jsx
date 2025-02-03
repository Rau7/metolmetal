import React from "react";
import fb from "@/public/assets/mockup-assets/socials/facebook.svg";
import g500sq from "@/public/assets/mockup-assets/images/gray-300-avatar.png";
import Image from "next/image";

const Urunler = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
          <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">
            Ürünlerimiz
          </h2>
          <p className="text-lg text-gray-500 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 pb-12 bg-gray-50 rounded-lg text-center">
              <Image
                className="w-full w-full h-80 mx-auto mb-6 object-cover rounded-lg"
                src={g500sq}
              />
              <h3 className="text-2xl font-bold font-heading">Danny Bailey</h3>
              <p className="mb-6 text-lg text-gray-500">CEO &amp; Founder</p>
              <div>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block" href="#">
                  <Image src={fb} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 pb-12 bg-gray-50 rounded-lg text-center">
              <Image
                className="w-full h-80 mx-auto mb-6 object-cover rounded-lg"
                src={g500sq}
              />
              <h3 className="text-2xl font-bold font-heading">Danny Bailey</h3>
              <p className="mb-6 text-lg text-gray-500">CEO &amp; Founder</p>
              <div>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block" href="#">
                  <Image src={fb} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="p-6 pb-12 bg-gray-50 rounded-lg text-center">
              <Image
                className="w-full h-80 mx-auto mb-6 object-cover rounded-lg"
                src={g500sq}
                alt="Avatar"
              />
              <h3 className="text-2xl font-bold font-heading">Danny Bailey</h3>
              <p className="mb-6 text-lg text-gray-500">CEO &amp; Founder</p>
              <div>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block" href="#">
                  <Image src={fb} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-3">
            <div className="p-6 pb-12 bg-gray-50 rounded-lg text-center">
              <Image
                className="w-full h-80 mx-auto mb-6 object-cover rounded-lg"
                src={g500sq}
                alt="Avatar"
              />
              <h3 className="text-2xl font-bold font-heading">Danny Bailey</h3>
              <p className="mb-6 text-lg text-gray-500">CEO &amp; Founder</p>
              <div>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block" href="#">
                  <Image src={fb} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-3">
            <div className="p-6 pb-12 bg-gray-50 rounded-lg text-center">
              <Image
                className="w-full h-80 mx-auto mb-6 object-cover rounded-lg"
                src={g500sq}
                alt="Avatar"
              />
              <h3 className="text-2xl font-bold font-heading">Danny Bailey</h3>
              <p className="mb-6 text-lg text-gray-500">CEO &amp; Founder</p>
              <div>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block" href="#">
                  <Image src={fb} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-3">
            <div className="p-6 pb-12 bg-gray-50 rounded-lg text-center">
              <Image
                className="w-full h-80 mx-auto mb-6 object-cover rounded-lg"
                src={g500sq}
                alt="Avatar"
              />
              <h3 className="text-2xl font-bold font-heading">Danny Bailey</h3>
              <p className="mb-6 text-lg text-gray-500">CEO &amp; Founder</p>
              <div>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block mr-8" href="#">
                  <Image src={fb} />
                </a>
                <a className="inline-block" href="#">
                  <Image src={fb} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urunler;
