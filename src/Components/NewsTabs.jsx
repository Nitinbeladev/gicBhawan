import { useState } from "react";
import notice from "../News&announcements/Notice.json";
import media from "../News&announcements/Media.json";
import live_events from "../News&announcements/Live.json";

const tabs = [
  { name: "Notice", key: "notice" },
  { name: "Media", key: "media" },
  { name: "Live & Events", key: "live_events" },
];

const tabData = {
  notice,
  media,
  live_events,
};

export default function NewsTabs() {
  const [activeTab, setActiveTab] = useState("notice");

  return (
    <div className="w-full bg-blue-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Latest News & Announcements</h2>
        <div className="flex border-b border-blue-500 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-3 text-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.key
                  ? "bg-blue-700 border-t-2 border-blue-400"
                  : "hover:bg-blue-800"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="mt-6">
          {tabData[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center p-4 border-b border-blue-700 hover:bg-blue-800 transition-all duration-300"
            >
              <span className="text-gray-300 text-sm sm:text-base mb-2 sm:mb-0">
                {item.date}
              </span>
              <span className="text-white font-medium text-sm sm:text-base text-left sm:text-right">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
