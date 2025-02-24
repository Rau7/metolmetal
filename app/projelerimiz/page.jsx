import Image from "next/image";
import Link from "next/link";
import projelerData from "@/public/sitedata/projeler.json";

const Projelerimiz = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">
            Haberler ve Duyurular
          </h2>
          <p className="text-lg text-gray-500 leading-loose">
            Metal sektöründeki son gelişmeler, firma haberlerimiz ve
            etkinliklerimiz hakkında güncel bilgiler
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 mb-12">
          {projelerData.projeler.map((haber) => (
            <div key={haber.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="relative h-40 mb-6">
                  <span className="absolute top-0 right-0 mt-4 mr-4 text-xs px-2 py-1 bg-gray-50 rounded uppercase text-gray-500 font-semibold">
                    {haber.etiketler[0]}
                  </span>
                  <Image
                    className="w-full h-full object-cover rounded-lg"
                    src={haber.resimler[0]}
                    alt={haber.baslik}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className="inline-block text-xs font-bold text-gray-500">
                  {haber.tarih}
                </span>
                <h2 className="mb-2 text-2xl font-bold font-heading">
                  {haber.baslik}
                </h2>
                <p className="mb-4 text-lg text-gray-500 leading-loose">
                  {haber.ozet}
                </p>
                <Link
                  className="flex items-center text-lg font-bold text-gray-700 hover:text-gray-800"
                  href={`/projelerimiz/${haber.id}`}
                >
                  <span>Devamını Oku</span>
                  <span>
                    <svg
                      className="ml-1 w-5 h-4"
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
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            className="px-6 py-3 text-gray-50 font-semibold bg-gray-500 hover:bg-gray-600 rounded leading-loose"
            disabled
          >
            Daha Fazla Haber
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projelerimiz;
