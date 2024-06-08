import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./utils.css";
import NavBar from "./Component/NavBar";
import SideBar from "./Component/SideBar";
import SmallSideBar from "./Component/SmallSideBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Privacy from "./Component/Privacy";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Widget from "./Component/Widget";

function App() {
  const refToComponentA = useRef(null);
  const refToComponentB = useRef(null);
  return (
    <>
      <header>
        <NavBar
          refToComponentA={refToComponentA}
          refToComponentB={refToComponentB}
        />
        <SideBar forwardedRefA={refToComponentA} />
        <SmallSideBar forwardedRefB={refToComponentB} />
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Widget />
      <Footer />
    </>
  );
}

export default App;
