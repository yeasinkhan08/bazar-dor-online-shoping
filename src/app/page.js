import Hero from "@/components/Hero";
import PriceChangeSection from "@/components/PriceChangeSection";
import Image from "next/image";

export default function Home() {
  // const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  // const data = await res.json();
  // console.log(data);
  // <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-8">
  //   <PriceChangeSection title="দাম বাড়ছে" direction="up" />

  //   <PriceChangeSection title="দাম কমছে" direction="down" />
  // </div>;
  <Hero />;
  return <></>;
}
