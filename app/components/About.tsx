import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:h-141 px-4 md:px-8 lg:px-4 py-12 lg:py-0 gap-8 lg:gap-12">
      {/* Image Section */}
      <div className="w-full -mt-20 md:mt-0 lg:w-[50%]  justify-center items-center hidden md:flex">
        <div className="relative  w-180.75  h-120">
          <Image
            src="/aboutImage.svg"
            alt="About Image"
            fill
            className="object-contain "
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[45%] max-w-2xl lg:max-w-none py-8 md:py-0 md:mb-0  -mt-10">
        <h1 className="font-sans font-bold text-3xl md:text-4xl lg:text-[48px] leading-tight lg:leading-14.75 text-[#292663] -mb-15 md:mb-0">
          About the Zero to Hero Cybersecurity Program
        </h1>

        <div className="w-full -mb-25 md:mt-0 lg:w-[50%] flex justify-center items-center md:hidden">
          <div className="relative  w-180.75  h-120">
            <Image
              src="/aboutImage.svg"
              alt="About Image"
              fill
              className="object-contain "
            />
          </div>
        </div>
        <div className="space-y-4 md:space-y-5 lg:space-y-4 mt-6 md:mt-8">
          <p className="font-normal text-base md:text-lg lg:text-[20px] leading-relaxed lg:leading-8.25 text-[#292663] font-sans">
            The Zero to Hero Cybersecurity Program is a structured, hands-on
            training designed for individuals with little or no prior
            cybersecurity experience.
          </p>
          <p className="font-normal text-base md:text-lg lg:text-[20px] leading-relaxed lg:leading-8.25 text-[#292663] font-sans">
            Rather than theory alone, this program focuses on real tools, real
            scenarios, and practical projects that prepare you for real-world
            cybersecurity roles.
          </p>
          <p className="font-normal text-base md:text-lg lg:text-[20px] leading-relaxed lg:leading-8.25 text-[#292663] font-sans">
            By the end of the program, you'll understand how cybersecurity works
            in practice, not just in theory.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
