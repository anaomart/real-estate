import Hero from "./components/Hero";
import "./App.css";
import Brand from "./components/Brand";
import Residencies from "./components/Residencies";
import OurValue from "./components/OurValue";
import ContactUs from "./components/ContactUs";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import { useEffect } from "react";
function App() {
  return (
    <>
      <div className="App  ">
        <div>
          <div
            className="
        pointer-events-none absolute z-30 h-80 w-80 rounded-full bg-[rgba(255,255,255,0.522)] blur-[100px]
      "
          />

          <Hero />
        </div>
        <Brand />
        <Residencies />
        <OurValue />
        <ContactUs />
        <GetStarted />
      </div>
    </>
  );
}

export default App;
