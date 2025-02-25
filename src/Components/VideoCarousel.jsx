import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import videoFIles from "../video/Videos.json";
const videos = videoFIles;

export default function VideoCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full bg-gray-100 py-6 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Latest Videos</h2>
          <a href="#" className="text-blue-600 hover:underline">
            View All
          </a>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            preventClicks={true}
            preventClicksPropagation={true}
            className="w-full"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <a href={video.videoUrl}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-40 object-cover"
                    />
                  </a>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 disabled:opacity-50"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 disabled:opacity-50"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
