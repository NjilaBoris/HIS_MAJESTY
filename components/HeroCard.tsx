"use client";
import Image from "next/image";
import { motion } from "motion/react";

const HeroCard = () => {
  const items = [
    {
      icons: "/crown-svgrepo-com.svg",
      heading: "Traditional Leadership",
      description:
        "Advancing indigenous systems of governance that promote peace, cultural identity, and community resilience within modern state structures.",
    },
    {
      icons: "/plant-leaf-svgrepo-com.svg",
      heading: "Environmental Stewardship",
      description:
        "Leading initiatives in forest conservation and biodiversity protection to safeguard Africa’s ecological heritage.",
    },
    {
      icons: "/planet-earth-global-svgrepo-com.svg",
      heading: "Pan-African Unity",
      description:
        "Strengthening collaboration among traditional rulers and global partners to promote unity rooted in ancestral values.",
    },
  ];
  return (
    <div className="h-full pt-20 w-full flex items-center justify-center">
      <div className="flex flex-col w-full h-full lg:flex-row gap-10 mx-auto max-w-90 md:max-w-xl lg:max-w-6xl">
        {items.map((items, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
              once: true,
            }}
            key={index}
          >
            <CardContent {...items} key={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroCard;
const CardContent = ({
  icons,
  heading,
  description,
}: {
  icons: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className="p-8 w-full md:text-center lg:text-left h-full border-[#ebb02b] border  border-dotted rounded-md">
      <div className="w-full h-full flex flex-col gap-8 md:items-center lg:items-start">
        <Image src={icons} width={40} height={40} alt="icon" />
        <h1 className="lg:text-xl/tight! md:text-3xl! max-lg:max-w-90! md:text-center lg:text-left text-2xl/tight! max-w-40! text-[#13413c] tracking-wide!">
          {heading}
        </h1>
        <p className="max-w-70! text-balance md:text-lg! max-lg:max-w-90! lg:text-sm! text-sm!">
          {description}
        </p>
      </div>
    </div>
  );
};
