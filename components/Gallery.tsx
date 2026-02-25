import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import Copy from "./Copy/Copy";
const Gallery = () => {
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
    <>
      <Copy>
        <h2 className="text-[#13413c] lg:text-4xl! text-center py-5">
          Gallery
        </h2>
      </Copy>
      <section
        id="gallery"
        className="relative mx-auto  flex h-[70dvh]  w-full max-w-7xl flex-col items-center justify-center overflow-hidden"
      >
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-dvh w-full"
          images={images}
        />
      </section>
    </>
  );
};

export default Gallery;
