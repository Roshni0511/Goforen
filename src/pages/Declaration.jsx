import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import SuccessStories from "../component/SuccessStories";

export default function Declaration() {
     // data-background img start
      const [background, setBackground] = useState("");
    
      useEffect(() => {
        const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
        setBackground(backgroundUrl);
      }, []);
      // data-background img end
  return (
    <div>
      <Navbar />
       {/* <!-- breadcrumb start --> */}
       <section
  className="breadcrumb pos-rel bg_img"
  style={{ 
    backgroundImage: `url(${background})`, 
    minHeight: '400px',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // black overlay with 50% opacity
    zIndex: 1
  }}></div>

  <div className="container" style={{ position: 'relative', zIndex: 2 }}>
    <div className="breadcrumb__content">
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Declaration</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Declaration</li>
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
                  DECLARATION OF ENTITY NOMENCLATURE AND REFERENCE
                  <img src="assets/img/icon/h_star.png" alt="" />
                </span>

                <p>
                This declaration ("Declaration") serves to establish the definitive nomenclature and referencing conventions pertaining to the entities associated with Rachna Academy of Career Education LLP along with its abbreviated form "RACE Group" and Visa and Immigration division known as "Goforen."
                </p>
                <p><b>1. Entity Identification:</b></p>
                <p>
                Rachna Academy of Career Education LLP is a legally registered limited liability partnership company.   
                </p>
                <p><b>2. Abbreviated Term:</b></p>
                <p>The shortened term "RACE Group" is often utilized colloquially to denote Rachna Academy of Career Education LLP. Rachna Academy of Career Education LLP encompasses a Visa and Immigration division recognized as the "Goforen”. For the sake of simplicity and consistency within this document, the Visa and Immigration division shall be denoted as "Goforen". It is also hereby clarified that, for the sake of precision and uniformity, the official and preferred nomenclature remains "Goforen."</p>
                <p><b>3. Document Referencing:</b></p>
                <p>Henceforth, throughout this document and any subsequent correspondences, communications, or references, the terms "Goforen," "RACE Group," and "Rachna Academy of Career Education LLP" shall be used interchangeably to signify the Visa and Immigration division of Rachna Academy of Career Education LLP. However, it is mandatory to consistently employ the term "Goforen" in all contexts for precision.</p>
                <p>This Declaration has been formulated to obviate any potential ambiguity, misconstruction, or misrepresentation concerning the entities and divisions enumerated herein. All involved parties, stakeholders, and relevant entities are hereby instructed to employ the term "Goforen" uniformly in all forthcoming documents, interactions, and communications to ensure accuracy and lucidity. By this Declaration, all parties concerned hereby attest to their understanding of the above stipulations regarding nomenclature and the commitment to utilize the term "Goforen" as elucidated herein.</p>
              </div>
            </div>
            
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
