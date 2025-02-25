import logo from "../assets/logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import "@fontsource/roboto/300.css";
const Navbar = () => {
  return (
    <nav className="bg-[#162f6a] shadow-md px-3 justify-between flex gap-4 items-center font-roboto font-light">
      <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
        <div className="flex items-center gap-2 bg-white rounded-[50%] h-10 w-10 p-1">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </div>
        <div className="text-white text-sm/12 px-2 hover:text-[#162f6a]  hover:bg-white duration-500 cursor-pointer">
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
      {/* <div className="flex gap-2">
        <button className="border px-3 py-1 rounded">Member Login</button>
        <button className="border px-3 py-1 rounded">Candidate Login</button>
      </div> */}
      <div className="flex items-center gap-2 bg-white rounded-[50%] h-10 w-10 p-1 m-1.5">
        <img src={logo} alt="Logo" className="h-8 w-8" />
      </div>
      <div className="flex gap-2">
        <FaFacebookSquare className="text-white text-xl cursor-pointer" />
        <FaSquareInstagram className="text-white text-xl cursor-pointer" />
        <FaYoutubeSquare className="text-white text-xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
