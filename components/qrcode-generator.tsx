import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { QrCodeIcon } from "@heroicons/react/16/solid";

const QrcodeGenerator = () => {
  return (
    <div className="max-w-[800px] h-[320px] mx-auto grid grid-cols-6 justify-between p-10 bg-white text-primary rounded-2xl">
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

export default QrcodeGenerator;
