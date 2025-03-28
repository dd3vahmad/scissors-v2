import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const UrlShortener = () => {
  return (
    <div className="max-w-[800px] h-[320px] mx-auto flex flex-col justify-between p-10 bg-white text-primary rounded-2xl">
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

export default UrlShortener;
