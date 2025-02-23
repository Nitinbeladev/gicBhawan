import { useState } from "react";

import Jury from "../membersData/commitee/jury.json";
import Organiser from "../membersData/commitee/Organiser.json";
import Reviewer from "../membersData/commitee/Reviewer.json";

const membersData = {
  Organiser,
  Jury,
  Reviewer,
};

export default function CommitteeMembers() {
  const [activeTab, setActiveTab] = useState("Organiser");

  return (
    <div className="container mx-auto px-4 text-center py-8 mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        Committee Members
      </h2>
      <div className="flex justify-center space-x-4 mb-6">
        {Object.keys(membersData).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg border transition duration-300 ease-in-out ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {membersData[activeTab].map((member, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
