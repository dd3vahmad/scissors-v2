import { endlessConstellation } from "@/assets";
import React from "react";

const Hero = () => {
  return (
    <div
      className="w-screen min-h-screen flex flex-col gap-10 justify-center items-center bg-blue-950 text-white"
      style={{ backgroundImage: `url(${endlessConstellation.src})` }}
    >
      <main className="md:px-[20%] flex flex-col gap-y-5">
        <h3 className="text-5xl font-extrabold w-full text-center">
          Build stronger digital connections
        </h3>
        <p className="text-2xl font-semibold w-full text-center">
          Use our URL shortener, QR Codes, and landing pages to engage your
          audience and connect them to the right information. Build, edit, and
          track everything inside the Scissors Platform.
        </p>
      </main>
      <div className="flex flex-col gap-y-6 border-2 w-full">Hello</div>
    </div>
  );
};

export default Hero;
