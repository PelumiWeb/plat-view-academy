"use client";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast"; // or your toast library
import { useFetch } from "../useFetch";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const { loading, error, post } = useFetch();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const requestBody = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        jobTitle: formData.jobTitle,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        businessGoals: formData.message, // Mapping message to businessGoals
      };

      const response = await post(
        "https://platview-backend.onrender.com/api/contact",
        requestBody
      );

      if (response.success) {
        toast.success(response.message || "Message sent successfully!");
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          jobTitle: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    }
  };

  return (
    <div>
      {/* Catch us on Socials */}
      <div className="min-h-100 lg:h-150 flex justify-center items-center px-4 py-12 lg:py-0">
        <div className="w-full max-w-4xl">
          <h4 className="font-sans font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#000000] leading-tight lg:leading-15 text-center mb-6 sm:mb-8 lg:mb-4">
            Catch us on Socials
          </h4>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-1">
            <div className="bg-[#3B5998] w-full sm:w-77.5 h-20 sm:h-24 rounded-lg sm:rounded-l-lg sm:rounded-r-none flex justify-center items-center cursor-pointer hover:opacity-90 transition-opacity">
              <Image
                src="/facebook.png"
                width={16}
                height={16}
                priority
                className="object-contain"
                alt="Facebook icon"
              />
              <p className="text-white text-base sm:text-[18px] leading-tight sm:leading-5.25 font-poppins ml-2">
                Facebook
              </p>
            </div>

            <div className="bg-[#1DA1F2] w-full sm:w-77.5 h-20 sm:h-24 rounded-lg sm:rounded-none flex justify-center items-center cursor-pointer hover:opacity-90 transition-opacity">
              <Image
                src="/twitter.png"
                width={16}
                height={16}
                priority
                className="object-contain"
                alt="Twitter icon"
              />
              <p className="text-white text-base sm:text-[18px] leading-tight sm:leading-5.25 font-poppins ml-2">
                Twitter
              </p>
            </div>

            <div className="bg-[#5851DB] w-full sm:w-77.5 h-20 sm:h-24 rounded-lg sm:rounded-r-lg sm:rounded-l-none flex justify-center items-center cursor-pointer hover:opacity-90 transition-opacity">
              <Image
                src="/instagram.png"
                width={16}
                height={16}
                priority
                className="object-contain"
                alt="Instagram icon"
              />
              <p className="text-white text-base sm:text-[18px] leading-tight sm:leading-5.25 font-poppins ml-2">
                Instagram
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12 lg:pb-0">
        <h2 className="text-[#292663] font-bold leading-tight lg:leading-14.75 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-sans text-center mb-6 sm:mb-8 lg:mb-4">
          Contact us
        </h2>

        <div className="min-h-150 lg:h-158 w-full bg-[url('/contactBackground.svg')] bg-cover bg-center bg-no-repeat relative rounded-lg lg:rounded-none overflow-hidden">
          {/* Form */}
          <div className="w-full lg:w-132.25 static lg:absolute lg:right-[10%] lg:top-[20%] p-6 sm:p-8 lg:p-0 space-y-3 sm:space-y-4 lg:space-y-2">
            {/* First Name & Last Name */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 justify-between">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="bg-white text-black placeholder:text-[#0000004D] w-full sm:w-63 p-3 sm:p-4 border-none cursor-pointer outline-none rounded shadow-sm"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="bg-white text-black placeholder:text-[#0000004D] w-full sm:w-63 p-3 sm:p-4 border-none cursor-pointer outline-none rounded shadow-sm"
              />
            </div>

            {/* Job Title & Company */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2  justify-between  ">
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="Job Title"
                className="bg-white text-black placeholder:text-[#0000004D] w-full sm:w-63 p-3 sm:p-4 border-none cursor-pointer outline-none rounded shadow-sm"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
                className="bg-white text-black placeholder:text-[#0000004D] w-full sm:w-63 p-3 sm:p-4 border-none cursor-pointer outline-none rounded shadow-sm"
              />
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="bg-white text-black placeholder:text-[#0000004D] w-full sm:w-63 p-3 sm:p-4 border-none cursor-pointer outline-none rounded shadow-sm"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="bg-white text-black placeholder:text-[#0000004D] w-full sm:w-63 p-3 sm:p-4 border-none cursor-pointer outline-none rounded shadow-sm"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="bg-white text-black placeholder:text-[#0000004D] p-3 sm:p-4 border-none cursor-pointer w-full  h-32 sm:h-36 lg:h-41 outline-none rounded shadow-sm resize-none"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full sm:w-auto bg-[#292663] text-white px-8 py-3 rounded font-bold uppercase hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
