import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen lg:h-180 flex flex-col lg:flex-row items-start justify-between p-4 md:p-6 lg:p-4 relative">
      {/* Hero Left */}
      <div className="w-full lg:w-[45%] lg:ml-10 mt-6 md:mt-8 lg:mt-10 z-20">
        <p className="text-primary-green text-sm md:text-base">
          PLATVIEW ACADEMY
        </p>

        <div className="mt-4">
          <p className="font-sans font-bold text-3xl md:text-5xl lg:text-[65px] leading-tight lg:leading-17.25 text-[#292663] max-w-full lg:w-175">
            Pays From Day One
          </p>
          <p className="font-sans font-bold text-3xl md:text-4xl lg:text-[59px] leading-tight lg:leading-17.25 text-[#0022D4] max-w-full lg:w-175">
            Zero to Hero Program
          </p>
          <p className="font-sans font-normal text-base md:text-lg lg:text-[22px] leading-relaxed lg:leading-9.25 text-black mt-4 max-w-xl">
            Break into cybersecurity with hands-on training that takes you from
            zero to job-ready.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:space-x-0 sm:gap-4 mt-6 md:mt-8">
          <button className="bg-[#292663] text-white rounded-[7px] text-base md:text-[18px] font-bold font-sans h-12 md:h-15.5 uppercase text-center py-2 px-4 md:px-6 w-full sm:w-auto">
            Register Now
          </button>
          <button className="rounded-[7px] text-base md:text-[18px] font-bold font-sans h-12 md:h-15.5 uppercase text-center py-2 px-4 md:px-6 border border-[#0022D4] text-[#0022D4] w-full sm:w-auto">
            CONTACT US
          </button>
        </div>

        <div className="mt-6 md:mt-8">
          <p className="font-sans font-normal text-lg md:text-[20px] leading-relaxed lg:leading-9.25 text-[#000000]">
            Training starts March 2, 2026
          </p>
          <div className="flex items-center gap-3 md:gap-4 mt-4">
            {[
              { label: "Days", value: "90" },
              { label: "Hours", value: "90" },
              { label: "Minutes", value: "90" },
              { label: "Seconds", value: "90" },
            ].map((data, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="font-normal font-poppins text-[10px] md:text-xs text-[#292663]">
                  {data.label}
                </p>
                <p className="font-normal font-poppins text-2xl md:text-3xl lg:text-[40px] text-[#4D4C59]">
                  {data.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Right */}
      <div className="w-full lg:w-[45%] relative z-10 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:max-w-none lg:w-auto">
          <Image
            src="/PlatviewGuy.svg"
            alt="Hero Image"
            width={600}
            height={700}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>

      {/* Background Vector */}
      <div className="absolute inset-x-0 bottom-0 h-180 pointer-events-none z-0">
        <Image
          src="/heroVector.png"
          alt="Hero Vector"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
