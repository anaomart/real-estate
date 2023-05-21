import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Brand from "./components/Brand";
import Residencies from "./components/Residencies";
import OurValue from "./components/OurValue";
import ContactUs from "./components/ContactUs";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App  ">
      <Navbar />
      <div>
        <div
          className="
        absolute z-50 h-80 w-80 rounded-full bg-[rgba(255,255,255,0.522)] blur-[100px]
      "
        />

        <Hero />
      </div>
      <Brand />
      <Residencies />
      <OurValue />
      <ContactUs />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
