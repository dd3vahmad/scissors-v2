import { CheckIcon } from "@heroicons/react/16/solid";

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
