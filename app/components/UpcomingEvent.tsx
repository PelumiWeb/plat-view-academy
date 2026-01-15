"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useFetch } from "../useFetch";
import { useRouter } from "next/navigation";

// {
//   "id": 1,
//   "topic": "Webinar 1 Topic",
//   "description": "Build in-demand skills early and gain hands-on experience that gives you a strong career advantage.",
//   "start_date": "2026-01-20T00:00:00.000Z",
//   "start_time": "17:00:00",
//   "location": "Platview Instagram Live | @platviewtech",
//   "is_active": true,
//   "max_attendees": 100,
//   "current_attendees": 0,
//   "created_at": "2026-01-13T19:44:07.661Z",
//   "updated_at": "2026-01-13T19:44:07.661Z"
// },

const EventCard = (data: {
  topic: string;
  description: string;
  location: string;
  start_date: string;
  start_time: string;
  id: string | number;
}) => {
  console.log(data, "from component");
  const router = useRouter();

  const date = new Date(data.start_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
            {data.topic}
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-8.25 text-[#292663]">
            {data.description}
          </p>
        </div>

        {/* Details and Button Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-t-[#C1C8D8] mt-4 sm:mt-6 lg:mt-8 pt-4 gap-4 sm:gap-0">
          {/* Icons Section */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-0 w-full sm:w-auto">
            <div className="flex flex-col  gap-1 sm:gap-0">
              <IconComponent image="/Icon.png" text={date} />
              <IconComponent image="/Icon2.png" text={data.start_time} />
            </div>
            <div>
              <IconComponent image="/Icon3.png" text={data.location} />
            </div>
          </div>

          {/* Button */}
          <div className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto min-w-35 h-12 sm:h-13.75 bg-[#0E9547] uppercase rounded-[7px] border-none px-4 sm:px-6 py-2 sm:py-2.25 text-white font-bold text-sm sm:text-[16px]"
              onClick={() => {
                router.push(`event/${data.id}`);
              }}>
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
  const { data, error, loading, get } = useFetch();

  const fetchEvent = async () => {
    try {
      const users = await get(
        "https://platview-backend.onrender.com/api/registration/webinars"
      );
      console.log(users);
    } catch (err) {
      console.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
      <h2 className="text-[#292663] font-bold leading-tight lg:leading-14.75 text-xl sm:text-2xl lg:text-[28px] text-left font-sans mb-6 sm:mb-8">
        Upcoming Events
      </h2>

      <div className="space-y-6 sm:space-y-8 lg:space-y-0">
        {data?.data?.map((data: any) => {
          return <EventCard {...data} />;
        })}
      </div>
    </div>
  );
}

export default UpcomingEvent;
