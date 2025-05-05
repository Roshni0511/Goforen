import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import SuccessStories from "../component/SuccessStories";

export default function Privacypolicy() {
     // data-background img start
      const [background, setBackground] = useState("");
    
      useEffect(() => {
        const backgroundUrl = "assets/img/bg/breadcrumb_bg.jpg";
        setBackground(backgroundUrl);
      }, []);
      // data-background img end
  return (
    <div>
      <Navbar />
       {/* <!-- breadcrumb start --> */}
       <section
        className="breadcrumb pos-rel bg_img"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title">Privacy policy</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Privacy policy</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb__circle">
          <span
            className="big"
            data-parallax='{"y" : 100, "scale" : 0.1}'
          ></span>
          <span
            className="small"
            data-parallax='{"y" : 100, "scale" : 0.1}'
          ></span>
        </div>
        <div className="breadcrumb__shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
              <img src="assets/img/shape/br_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2">
            <div className="shape-inner" data-parallax='{"x":50,"y":-90}'>
              <img src="assets/img/shape/br_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}

      {/* What is a visa start  */}
      <section className="about pos-rel  pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center mt-none-30">
            <div className="col-12 mt-30">
              <div className="sec-title sec-title--big style-2 mb-20">
                <span className="wow skewIn sec-title--sub">
                  <img src="assets/img/icon/h_star.png" alt="" />
                  Privacy Policy of Goforen
                  <img src="assets/img/icon/h_star.png" alt="" />
                </span>

                <p>
                This privacy policy sets out how Goforen (visa and immigration division) uses and protects any information that you give Goforen when you use this website. To retain the Privacy of our customers & website visitors is our highest priority. Our relationship with you is very precious & we realize the value of the information that you share with us.
                </p>
                <p>
                Goforen is committed to ensuring that your privacy is thoroughly protected. Under no circumstances will we try to sell, disclose or rent to third parties, your personal information collected at our website. We will merely use it to provide our services as outlined in this privacy policy.
                </p>
                <p>Goforen is committed to ensuring that your privacy is thoroughly protected. Under no circumstances will we try to sell, disclose or rent to third parties, your personal information collected at our website. We will merely use it to provide our services as outlined in this privacy policy.</p>
              </div>
            </div>
            
          </div>
          <div className="sec-title sec-title--big style-2 mb-20">
            <span className="wow skewIn sec-title--sub">
              <img src="assets/img/icon/h_star.png" alt="" />
              Links to other websites
              <img src="assets/img/icon/h_star.png" alt="" />
            </span>

            <p>
            Goforen website may contain links to other sites occasionally, which you will be using at your sole discretion. We will not be responsible for the protection and privacy of any information which you provide while visiting such sites and as they are not governed by our privacy statement.
            </p>

            <p>Goforen reserves the right to make changes to any information contained on the website at any time whatsoever, and without notice or limitation of any kind, including, but not limited to, information relating to countries, courses, and other related information.</p>
            <p>The information contained or displayed on the website of Goforen is for general information purposes only. While we make an effort to keep the information up to date and correct, we give no guarantee of any kind, about the accuracy, reliability, suitability, availability or completeness, of the data.</p>
            <p>Through this website, you may link to other websites which are not under the control of Goforen. We do not have control over those sites, and the inclusion of any links does not necessarily entail a recommendation or endorsement for those sites in any way.</p>
            <p>Our Privacy Policy and the Terms and Conditions may change from time to time. Clients should check our website frequently to see any recent changes. Our current Privacy Policy applies to all information that we have about you and your account, unless stated otherwise.</p>
          </div>
        </div>
        <div className="about-shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
              <img src="assets/img/shape/a_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2" style={{ top: "70%", right: "7%" }}>
            <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/a_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* What is a visa end  */}

      <SuccessStories />

      <Footer />
    </div>
  )
}
