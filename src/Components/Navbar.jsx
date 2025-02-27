import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "@fontsource/roboto/300.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-[#162f6a] shadow-md px-3 flex justify-between items-center font-roboto font-light">
        {/* Logo for larger screens */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2 bg-white rounded-full h-10 w-10 p-1">
            <img src={logo} alt="Logo" className="h-8 w-8" />
          </div>
          <div className="text-white text-sm/12 px-2 hover:text-[#162f6a] hover:bg-white duration-500 cursor-pointer">
            Home
          </div>
          <div className="text-white text-sm/12 px-2 hover:text-[#162f6a] hover:bg-white duration-500 cursor-pointer">
            About Us
          </div>
          <div className="text-white text-sm/12 px-2 hover:text-[#162f6a] hover:bg-white duration-500 cursor-pointer">
            Blogs
          </div>
          <div className="text-white text-sm/12 px-2 hover:text-[#162f6a] hover:bg-white duration-500 cursor-pointer">
            Events
          </div>
          <div className="text-white text-sm/12 px-2 hover:text-[#162f6a] hover:bg-white duration-500 cursor-pointer">
            Gallery
          </div>
          <div className="text-white text-sm/12 px-2 hover:text-[#162f6a] hover:bg-white duration-500 cursor-pointer">
            Tutorial
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden w-full flex items-center justify-between m-2">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <BiMenu className="text-5xl" />}
          </button>
          <div className="flex items-center gap-2 bg-white rounded-full h-10 w-10 p-1">
            <img src={logo} alt="Logo" className="h-8 w-8" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-3/4 h-full bg-[#162f6a] shadow-lg transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="flex flex-col items-start space-y-4 p-6 text-white">
            <button
              className="text-white text-2xl self-end focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <a
              href="#"
              className="text-lg ps-1 font-medium inline-block w-full hover:text-[#162f6a] hover:bg-white"
            >
              Home
            </a>
            <a
              href="#"
              className="text-lg ps-1 font-medium inline-block w-full hover:text-[#162f6a] hover:bg-white"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-lg ps-1 font-medium inline-block w-full hover:text-[#162f6a] hover:bg-white"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-lg ps-1 font-medium inline-block w-full hover:text-[#162f6a] hover:bg-white"
            >
              Events
            </a>
            <a
              href="#"
              className="text-lg ps-1 font-medium inline-block w-full hover:text-[#162f6a] hover:bg-white"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-lg ps-1 font-medium inline-block w-full hover:text-[#162f6a] hover:bg-white"
            >
              Tutorial
            </a>
          </div>
        </div>

        {/* Backdrop Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-[rgba(1,1,1,0.5)] bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Social Icons (Hidden on Mobile) */}
        <div className="hidden md:flex gap-2">
          <FaFacebookSquare className="text-white text-xl cursor-pointer" />
          <FaSquareInstagram className="text-white text-xl cursor-pointer" />
          <FaYoutubeSquare className="text-white text-xl cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* <div className="flex gap-2">
  <button className="border px-3 py-1 rounded">Member Login</button>
  <button className="border px-3 py-1 rounded">Candidate Login</button>
</div> */
}
