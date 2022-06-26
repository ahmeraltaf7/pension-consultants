import { Disclosure, Transition } from "@headlessui/react";

const faqList = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a risus in velit lacinia malesuada eu at quam. Vestibulum condimentum varius sapien in facilisis.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a risus in velit lacinia malesuada eu at quam. Vestibulum condimentum varius sapien in facilisis.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a risus in velit lacinia malesuada eu at quam. Vestibulum condimentum varius sapien in facilisis.",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a risus in velit lacinia malesuada eu at quam. Vestibulum condimentum varius sapien in facilisis.",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a risus in velit lacinia malesuada eu at quam. Vestibulum condimentum varius sapien in facilisis.",
  },
];

const Faq = () => {
  return (
    <section>
      <div className="py-10 sm:py-20 md:py-24">
        <div className="px-5 xl:px-16 xl:container xl:mx-auto text-grayP">
          <h1 className="hidden lg:block text-darkBlueP text-[54px] font-extrabold text-center mt-8">
            Frequently Asked Question
          </h1>
          <h1 className="lg:hidden text-darkBlueP text-[28px] font-extrabold text-center mt-8">
            FAQs
          </h1>

          {faqList.map((faq) => (
            <div
              className="grid sm:grid-cols-6 lg:grid-cols-8 p-2 mt-5"
              key={faq.id}
            >
              <div className="col-start-2 lg:col-start-3 col-span-4">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center justify-between w-full text-left pr-2 py-2 font-semibold md:text-lg focus:outline-none">
                        <h1>{faq.question}</h1>
                        <div className="text-blueP text-3xl">
                          {open ? "-" : "+"}
                        </div>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-200 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel
                          className="pt-4 pb-2 text-sm md:text-base"
                          static
                        >
                          <p>{faq.answer}</p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <hr className="mt-4 border-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
