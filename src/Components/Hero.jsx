import { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative w-full min-h-[24rem] bg-blue-900 text-white flex flex-col items-center justify-center">
      <div className="container mx-auto px-3 flex flex-col md:flex-row justify-center items-center">
        {/* Image Slider */}
        <div className="w-[20rem] md:w-1/2 relative overflow-hidden rounded-lg shadow-lg h-[16rem]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Hackathon Banner"
              className={`w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="mt-6 md:mt-0 md:w-1/2 text-center flex flex-col items-end md:text-left">
          <h1 className="text-3xl font-bold">SCERT Uttarakhand</h1>
          <button className="mt-4 bg-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
