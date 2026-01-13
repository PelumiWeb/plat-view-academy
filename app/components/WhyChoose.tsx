import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-[#0022D4] min-h-screen lg:h-168.75 w-full flex flex-col lg:flex-row items-center justify-between text-center px-4 sm:px-8 lg:px-16 py-12 lg:py-0 gap-8 lg:gap-12">
      {/* Content Section */}
      <div className="flex flex-col items-start w-full lg:w-1/2">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-white leading-tight lg:leading-14.75 font-sans text-left">
          Why Choose Platview Technologies?
        </h2>
        <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[24px] font-sans leading-relaxed lg:leading-8.25 text-white text-left my-4 sm:my-5 lg:my-4">
          Platview Technologies is a cybersecurity and IT solutions company
          delivering enterprise-grade services across Africa and beyond.
        </p>
        <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[24px] font-sans leading-relaxed lg:leading-8.25 text-white text-left my-4 sm:my-5 lg:my-4">
          Our training programs are built from real industry experience, not
          generic theory, ensuring learners gain skills that are relevant,
          practical, and in demand.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-110 xl:h-134 max-w-lg lg:max-w-none">
          <Image
            src="/whyChoose.png"
            alt="Why Choose Platview Technologies"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
