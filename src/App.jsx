import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Brands from "./sections/Brands";
import Comments from "./sections/Comments";
import Gallery from "./sections/Gallery";
import Rule from "./sections/Rule";
import Faq from "./sections/Faq";
import Trustedbymillions from "./sections/Trustedbymillions";
import NewWay from "./sections/NewWay";
import Footer from "./sections/Footer";
import Days from "./sections/Days";
import Prizes from "./sections/Prizes";

const App = () => {
  return (
    <div className="relative h-full flex flex-col w-full items-center overflow-x-hidden">
      <div className="w-full fixed top-8 left-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <Trustedbymillions />
      <NewWay />
      <Prizes />
      <Comments />
      <Gallery />
      <Rule />
      <Faq />
      <Days />
      <Footer />
    </div>
  );
};

export default App;
