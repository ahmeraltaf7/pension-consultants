import book from "../assets/book-kit.png";

const PlanningKit = () => {
  return (
    <section className="bg-lightBlueP py-20 mt-32 sm:mt-40">
      <div className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-14">
          <div>
            <img src={book} alt="book" className="-mt-36 mx-auto lg:mx-0" />
          </div>
          <div className="text-white">
            <h1 className="text-darkBlueP text-[28px] sm:text-[54px] leading-snug xl:w-[599px] font-extrabold mt-8">
              Get FREE PCI's Retirement Planning Kit
            </h1>
            <p className="text-sm sm:text-[28px] sm:leading-10 text-grayP mt-6">
              Describe here in 1-2 sentences value of this Kit, how it can be
              useful for visitors of the site… Neque enim nisl arcu sed dictum
              nascetur.
            </p>
            <button className="py-4 px-20 w-full lg:w-auto border-2 border-blueP uppercase text-blueP text-sm sm:text-lg font-bold mt-12">
              DOWNLOAD KIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanningKit;
