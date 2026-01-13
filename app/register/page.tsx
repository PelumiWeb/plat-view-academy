import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="min-h-[calc(100vh-50px)] w-full flex justify-center items-center relative flex-col px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
      <div className="flex flex-col w-full max-w-4xl mt-0 lg:-mt-[5%] z-10">
        {/* Header */}
        <div className="w-full flex justify-center items-center mb-6 sm:mb-8">
          <p className="font-inter font-bold text-xl sm:text-2xl md:text-3xl lg:text-[30px] leading-tight sm:leading-normal lg:leading-8.5 text-[#000000] text-center w-full sm:w-[80%] lg:w-[60%]">
            <span className="text-[#0022D4]">Register</span> for the Zero to
            Hero Cybersecurity Program
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-4 sm:mt-6 lg:mt-8 w-full">
          <p className="font-semibold text-[#292663] text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-8.75 mb-4">
            Info about you:
          </p>

          <div className="space-y-3 sm:space-y-4">
            {/* First Name & Last Name */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2">
              <input
                type="text"
                placeholder="First name *"
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] font-mono text-base sm:text-lg lg:text-[20px] text-[#5D6978] leading-relaxed lg:leading-8.75 px-3 sm:px-4 focus:border-[#0022D4] transition-colors"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] font-mono text-base sm:text-lg lg:text-[20px] text-[#5D6978] leading-relaxed lg:leading-8.75 px-3 sm:px-4 focus:border-[#0022D4] transition-colors"
              />
            </div>

            {/* Phone Number & Email */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2">
              <input
                type="tel"
                placeholder="Phone Number *"
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] font-mono text-base sm:text-lg lg:text-[20px] text-[#5D6978] leading-relaxed lg:leading-8.75 px-3 sm:px-4 focus:border-[#0022D4] transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] font-mono text-base sm:text-lg lg:text-[20px] text-[#5D6978] leading-relaxed lg:leading-8.75 px-3 sm:px-4 focus:border-[#0022D4] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto sm:mx-auto lg:w-[45%] justify-between gap-3 sm:gap-4 my-6 sm:my-8">
          <button className="bg-[#0022D4] w-full sm:w-54.25 h-12 sm:h-14 lg:h-15.5 rounded-[7px] font-bold text-base sm:text-lg lg:text-[18px] leading-tight lg:leading-4.5 uppercase text-white hover:bg-opacity-90 transition-opacity">
            continue
          </button>
          <button className="bg-white w-full sm:w-54.25 h-12 sm:h-14 lg:h-15.5 rounded-[7px] font-bold text-base sm:text-lg lg:text-[18px] leading-tight lg:leading-4.5 uppercase text-[#292663] border-[0.5px] border-[#292663] hover:bg-gray-50 transition-colors">
            BACK
          </button>
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
}

export default Page;
