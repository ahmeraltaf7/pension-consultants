import people from "../assets/people.png";
import { HiOutlineArrowRight } from "react-icons/hi";

const ChooseUs = () => {
  return (
    <section className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto mt-16 sm:mt-20 lg:mt-40">
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-20">
        <div>
          <h1 className="text-darkBlueP text-[28px] sm:text-[54px] leading-snug font-extrabold mt-8">
            Why you should choose us headline
          </h1>
          <p className="text-sm sm:text-[28px] sm:leading-10 text-grayP mt-8">
            Main frase about why users should choose your company (1-2
            sentences)
          </p>

          <div className="grid grid-cols-12 gap-5 mt-10">
            <div className="col-span-1">
              <HiOutlineArrowRight fontSize={28} color={"#0B65AF"} />
            </div>
            <p className="col-span-11 text-sm sm:text-xl text-grayP">
              <span className="font-bold">Performance</span> includes one or two
              sentences to explain why your plans outperform competitors.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-5">
            <div className="col-span-1">
              <HiOutlineArrowRight fontSize={28} color={"#0B65AF"} />
            </div>
            <p className="col-span-11 text-sm sm:text-xl text-grayP">
              <span className="font-bold">Transparency</span> includes one or
              two sentences to explain why this benefits your clients.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-5">
            <div className="col-span-1">
              <HiOutlineArrowRight fontSize={28} color={"#0B65AF"} />
            </div>
            <p className="col-span-11 text-sm sm:text-xl text-grayP">
              <span className="font-bold">Accountability</span> includes one or
              two sentences to explain why this benefits your clients.
            </p>
          </div>

          <button className="py-4 px-10 w-full lg:w-auto bg-blueP uppercase text-white text-sm sm:text-lg font-bold mt-12">
            let's get started
          </button>
        </div>

        <div className="self-center order-first lg:order-last">
          <img src={people} alt="people" className="mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
