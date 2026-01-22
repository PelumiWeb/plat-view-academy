import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-[#0022D4] h-140 md:h-130  w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-12 pt-10">
      {/* Content Section */}
      <div className="flex flex-col items-start w-full lg:w-1/2 max-w-2xl lg:max-w-none  lg:-mt-24">
        <h2 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[48px] text-white leading-tight sm:leading-snug md:leading-tight font-sans  md:mb-6 text-center md:text-left ">
          Why Choose Platview Technologies?
        </h2>

        <div className="w-full lg:w-1/2 flex justify-center items-center md:hidden mb-5 md:mb-0">
          <div className="relative w-full h-66 md:h-80 ">
            <Image
              src="/whyChoose2.png"
              alt="Why Choose Platview Technologies"
              fill
              className="object-contain"
              // sizes="(max-width: 868px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority
            />
          </div>
        </div>

        <p className="font-medium text-sm sm:text-[18px]  font-sans leading-relaxed md:leading-loose text-white text-left mb-5  -mt-8 md:mt-0">
          Platview Technologies is a cybersecurity and IT solutions company
          delivering enterprise-grade services across Africa and beyond.
        </p>

        <p className="font-medium text-sm sm:text-[18px]  font-sans leading-relaxed md:leading-loose text-white text-left">
          Our training programs are built from real industry experience, not
          generic theory, ensuring learners gain skills that are relevant,
          practical, and in demand.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 hidden md:flex justify-start items-start ">
        <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-110 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-none">
          <Image
            src="/whyChoose2.png"
            alt="Why Choose Platview Technologies"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
