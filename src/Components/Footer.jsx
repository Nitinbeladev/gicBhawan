import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext.jsx";
import mendiLogo from "../assets/mendkhal.png";

const translations = {
  en: {
    translatedBy: "Translated by",
    aboutUs: "About Us",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    contact: "Contact Us",
    developedBy: "Designed & Developed by Digihalt Team",
    followUs: "Follow us",
    lastUpdated: "Page Last Updated on:",
  },
  hi: {
    translatedBy: "अनुवादित द्वारा",
    aboutUs: "हमारे बारे में",
    terms: "नियम और शर्तें",
    privacy: "गोपनीयता नीति",
    contact: "संपर्क करें",
    developedBy: "Digihalt Team द्वारा डिज़ाइन और विकसित",
    followUs: "हमें फॉलो करें",
    lastUpdated: "पृष्ठ अंतिम बार अपडेट किया गया:",
  },
};

export default function Footer() {
  const { language, setLanguage } = useContext(LanguageContext);
  const lastUpdated = new Date().toLocaleDateString("en-GB");

  return (
    <footer className="bg-[#02173D] text-white text-sm p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
          <span>{translations[language].translatedBy}</span>
          <span className="text-blue-400 font-semibold">Google</span>
          <select
            className="bg-gray-700 text-white px-2 py-1 rounded cursor-pointer"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto text-center">
          <a href="#" className="hover:underline">
            {translations[language].aboutUs}
          </a>
          <a href="#" className="hover:underline">
            {translations[language].terms}
          </a>
          <a href="#" className="hover:underline">
            {translations[language].privacy}
          </a>
          <a href="#" className="hover:underline">
            {translations[language].contact}
          </a>
        </div>

        <div className="text-center text-sm w-full md:w-auto">
          {translations[language].developedBy}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4 border-t border-gray-600 pt-4 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 text-center">
          <span>{translations[language].followUs}</span>
          <div className="flex space-x-3">
            <a href="#" className="bg-blue-600 p-2 rounded">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-black p-2 rounded">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="bg-pink-500 p-2 rounded">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-red-600 p-2 rounded">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="bg-blue-500 p-2 rounded">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div>
          <img className="w-12" src={mendiLogo} alt="gic mendkhal" />
        </div>

        <div className="text-sm text-gray-300 text-center">
          {translations[language].lastUpdated}{" "}
          <span className="font-bold">{lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}
