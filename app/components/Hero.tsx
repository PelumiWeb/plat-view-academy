"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { handleNavClick } from "../utils/handleNavClick";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: March 2, 2026
    const targetDate = new Date("2026-04-08T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Training has started
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, []);

  const router = useRouter();

  const countdownData = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="  relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-6 relative z-10 max-w-400 mx-auto ">
        {/* Hero Left */}
        <div className="w-full lg:w-[55%] xl:w-[50%] lg:pr-8 xl:pr-12">
          <p className="text-primary-green text-xs sm:text-sm md:text-base font-semibold tracking-wide">
            PLATVIEW ACADEMY
          </p>

          <div className="mt-4 sm:mt-5 md:mt-6">
            <h1 className="hidden md:block font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] leading-tight text-[#292663] w-full md:w-175">
              Start Your
            </h1>
            {/* text-[#0022D4] */}

            <h2 className="hidden md:block font-sans font-extrabold md:font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] leading-tight text-[#0022D4] w-full md:w-185">
              Zero to Hero <span className="text-[#292663]">Journey</span>
            </h2>

            <h2 className="block md:hidden font-manrope font-extrabold md:font-bold text-[32px] leading-10.25 text-[#292663] w-[95%]">
              Start Your{" "}
              <span className="font-manrope font-extrabold md:font-bold text-[#0022D4]">
                Zero to Hero{" "}
              </span>
              Journey
            </h2>
            <p className="font-sans font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] leading-relaxed text-black mt-4 sm:mt-5 md:mt-6 max-w-2xl w-[70%]  md:w-full">
              Break into cybersecurity with hands-on training that takes you
              from zero to job-ready.
            </p>
          </div>
          <div className="lg:hidden absolute top-[70px] right-0 w-[400px] sm:w-[360px] h-[300px] pointer-events-none overflow-hidden">
            <div className="relative w-full h-full translate-x-[35%]">
              <Image
                src="/PlatviewGuy.svg"
                alt="Cybersecurity professional illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
            <button
              className="bg-[#292663] text-white rounded-[7px] text-[12px]  md:text-lg font-bold font-sans h-12 sm:h-13 md:h-[62px] uppercase text-center py-3 px-6 sm:px-8 w-[150px] md:w-auto hover:bg-opacity-90 transition-opacity
              
              cursor-pointer"
              onClick={(e) => handleNavClick(e, "#register-section", router)}>
              Register Now
            </button>
            <button
              className="rounded-[7px] text-[12px] md:text-lg font-bold font-sans h-12 sm:h-13 md:h-[62px] uppercase text-center py-3 px-6 sm:px-8 border-2 border-[#0022D4] text-[#0022D4] w-[150px] md:w-auto hover:bg-[#0022D4] hover:text-white transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, "#contact", router)}>
              Contact Us
            </button>
          </div>

          {/* Countdown Section */}
          <div className="mt-6 sm:mt-7 md:mt-8 -mb-10 sm:mb-0 flex flex-col justify-center md:justify-start  items-center md:items-start">
            <p className="font-sans font-normal text-base sm:text-lg md:text-xl leading-relaxed text-[#000000] ">
              Training starts April 8th, 2026
            </p>
            <div className="flex items-center md:items-start gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4">
              {countdownData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                  <p className="font-normal font-poppins text-[10px] sm:text-xs md:text-sm text-[#292663] uppercase">
                    {data.label}
                  </p>
                  <p className="font-semibold font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#4D4C59] tabular-nums mt-1">
                    {data.value.toString().padStart(2, "0")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Right - Image */}
        <div className="w-full lg:w-[45%] xl:w-[50%] relative mt-10 sm:mt-12 lg:mt-0 flex justify-center lg:justify-end">
          {/* Mobile & Tablet */}
          {/* <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:hidden">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4]">
              <Image
                src="/PlatviewGuy.svg"
                alt="Cybersecurity professional illustration"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 400px, (max-width: 768px) 500px, 600px"
                priority
              />
            </div>
          </div> */}

          {/* Desktop */}
          <div className="hidden lg:block relative w-full md:-mt-15">
            <div className="relative w-full h-[600px] xl:h-[700px] 2xl:h-[700px]">
              <Image
                src="/PlatviewGuy.svg"
                alt="Cybersecurity professional illustration"
                fill
                className="object-contain object-left"
                sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Vector */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-x-0 bottom-0 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
          <Image
            src="/heroVector.png"
            alt=""
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
