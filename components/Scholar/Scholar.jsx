import React from "react";
import Copy from "../Copy/Copy";

const Scholar = () => {
  return (
    <section id="scholar" className="w-full h-screen py-20 px-10">
      <Copy>
        <h1 className="text-4xl!  md:text-5xl! font-bold text-center text-[#13413c]">
          Scholar & Statesman
        </h1>
      </Copy>
      <Copy>
        <p className="text-center text-[#ebb02b]">
          Backed by a rigorous academic background and decades of service.
        </p>
      </Copy>
      <div className="w-full h-full max-w-4xl mx-auto flex mt-10 flex-col lg:flex-row gap-8 items-center">
        <div className="p-5 w-full text-center h-fit md:h-90  shadow-sm rounded-2xl ">
          <h2 className="text-2xl! tracking-tight! pb-5">Areas of Expertise</h2>
          <div className="flex flex-col gap-5 w-full  h-full">
            <Link
              firstDescription="Traditional Leadership & Governance"
              secondDescription="Strategic oversight to strengthen indigenous governance systems."
            />
            <Link
              firstDescription="Traditional Leadership & Governance"
              secondDescription="Sustainable forest management through FEDEFCOM and global partnerships."
            />
            <Link
              firstDescription="Pan-African Collaboration"
              secondDescription="Building partnerships with organizations like PACTNA and AIGC."
            />
          </div>
        </div>
        <div className="p-5 w-full text-center h-fit md:h-90 space-y-5 shadow-sm rounded-2xl ">
          <h2 className="text-2xl! tracking-tight! mb-6">
            Academic Foundation
          </h2>
          <div className="flex flex-col gap-5 w-full h-full">
            <Link
              firstDescription="Doctorate in Community Engagement"
              secondDescription="2002 • North American University"
            />
            <Link
              firstDescription="Master’s in Peace & Security"
              secondDescription="2025 • University of Buea"
            />
            <Link
              firstDescription="Master’s in Banking & Finance"
              secondDescription="1988 • University of Karachi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholar;

const Link = ({ firstDescription, secondDescription }) => {
  return (
    <d className="lg:text-left text-center space-y-1">
      <p className="text-[#13413c] capitalize text-xl/tight!">
        {firstDescription}
      </p>
      <p className="text-neutral-500 lg:text-sm! capitalize text-sm/tight!">
        {secondDescription}
      </p>
    </d>
  );
};
