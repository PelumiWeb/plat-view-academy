import Image from "next/image";
import Header from "./components/Heder";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import About from "./components/About";
import GainComponent from "./components/GainComponent";
import ProgramContent from "./components/ProgramContent";
import ProgramFormDetails from "./components/ProgramFormDetails";
import UpcomingEvent from "./components/UpcomingEvent";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Banner />
      <About />
      <GainComponent />
      <ProgramContent />
      <ProgramFormDetails />
      <UpcomingEvent />
      <WhyChoose />
      <Contact />
    </div>
  );
}
