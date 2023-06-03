import Hero from "./components/MainSections/Hero";
import "./App.css";
import Brand from "./components/brand/Brand";
import Residencies from "./components/MainSections/Residencies";
import OurValue from "./components/MainSections/OurValue";
import ContactUs from "./components/contact/ContactUs";
import GetStarted from "./components/MainSections/GetStarted";

function App() {
  return (
    <>
      <div className="App  ">
        <div>
          <div
            className="pointer-events-none absolute
                          z-30 h-80 w-80 rounded-full
                          bg-[rgba(255,255,255,0.522)]
                          blur-[100px]"
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
