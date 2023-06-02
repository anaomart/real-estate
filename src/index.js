import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Properties from "./components/Properties";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Search from "./components/Search";
import PropertyDetails from "./components/PropertyDetails";
import ContactUsForm from "./components/ContactUsForm";
import SearchPage from "./components/SearchPage";
import NavbarWhite from "./components/navbar/NavbarWhite";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <div className="absolute top-0 ">
          <ContactUsForm />
        </div>
        <Routes>
          <Route path="/*" element={<Navbar white={"white"} />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/searchPage/:id" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
