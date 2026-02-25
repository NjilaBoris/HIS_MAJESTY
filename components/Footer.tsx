import { IconBrandFacebook, IconBrandX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About His Majesty",
      href: "/",
    },
    {
      name: "Manifesto",
      href: "/",
    },
    {
      name: "Gallery",
      href: "/",
    },
  ];
  return (
    <section
      id="contact"
      className="w-full h-full md:h-[30dvh] py-2 bg-[#13413C]"
    >
      <div className="flex justify-center flex-col py-2 md:flex-row items-center h-full space-x-5">
        <Link href="/" className="flex justify-center   items-center">
          <Image src="/logo2.webp" alt="Logo" width={140} height={140} />
        </Link>
        <div className="flex space-x-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-[#EBB02B] p-5 w-full h-fit  flex items-center  justify-between">
        <div className="w-full h-full max-sm:text-xs! flex-col md:flex-row gap-1 flex items-center md:gap-4">
          <p className="text-sm!">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
          <Link href="tel:+237670700077">+237 670700077</Link>
          <Link href="Mfawtanyi@yahoo.co.uk">Mfawtanyi@yahoo.co.uk</Link>
        </div>
        <div className="flex items-center  gap-5">
          <Link href="https://www.facebook.com/profile.php?id=61559863356011">
            <IconBrandFacebook />
          </Link>
          <Link href="https://x.com/tanyitambe237 ">
            <IconBrandX />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
