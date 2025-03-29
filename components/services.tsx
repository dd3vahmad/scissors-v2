import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const Services = () => {
  return (
    <div className="bg-slate-200 py-20 flex flex-col items-center justify-center md:px-[20%]">
      <h3 className="text-2xl text-slate-800 uppercase mb-8">
        Great Connections Start with a click OR SCAN
      </h3>
      <h2 className="text-5xl font-extrabold text-primary mb-3">
        Scissors Connections Platform
      </h2>
      <p className="text-xl text-center w-full md:px-[10%] mt-4">
        All the products you need to build brand connections, manage links and
        QR Codes, and connect with audiences everywhere, in a single unified
        platform.
      </p>
      <Button
        size={"lg"}
        className="bg-primary font-semibold capitalize my-12 cursor-pointer"
      >
        Get started for free <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default Services;
