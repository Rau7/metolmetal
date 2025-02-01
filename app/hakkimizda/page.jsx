import React from "react";

const HakkimizdaSayfasi = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">
            Hakkımızda
          </h2>
          <p className="text-lg text-gray-500 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.
          </p>
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
                      Danny Bailey
                    </h3>
                    <p className="mb-4 text-gray-500 text-lg">
                      CEO &amp; Founder
                    </p>
                    <p className="text-gray-500 text-lg leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque massa nibh, pulvinar vitae aliquet nec,
                      accumsan aliquet orci.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full p-5">
                <div className="relative">
                  <div className="max-w-2xl mx-auto py-16 px-12 mb-6 lg:mb-12 bg-gray-50 rounded-lg text-center">
                    <div className="absolute inset-0 -mt-10"></div>
                    <h3 className="text-2xl font-bold font-heading">
                      Emily Smith
                    </h3>
                    <p className="mb-4 text-gray-500 text-lg">
                      Co-Founder &amp; CEO
                    </p>
                    <p className="text-gray-500 text-lg leading-loose">
                      Vivamus ut urna eu purus pretium interdum. Fusce vel justo
                      auctor, dictum velit sed, vestibulum ex.
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
