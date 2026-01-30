"use client";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useFetch } from "../useFetch";
import { useRouter } from "next/navigation";

const promoExpiryDate = new Date("2026-02-28");
const now = new Date();

function RegisterClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [modal, setModal] = useState(false);
  const { loading, post } = useFetch(); // This 'loading' will trigger our UI
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = async () => {
    if (!formData.firstName || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setModal(true);
  };

  const handleSubmission = async (paymentPlan: "full" | "instalment") => {
    try {
      const requestBody = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        courseId: 1,
        paymentPlan: paymentPlan === "full" ? "full" : "installment_2",
      };

      const response = await post(
        `https://platview-backend.onrender.com/api/registration/course`,
        requestBody
      );

      toast.success("Registration successful!");

      const paymentPayload = {
        registrationId: response.data.registrationId,
        ...(now <= promoExpiryDate &&
          paymentPlan === "full" && { promoCode: "EARLYBIRD" }),
      };

      const paymentResponse = await post(
        `https://platview-backend.onrender.com/api/payment/initialize`,
        paymentPayload
      );

      if (paymentResponse.success && paymentResponse.data.authorizationUrl) {
        toast.success("Redirecting to payment...");
        window.location.href = paymentResponse.data.authorizationUrl;
      } else {
        toast.error("Payment initialization failed.");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="min-h-[calc(100vh-50px)] w-full flex justify-center items-center relative flex-col px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
      {/* --- LOADING MODAL --- */}
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
          <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center border border-gray-100">
            {/* Custom Spinner */}
            <div className="w-12 h-12 border-4 border-[#0022D4]/20 border-t-[#0022D4] rounded-full animate-spin mb-4"></div>
            <p className="text-[#292663] font-bold text-lg animate-pulse">
              Processing Request...
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Please do not refresh the page
            </p>
          </div>
        </div>
      )}

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
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name *"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] px-4"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] px-4"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] px-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] px-4"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto sm:mx-auto lg:w-[45%] justify-between gap-3 sm:gap-4 my-6 sm:my-8">
          <button
            onClick={handleContinue}
            disabled={loading}
            className="bg-[#0022D4] w-full sm:w-54.25 h-12 sm:h-14 lg:h-15.5 rounded-[7px] font-bold text-white uppercase hover:bg-opacity-90 disabled:opacity-50">
            {loading ? "LOADING..." : "CONTINUE"}
          </button>
          <button
            className="bg-white w-full sm:w-54.25 h-12 sm:h-14 lg:h-15.5 rounded-[7px] font-bold text-[#292663] border border-[#292663]"
            onClick={() => router.back()}>
            BACK
          </button>
        </div>
      </div>

      {/* Background Vector */}
      <div className="absolute inset-x-0 bottom-0 h-180 pointer-events-none z-0 ">
        <Image
          src="/heroVector.png"
          alt="Hero Vector"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Plan Selection Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center bg-black/50 backdrop-blur-sm p-4 "
          onClick={() => setModal(false)}>
          <div
            className="my-4 md:my-0 w-full md:h-77.25 bg-[#F0F0FF] rounded-xl md:rounded-[37px] md:w-62 flex flex-col justify-center items-center mx-4 p-6 relative"
            onClick={(e) => e.stopPropagation()}>
            <p className="font-sans font-bold text-[13px] text-[#292663]">
              Early bird discount: 20% off ₦120,000
            </p>
            <p className="text-[11px] mb-4">(Valid until end of February)</p>
            <button
              onClick={() => {
                setModal(false);
                handleSubmission("full");
              }}
              className="bg-[#0022D4] w-full py-3 rounded-lg font-bold text-white text-[14px]">
              FULL PAYMENT
            </button>
          </div>

          <div
            className="my-4 md:my-0 w-full md:h-77.25 bg-[#F0F0FF] rounded-xl md:rounded-[37px] md:w-62 flex flex-col justify-center items-center mx-4 p-6 relative"
            onClick={(e) => e.stopPropagation()}>
            <p className="font-sans font-bold text-[13px] text-center text-[#292663] mb-4">
              Instalment payments available (Max 2 parts). Not valid for early
              bird.
            </p>
            <button
              onClick={() => {
                setModal(false);
                handleSubmission("instalment");
              }}
              className="bg-white border border-[#292663] w-full py-3 rounded-lg font-bold text-[#292663] text-[14px]">
              INSTALMENT PAYMENT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterClient;
