import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const serviceList = [
  {
    id: 1,
    icon: icon1,
    title: "Investment Management",
    info: "PCI’s Investment Management services strive to give you a comprehensive understanding of your plan’s true investment performance.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Vendor Management",
    info: "PCI’s Vendor Management services team will manage your plan’s fees, with the goal of keeping fees below average for plans of similar size.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Participant Services",
    info: "PCI’s Participant Services aim to improve the retirement readiness of your employees.",
  },
];

const Services = () => {
  return (
    <section className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto mt-16 lg:mt-40">
      <div className="grid lg:grid-cols-2 gap-10 xl:gap-14">
        <div>
          <h1 className="text-xs sm:text-xl text-grayP font-bold">
            OUR SERVICES
          </h1>
          <h1 className="text-darkBlueP text-[28px] sm:text-[56px] leading-snug font-extrabold lg:w-[348px] mt-2 sm:mt-8">
            How we can help you
          </h1>
          <p className="text-sm sm:text-[28px] sm:leading-10 text-grayP lg:w-[468px] mt-4 sm:mt-8">
            PCI offers services designed to drive performance for your
            retirement plan and give you confidence that the plan you’re
            offering is good.
          </p>
        </div>

        <div>
          {serviceList.map((service) => (
            <div key={service.id}>
              <hr className="border border-gray-300" />
              <div className="grid grid-cols-12 gap-8 my-4 sm:my-8">
                <div className="col-span-2">
                  <img src={service.icon} alt="icon" />
                </div>
                <div className="col-span-10">
                  <h1 className="text-[22px] sm:text-3xl font-bold text-darkBlueP">
                    {service.title}
                  </h1>
                  <p className="text-sm sm:text-[20px]  sm:leading-10 text-grayP my-5">
                    {service.info}
                  </p>
                  <a
                    href="#"
                    className="text-blueP text-sm sm:text-lg font-bold"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
