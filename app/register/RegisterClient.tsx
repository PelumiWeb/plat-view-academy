"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useFetch } from "../useFetch";
import { useRouter, useSearchParams } from "next/navigation";

function RegisterClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [modal, setModal] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState<"full" | "imstalment">("full");
  const [promoCode, setPromoCode] = useState<string | null>(null);

  const { loading, post } = useFetch();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract promo code from URL on component mount
  useEffect(() => {
    const code = searchParams.get("promoCode");
    if (code) {
      setPromoCode(code);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContinue = async () => {
    // Validation
    if (!formData.firstName || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setModal(true);
  };

  const handleSubmission = async () => {
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
        "https://platview-backend.onrender.com/api/registration/course",
        requestBody
      );
      toast.success("Registration successful!");

      console.log(response, "response");

      // Prepare payment initialization payload
      const paymentPayload: {
        registrationId: number;
        promoCode?: string;
      } = {
        registrationId: response.data.registrationId,
      };

      // Add promo code if it exists
      if (promoCode) {
        paymentPayload.promoCode = promoCode;
      }

      const paymentResponse = await post(
        "https://platview-backend.onrender.com/api/payment/initialize",
        paymentPayload
      );

      if (paymentResponse.success && paymentResponse.data.authorizationUrl) {
        toast.success("Redirecting to payment...");

        // Redirect to Paystack payment page
        window.location.href = paymentResponse.data.authorizationUrl;
      } else {
        toast.error("Payment initialization failed. Please try again.");
      }

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-[calc(100vh-50px)] w-full flex justify-center items-center relative flex-col px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
      <div className="flex flex-col w-full max-w-4xl mt-0 lg:-mt-[5%] z-10">
        {/* Header */}
        <div className="w-full flex justify-center items-center mb-6 sm:mb-8">
          <p className="font-inter font-bold text-xl sm:text-2xl md:text-3xl lg:text-[30px] leading-tight sm:leading-normal lg:leading-8.5 text-[#000000] text-center w-full sm:w-[80%] lg:w-[60%]">
            <span className="text-[#0022D4]">Register</span> for the Zero to
            Hero Cybersecurity Program
          </p>
        </div>

        {/* Promo Code Badge */}
        {promoCode && (
          <div className="w-full flex justify-center mb-4">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-sm">
                Promo code applied: {promoCode}
              </span>
            </div>
          </div>
        )}

        {/* Form Section */}
        <div className="mt-4 sm:mt-6 lg:mt-8 w-full">
          <p className="font-semibold text-[#292663] text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-8.75 mb-4">
            Info about you:
          </p>

          <div className="space-y-3 sm:space-y-4">
            {/* First Name & Last Name */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name *"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] font-mono text-base sm:text-lg lg:text-[20px] text-[#5D6978] leading-relaxed lg:leading-8.75 px-3 sm:px-4 focus:border-[#0022D4] transition-colors"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] font-mono text-base sm:text-lg lg:text-[20px] text-[#5D6978] leading-relaxed lg:leading-8.75 px-3 sm:px-4 focus:border-[#0022D4] transition-colors"
              />
            </div>

            {/* Phone Number & Email */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] font-mono text-base sm:text-lg lg:text-[20px] text-[#5D6978] leading-relaxed lg:leading-8.75 px-3 sm:px-4 focus:border-[#0022D4] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-[#D6DDEF] bg-white outline-none w-full sm:w-96.25 h-12 sm:h-14 lg:h-15 rounded-[10px] font-mono text-base sm:text-lg lg:text-[20px] text-[#5D6978] leading-relaxed lg:leading-8.75 px-3 sm:px-4 focus:border-[#0022D4] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto sm:mx-auto lg:w-[45%] justify-between gap-3 sm:gap-4 my-6 sm:my-8">
          <button
            onClick={handleContinue}
            disabled={loading}
            className="bg-[#0022D4] w-full sm:w-54.25 h-12 sm:h-14 lg:h-15.5 rounded-[7px] font-bold text-base sm:text-lg lg:text-[18px] leading-tight lg:leading-4.5 uppercase text-white hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? "LOADING..." : "CONTINUE"}
          </button>
          <button
            className="bg-white w-full sm:w-54.25 h-12 sm:h-14 lg:h-15.5 rounded-[7px] font-bold text-base sm:text-lg lg:text-[18px] leading-tight lg:leading-4.5 uppercase text-[#292663] border-[0.5px] border-[#292663] hover:bg-gray-50 transition-colors"
            onClick={() => {
              router.back();
            }}>
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

      {modal && (
        <div className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="my-4 md:my-0 w-full h-full md:h-77.25 bg-[#F0F0FF] rounded-none md:rounded-[37px] md:w-62 flex flex-col justify-center items-center mx-4 px-4 md:px-0">
            <p className="font-sans font-bold text-[13px] leading-6.25 text-center">
              Early bird discount: 20% off ₦120,000
            </p>
            <p className="font-sans font-normal text-[13px] leading-6.25 text-center">
              (Valid until mid-February)
            </p>
            <button
              onClick={() => {
                setModal(false);
                setPaymentPlan("full");
                handleSubmission();
              }}
              disabled={loading}
              className="bg-[#0022D4] w-full sm:w-54.25 h-12 sm:h-14 lg:h-10.5 rounded-[7px] font-bold text-base sm:text-lg lg:text-[15px] leading-tight lg:leading-4.5 uppercase text-white hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed mt-4">
              FULL PAYMENT
            </button>
          </div>

          <div className="my-4 md:my-0 w-full  h-full md:h-77.25 bg-[#F0F0FF] rounded-none md:rounded-[37px] md:w-62 flex flex-col justify-center items-center mx-4 px-4 md:px-0">
            <div className="mx-2">
              <p className="font-sans font-bold text-[13px] leading-6.25 text-center">
                <span className="font-normal">maximum of two</span> (2)
                instalments -
                <span className="font-normal">
                  To be fully paid before the training start date (8th April,
                  2026)
                </span>
                {"    "}
              </p>

              <p className="font-sans font-bold text-[13px] leading-6.25 text-center uppercase">
                Please note: Instalment payments are not applicable to early
                bird registration
              </p>
            </div>

            <button
              onClick={() => {
                setModal(false);
                setPaymentPlan("imstalment");
                handleSubmission();
              }}
              className="bg-white w-full sm:w-54.25 h-12 sm:h-14 lg:h-10.5 rounded-[7px] font-bold text-base sm:text-lg lg:text-[15px] leading-tight lg:leading-4.5 uppercase text-[#292663] hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed mt-4 border-[0.5px] border-[#292663]">
              INSTALMENT PAYMENT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterClient;
