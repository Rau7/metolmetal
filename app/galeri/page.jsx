import React from "react";
import Image from "next/image";
import gal from "@/public/assets/mockup-assets/images/gray-500-horizontal.png";

const Galeri = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-end -mx-4 mb-6">
          <div className="w-full lg:w-3/5 px-4 mb-6 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Galeri
            </h2>
          </div>
          <div className="w-full lg:w-2/5 px-4 flex lg:justify-end">
            <button className="mr-4 w-16 h-16 p-5 rounded-full bg-gray-50">
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
            <button className="w-16 h-16 p-5 rounded-full bg-gray-50">
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
        <div className="relative">
          <div className="flex transition-transform duration-500 ease-in-out -m-5">
            <div className="flex-shrink-0 w-full p-5">
              <Image
                className="mb-6 w-full h-112 object-cover rounded-lg"
                src={gal}
                alt
              />
              <div>
                <h3 className="mb-4 text-2xl font-bold font-heading">
                  Neque porro quisquam est
                </h3>
                <p className="text-lg text-gray-500 leading-loose">
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum, erat augue imperdiet neque,
                  quis rutrum odio sem vitae velit. Donec sodales nibh eu risus
                  laoreet molestie.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full p-5">
              <Image
                className="mb-6 w-full h-112 object-cover rounded-lg"
                src={gal}
                alt
              />
              <div>
                <h3 className="mb-4 text-2xl font-bold font-heading">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-lg text-gray-500 leading-loose">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Mauris dignissim dolor vitae
                  justo maximus, quis convallis eros tincidunt. Integer aliquam
                  libero sed sapien dictum, sed interdum mauris vestibulum.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full p-5">
              <Image
                className="mb-6 w-full h-112 object-cover rounded-lg"
                src={gal}
                alt
              />
              <div>
                <h3 className="mb-4 text-2xl font-bold font-heading">
                  Fusce ac leo ac nisi fringilla ultrices
                </h3>
                <p className="text-lg text-gray-500 leading-loose">
                  Nullam sodales neque at leo bibendum, nec fermentum diam
                  posuere. Curabitur scelerisque neque nec nibh bibendum, vel
                  fermentum sapien tincidunt. Sed eget risus vel enim consequat
                  vehicula. Sed laoreet eros non est fermentum, vitae ultricies
                  libero laoreet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeri;
