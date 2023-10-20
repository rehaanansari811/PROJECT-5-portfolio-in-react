import Home from "./components/Home";
import Header, { HeaderPhone } from "./components/Header";
import Footer from "./components/Footer";
import '../src/styles/app.scss'
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  console.log(menuOpen);
  return (
    <>
      <HeaderPhone/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer/>
      <Toaster/>
    </>
  );
}

export default App;
