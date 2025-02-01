import React from "react";
import Image from "next/image";
import g500h from "@/public/assets/mockup-assets/images/gray-500-horizontal.png";

const ASBilgi = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center mb-12 lg:mb-16">
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-lg">
              <span className="text-xs font-bold text-gray-200 uppercase">
                Lorem ipsum
              </span>
              <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">
                Lorem ipsum dolor sit amet consectutar domor at elis
              </h2>
              <div className="max-w-sm">
                <p className="mb-6 lg:mb-0 text-lg text-gray-500 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                  aliquet orci.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Image
              className="w-full max-h-80 object-cover rounded-lg"
              src={g500h}
              alt
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASBilgi;
