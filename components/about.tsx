import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { footerImg } from "@/assets";

const About = () => {
  return (
    <div className="bg-slate-100 text-primary flex flex-col justify-center items-center pt-24 md:px-[20%]">
      <h2 className="text-6xl text-center font-extrabold px-20 mb-6 w-fit">
        More than a link shortener
      </h2>
      <p className="text-2xl px-32 mb-6 text-center">
        Knowing how your clicks and scans are performing should be as easy as
        making them. Track, analyze, and optimize all your connections in one
        place.
      </p>
      <Button
        size={"lg"}
        className="bg-primary font-semibold capitalize my-12 cursor-pointer"
      >
        Get started for free <ArrowRightIcon />
      </Button>
      <Image
        src={footerImg.src}
        height={footerImg.height}
        width={footerImg.width}
        alt="App image"
      />
    </div>
  );
};

export default About;
