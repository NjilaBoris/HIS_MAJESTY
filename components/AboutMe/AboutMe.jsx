import React from "react";
import Copy from "../Copy/Copy";

const AboutMe = () => {
  return (
    <section id="about" className="h-dvh w-full pt-8 text-center ">
      <div className="w-full h-full px-5 space-y-7">
        <Copy>
          <h1 className="text-[#ebb02b] text-xl! tracking-wider! md:text-2xl! lg:text-2xl! text-center">
            Welcome to My Journey
          </h1>
        </Copy>
        <Copy>
          <h2 className="lg:text-4xl! text-[#13413c] tracking-wide!">
            The Man, The Mission, The Majesty
          </h2>
        </Copy>
        <Copy>
          <p className="lg:max-w-2xl! max-sm:leading-8! text-balance mx-auto lg:text-2xl! md:max-w-xl! md:text-xl!">
            I am Robinson Tambe Ayuk TANYI, Traditional Leader of the Tinto-Mbu
            Community in Cameroon’s South West Region. My life’s work stands at
            the intersection of tradition, sustainability, and African
            renaissance.
            <q className="text-[#13413c]  underline-offset-5 underline">
              <i>
                Leadership is a sacred duty, not of power, but of purpose; not
                to rule, but to serve
              </i>
            </q>
          </p>
        </Copy>
        <Copy>
          <p className="block text-[#ebb02b] max-sm:leading-5! text-xs! md:text-sm! max-w-100! mx-auto">
            Rooted in ancestral wisdom yet attuned to the demands of modern
            governance, my mission is to bridge traditional authority and
            contemporary leadership for the advancement of peace.
          </p>
        </Copy>
      </div>
    </section>
  );
};

export default AboutMe;
