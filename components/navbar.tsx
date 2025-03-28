import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between md:px-[20%] mx-auto bg-transparent fixed w-full text-white py-5">
      <h2 className="text-2xl font-bold text-orange-500 cursor-pointer">
        Scissors
      </h2>
      <ul className="list-none flex font-semibold text-md items-center gap-4">
        <li className="cursor-pointer">URL Shortener</li>
        <li className="cursor-pointer">QR Code Generator</li>
        <li className="cursor-pointer">Pages</li>
        <li className="cursor-pointer">Analytics</li>
      </ul>
      <span className="flex items-center gap-3">
        <Button className="border-white border-2 bg-none cursor-pointer">
          Log In
        </Button>
        <Button className="border-white border-2 bg-none cursor-pointer">
          Sign Up For FREE
        </Button>
      </span>
    </div>
  );
};

export default Navbar;
