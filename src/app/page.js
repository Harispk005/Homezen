import Middleview from "./Components/Middleview";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Service from "./Components/Service";
import Howitworks from "./Components/Howitworks";
import Contact from "./Components/Conatct";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F2EFE7]">
      <Navbar />
      <Middleview />
      <Service />
      <Howitworks />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}
