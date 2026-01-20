import Image from "next/image";
import React from "react";

type CardProps = {
  cardImage: string;
  header: string;
  content: string;
};

const cards = [
  {
    cardImage: "/card1.svg",
    header: "Beginners aspiring to start a career in cybersecurity",
    content:
      "No prior experience required. This program is designed to guide you step by step into the cybersecurity field.",
  },
  {
    cardImage: "/card2.svg",
    header:
      "Students and graduates interested in technology and data protection",
    content:
      "Build in-demand skills early and gain hands-on experience that gives you a strong career advantage.",
  },
  {
    cardImage: "/card3.svg",
    header: "IT professionals seeking to expand their knowledge in security",
    content:
      "Strengthen your existing technical skills with practical cybersecurity knowledge relevant to real-world environments.",
  },
  {
    cardImage: "/card4.svg",
    header: "Business owners and managers who want to secure their systems",
    content:
      "Understand cybersecurity risks and best practices to better protect your organization's data and infrastructure.",
  },
];

const ProgramCard = ({ cardImage, header, content }: CardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 m-2 sm:m-4 lg:p-4 lg:m-4 lg:h-50 gap-3 sm:gap-4">
      {/* Image Section */}
      <div className="w-20 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-30 lg:h-18.25 lg:mr-10 flex items-center justify-center sm:justify-start shrink-0">
        <Image
          width={120}
          height={73}
          src={cardImage}
          alt={header}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <h4 className="font-bold text-base sm:text-lg md:text-xl lg:text-[24px] text-[#292663] leading-snug sm:leading-normal lg:leading-8.5 font-sans mb-1 sm:mb-2">
          {header}
        </h4>
        <p className="font-normal text-xs sm:text-sm md:text-base lg:text-[18px] leading-relaxed sm:leading-relaxed lg:leading-8.25 text-[#292663] font-sans">
          {content}
        </p>
      </div>
    </div>
  );
};
function ProgramContent() {
  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16">
      <h2 className="text-[#292663] font-bold leading-tight lg:leading-14.75 text-2xl sm:text-2xl md:text-3xl lg:text-[28px] text-left font-sans mb-4 sm:mb-6 lg:mb-0">
        Who This Program Is For
      </h2>

      {/* Desktop: Two columns with divider (keep original layout) */}
      <div className="hidden lg:flex justify-between items-center mt-8">
        <div>
          {cards.slice(0, 2).map((data) => (
            <ProgramCard key={data.cardImage} {...data} />
          ))}
        </div>
        <div className="bg-[#000000] border w-1px h-100"></div>
        <div>
          {cards.slice(2, 4).map((data) => (
            <ProgramCard key={data.cardImage} {...data} />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: Single column */}
      <div className="lg:hidden mt-4 sm:mt-6 space-y-2 sm:space-y-4">
        {cards.map((data) => (
          <ProgramCard key={data.cardImage} {...data} />
        ))}
      </div>
    </div>
  );
}

export default ProgramContent;
