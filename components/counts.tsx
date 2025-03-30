import { LinkIcon, QrCodeIcon, UsersIcon } from "@heroicons/react/16/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import React from "react";

const Counts = () => {
  const counts = [
    {
      icon: <UsersIcon />,
      count: "200K+",
      label: "Happy Users",
    },
    {
      icon: <LinkIcon />,
      count: "10M+",
      label: "Shortened URLs",
    },
    {
      icon: <QrCodeIcon />,
      count: "6M+",
      label: "QR Codes",
    },
    {
      icon: <DocumentTextIcon />,
      count: "100K+",
      label: "Landing Pages",
    },
  ];

  return (
    <div className="bg-white md:px-[20%] flex flex-col justify-center items-center py-12 md:py-20">
      <h2 className="text-2xl md:text-5xl text-primary text-center font-extrabold px-5 md:px-24 w-fit">
        Adopted and loved by millions of users for over a decade
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 mx-auto mt-12 w-full">
        {counts.map((count, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 border-4 rounded-full h-[200px] w-[200px] justify-center"
          >
            <div className="w-[45px] text-primary">{count.icon}</div>
            <h3 className="text-4xl text-primary font-extrabold">
              {count.count}
            </h3>
            <p className="text-sm font-bold">{count.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counts;
