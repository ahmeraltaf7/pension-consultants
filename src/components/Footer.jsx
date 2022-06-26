import logo from "../assets/logo-footer.png";
import { BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { TbArrowUp } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

const companyLinks = [
  {
    id: 1,
    name: "services",
    link: "#",
  },
  {
    id: 2,
    name: "about us",
    link: "#",
  },
  {
    id: 3,
    name: "contact us",
    link: "#",
  },
  {
    id: 4,
    name: "work with us",
    link: "#",
  },
];
const insightsLinks = [
  {
    id: 1,
    name: "Free Resources",
    link: "#",
  },
  {
    id: 2,
    name: "News",
    link: "#",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="py-10 sm:py-20 bg-darkBlueP">
        <div className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-2">
            <div className="grid grid-cols-2 lg:grid-cols-none">
              <img
                src={logo}
                alt="logo"
                className="w-[128px] sm:w-auto h-[50px] sm:h-auto"
              />
              <button className="lg:hidden ml-auto">
                <TbArrowUp fontSize={35} color={"#ffff"} />
              </button>
            </div>

            <div>
              <h1 className="font-bold text-white text-[22px] sm:text-2xl">
                Company
              </h1>
              <div className="flex flex-col space-y-4 mt-6">
                {companyLinks.map((comp) => (
                  <a
                    key={comp.id}
                    href={comp.link}
                    className="sm:text-xl text-white capitalize"
                  >
                    {comp.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-bold text-white text-[22px] sm:text-2xl">
                Insights
              </h1>
              <div className="flex flex-col space-y-4 mt-6">
                {insightsLinks.map((insight) => (
                  <a
                    key={insight.id}
                    href={insight.link}
                    className="sm:text-xl text-white capitalize"
                  >
                    {insight.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="flex items-center sm:text-xl text-white">
                <BsFillTelephoneFill className="sm:text-2xl mr-5" />{" "}
                800.234.9584
              </p>
              <div className="flex sm:text-xl text-white mt-6 lg:mt-2">
                <MdLocationOn className="text-3xl lg:text-6xl mr-2" />
                <p className="lg:mt-4">
                  300 South Campbell, Springfield, MO 65806
                </p>
              </div>

              <div className="flex items-center space-x-4 mt-8 lg:ml-11">
                <a href="#" className="border border-white rounded-full p-2.5">
                  <BsTwitter fontSize={25} color={"#ffff"} />
                </a>
                <a href="#" className="border border-white rounded-full p-2.5">
                  <FaLinkedinIn fontSize={25} color={"#ffff"} />
                </a>
              </div>
            </div>

            <div className="ml-auto hidden lg:block">
              <button>
                <TbArrowUp fontSize={40} color={"#ffff"} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-black py-4">
        <div className="lg:flex items-center justify-between px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
          <p className="text-white text-xs sm:text-base">
            &copy; {new Date().getFullYear()} Pension Consultants, Inc. All
            Rights Reserved.
          </p>
          <div className="mt-3 lg:mt-0">
            <a href="#" className="text-white text-xs sm:text-base mr-8">
              Terms & Conditions
            </a>
            <a href="#" className="text-white text-xs sm:text-base">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
