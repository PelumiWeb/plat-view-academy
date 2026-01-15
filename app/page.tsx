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
      <section id="home">
        <Hero />
      </section>

      <section id="banner">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="academy">
        <GainComponent />
      </section>

      <section id="program">
        <ProgramContent />
      </section>

      <section id="program-details">
        <ProgramFormDetails />
      </section>

      <section id="events">
        <UpcomingEvent />
      </section>

      <section id="why">
        <WhyChoose />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
