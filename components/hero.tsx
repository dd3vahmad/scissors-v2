"use client";

import { endlessConstellation } from "@/assets";
import React from "react";
import { QrcodeGenerator, UrlShortener } from "./ui/ui";
import { LinkIcon, QrCodeIcon } from "@heroicons/react/16/solid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { HeroInfo } from "./ui/ui";

const Hero = () => {
  return (
    <div
      className="w-screen min-h-screen flex flex-col gap-10 justify-center items-center bg-primary text-white"
      style={{ backgroundImage: `url(${endlessConstellation.src})` }}
    >
      <main className="md:px-[20%] flex flex-col gap-y-5 mt-15">
        <h3 className="text-2xl md:text-5xl font-extrabold w-full mt-15 text-center">
          Making the right digital connections
        </h3>
        <p className="text-lg md:text-2xl md:font-semibold w-full text-center">
          Use our URL shortener, QR Codes, and landing pages to engage your
          audience and connect them to the right information. Build, edit, and
          track everything inside the ScSly Platform.
        </p>
      </main>
      <section className="flex flex-col w-full items-center mt-6 gap-y-6 px-2 md:px-[20%]">
        <Tabs defaultValue="url" className="w-full">
          <TabsList className="grid grid-cols-2 w-fit mx-auto mb-4">
            <TabsTrigger className="text-primary cursor-pointer" value="url">
              <LinkIcon /> Shorten Link
            </TabsTrigger>
            <TabsTrigger className="text-primary cursor-pointer" value="qrcode">
              <QrCodeIcon /> Generate QR Code
            </TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="url">
            <UrlShortener />
          </TabsContent>
          <TabsContent value="qrcode">
            <QrcodeGenerator />
          </TabsContent>
        </Tabs>
      </section>
      <HeroInfo />
    </div>
  );
};

export default Hero;
