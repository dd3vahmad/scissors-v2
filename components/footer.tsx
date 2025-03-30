import { endlessConstellation } from "@/assets";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="w-screen flex flex-col gap-10 justify-center items-center bg-primary py-12 text-white"
      style={{ backgroundImage: `url(${endlessConstellation.src})` }}
    >
      <div className="flex flex-col md:flex-row md:w-[50%] mx-auto p-3 md:py-3 md:px-0 justify-between gap-8 md:gap-30">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-white text-lg">Products</h3>
          <div className="flex flex-col md:flex-row gap-10 text-sm">
            <ul className="flex flex-wrap gap-5 font-semibold text-nowrap">
              <li className="cursor-pointer">
                <Link href={"/url-shortener"}>Url Shortener</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/about"}>QR Code Generator</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/pages"}>Pages</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/analytics"}>Analytics</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-white text-lg">Company</h3>

          <ul className="flex gap-5 text-sm">
            <li className="cursor-pointer font-semibold">
              <Link target="_blank" href={"/about"}>
                About ScSly
              </Link>
            </li>
            <li className="cursor-pointer font-semibold">
              <Link target="_blank" href={"https://www.theahmad.me"}>
                About Creator
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
