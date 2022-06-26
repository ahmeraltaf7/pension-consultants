import uncle from "../assets/uncle.png";
import { BsFillPlayFill } from "react-icons/bs";

const questList = [
  {
    id: 1,
    quest: "The most common question 1",
    answer:
      "Describe shortly (1 sentence) here how you help with The most common question 1",
  },
  {
    id: 2,
    quest: "The most common question 2",
    answer:
      "Describe shortly (2 sentence) here how you help with The most common question 2",
  },
  {
    id: 3,
    quest: "The most common question 3",
    answer:
      "Describe shortly (3 sentence) here how you help with The most common question 3",
  },
];

const Help = () => {
  return (
    <>
      <section className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto mt-10 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14">
          <div>
            <h1 className="text-xs sm:text-xl text-grayP font-bold">
              WE'RE HERE TO HELP YOU
            </h1>
            <h1 className="text-darkBlueP text-[28px] sm:text-[54px] leading-snug font-extrabold lg:w-[500px] mt-5">
              We will help you with
              <span className="text-blueP"> retirement planning</span> questions
            </h1>
          </div>
          <div>
            {questList.map((quest) => (
              <div key={quest.id}>
                <hr className="border border-gray-300" />
                <div className="my-4 sm:my-8">
                  <h1 className="text-[22px] sm:text-3xl font-bold text-darkBlueP">
                    {quest.quest}
                  </h1>
                  <p className="text-sm sm:text-[28px] sm:leading-10 text-grayP mt-5">
                    {quest.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-darkBlueP mt-16 sm:mt-32">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-10 xl:gap-14">
          <div className="order-last lg:order-first self-center ml-auto px-5 py-5 2xl:py-12">
            <h1 className="text-[28px] sm:text-[54px] font-extrabold leading-snug text-white sm:w-[430px]">
              Why do you need our help
            </h1>
            <p className="text-sm sm:text-[28px] sm:leading-8 text-white lg:w-[570px] mt-7">
              Explain here in 1-2 sentences why people should ask you for a
              help. Why this is important… Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Et non elit ut vitae hendrerit
              sapien, dapibus sem.
            </p>
            <button className="py-4 px-10 w-full lg:w-auto bg-blueP uppercase text-white text-sm sm:text-lg font-bold mt-12">
              let's get started
            </button>
          </div>

          <div className="relative">
            <img src={uncle} alt="uncle" className="w-full h-full" />
            <button className="p-5 border-2 border-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <BsFillPlayFill fontSize={40} color={"#ffff"} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
