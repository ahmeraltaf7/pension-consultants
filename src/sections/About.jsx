const About = () => {
  return (
    <>
      <section className="mt-20 md:mt-44 px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-10 xl:gap-14">
          <h1 className="text-darkBlueP text-[28px] sm:text-[54px] font-extrabold">
            Who we are?
          </h1>
          <div>
            <p className="text-sm sm:text-[28px] sm:leading-10 text-grayP">
              PCI is your retirement plan adviser and partner in ensuring your
              employees retire on time, with dignity.
            </p>
            <p className="text-sm sm:text-[28px] sm:leading-10 text-grayP mt-5 sm:mt-8">
              Unlike other plan advisers, as your assets grow, our fees don’t.
              Our unique fee structure builds accountability directly into our
              relationships - if our plans don't perform, you don’t pay.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dots bg-no-repeat py-10 sm:py-52 px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
        <div className="grid grid-cols-3 gap-5 sm:gap-20 text-darkBlueP text-center">
          <div>
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-extrabold">
              $5B
            </h1>
            <p className="text-sm sm:text-2xl lg:text-3xl font-bold mt-8">
              In Managed Assets
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-extrabold">
              28+
            </h1>
            <p className="text-sm sm:text-2xl lg:text-3xl font-bold mt-8">
              Years Of Service
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-extrabold">
              70K
            </h1>
            <p className="text-sm sm:text-2xl lg:text-3xl font-bold mt-8">
              People Helped To Retire
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-extrabold">
              $20M
            </h1>
            <p className="text-sm sm:text-2xl lg:text-3xl font-bold mt-8">
              Added Value To Client Investments
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-extrabold">
              90%+
            </h1>
            <p className="text-sm sm:text-2xl lg:text-3xl font-bold mt-8">
              Client Retention Rate Across Plans
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-extrabold">
              $2M
            </h1>
            <p className="text-sm sm:text-2xl lg:text-3xl font-bold mt-8">
              In Fees Saved Compared To Others
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
