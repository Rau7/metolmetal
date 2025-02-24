import Image from "next/image";
import Link from "next/link";
import projelerData from "@/public/sitedata/projeler.json";

export default function HaberDetay({ params }) {
  const haber = projelerData.projeler.find((p) => p.id === params.projeAdi);

  if (!haber) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Haber Bulunamadı</h1>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/projelerimiz"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800"
        >
          ← Haberlere Dön
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{haber.tarih}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{haber.konum}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">{haber.baslik}</h1>
            <p className="text-xl text-gray-600 mb-8">{haber.ozet}</p>
          </div>

          <div className="relative h-[500px] mb-8">
            <Image
              src={haber.resimler[0]}
              alt={haber.baslik}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed">{haber.detay}</p>
          </div>

          {haber.resimler.length > 1 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Fotoğraf Galerisi</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {haber.resimler.slice(1).map((resim, index) => (
                  <div key={index} className="relative h-[200px]">
                    <Image
                      src={resim}
                      alt={`${haber.baslik} - Fotoğraf ${index + 2}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {haber.etiketler.map((etiket, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {etiket}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
