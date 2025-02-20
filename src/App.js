// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
// import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TicketsPage from './pages/TicketsPage';
import AmboseliTourPage from "./pages/AmboseliTourPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/AmboseliNationalPark" element={<AmboseliTourPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
