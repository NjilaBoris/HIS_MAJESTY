import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import Link from "next/link";
const Hero = () => {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
    "/img19.jpg",
    "/img16.jpg",
    "/img17.jpg",
    "/img18.jpg",
    "/img19.jpg",
    "/img20.jpg",
    "/img21.jpg",
    "/img22.jpg",
    "/img23.jpg",
    "/img24.jpg",
    "/img25.jpg",
    "/img26.jpg",
    "/img27.jpg",
    "/img28.jpg",
    "/img29.jpg",
    "/img30.jpg",
    "/img31.jpg",
  ];
  return (
    <div className="relative mx-auto  flex h-dvh  w-screen max-w-7xl flex-col items-center justify-center overflow-hidden">
      <h4 className="relative mt-7 z-20 text-[#ebb02b] mb-3 mx-auto max-w-4xl tracking-wide! text-center text-sm! font-bold text-balance ">
        Traditional Leader | Pan-African Visionary
      </h4>
      <h3 className="relative mt-2 z-20 mx-auto max-w-4xl text-center text-4xl! font-bold text-balance text-white md:text-5xl! lg:text-7xl!">
        Robinson Tambe
        <span className="relative block z-20   px-4 md:py-1 text-[#ebb02b]  backdrop-blur-sm">
          Ayuk TANYI
        </span>
      </h3>
      <p className="relative z-20 mx-auto max-w-2xl px-5 py-8 text-center text-sm text-neutral-200 md:text-base">
        “I bridge ancestral wisdom with modern governance to build a peaceful,
        united, and sustainable Africa.”
      </p>

      <div className="relative z-20 flex flex-wrap  items-center justify-center gap-4 pt-4">
        <button className="rounded-md bg-[#ebb02b] px-6 py-2.5 uppercase text-sm font-medium text-[#13413cf2] transition-colors hover:opacity-85 focus:ring-2 focus:yellow-500 focus:ring-offset-2 focus:ring-offset-yellow-600 focus:outline-none">
          <Link href="#about">Discover the mission</Link>
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-[#13413cf2]/80 " />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-dvh w-screen"
        images={images}
      />
    </div>
  );
};

export default Hero;
