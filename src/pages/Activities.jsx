import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Activities = () => {
     const [background, setBackground] = useState("");
                
                  useEffect(() => {
                    const backgroundUrl = "assets/img/bg/breadcrumb_bg.jpg";
                    setBackground(backgroundUrl);
                  }, []);
                  const [background1, setBackground1] = useState("");
                
                  useEffect(() => {
                    const backgroundUrl1 = "https://html.xpressbuddy.com/e.visa/assets/img/bg/b_bg.jpg";
                    setBackground1(backgroundUrl1);
                  }, []);

                  const images = [
                    'https://www.goforen.com//uploads/gallery/43-image.jpeg',
                    'https://www.goforen.com//uploads/gallery/58-image.jpeg',
                    'https://www.goforen.com//uploads/gallery/81-image.jpg',
                    'https://www.goforen.com//uploads/gallery/60-image.jpg',
                    'https://www.goforen.com//uploads/gallery/48-image.jpg',
                    'https://www.goforen.com//uploads/gallery/94-image.jpg',
                    'https://www.goforen.com//uploads/gallery/29-image.jpg',
                    'https://www.goforen.com//uploads/gallery/96-image.png'
                  ];  

  return (
    <>
      <Navbar />
            {/* <!-- breadcrumb start --> */}
            <section
        className="breadcrumb pos-rel bg_img"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title">Activities</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Activities</li>
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


      {/* section start */}
      <div>
        <div className="container">
        <blockquote style={{padding:'20px 110px'}}>
            <h2 style={{marginBottom:'15px'}}>Activities</h2>
                                    <p>CURRENTLY NO EVENTS!</p>
                                    
                                    <div class="quote"><img src="assets/img/icon/quote.png" alt=" "/></div>
                                </blockquote>
        </div>
      </div>
      {/* section end */}
      <div style={{display:'flex',justifyContent:'center'}}>
        <h3>Our Gallary</h3>
      </div>

      <div className="slider">
    <div className="slide-track">
      {[...images, ...images].map((img, index) => (
        <img key={index} src={img} alt={`slide-${index}`} className="slide" />
      ))}
    </div>
  </div>

      <Footer />
    </>
  )
}

export default Activities
