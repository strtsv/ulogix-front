import React from "react";

import Header from "../components/Header";
import Intro from "../components/Home/Intro";
import About from "../components/Home/About";
import Video from "../components/Home/Video";
import Services from "../components/Home/Services";
import Brands from "../components/Home/Brands";
import News from "../components/Home/News";
import Responsibility from "../components/Home/Responsibility";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Intro />
      <About />
      <Video />
      <Services />
      <Brands />
      <News />
      <Responsibility />
      <Footer />
    </div>
  );
};

export default Home;
