import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Aboutusrace from "./pages/About-us-race";
import Aboutfounder from "./pages/About-founder";
import Visaservices from "./pages/Visa-services";
import Courses from "./pages/Courses";
import Immigrationprvisa from "./pages/Immigration-pr-visa";
import IELTS from "./pages/IELTS";
import TOEFLIBT from "./pages/TOEFLIBT";
import GRE from "./pages/GRE";
import PTE from "./pages/PTE";
import SAT from "./pages/SAT";
import Studentvisa from "./pages/Student-visa";
import Visitorvisa from "./pages/Visitor-visa";
import Investorvisa from "./pages/Investor-visa";
import Workpermitvisa from "./pages/Work-permit-visa";
function App() {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  // Loading screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (loading) {
    return (
      <div id="xb-loadding">
        <div className="loader">
          <div className="plane">
            <img className="plane-img" src="assets/img/icon/plane.gif" alt="" />
          </div>
          <div className="earth-wrapper">
            <div className="earth"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Back to Top Button */}
      <div
        className={`xb-backtotop ${showScroll ? "active" : ""}`}
        onClick={scrollToTop}
      >
        <button className="scroll-btn" style={{background:'#00cc99' ,color:'#fff',padding:'10px 15px',borderRadius:'8px'}}>
          <i className="far fa-arrow-up"></i>
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/About-us-race" element={<Aboutusrace />} />
        <Route path="/About-founder" element={<Aboutfounder />} />
        <Route path="/Visa-services" element={<Visaservices />} />
        <Route path="/Immigration-pr-visa" element={<Immigrationprvisa />} />
        <Route path="/Student-visa" element={<Studentvisa />} />
        <Route path="/Visitor-visa" element={<Visitorvisa />} />
        <Route path="/Investor-visa" element={<Investorvisa />} />
        <Route path="/Work-permit-visa" element={<Workpermitvisa />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/IELTS" element={<IELTS />} />
        
        <Route path="/TOEFLIBT" element={<TOEFLIBT />} />
        <Route path="/GRE" element={<GRE />} />
        <Route path="/PTE" element={<PTE />} />
        <Route path="/SAT" element={<SAT />} />
      </Routes>
    </>
  );
}

export default App;
