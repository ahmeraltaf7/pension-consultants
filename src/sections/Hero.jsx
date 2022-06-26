import avatar from "../assets/avatar.png";
import hero from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="bg-path2 lg:bg-path bg-right-top bg-no-repeat sm:mt-10 lg:mt-20">
      <div className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14">
          <div className="pt-5">
            <h1 className="text-darkBlueP text-4xl sm:text-6xl font-extrabold xl:w-[683px]">
              PCI’s{" "}
              <span className="text-blueP">
                Performance-Driven Retirement Plan
              </span>{" "}
              Management Services
            </h1>
            <p className="xl:w-[715px] sm:text-[28px] text-grayP mt-10">
              Discover if you have a good plan. We’re ready to show you! Click
              the button below to discover your plan’s true performance.
            </p>
            <button className="py-4 px-10 w-full lg:w-auto bg-blueP uppercase text-white text-sm sm:text-lg font-bold mt-12">
              let's get started
            </button>

            <div className="flex items-center space-x-8 mt-14">
              <img
                src={avatar}
                alt="avatar"
                className="h-[76px] sm:h-[133px] w-[76px] sm:w-[133px]"
              />

              <div className="border border-grayP rounded-2xl relative p-5">
                <h1 className="text-grayP sm:text-xl font-bold">
                  Cody Mendenhall, CFP
                </h1>
                <p className="text-grayP text-sm sm:text-xl sm:w-[370px]">
                  I'll help you find the most appropriate, best value, and
                  highest performing plan for your employees.
                </p>
                <div className="p-2 bg-white border border-grayP border-t-0 border-r-0 absolute top-[45%] -left-[10px] rotate-45"></div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl">
            <img
              src={hero}
              alt="hero img"
              className="mx-auto lg:mx-0 lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
