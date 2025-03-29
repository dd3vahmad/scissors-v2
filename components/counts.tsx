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
    <div className="bg-white px-[20%] flex flex-col justify-center items-center py-24">
      <h2 className="text-5xl text-center font-extrabold px-24 w-fit">
        Adopted and loved by millions of users for over a decade
      </h2>

      <div className="flex justify-center gap-10 mx-auto mt-12 w-full">
        {counts.map((count) => (
          <div className="flex flex-col items-center gap-2 border-4 rounded-full h-[200px] w-[200px] justify-center">
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
