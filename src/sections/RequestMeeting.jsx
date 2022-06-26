import meeting from "../assets/meeting.png";

const RequestMeeting = () => {
  return (
    <section className="bg-darkBlueP mt-32">
      <div className="grid lg:grid-cols-2 sm:gap-10 xl:gap-14">
        <div className="order-last lg:order-first self-center ml-auto px-5 py-12 lg:py-5 2xl:py-12">
          <h1 className="text-[28px] sm:text-[54px] font-extrabold leading-snug text-white lg:w-[570px]">
            Do you need more information?
          </h1>
          <p className="text-sm sm:text-[28px] sm:leading-8 text-white lg:w-[520px] mt-7">
            You can schedule a free no-obligation consultation and we'll do our
            best to help answer your questions on a call.
          </p>
          <button className="py-4 px-10 w-full lg:w-auto bg-blueP uppercase text-white text-sm sm:text-lg font-bold mt-12">
            REQUEST A MEETING
          </button>
        </div>

        <div>
          <img src={meeting} alt="meeting" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default RequestMeeting;
