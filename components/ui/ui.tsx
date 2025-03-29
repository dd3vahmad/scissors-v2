import { CheckIcon, QrCodeIcon } from "@heroicons/react/16/solid";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";

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
      ScS
    </h2>
  );
};

export const QrcodeGenerator = () => {
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

export const UrlShortener = () => {
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
