import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-[#0022D4] min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 gap-8 lg:gap-12 xl:gap-16">
      {/* Content Section */}
      <div className="flex flex-col items-start w-full lg:w-1/2 max-w-2xl lg:max-w-none">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] text-white leading-tight sm:leading-snug md:leading-tight font-sans text-left -mb-8 md:mb-6">
          Why Choose Platview Technologies?
        </h2>

        <div className="w-full lg:w-1/2 flex justify-center items-center sm:hidden">
          <div className="relative w-full h-86">
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

        <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-sans leading-relaxed md:leading-loose text-white text-left mb-4  md:mb-5 lg:mb-6 -mt-8 md:mt-0">
          Platview Technologies is a cybersecurity and IT solutions company
          delivering enterprise-grade services across Africa and beyond.
        </p>

        <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-sans leading-relaxed md:leading-loose text-white text-left">
          Our training programs are built from real industry experience, not
          generic theory, ensuring learners gain skills that are relevant,
          practical, and in demand.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 hidden sm:flex justify-center items-center ">
        <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-110 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-none">
          <Image
            src="/whyChoose2.png"
            alt="Why Choose Platview Technologies"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
