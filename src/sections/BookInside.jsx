import { useState } from "react";
import book from "../assets/book.png";

const BookInside = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-darkBlueP py-16 sm:py-28 mt-40">
      <div className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14">
          <div>
            <img
              src={book}
              alt="book"
              className="-mt-36 sm:-mt-48 mx-auto lg:mx-0"
            />
          </div>
          <div className="text-white">
            <h1 className="text-sm sm:text-xl font-bold">FREE DOWNLOAD</h1>
            <h1 className="text-[28px] sm:text-[54px] xl:w-[582px] leading-snug font-extrabold mt-5">
              Read The First Chapter
            </h1>
            <p className="text-sm sm:text-[20px] sm:leading-8 xl:w-[537px] mt-8">
              Learn what it takes to build a successful retirement plan so your
              employees can retire on time and with dignity. A must read for any
              fiduciary.
            </p>

            <form className="flex flex-col lg:flex-row lg:items-center mt-10">
              <input
                type="text"
                placeholder="Your email address"
                className="py-4 pl-5 text-black w-full lg:w-[300px] focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blueP border-2 border-blueP text-sm sm:text-lg font-bold px-8 py-3 mt-4 lg:mt-0"
              >
                SUBSCRIBE
              </button>
            </form>

            <p className="lg:w-[447px] text-sm sm:text-base mt-5">
              We promise to never spam you or sell your information. For more,
              read our{" "}
              <a href="#" className="underline">
                privacy policy
              </a>{" "}
              or{" "}
              <a href="#" className="underline">
                terms and conditions
              </a>
            </p>
          </div>
        </div>

        <hr className="border border-[#B8D8F2] mt-16" />

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-10 text-white lg:px-10 mt-10">
          <h1 className="text-sm lg:text-xl pt-3.5">WHAT'S INSIDE</h1>

          <div className="flex items-center space-x-5">
            <h1 className="text-[52px] font-extrabold">1</h1>
            <p className="text-sm sm:text-xl">
              Describe what users can expect to learn
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <h1 className="text-[52px] font-extrabold">2</h1>
            <p className="text-sm sm:text-xl">
              Describe what users can expect to learn
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <h1 className="text-[52px] font-extrabold">3</h1>
            <p className="text-sm sm:text-xl">
              Describe what users can expect to learn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookInside;
