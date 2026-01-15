"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type ProgramFormTypes = {
  title: string;
  body: string;
};

const card = [
  { title: "Training Start Date", body: "March 2, 2026" },
  { title: "Duration", body: "6 weeks" },
  { title: "Format", body: "Instructor-led training with practical sessions" },
  {
    title: "Training Type",
    body: "Virtual",
  },
];

const ProgramFormCard = (props: ProgramFormTypes) => {
  return (
    <div className="w-full sm:w-[calc(50%-2rem)] lg:w-151 h-auto min-h-45 sm:min-h-50 lg:h-49.5 rounded-[18px] bg-[#F0F0FF] hover:shadow-[0px_2px_16.8px_10px_#0022D41A] flex flex-col justify-center items-center space-y-2 m-2 sm:m-3 lg:m-4 p-4 cursor-pointer transition-all">
      <p className="text-xl sm:text-2xl lg:text-[32px] font-semibold leading-tight lg:leading-9.75 font-sans text-[#0022D4] text-center">
        {props.title}
      </p>
      <p className="text-lg sm:text-xl lg:text-[25px] font-bold leading-snug lg:leading-7.75 font-sans text-[#292663] text-center w-[80%] sm:w-[70%] lg:w-[60%]">
        {props.body}
      </p>
    </div>
  );
};

function ProgramFormDetails() {
  const router = useRouter();
  return (
    <div className="bg-[#0E95470D] min-h-screen lg:h-308 px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-[#292663] font-bold leading-tight lg:leading-14.75 text-xl sm:text-2xl lg:text-[28px] text-left font-sans mb-6 sm:mb-8">
          Program Format & Details
        </h2>

        <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap justify-center items-stretch gap-y-4 sm:gap-y-6">
          {card.map((data, index) => (
            <ProgramFormCard key={index} {...data} />
          ))}

          {/* Ready to Get Started Card */}
          <div className="w-full rounded-[18px] bg-[#F0F0FF] shadow-[0px_2px_16.8px_10px_#0022D41A] flex flex-col lg:flex-row items-center justify-between min-h-100 lg:h-89 p-6 sm:p-8 lg:p-4 mt-4 sm:mt-6 gap-6 lg:gap-0">
            {/* Left Content */}
            <div className="w-full lg:w-[65%] flex flex-col text-center lg:text-left">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-sans text-[#292663] mb-3 sm:mb-4">
                Ready to Get Started?
              </h2>
              <p className="font-normal text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-8.25 text-[#292663] w-full lg:w-[55%] mx-auto lg:mx-0">
                Cybersecurity is a career that rewards skill, consistency, and
                expertise and the best time to start is now.
              </p>
            </div>

            {/* Right Content - Training Fee */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center items-center space-y-3 sm:space-y-4 py-4 lg:py-0">
              <p className="text-xl sm:text-2xl lg:text-[32px] font-semibold leading-tight lg:leading-9.75 font-sans text-[#0022D4] text-center">
                Training Fee
              </p>
              <p className="font-sans font-bold text-4xl sm:text-5xl lg:text-[64px] leading-tight lg:leading-9 text-[#292663] text-center my-4">
                ₦150,000
              </p>

              <div className="w-full sm:w-auto mt-4">
                <button
                  className="w-full sm:w-auto min-w-35 h-12 sm:h-13.75 bg-[#0E9547] uppercase rounded-[7px] border-none px-4 sm:px-6 py-2 sm:py-2.25 text-white font-bold text-sm sm:text-[16px] cursor-pointer"
                  onClick={() => router.push("/register")}>
                  register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Images */}
      <div className="hidden lg:block absolute bottom-[25%] z-1 -left-[13%]">
        <Image src="/program.svg" alt="" width={555} height={555} />
      </div>
      <div className="hidden lg:block absolute top-[0%] z-1 -right-[5%]">
        <Image src="/program.svg" alt="" width={555} height={555} />
      </div>
    </div>
  );
}

export default ProgramFormDetails;
