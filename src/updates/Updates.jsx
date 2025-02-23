import React from "react";
import recentupdates from "./updates.json";
import { MdCircle } from "react-icons/md";

const Updates = () => {
  // console.log(recentupdates)
  return (
    <div className="flex">
      <span className="relative z-10 bg-white w-30 flex justify-center items-center font-bold text-[1.2rem]">
        Updates
      </span>
      <div className="flex gap-6 animate-marquee">
        {recentupdates.map((updates, index) => {
          return (
            <div
              key={index}
              className="relative overflow-hidden  py-2 "
            >
              <div className="whitespace-nowrap flex space-x-5 items-center ">
                <MdCircle className="text-red-500 me-2" />
                <span className="text-lg font-semibold text-gray-800">
                  {/* थॉन आधारपत्र 2024-25 (Concept Note Hackathon 2024-25) */}
                  {updates.eventName}
                </span>
                <span className="text-lg font-semibold text-gray-800 italic">
                  {updates.date}
                </span>
                <span className="text-lg font-semibold text-gray-800">
                  {updates.subject}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Updates;
