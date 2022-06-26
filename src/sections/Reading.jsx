import avatar from "../assets/avatar2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slideList = [
  {
    id: 1,
    img: avatar,
    tag1: "Plan fees",
    tag2: "News and Updates",
    title:
      "PCI Recently Featured in RPA Convergence, “RPA Plan Pricing Is in Dire Need of a Refresh”",
    name: "Denny Brown",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum cursus nec egestas massa dictumst convallis vel velit. Elit in purus, sit accumsan. Tellus iaculis risus, ullamcorper consectetur nulla. Ultrices non iaculis luctus dui sed nec eu.",
  },
  {
    id: 2,
    img: avatar,
    tag1: "Plan fees",
    tag2: "News and Updates",
    title:
      "PCI Recently Featured in RPA Convergence, “RPA Plan Pricing Is in Dire Need of a Refresh”",
    name: "Denny Brown",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum cursus nec egestas massa dictumst convallis vel velit. Elit in purus, sit accumsan. Tellus iaculis risus, ullamcorper consectetur nulla. Ultrices non iaculis luctus dui sed nec eu.",
  },
  {
    id: 3,
    img: avatar,
    tag1: "Plan fees",
    tag2: "News and Updates",
    title:
      "PCI Recently Featured in RPA Convergence, “RPA Plan Pricing Is in Dire Need of a Refresh”",
    name: "Denny Brown",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum cursus nec egestas massa dictumst convallis vel velit. Elit in purus, sit accumsan. Tellus iaculis risus, ullamcorper consectetur nulla. Ultrices non iaculis luctus dui sed nec eu.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button className="absolute -left-2" onClick={() => onClick()}>
      <FaChevronLeft fontSize={30} color={"#173C56"} />
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button className="absolute -right-2" onClick={() => onClick()}>
      <FaChevronRight fontSize={30} color={"#173C56"} />
    </button>
  );
};

const Reading = () => {
  return (
    <section className="bg-lightBlueP py-16 sm:py-20 mt-16 sm:mt-20 lg:mt-40">
      <div className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto">
        <div className="flex items-end justify-between">
          <h1 className="text-darkBlueP text-[28px] sm:text-[54px] font-extrabold ml-5 mt-8">
            Recommended Reading
          </h1>
          <a
            href="#"
            className="hidden lg:block text-blueP text-lg font-bold mb-4"
          >
            LOAD MORE INSIGHTS
          </a>
        </div>

        <div>
          <Carousel
            swipeable
            responsive={responsive}
            infinite={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            className="mt-10 py-5"
          >
            {slideList.map((item) => (
              <div key={item.id} className="bg-white p-8 mx-5 mb-2">
                <div className="flex space-x-5">
                  <p className="text-sm sm:text-base py-2 px-3 text-grayP bg-[#F2F2F2]">
                    {item.tag1}
                  </p>
                  <p className="text-sm sm:text-base py-2 px-3 text-grayP bg-[#F2F2F2]">
                    {item.tag2}
                  </p>
                </div>

                <h1 className="sm:text-3xl font-bold text-darkBlueP mt-4">
                  {item.title}
                </h1>

                <div className="flex items-center space-x-5 mt-5">
                  <img
                    src={item.img}
                    alt="person"
                    className="h-[48px] w-[48px] rounded-full"
                  />
                  <h1 className="text-sm sm:text-xl text-grayP">{item.name}</h1>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <button className="lg:hidden  py-4 px-20 w-full lg:w-auto border-2 border-blueP uppercase text-blueP text-sm sm:text-lg font-bold mt-8">
          LOAD MORE INSIGHTS
        </button>
      </div>
    </section>
  );
};

export default Reading;
