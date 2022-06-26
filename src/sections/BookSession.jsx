import avatar from "../assets/avatar2.png";
import { MdWatchLater } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

const BookSession = () => {
  return (
    <section className="bg-blueP py-20">
      <div className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 xl:gap-14">
          <div className="lg:col-span-3 text-white self-center">
            <h1 className="text-xs sm:text-xl font-bold">READY TO START?</h1>
            <h1 className="text-[28px] sm:text-[54px] leading-snug font-extrabold mt-5">
              Add a 1 line CTA to push users to book a call
            </h1>
            <div className="hidden lg:block">
              <hr className="mt-10 border border-gray-400" />

              <h1 className="text-xl mt-8">WHAT TO EXPECT:</h1>
              <div className="grid grid-cols-3 gap-14 text-white mt-5">
                <div className="flex items-center space-x-5">
                  <h1 className="text-[52px] font-extrabold">1</h1>
                  <p>Describe what they will get out of your call here</p>
                </div>

                <div className="flex items-center space-x-5">
                  <h1 className="text-[52px] font-extrabold">2</h1>
                  <p>Describe what they will get out of your call here</p>
                </div>

                <div className="flex items-center space-x-5">
                  <h1 className="text-[52px] font-extrabold">3</h1>
                  <p>Describe what they will get out of your call here</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white text-grayP lg:rounded-xl py-5 sm:py-8 px-8 sm:px-16">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full h-[58px] w-[58px] mx-auto"
            />
            <h1 className="text-sm font-bold text-center mt-3">Danny Brown</h1>
            <h1 className="text-[22px] font-bold text-center">
              Discovery Session
            </h1>

            <div className="flex items-center space-x-1 mt-7">
              <MdWatchLater fontSize={25} />
              <p className="text-[#767676] text-sm">30 min</p>
            </div>

            <div className="flex space-x-2 mt-4">
              <FaVideo fontSize={30} />
              <p className="text-[#767676] font-bold mb-5">
                Web conferencing details provided upon confirmation.
              </p>
            </div>

            <p className="text-sm sm:text-base">
              This should be a quick message to explain what users should
              expect. It should help set up realistic expectations for your
              meeting, and tell them what they should bring to the meeting.
            </p>

            <hr className="mt-3" />

            <h1 className="mt-5 font-bold text-center">Select a Day</h1>
          </div>
        </div>
        <div className="lg:hidden">
          <hr className="mt-10 border border-gray-400" />
          <h1 className="text-xl mt-8 text-white">WHAT TO EXPECT:</h1>
          <div className="grid grid-cols-1 text-white mt-5">
            <div className="flex items-center space-x-5">
              <h1 className="text-[28px] sm:text-[52px] font-extrabold">1</h1>
              <p>Describe what they will get out of your call here</p>
            </div>

            <div className="flex items-center space-x-5">
              <h1 className="text-[28px] sm:text-[52px] font-extrabold">2</h1>
              <p>Describe what they will get out of your call here</p>
            </div>

            <div className="flex items-center space-x-5">
              <h1 className="text-[28px] sm:text-[52px] font-extrabold">3</h1>
              <p>Describe what they will get out of your call here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
