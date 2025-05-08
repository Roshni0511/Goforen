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
                    const backgroundUrl ="/assets/pic/breadcrumb-bg.jpg";
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Activities</h2>
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
    
     {/* <!-- country start --> */}
     <section className="country pt-50 pb-130">
            <div className="container">
              
                        <div className="sec-title" style={{display:'flex',justifyContent:'center',marginBottom:'30px'}}>
                            <h2 className="mb-20 wow skewIn">Our Gallary
                            </h2>
                        </div>
                    
             
           
                <ul className="xb-country-nav nav nav-tabs ul_li_between mb-65" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="xbc-tab1" data-bs-toggle="tab"
                                data-bs-target="#xbc-tab-pane1" type="button" role="tab" aria-controls="xbc-tab-pane1"
                                aria-selected="true">Coaching
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="xbc-tab2" data-bs-toggle="tab" data-bs-target="#xbc-tab-pane2"
                                type="button" role="tab" aria-controls="xbc-tab-pane2" aria-selected="false">
                            succesfull
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="xbc-tab3" data-bs-toggle="tab" data-bs-target="#xbc-tab-pane3"
                                type="button" role="tab" aria-controls="xbc-tab-pane3" aria-selected="false">Advertisment
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="xbc-tab4" data-bs-toggle="tab" data-bs-target="#xbc-tab-pane4"
                                type="button" role="tab" aria-controls="xbc-tab-pane4" aria-selected="false">
                            Offer
                        </button>
                    </li>
                  
                </ul>
                <div className="tab-content" id="myTabContent">
                <div className="tab-pane animated fadeInUp show active" id="xbc-tab-pane1" role="tabpanel"
     aria-labelledby="xbc-tab1" tabIndex="0">
    <div className="xb-country ul_li">
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/g1.jpg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/g2.webp" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/g3.webp" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/g4.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/g5.webp" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/g6.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/g7.jpg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/g8.jpeg" className="uniform-img" />
            </a>
        </div>
    </div>
</div>
<div className="tab-pane animated fadeInUp" id="xbc-tab-pane2" role="tabpanel"
     aria-labelledby="xbc-tab2" tabIndex="0">
    <div className="xb-country ul_li">
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/s1.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/s2.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/s3.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/s4.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/s5.jpeg" className="uniform-img" />
            </a>
        </div>
    </div>
</div>
<div className="tab-pane animated fadeInUp" id="xbc-tab-pane3" role="tabpanel"
     aria-labelledby="xbc-tab3" tabIndex="0">
    <div className="xb-country ul_li">
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a1.webp
                " className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a2.webp" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a3.webp" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a4.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a5.webp" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a6.jpg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a7.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a8.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a9.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a10.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a11.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/a12.jpeg" className="uniform-img" />
            </a>
        </div>
    </div>
</div>
<div className="tab-pane animated fadeInUp" id="xbc-tab-pane4" role="tabpanel"
     aria-labelledby="xbc-tab4" tabIndex="0">
    <div className="xb-country ul_li">
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/q1.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/q2.png" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/q3.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/q4.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/q5.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/q6.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/q7.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/q8.jpeg" className="uniform-img" />
            </a>
        </div>
        <div className="xb-item--item">
            <a href="" className="xb-item--inner ul_li">
                <img src="/assets/pic/q9.png" className="uniform-img" />
            </a>
        </div>
    </div>
</div>
                    
               
                  
                </div>
            </div>
        </section>
        {/* <!-- country end --> */}

      <Footer />
    </>
  )
}

export default Activities
