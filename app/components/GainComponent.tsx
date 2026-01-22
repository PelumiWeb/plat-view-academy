"use client";
import Image from "next/image";
import React from "react";
import { handleNavClick } from "../utils/handleNavClick";
import { useRouter } from "next/navigation";

const GainComponent = () => {
  const router = useRouter();
  return (
    <div className="bg-[#0022D4] w-full flex flex-col lg:flex-row items-start justify-between text-center px-6 md:px-8 lg:px-16 py-6 sm:py-12 gap-8 lg:gap-12">
      {/* Content Section */}

      <div className="flex flex-col items-start">
        <h2 className="font-bold text-[24px] md:text-4xl lg:text-[48px] text-white leading-tight lg:leading-14.75 font-sans text-center md:text-left -mb-20 sm:-mb-10  md:mb-0 w-full sm:py-4">
          What You'll Gain
        </h2>

        <div className="w-full flex md:hidden mt-4">
          <div className="relative  w-full h-100.5 -mb-15 ">
            <Image
              src="/gainImageMobile.png"
              alt="Cybersecurity training illustration"
              fill
              className="w-full object-contain"
            />
          </div>
        </div>

        <ul className="list-disc text-white w-full  my-6 md:my-8 lg:my-4 px-10 md:px-6 space-y-1 md:space-y-3 -mt-5 md:mt-0 ">
          <li>
            <p className="font-sans text-sm md:text-base lg:text-[16px] font-medium leading-relaxed lg:leading-6.5 text-white text-left">
              Understand the fundamentals of cybersecurity concepts and
              frameworks
            </p>
          </li>
          <li>
            <p className="font-sans text-sm md:text-base lg:text-[16px] font-medium leading-relaxed lg:leading-6.5 text-white text-left">
              Identify and mitigate common cyber threats and vulnerabilities
            </p>
          </li>
          <li>
            <p className="font-sans text-sm md:text-base lg:text-[16px] font-medium leading-relaxed lg:leading-6.5 text-white text-left">
              Apply security principles across networks, systems, and users
            </p>
          </li>
          <li>
            <p className="font-sans text-sm md:text-base lg:text-[16px] font-medium leading-relaxed lg:leading-6.5 text-white text-left">
              Use basic cybersecurity tools and defensive mechanisms
            </p>
          </li>
          <li>
            <p className="font-sans text-sm md:text-base lg:text-[16px] font-medium leading-relaxed lg:leading-6.5 text-white text-left">
              Develop cybersecurity policies and incident response procedures
            </p>
          </li>
          <li>
            <p className="font-sans text-sm md:text-base lg:text-[16px] font-medium leading-relaxed lg:leading-6.5 text-white text-left">
              Prepare for entry-level certifications such as CompTIA Security+,
              CEH, and CISSP foundations
            </p>
          </li>
        </ul>

        <button
          className="bg-[#F2F2FE] w-[50%] sm:w-auto sm:px-8 md:w-53.5 h-12 md:h-15.5 border-none rounded-[7px] text-[#292663] font-bold font-sans uppercase text-sm md:text-base ml-10 md:ml-0"
          onClick={(e) => handleNavClick(e, "#register-section", router)}>
          register now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 hidden md:flex justify-center items-center">
        <div className="relative max-w-lg lg:max-w-none w-[697px] h-[462px]">
          <Image
            src="/Gain.svg"
            alt="Cybersecurity training illustration"
            fill
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default GainComponent;
