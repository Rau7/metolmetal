import Image from "next/image";
import ASHizmetler from "@/components/home-components/ASHizmetler";
import ASHakkimizda from "@/components/home-components/ASHakkimizda";
import ASBilgi from "@/components/home-components/ASBilgi";
import Hero from "@/components/home-components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <ASHizmetler />
      <ASHakkimizda />
      <ASBilgi />
    </div>
  );
}
