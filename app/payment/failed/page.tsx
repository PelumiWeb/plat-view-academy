"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-medium text-[#000000] mb-4 font-inter">
          Registration failed
        </h1>
        <div className="flex items-center justify-center">
          <Image
            src={"/success.png"}
            alt=""
            className="object-contain"
            width={124}
            height={124}
          />
        </div>

        <button
          className="w-54.25 h-15.5 bg-[#0022D4] font-sans font-bold uppercase  text-white rounded-[7px] mt-8"
          onClick={() => router.push("/")}>
          Home
        </button>
      </div>

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
