const stepList = [
  {
    id: 1,
    title: "Step 1 Name",
    info: "Describe step 1 in 1 - 2 short sentances. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Step 2 Name",
    info: "Describe step 1 in 1 - 2 short sentances. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Step 3 Name",
    info: "Describe step 1 in 1 - 2 short sentances. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const BecomeClient = () => {
  return (
    <section className="bg-path2 bg-right-top lg:bg-left bg-no-repeat mt-20 sm:mt-32">
      <div className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="text-darkBlueP text-[28px] sm:text-[54px] leading-snug font-extrabold lg:w-[491px] mt-5">
              <span className="text-blueP">It's easy</span> to become our client
            </h1>
            <p className="text-sm sm:text-[28px] sm:leading-10 text-grayP lg:w-[483px] mt-6">
              Explaine here in general why it-s easy to become your clirnt...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non
              elit ut vitae hendrerit sapien, dapibus sem.
            </p>
            <button className="hidden lg:block py-4 px-10 bg-blueP uppercase text-white text-lg font-bold mt-40">
              let's get started
            </button>
          </div>

          <div className="pt-10">
            {stepList.map((step) => (
              <div key={step.id}>
                <hr className="border border-gray-300" />
                <div className="grid grid-cols-12 gap-8 mb-10">
                  <div className="col-span-2">
                    <h1 className="text-[64px] sm:text-[120px] font-extrabold text-lightBlueP">
                      {step.id}
                    </h1>
                  </div>
                  <div className="col-span-10 pt-7 lg:pt-12">
                    <h1 className="text-[22px] sm:text-3xl font-bold text-darkBlueP">
                      {step.title}
                    </h1>
                    <p className="text-sm sm:text-[20px] sm:leading-8 text-grayP mt-5">
                      {step.info}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <button className="lg:hidden py-4 px-10 w-full lg:w-auto bg-blueP uppercase text-white text-sm sm:text-lg font-bold">
              let's get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeClient;
