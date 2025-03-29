"use client";

import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { endlessConstellation } from "@/assets";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { Glassmorphism } from "./ui/ui";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full bg-primary flex flex-col items-center md:px-[20%] text-white py-20 relative">
      <h2 className="text-5xl text-center font-extrabold px-24 mb-16 w-fit">
        What our customers are saying
      </h2>
      <div className="md:w-fit w-[84vw] mx-auto font-[family-name:var(--font-geist-sans)]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full md:w-[50vw]"
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                style={{ position: "relative" }}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Image
                    src={endlessConstellation.src}
                    alt={"Hamdallah Rabiu"}
                    className="border-2 border-white border-dashed"
                    width={1} // NextJs forced me to do this...
                    height={1} // NextJs forced me to do this...
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      left: "32%",
                      zIndex: 2,
                      objectFit: "cover",
                      position: "absolute",
                    }}
                  />
                  <Card
                    className="md:w-[300px] h-fit bg-transparent mt-14"
                    style={{
                      padding: 0,
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  >
                    <Glassmorphism className="h-full">
                      <div
                        className="mb-3 bg-transparent px-2"
                        style={{
                          height: "300px",
                          width: "100%",
                          paddingBlock: "50px",
                        }}
                      >
                        <Quote size={24} className="mt-4 text-white" />
                        <p className="mt-3 text-white">
                          When it comes to deciding on a platform to use for
                          generating all of our QR Codes, there was a general
                          consensus among the team—of course we should use
                          ScSly! We didn't even give it a second thought.
                        </p>
                      </div>

                      <CardHeader
                        style={{ paddingInline: "10px", marginBottom: "10px" }}
                      >
                        <CardTitle className="text-white">
                          Hamdallah A. Rabiu
                        </CardTitle>
                        <CardDescription>
                          <p className="font-light text-sm">
                            Marketing Lead at Jumble Royals
                          </p>
                        </CardDescription>
                      </CardHeader>
                    </Glassmorphism>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block text-primary pl-1.5 cursor-pointer" />
          <CarouselNext className="hidden md:block text-primary pl-1.5 cursor-pointer" />
        </Carousel>

        <div className="flex justify-center items-center gap-2 mt-2">
          {api?.scrollSnapList().map((_, i) => (
            <span
              key={i}
              className={
                current === i + 1
                  ? "text-white text-4xl"
                  : "text-white opacity-40 text-4xl"
              }
            >
              •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
