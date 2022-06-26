import testi from "../assets/testi.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillStarFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slideList = [
  {
    id: 1,
    img: testi,
    name: "Mark Spensor",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum cursus nec egestas massa dictumst convallis vel velit. Elit in purus, sit accumsan. Tellus iaculis risus, ullamcorper consectetur nulla. Ultrices non iaculis luctus dui sed nec eu.",
  },
  {
    id: 2,
    img: testi,
    name: "Mark Spensor",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum cursus nec egestas massa dictumst convallis vel velit. Elit in purus, sit accumsan. Tellus iaculis risus, ullamcorper consectetur nulla. Ultrices non iaculis luctus dui sed nec eu.",
  },
  {
    id: 3,
    img: testi,
    name: "Mark Spensor",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum cursus nec egestas massa dictumst convallis vel velit. Elit in purus, sit accumsan. Tellus iaculis risus, ullamcorper consectetur nulla. Ultrices non iaculis luctus dui sed nec eu.",
  },
  {
    id: 4,
    img: testi,
    name: "Mark Spensor",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum cursus nec egestas massa dictumst convallis vel velit. Elit in purus, sit accumsan. Tellus iaculis risus, ullamcorper consectetur nulla. Ultrices non iaculis luctus dui sed nec eu.",
  },
  {
    id: 5,
    img: testi,
    name: "Mark Spensor",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus elementum cursus nec egestas massa dictumst convallis vel velit. Elit in purus, sit accumsan. Tellus iaculis risus, ullamcorper consectetur nulla. Ultrices non iaculis luctus dui sed nec eu.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 570 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
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

const Testimonial = () => {
  return (
    <section className="px-5 sm:px-10 xl:px-20 2xl:px-44 2xl:container 2xl:mx-auto mt-16 sm:mt-20 lg:mt-40">
      <h1 className="text-darkBlueP text-[28px] sm:text-[54px] leading-snug font-extrabold">
        What people say about us
      </h1>

      <div>
        <Carousel
          swipeable
          showDots={true}
          responsive={responsive}
          infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          className="mt-5 lg:mt-12 py-5"
        >
          {slideList.map((item) => (
            <div key={item.id} className="mx-5 mb-2">
              <div>
                <img src={item.img} alt="person" />
              </div>
              <div className="border border-gray-300 p-8">
                <div className="flex items-center space-x-2">
                  <BsFillStarFill fontSize={20} color={"#F6B215"} />
                  <BsFillStarFill fontSize={20} color={"#F6B215"} />
                  <BsFillStarFill fontSize={20} color={"#F6B215"} />
                  <BsFillStarFill fontSize={20} color={"#F6B215"} />
                  <BsFillStarFill fontSize={20} color={"#F6B215"} />
                </div>
                <h1 className="text-2xl text-grayP font-bold mt-5">
                  {item.name}
                </h1>
                <p className="text-[20px] text-grayP mt-3">{item.info}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
