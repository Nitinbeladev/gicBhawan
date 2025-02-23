import React from "react";
import background from "../assets/background.jpg";

const Youtube = () => {
  console.log(background);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative py-10 mt-2 "
    >
      {/* Background Patterns */}
      <div className="container mx-auto px-4 relative min-h-[18rem]">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Section - Responsive YouTube Video */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg shadow-lg min-h-[18rem]"
                src="https://www.youtube.com/embed/GSGGsJzPt-k?si=o-KuwjBFBL2ERIlT"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Experience The Journey Of Innovation
            </h2>
            <p className="text-gray-600 mt-3 [@media(max-width:500px)]:hidden">
              Watch our promo video to get a glimpse of how SCERT Uttarakhand is
              empowering students, teachers, and innovators to tackle real-world
              challenges. From inspiring success stories to the exciting
              opportunities in our upcoming events, this video captures the
              essence of creativity, collaboration, and impact. Dive in and see
              how you can be part of this transformative journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
