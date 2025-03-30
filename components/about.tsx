import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { footerImg } from "@/assets";

const About = () => {
  return (
    <div className="bg-slate-100 text-primary flex flex-col justify-center items-center pt-12 md:pt-24 md:px-[20%]">
      <h2 className="text-2xl md:text-6xl text-center font-extrabold md:px-20 mb-3 md:mb-6 w-fit">
        More than a link shortener
      </h2>
      <p className="text-lg md:text-2xl px-3 md:px-32 md:mb-6 text-center">
        Knowing how your clicks and scans are performing should be as easy as
        making them. Track, analyze, and optimize all your connections in one
        place.
      </p>
      <Button
        size={"lg"}
        className="bg-primary font-semibold capitalize my-10 md:my-12 cursor-pointer md:mb-0"
      >
        Get started for free <ArrowRightIcon />
      </Button>
      <Image
        src={footerImg.src}
        height={footerImg.height}
        width={footerImg.width}
        alt="App image"
        className="hidden md:block"
      />
    </div>
  );
};

export default About;
