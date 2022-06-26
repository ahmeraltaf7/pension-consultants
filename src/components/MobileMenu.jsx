import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function MobileMenu({ open, setOpen, navLinks }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-10"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-xs">
                <div className="h-full flex flex-col bg-white shadow-xl p-4 relative">
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 text-grayP cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => setOpen(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  <img src={logo} alt="logo" className="h-12 w-60 mt-2" />

                  <div className="flex flex-col space-y-3 mt-5">
                    {navLinks.map((nav) => (
                      <div key={nav.id}>
                        <a
                          href={nav.link}
                          className="text-[28px] uppercase font-bold text-darkBlueP"
                        >
                          {nav.name}
                        </a>
                        <hr />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 absolute bottom-8 left-[50%] translate-x-[-50%]">
                    <a
                      href="#"
                      className="border border-darkBlueP rounded-full p-2.5"
                    >
                      <BsTwitter fontSize={25} color={"#173C56"} />
                    </a>
                    <a
                      href="#"
                      className="border border-darkBlueP rounded-full p-2.5"
                    >
                      <FaLinkedinIn fontSize={25} color={"#173C56"} />
                    </a>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
