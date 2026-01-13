import Image from "next/image";
import React from "react";

const EventCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 my-4 md:my-5 p-4 md:p-0">
      {/* Image Section */}
      <div className="w-full md:w-[35%] lg:w-[30%]">
        <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0">
          <Image
            src="/eventImage.png"
            alt="Event"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[60%] lg:w-[60%]">
        <div>
          <h2 className="text-[#292663] font-bold leading-tight lg:leading-14.75 text-xl sm:text-2xl lg:text-[28px] text-left font-sans mb-2 sm:mb-3">
            Webinar 1 Topic
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-8.25 text-[#292663]">
            Build in-demand skills early and gain hands-on experience that gives
            you a strong career advantage.
          </p>
        </div>

        {/* Details and Button Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-t-[#C1C8D8] mt-4 sm:mt-6 lg:mt-8 pt-4 gap-4 sm:gap-0">
          {/* Icons Section */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 w-full sm:w-auto">
            <div className="flex flex-col  gap-1 sm:gap-0">
              <IconComponent image="/Icon.png" text="January 20th, 2026" />
              <IconComponent image="/Icon2.png" text="5:00PM" />
            </div>
            <div>
              <IconComponent image="/Icon3.png" text="Platview LinkedIn Live" />
            </div>
          </div>

          {/* Button */}
          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto min-w-35 h-12 sm:h-13.75 bg-[#0E9547] uppercase rounded-[7px] border-none px-4 sm:px-6 py-2 sm:py-2.25 text-white font-bold text-sm sm:text-[16px]">
              register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  image: string;
  text: string;
};

const IconComponent = ({ image, text }: Props) => {
  return (
    <div className="flex items-center my-2 sm:my-3 lg:my-4 mr-2 sm:mr-3 lg:mr-4 py-2 sm:py-3 lg:py-4">
      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-8.75 lg:h-8.75 relative shrink-0">
        <Image src={image} alt="" fill className="object-contain" />
      </div>
      <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-8.25 font-sans text-[#292663] ml-2 sm:ml-3 lg:ml-4">
        {text}
      </p>
    </div>
  );
};

function UpcomingEvent() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
      <h2 className="text-[#292663] font-bold leading-tight lg:leading-14.75 text-xl sm:text-2xl lg:text-[28px] text-left font-sans mb-6 sm:mb-8">
        Upcoming Events
      </h2>

      <div className="space-y-6 sm:space-y-8 lg:space-y-0">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default UpcomingEvent;
