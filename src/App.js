import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  About,
  BecomeClient,
  BookInside,
  BookSession,
  ChooseUs,
  Faq,
  Help,
  Hero,
  PlanningKit,
  Reading,
  RequestMeeting,
  Results,
  Services,
  Testimonials,
} from "./sections";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Help />
      <Services />
      <BookInside />
      <ChooseUs />
      <Results />
      <PlanningKit />
      <BecomeClient />
      <RequestMeeting />
      <Testimonials />
      <Reading />
      <Faq />
      <BookSession />
      <Footer />
    </>
  );
}

export default App;
