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
import Gallary from "./pages/Gallary";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";

import Activities from "./pages/Activities";
import Visitorvisa from "./pages/Visitor-visa";
import Investorvisa from "./pages/Investor-visa";
import Workpermitvisa from "./pages/Work-permit-visa";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

import SuccessStory from "./pages/SuccessStory";
import Uploadcv from "./pages/Upload-cv";
import Inquiry_association from "./pages/Inquiry-association";
import Inquiryassociation from "./pages/Inquiry-association";
import Studentvisainquiry from "./pages/Student-visa-inquiry";
import Prvisainquiry from "./pages/Pr-visa-inquiry";
import Privacypolicy from "./pages/Privacy-policy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Declaration from "./pages/Declaration";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StarRateIcon from '@mui/icons-material/StarRate';
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
      {/* Back to Top Button start*/}
      <div
        className={`xb-backtotop ${showScroll ? "active" : ""}`}
        onClick={scrollToTop}
      >
        <button className="scroll-btn" style={{ background: '#00cc99', color: '#fff', padding: '10px 15px', borderRadius: '8px' }}>
          <i className="far fa-arrow-up"></i>
        </button>
      </div>
      {/* back to top end  */}

    <div>
        {/* phone start  */}
        <a href="tel:+917600909090">
        <button class="btn-floating phone">
          <LocalPhoneIcon />
          <span>+91 76 00 90 90 90</span>
        </button>
      </a>
      {/* phone end  */}

      {/* whatsapp start  */}
      <a href="https://api.whatsapp.com/send?phone=918511110221" target="_blank">
        <button class="btn-floating whatsapp">
          <WhatsAppIcon />
          <span>+91 8511110221</span>
        </button>
      </a>
      {/* whatsapp end  */}

      {/* email start  */}
      <a href="mailto:goforen@gmail.com" target="_blank">
        <button class="btn-floating email">
          <EmailIcon />
          <span>goforen@gmail.com</span>
        </button>
      </a>
      {/* email end  */}

       {/* facebook start  */}
       <a href="https://www.facebook.com/go.foren.3" target="_blank">
        <button class="btn-floating facebook">
          <FacebookIcon />
          <span>Facebook</span>
        </button>
      </a>
      {/* facebook end  */}

       {/* Youtube start  */}
       <a href="https://www.youtube.com/channel/UCL-fnyf8LuCfrqjbCcGLbag" target="_blank">
        <button class="btn-floating Youtube">
          <YouTubeIcon />
          <span>Youtube</span>
        </button>
      </a>
      {/* Youtube end  */}

        {/* rating start  */}
        <a href="https://search.google.com/local/writereview?placeid=ChIJldkI5_tP4DsRzytjjdBFin4" target="_blank">
        <button class="btn-floating rating">
          <StarRateIcon />
          <span>Youtube</span>
        </button>
      </a>
      {/* rating end  */}
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
        <Route path="/Gallary" element={<Gallary />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/SuccessStory" element={<SuccessStory />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/visitor" element={<Contact />} />
        <Route path="/investor" element={<Contact />} />

        <Route path="/Upload-cv" element={<Uploadcv />} />
        <Route path="/Inquiry-association" element={<Inquiryassociation />} />
        <Route path="/Student-visa-inquiry" element={<Studentvisainquiry />} />
        <Route path="/Pr-visa-inquiry" element={<Prvisainquiry />} />
        <Route path="/Privacy-policy" element={<Privacypolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/Declaration" element={<Declaration />} />
      </Routes>
    </>
  );
}

export default App;
