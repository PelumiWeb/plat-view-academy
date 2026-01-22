"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useFetch } from "../useFetch";
import { useRouter } from "next/navigation";

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
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-0 my-4 md:my-6 shadow-[0px_2px_16.8px_10px_#0022D41A] rounded-[18px] overflow-hidden bg-white">
      {/* Image Section */}
      <div className="w-full md:w-[35%] lg:w-[30%] relative min-h-[250px] md:min-h-[320px] lg:min-h-[350px]">
        <Image
          src="/eventImage.png"
          alt={`${data.topic} event image`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 35vw"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[65%] lg:w-[70%] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-[#292663] font-bold leading-tight text-lg sm:text-xl lg:text-2xl xl:text-[28px] text-left font-sans mb-2 sm:mb-3">
            {data.topic}
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-lg xl:text-[18px] leading-relaxed text-[#292663] line-clamp-3 md:line-clamp-none">
            {data.description}
          </p>
        </div>

        {/* Details and Button Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-[#C1C8D8] pt-4 gap-4">
          {/* Event Details */}
          <div className="flex flex-col gap-1 sm:gap-2 w-full sm:w-auto">
            <IconComponent image="/Icon.png" text={date} />
            <IconComponent image="/Icon2.png" text={data.start_time} />
            <IconComponent image="/Icon3.png" text={data.location} />
          </div>

          {/* Register Button */}
          <div className="w-full sm:w-auto sm:flex-shrink-0">
            <button
              className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] h-11 sm:h-12 lg:h-[55px] bg-[#0E9547] hover:bg-[#0d7d3c] transition-colors uppercase rounded-[7px] border-none px-6 lg:px-8 text-white font-bold text-sm lg:text-base"
              onClick={() => {
                router.push(`event/${data.id}`);
              }}
              aria-label={`Register for ${data.topic}`}>
              register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Skeleton Loader Component
const EventCardSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-0 my-4 md:my-6 shadow-[0px_2px_16.8px_10px_#0022D41A] rounded-[18px] overflow-hidden bg-white animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full md:w-[35%] lg:w-[30%] relative min-h-[250px] md:min-h-[320px] lg:min-h-[350px] bg-gray-200">
        {/* Empty div for image placeholder */}
      </div>

      {/* Content Skeleton */}
      <div className="w-full md:w-[65%] lg:w-[70%] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
        <div className="mb-4 sm:mb-6">
          {/* Title Skeleton */}
          <div className="h-6 sm:h-7 lg:h-8 bg-gray-200 rounded-md mb-3 w-3/4"></div>

          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-2/3"></div>
          </div>
        </div>

        {/* Details and Button Skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-[#C1C8D8] pt-4 gap-4">
          {/* Icon Details Skeleton */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[35px] lg:h-[35px] bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-32 sm:w-40"></div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[35px] lg:h-[35px] bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-24 sm:w-32"></div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[35px] lg:h-[35px] bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-40 sm:w-48"></div>
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="w-full sm:w-auto sm:flex-shrink-0">
            <div className="w-full sm:w-[160px] h-11 sm:h-12 lg:h-[55px] bg-gray-200 rounded-[7px]"></div>
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
    <div className="flex items-center gap-2 sm:gap-3 py-1">
      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[35px] lg:h-[35px] relative flex-shrink-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-contain"
          sizes="35px"
        />
      </div>
      <p className="text-xs sm:text-sm lg:text-base xl:text-[18px] leading-relaxed font-sans text-[#292663]">
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-8 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-12 xl:py-16 bg-white">
      <h2 className="text-[#292663] font-bold leading-tight text-xl sm:text-2xl lg:text-3xl xl:text-[28px] text-left font-sans mb-6 sm:mb-8 lg:mb-10">
        Upcoming Events
      </h2>

      {/* Loading State with Skeleton */}
      {loading && (
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <EventCardSkeleton />
          <EventCardSkeleton />
          <EventCardSkeleton />
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="text-center py-12">
          <p className="text-red-600 text-lg">
            Failed to load events. Please try again later.
          </p>
        </div>
      )}

      {/* Events List */}
      {!loading && !error && (
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {data?.data?.length > 0 ? (
            data.data.map((eventData: any) => (
              <EventCard key={eventData.id} {...eventData} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-[#292663] text-lg">
                No upcoming events at the moment.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UpcomingEvent;
