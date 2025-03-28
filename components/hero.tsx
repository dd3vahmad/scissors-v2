"use client";

import { endlessConstellation } from "@/assets";
import React, { useState } from "react";
import { Button } from "./ui/button";
import UrlShortener from "./url-shortener";
import QrcodeGenerator from "./qrcode-generator";
import { LinkIcon, QrCodeIcon } from "@heroicons/react/16/solid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("url");

  return (
    <div
      className="w-screen min-h-screen flex flex-col gap-10 justify-center items-center bg-blue-950 text-white"
      style={{ backgroundImage: `url(${endlessConstellation.src})` }}
    >
      <main className="md:px-[20%] flex flex-col gap-y-5">
        <h3 className="text-5xl font-extrabold w-full text-center">
          Making the right digital connections
        </h3>
        <p className="text-2xl font-semibold w-full text-center">
          Use our URL shortener, QR Codes, and landing pages to engage your
          audience and connect them to the right information. Build, edit, and
          track everything inside the Scissors Platform.
        </p>
      </main>
      <section className="flex flex-col w-full items-center mt-6 gap-y-6 px-[20%]">
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
    </div>
  );
};

export default Hero;
