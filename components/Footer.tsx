import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#13413C] text-white px-6 sm:px-10 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LEFT */}
          <div className="flex flex-col justify-between gap-10">
            <div className="relative w-100 h-50 sm:w-60 sm:h-40">
              <Image
                src="/logo.webp" // place your image in /public
                alt="Footer preview"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </div>

          {/* CENTER NAV */}
          <div className="flex flex-col gap-3 text-lg font-medium ">
            <Link href="#home">HOME</Link>
            <Link href="#">WORK</Link>
            <Link href="#about">ABOUT</Link>
            <Link href="#manifesto">MANIFESTO</Link>
            <Link href="#footer">CONTACT</Link>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-2 text-sm font-medium">
              <Link href="#">FACEBOOK</Link>
              <Link
                href="https://x.com/tanyitambe237"
                target="_blank"
                rel="noopener noreferrer"
              >
                TWITTER
              </Link>
            </div>

            <div className="text-sm">
              <a
                href="Mfawtanyi@yahoo.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↳ Mfawtanyi@yahoo.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-6 text-xs">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#">PRIVACY POLICY</Link>
            <Link href="#">TERMS OF SERVICE</Link>
            <Link href="#">COOKIE POLICY</Link>
          </div>

          <div className="flex flex-col sm:text-right">
            <p>HIS MAJESTY</p>
            <p>©2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
