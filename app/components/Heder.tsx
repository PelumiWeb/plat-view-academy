"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Academy", href: "#academy" },
  { name: "Solutions", href: "#program" },
  { name: "Why", href: "#why" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (e: any, href: any) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <div className="shadow-[0px_4px_40px_0px_#0000001A] w-full h-auto lg:h-36.5 bg-white relative z-50">
      {/* Desktop & Mobile Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-0 h-20 lg:h-36.5">
        {/* Logo */}
        <div
          className="flex items-center shrink-0 cursor-pointer"
          onClick={() => router.push("/")}>
          <Image
            src="/PlatviewLogo.png"
            alt="Platview Logo"
            width={286}
            height={100}
            className="w-32 sm:w-40 md:w-48 lg:w-71.5 h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center ml-20 mt-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="mx-6 text-primary font-medium text-[20px] leading-6.25 font-sans hover:text-[#0022D4] transition-colors cursor-pointer">
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Register Button */}
        <button
          className="hidden lg:block bg-[#07DB76] text-[#070B1A] py-2 px-4 rounded-[70px] text-[20px] font-semibold font-sans h-18 w-55.75 hover:bg-opacity-90 transition-opacity cursor-pointer"
          onClick={(e) => handleNavClick(e, "#program-details")}>
          Register Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu">
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-primary font-medium text-base sm:text-lg font-sans hover:text-[#0022D4] transition-colors py-2 cursor-pointer">
                {item.name}
              </a>
            ))}
            <button
              onClick={(e) => handleNavClick(e, "#program-details")}
              className="w-full bg-[#07DB76] text-[#070B1A] py-3 px-4 rounded-[70px] text-base sm:text-lg font-semibold font-sans hover:bg-opacity-90 transition-opacity mt-4 cursor-pointer">
              Register Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
