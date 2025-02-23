const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[20rem] bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4 md:flex justify-between items-center">
        <img
          src="/event-banner.png"
          alt="Hackathon Banner"
          className="w-full md:w-1/2"
        />
        <div className="mt-6 md:mt-0 md:w-1/2 text-center md:text-left">
          <p className="text-lg">📅 February 12, 2025</p>
          <h1 className="text-3xl font-bold">
            Hackathon 24-2025 by SCERT Uttarakhand
          </h1>
          <button className="mt-4 bg-blue-500 px-4 py-2 rounded shadow">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
