"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type ProgramFormTypes = {
  title: string;
  body: string;
};

const newData = [{
  // topic: string;
  // description: string;
  // location: string;
  // start_date: string;
  // start_time: string;
  // id: string | number;
}]

const card = [
  { title: "Training Start Date", body: "March 30, 2026" },
  { title: "Duration", body: "6 weeks" },
  { title: "Format", body: "Instructor-led training with practical sessions" },
  {
    title: "Training Type",
    body: "Virtual",
  },
];

const ProgramFormCard = (props: ProgramFormTypes) => {
  return (
    <div className="w-full sm:w-[calc(50%-2rem)] lg:w-158 h-auto min-h-45 sm:min-h-50 lg:h-49.5 rounded-[18px] bg-[#F0F0FF] hover:shadow-[0px_2px_16.8px_10px_#0022D41A] flex flex-col justify-center items-center space-y-2 my-4 p-4 cursor-pointer transition-all">
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
    <div className="bg-[#0E95470D] min-h-screen lg:h-388 px-6 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-[#292663] font-bold leading-tight lg:leading-14.75 text-xl sm:text-2xl lg:text-[28px] text-left font-sans mb-6 sm:mb-8">
          Program Format & Details
        </h2>

        <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap justify-center  md:justify-between items-stretch">
          {card.map((data, index) => (
            <ProgramFormCard key={index} {...data} />
          ))}

          <div className="w-full rounded-[18px] bg-[#F0F0FF]  flex flex-col items-center p-6 sm:p-8 lg:p-10 gap-6 my-4 hover:shadow-[0px_2px_16.8px_10px_#0022D41A] transition-all">
            <p className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#0022D4] text-center font-sans">
              Format
            </p>

            <p className="hidden md:block font-bold text-sm sm:text-lg lg:text-[20px] leading-relaxed text-[#292663] text-center max-w-4xl font-sans">
              Access to recorded course materials via our LMS Assigned tasks for
              each module / Weekly weekend virtual sessions with the facilitator
              for review / Learning reinforcement / Q&A / clarification
            </p>

            <ul className="block md:hidden list-disc list-inside">
              <li className="font-bold text-sm sm:text-lg lg:text-[20px] leading-relaxed text-[#292663]  max-w-4xl font-sans text-left">
                Access to recorded course materials via our LMS Assigned tasks
                for each module
              </li>
              <li className="font-bold text-sm sm:text-lg lg:text-[20px] leading-relaxed text-[#292663] tmax-w-4xl font-sans text-left">
                Weekly weekend virtual sessions with the facilitator for review
              </li>
              <li className="font-bold text-sm sm:text-lg lg:text-[20px] leading-relaxed text-[#292663] max-w-4xl font-sans text-left">
                Learning reinforcement
              </li>
              <li className="font-bold text-sm sm:text-lg lg:text-[20px] leading-relaxed text-[#292663] text-left max-w-4xl font-sans">
                Q&A
              </li>
              <li className="font-bold text-sm sm:text-lg lg:text-[20px] leading-relaxed text-[#292663] text-left max-w-4xl font-sans">
                clarification
              </li>
            </ul>

            {/* Benefits Section */}
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-between items-stretch">
              <div className="bg-white rounded-[18px] flex-1 min-h-[140px] flex flex-col justify-center items-center p-4 sm:p-6 gap-3">
                <p className="font-sans font-bold text-lg sm:text-xl lg:text-[20px] text-[#292663] text-center">
                  Other Benefits Include:
                </p>
                <p className="font-sans font-normal text-sm sm:text-base lg:text-[14px] text-[#292663] text-center">
                  Internship and job opportunities for selected high flyers
                </p>
              </div>

              <div className="bg-white rounded-[18px] flex-1 min-h-50 md:min-h-35 flex flex-col justify-center items-center p-4 sm:p-6 gap-3">
                <p className="font-sans font-bold text-lg sm:text-xl lg:text-[20px] text-[#292663] text-center">
                  Bonus Courses Include:
                </p>
                <p className="font-sans  font-normal text-sm sm:text-base lg:text-[14px] text-[#292663] text-center -mt-2 md:mt-0 hidden md:block">
                  Free soft skills training with a certificate of completion
                  from an experienced facilitator Free CV / cover letter
                  training from an experienced HR professional
                </p>
                <ul className="list-disc list-inside space-y-2 block md:hidden text-left w-full ml-2">
                  <li className="font-sans  font-normal text-sm sm:text-base  text-[#292663]  ">
                    Free soft skills training with a certificate of completion
                    from an experienced facilitator Free CV
                  </li>
                  <li className="font-sans  font-normal text-sm  text-[#292663]  ">
                    Cover letter training from an experienced HR professional
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ready to Get Started Card */}
          <div
            id="register-section"
            className="w-full rounded-[18px] bg-[#F0F0FF] flex flex-col lg:flex-row items-center justify-between min-h-100 lg:h-89 px-6 lg:px-12 mt-4 sm:mt-6 gap-6 lg:gap-0  hover:shadow-[0px_2px_16.8px_10px_#0022D41A] transition-all cursor-pointer py-4 md:py-0 my-4">
            {/* Left Content */}
            {/* <div className="w-full lg:w-[65%] flex flex-col text-center lg:text-left">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-sans text-[#292663] mb-3 sm:mb-4">
                Ready to Get Started?
              </h2>
              <p className="font-normal font-sans text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-8.25 text-[#292663] w-full lg:w-[55%] mx-auto lg:mx-0">
                <span className="font-bold">
                  Early bird discount: 20% off (₦120,000)
                </span>{" "}
                , valid until mid-February Installment option: Allowed, with a
                maximum of three{" "}
                <span className="font-bold">(3) installments</span> , to be
                fully paid before the training start date (30th March, 2026)
              </p>
            </div> */}

            <div className="flex flex-col">
              <ul className="w-full lg:w-[65%] flex flex-col text-left list-disc list-inside space-y-2">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-sans text-[#292663] mb-3 sm:mb-4 ">
                  Ready to Get Started?
                </h2>
                <li className="font-normal font-sans text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-8.25 text-[#292663] w-full lg:w-[85%] mx-auto lg:mx-0  pl-2">
                  <span className="font-bold">
                    Early bird discount: 20% off ₦120,000
                  </span>{" "}
                  (Valid until mid-February)
                </li>
                <li className="font-normal font-sans text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-8.25 text-[#292663] w-full lg:w-[85%] mx-auto lg:mx-0 pl-2">
                  <span className="font-bold">Installment option:</span>{" "}
                   Allowed, with a maximum of three{" "}
                  <span className="font-bold">(3) installments</span> - To be
                  fully paid before the training start date (30th March, 2026)
                </li>
              </ul>

              <p className="font-bold font-sans text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-8.25 text-[#292663] w-full lg:w-[85%] mx-auto lg:mx-0 pl-2 italic mt-2">
                Please note: Installment payments are not applicable to early
                bird registrations.
              </p>
            </div>

            {/* Right Content - Training Fee */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center items-center space-y-3 sm:space-y-4 py-4 lg:py-0">
              <p className="text-xl sm:text-2xl lg:text-[32px] font-semibold leading-tight lg:leading-9.75 font-sans text-[#0022D4] text-left md:text-center w-full">
                Training Fee
              </p>
              <p className="font-sans font-bold text-4xl sm:text-5xl lg:text-[64px] leading-tight lg:leading-9 text-[#292663] text-left md:text-center w-full -my-2 md:my-4 ">
                ₦150,000
              </p>

              <div className="w-full sm:w-auto mt-4">
                <button
                  className="w-[50%] lg:w-53.25 min-w-35 h-12 sm:h-13.75 bg-[#0E9547] uppercase rounded-[7px] border-none px-4 sm:px-6 py-2 sm:py-2.25 text-white font-bold text-sm sm:text-[16px] cursor-pointer"
                  onClick={() => router.push("/register")}>
                  register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Images */}
      <div className=" block absolute bottom-[25%] z-1 -left-[13%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[555px] lg:h-[555px]">
        <Image src="/program.svg" alt="" fill className="object-contain" />
      </div>

      {/* Top right decorative image */}
      <div className="block absolute top-[2%] sm:top-[0%] z-1 -right-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[555px] lg:h-[555px]">
        <Image src="/program.svg" alt="" fill className="object-contain" />
      </div>

      <div className="absolute bottom-[60%] z-1 -right-[15%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[555px] lg:h-[555px] block md:hidden">
        <Image src="/program.svg" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

export default ProgramFormDetails;
