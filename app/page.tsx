import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Core from "./components/Core";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Video from "./components/Video";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Core />
      <WhyChoose />
      <Video />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}
