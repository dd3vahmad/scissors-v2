"use client";

import { CheckIcon, QrCodeIcon } from "@heroicons/react/16/solid";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import { ReactNode, useEffect } from "react";
import Image from "next/image";
import { ArrowBigUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export interface IService {
  title: string;
  banner: string;
  icon: ReactNode;
  description: string;
  verb: string;
  features: string[];
}

interface GlassmorphismProps {
  children: ReactNode;
  className?: string;
}

export const Glassmorphism: React.FC<GlassmorphismProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`backdrop-blur-sm bg-white/4 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export const HeroInfo = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:px-[20%] mt-5 items-center">
      <h2 className="font-bold text-xl">
        Sign up for free. Enjoy limitless connections.
      </h2>
      <ul className="flex space-x-6">
        {["short links", "custom back-halves", "QR code generations"].map(
          (text, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon className="w-6 h-6 text-blue-800" />
              <span>{`Unlimited ${text}`}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export const Logo = () => {
  return (
    <h2 className="text-2xl italic font-bold text-primary [text-shadow:_2px_2px_0px_white,_-2px_2px_0px_white,_2px_-2px_0px_white,_-2px_-2px_0px_white]">
      ScSly
    </h2>
  );
};

export const QrcodeGenerator = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="max-w-[800px] h-[320px] mx-auto grid grid-cols-6 justify-between p-10 bg-white text-primary rounded-2xl"
    >
      <section className="flex flex-col justify-between pe-10 col-span-4">
        <section className="w-full">
          <h4 className="text-3xl font-extrabold">Create a QR Code</h4>
          <h6>No credit card required.</h6>
        </section>
        <section className="grid w-full items-center gap-1.5">
          <Label htmlFor="link" className="font-extrabold text-lg">
            Enter your QR Code destination
          </Label>
          <div className="flex flex-col gap-y-3 w-full">
            <Input
              name="link"
              style={{ height: "40px" }}
              className="flex-1 outline-none border-2 w-full"
              placeholder="https://my-very-long-link.com/long-keywords"
            />
            <Button
              size={"lg"}
              className="cursor-pointer text-lg font-bold w-fit"
              type="submit"
            >
              Generate QR Code
            </Button>
          </div>
        </section>
      </section>

      <section className="h-full border rounded-2xl min-w-[240px]">
        <QrCodeIcon />
      </section>
    </div>
  );
};

export const UrlShortener = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="max-w-[800px] h-[320px] mx-auto flex flex-col justify-between p-10 bg-white text-primary rounded-2xl"
    >
      <section className="w-full">
        <h4 className="text-3xl font-extrabold">Shorten a long link</h4>
        <h6>No credit card required.</h6>
      </section>
      <section className="grid w-full items-center gap-1.5">
        <Label htmlFor="link" className="font-extrabold text-xl">
          Paste your long link here
        </Label>
        <div className="flex w-full items-center space-x-2">
          <Input
            name="link"
            style={{ height: "40px" }}
            className="flex-1 outline-none border-2"
            placeholder="https://my-very-long-link.com/long-keywords"
          />
          <Button
            size={"lg"}
            className="cursor-pointer text-lg font-bold"
            type="submit"
          >
            Shorten
          </Button>
        </div>
      </section>
    </div>
  );
};

export const ServiceCard = ({ service }: { service: IService }) => {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="h-full flex-1 border relative rounded-3xl overflow-auto bg-slate-200 group"
    >
      <div className="w-full h-fit relative">
        <Image
          src={service.banner}
          alt={service.title}
          width={"400"}
          height={"300"}
          className="m-auto mb-10"
        />
        <div className="absolute top-5 z-10 text-white">{service.icon}</div>
      </div>
      <section className="w-full absolute flex flex-col justify-between bg-white border-t rounded-t-3xl h-[90%] px-4 py-5 transition-all duration-300 group-hover:-translate-y-82">
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-[40px] border-2 rounded-lg">
                {service.icon}
              </span>
              <h2 className="text-2xl font-bold">{service.title}</h2>
            </div>
            <ArrowBigUp
              className="transform transition-all duration-300 group-hover:rotate-180"
              size={"36px"}
              cursor={"pointer"}
            />
          </div>
          <p className="text-primary">{service.description}</p>
        </div>
        <ul className="space-y-3">
          <h4 className="font-bold text-primary">
            Popular {service.verb} Features
          </h4>
          {service.features.map((text, index) => (
            <li key={index} className="flex items-center gap-2 text-primary">
              <CheckIcon className="w-6 h-6 text-blue-800" />
              <span>{text}</span>
            </li>
          ))}
          <div className="w-full flex flex-col gap-3 mt-5">
            <Button className="font-bold cursor-pointer text-white bg-primary w-full">
              Get started for free
            </Button>
            <Button className="border-2 cursor-pointer hover:bg-white border-primary bg-white text-primary font-bold">
              Learn more
            </Button>
          </div>
        </ul>
      </section>
    </div>
  );
};
