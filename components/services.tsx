import React from "react";
import { Button } from "./ui/button";
import {
  ArrowRightIcon,
  LinkIcon,
  QrCodeIcon,
} from "@heroicons/react/16/solid";
import { IService, ServiceCard } from "./ui/ui";
import { endlessConstellation } from "@/assets";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const Services = () => {
  const services: IService[] = [
    {
      title: " URL Shortener",
      banner: endlessConstellation.src,
      icon: <LinkIcon />,
      description:
        "A comprehensive solution to help make every point of connection between your content and your audience more powerful.",
      features: [
        "URL shortening at scale",
        "AI-generated custom domains",
        "URL redirects",
        "Advanced analytics & tracking",
      ],
      verb: "URL Shortening",
    },
    {
      title: "QR Codes",
      banner: endlessConstellation.src,
      icon: <QrCodeIcon />,
      description:
        "QR Code solutions for every customer, business and brand experience.",
      features: [
        "Fully customizable QR Codes",
        "Dynamic QR Codes",
        "QR Code types & destination options",
        "Advanced analytics & tracking",
      ],
      verb: "QR Code",
    },
    {
      title: "Landing Pages",
      banner: endlessConstellation.src,
      icon: <DocumentTextIcon />,
      description:
        "Scissors Pages helps you create engaging, mobile-optimized landing pages in minutes.",
      features: [
        "Custom URLs for social media",
        "Customizable landing page",
        "Easy-to-manage links",
        "Link and landing page tracking",
      ],
      verb: "Page",
    },
  ];

  return (
    <div className="bg-slate-100 py-20 flex flex-col items-center justify-center md:px-[20%]">
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

      <div className="flex w-full h-[600px] gap-10">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
