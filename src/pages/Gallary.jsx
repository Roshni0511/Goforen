import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Gallary = () => {
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
  return (
    <>
      <div>
        <Navbar />
                   {/* <!-- breadcrumb start --> */}
      <section
        className="breadcrumb pos-rel bg_img"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title">Gallary</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Gallary</li>
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
        <Footer />
      </div>
    </>
  )
}

export default Gallary
