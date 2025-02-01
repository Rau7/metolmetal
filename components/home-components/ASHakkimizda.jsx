import React from "react";
import Image from "next/image";
import ashak from "@/public/assets/mockup-assets/images/asbanger.jpg";

const ASHakkimizda = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={ashak}
          alt="AS Metal Background"
          fill
          style={{ objectFit: "cover" }}
          className="transform scale-110 parallax"
        />
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* Dark overlay for better text readability */}
      </div>
      <div className="relative container px-4 mx-auto h-full flex items-center">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="mt-2 mb-6 text-4xl lg:text-5xl text-white font-bold font-heading">
              Siz hayal edin, <br /> biz gerçekleştirelim
            </h2>
            <p className="text-lg text-gray-100 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
              aliquet orci.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .parallax {
          transform: translateY(0);
          transition: transform 0.5s ease-out;
          will-change: transform;
        }
        @media (prefers-reduced-motion: no-preference) {
          section:hover .parallax {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default ASHakkimizda;
