import heroimage from "../assets/hero.jpg"

const HeroSection = () => {
  return (
    <section className="relative w-full [@media(min-width:223px)]:h-[24rem] bg-blue-900 text-white py-10 px-5">
      {/*min-h-[20rem]*/}
      <div className="container mx-auto px-4 md:flex justify-between items-center">
        <img
          src={heroimage}
          alt="Hackathon Banner"
          className="w-full md:w-1/2 me-5"
        />
        <div className="mt-6 md:mt-0 md:w-1/2 text-center md:text-left">
          {/* <p className="text-lg">📅 February 12, 2025</p> */}
          <h1 className="text-3xl font-bold">
             SCERT Uttarakhand
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
