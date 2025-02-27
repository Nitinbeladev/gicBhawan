import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import ImageGrid from "./Imagegrid";
import Updates from "../updates/Updates";
import Youtube from "./Youtube";
import Performanceboard from "./Performanceboard";
import HonorableMembers from "./Honorablemembers";
import CommitteeMembers from "./Committee";
import VideoCarousel from "./VideoCarousel";
import NewsTabs from "./NewsTabs";
import Footer from "./Footer";
function Homepage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ImageGrid />
      <Updates />
      <Youtube />
      <Performanceboard />
      <HonorableMembers />
      <CommitteeMembers />
      <VideoCarousel />
      <NewsTabs />
      <Footer />
    </div>
  );
}

export default Homepage;
