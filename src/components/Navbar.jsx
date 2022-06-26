import logo from "../assets/logo.png";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const navLinks = [
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
    name: "insights",
    link: "#",
  },
  {
    id: 4,
    name: "resources",
    link: "#",
  },
  {
    id: 5,
    name: "contact us",
    link: "#",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="bg-blueP py-3 text-center">
        <p className="text-xs sm:text-lg text-white">
          Click{" "}
          <a href="#" className="underline">
            here
          </a>{" "}
          to check out our latest news
        </p>
      </div>

      <nav className="py-3 sm:py-8 px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
        <div className="flex items-center justify-between space-x-10 2xl:space-x-20">
          <img
            src={logo}
            alt="logo"
            className="w-[162px] sm:w-auto h-[33px] sm:h-11 xl::h-full"
          />

          <div className="flex items-center sm:space-x-5 2xl:space-x-10">
            <div className="hidden lg:flex items-center space-x-5 2xl:space-x-10">
              {navLinks.map((nav) => (
                <a
                  key={nav.id}
                  href={nav.link}
                  className="uppercase font-bold text-darkBlueP"
                >
                  {nav.name}
                </a>
              ))}
            </div>

            <button
              className="lg:hidden mr-2"
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <FiMenu fontSize={35} color={"#173C56"} />
            </button>

            <button className="py-2.5 sm:py-3 px-3 sm:px-6 text-xs sm:text-base bg-blueP uppercase text-white">
              get started
            </button>
          </div>
        </div>

        {/* ---Mobile Menu--- */}
        <MobileMenu open={openMenu} setOpen={setOpenMenu} navLinks={navLinks} />
      </nav>
    </>
  );
};

export default Navbar;
