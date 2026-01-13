"use client"

import React from "react";
import Image from "next/image";

const partners = [
  { name: "Partner1", src: "/partner1.svg" },
  { name: "Partner2", src: "/partner2.svg" },
  { name: "Partner3", src: "/partner3.svg" },
  { name: "Partner4", src: "/partner4.svg" },
  { name: "Partner5", src: "/partner5.svg" },
  { name: "Partner6", src: "/partner6.svg" },
  { name: "Partner7", src: "/partner7.svg" },
  { name: "Partner8", src: "/partner8.svg" },
];

function Banner() {
  return (
    <div className="bg-[#0E954721] h-24 sm:h-28 md:h-32 lg:h-35.25 w-full overflow-hidden">
      <div className="flex items-center h-full">
        {/* Sliding Container */}
        <div className="flex animate-slide">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-1-${index}`}
              className="mx-4 sm:mx-6 md:mx-8 lg:mx-4 flex-shrink-0">
              <div className="relative h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 lg:h-20 lg:w-40">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-2-${index}`}
              className="mx-4 sm:mx-6 md:mx-8 lg:mx-4 flex-shrink-0">
              <div className="relative h-12 w-24 sm:h-14 sm:w-28 md:h-16 md:w-32 lg:h-20 lg:w-40">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Banner;
