import { HiOutlineArrowRight } from "react-icons/hi";

const resultList = [
  {
    id: 1,
    result:
      "Which result can achieve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non elit ut vitae hendrerit sapien, dapibus sem.",
  },
  {
    id: 2,
    result:
      "Which result can achieve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non elit ut vitae hendrerit sapien, dapibus sem.",
  },
  {
    id: 3,
    result:
      "Which result can achieve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non elit ut vitae hendrerit sapien, dapibus sem.",
  },
  {
    id: 4,
    result:
      "Which result can achieve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non elit ut vitae hendrerit sapien, dapibus sem.",
  },
];

const Results = () => {
  return (
    <section className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto mt-16 sm:mt-20 lg:mt-40">
      <h1 className="text-darkBlueP text-[28px] sm:text-[54px] font-extrabold mt-8">
        We help you to achive real results
      </h1>
      <p className="text-sm sm:text-[28px] sm:leading-10 lg:w-[968px] text-grayP mt-6">
        Explaine here how your company help to achive real results in 1-2
        sentences... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
        non elit ut vitae hendrerit sapien, dapibus sem.
      </p>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-10 lg:mt-16">
        {resultList.map((res) => (
          <div
            key={res.id}
            className="flex space-x-8 border-2 border-gray-300 p-4 sm:p-8"
          >
            <div>
              <HiOutlineArrowRight fontSize={28} color={"#0B65AF"} />
            </div>
            <p className="text-sm sm:text-xl text-grayP">{res.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
