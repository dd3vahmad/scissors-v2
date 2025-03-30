"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/ui";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`flex items-center justify-between px-4 md:px-[20%] mx-auto fixed w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-md z-20"
          : "bg-transparent"
      } text-white py-5`}
    >
      <Logo />

      <ul className="list-none hidden md:flex font-semibold text-md items-center gap-5">
        <li className="cursor-pointer">URL Shortener</li>
        <li className="cursor-pointer">QR Code Generator</li>
        <li className="cursor-pointer">Pages</li>
        <li className="cursor-pointer">Analytics</li>
      </ul>
      <span className="hidden md:flex items-center gap-3">
        <Button className="border-white border-2 bg-none cursor-pointer">
          Log In
        </Button>
        <Button className="border-white border-2 bg-none cursor-pointer">
          Sign Up For FREE
        </Button>
      </span>
    </header>
  );
};

export default Navbar;
