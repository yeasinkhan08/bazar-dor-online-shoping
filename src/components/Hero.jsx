import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const date = new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
  }).format(new Date());

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-3 pt-5 sm:px-0">
      {/* Hero Container */}
      <div className="flex h-80 items-center justify-between gap-4 overflow-hidden rounded-3xl  bg-base-100 px-3 sm:px-5">
        {/* Left Content */}
        <div className="min-w-0 flex-1">
          {/* Date */}
          <p className="mb-3 inline-block rounded-full bg-[#e3f2e8] px-3 py-1 text-xs font-medium text-green-700">
            {date}
          </p>

          {/* Heading */}
          <h1 className="text-2xl font-bold leading-tight text-[#17251c] md:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-130 text-sm leading-6 text-gray-600">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Button */}
          <Link
            href="/products"
            className="mt-5 inline-flex items-center justify-center rounded-md border border-green-600 px-5 py-2 text-sm font-medium text-green-700 transition hover:bg-green-600 hover:text-white"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Right Image */}
        <div className="hidden w-60 shrink-0 items-center justify-center sm:flex md:w-70">
          <Image
            src="/bazar-hero.png"
            alt="Bazardor বাজারের পণ্য"
            width={280}
            height={220}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
