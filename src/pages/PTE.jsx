import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PTE = () => {
      const [background, setBackground] = useState("");
                    
                      useEffect(() => {
                        const backgroundUrl = "/assets/pic/breadcrumb-bg.jpg";
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
        <div>
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>PTE</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">PTE</li>
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
      {/* new content start */}
   {/* new content start */}
<div className="pt-40">
  <div className="container">
    <div className="row">
      {/* Left Column */}
      <div className="col-lg-8 col-md-12 mb-4">
        <blockquote>
          <p>
            "PTE test is based on real-life academic and general content. You
            will come across graphs, summaries, excerpts, and many more items
            that belong to things around you. The test also contains accents from
            both native and non-native speakers exactly that you hear on the
            television, movies, and real conversation encountered in day-to-day
            life."
          </p>
          <div className="quote">
            <img src="assets/img/icon/quote.png" alt=" " />
          </div>
        </blockquote>

        <div className="post-thumb mb-4">
          <img src="/assets/pic/pte.jpg" alt="" className="img-fluid" />
        </div>

        <div>
          <p style={{ margin: "20px 0px 10px" }}>
            Aussizz Group brings you the best way to digitally access your
            reading, speaking, listening, and writing skills...
          </p>

          <p style={{ margin: "2px" }}>
            To take the PTE test, you need to go to a secure Pearson test center
            where you'll be given with a computer and a headset...
          </p>

          <p style={{ marginBottom: "30px" }}>
            Upon release, it was recognized by nearly 6,000 organizations...
          </p>

          <div style={{ marginBottom: "40px" }}>
            <button
              style={{
                padding: "10px 20px",
                background: "#00cc99",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Right Column (Sidebar) */}
      <div className="col-lg-4 col-md-12 mt-40">
        <div
          className="widget widget-banner text-center mb-4"
          style={{
            backgroundImage: `url(${background1})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <img className="mb-4" src="assets/img/icon/b_icon.png" alt="" />
          <h4>Detailed Information</h4>
          <a className="thm-btn" href="#!">
            Contact Us
          </a>
        </div>

        <div className="pt-3">
          <div className="blog-sidebar">
            <div className="widget">
              <h3 className="widget-title">Courses</h3>
              <ul className="widget__category list-unstyled">
                <li>
                  <a href="/IELTS">
                    <i className="far fa-arrow-up"></i> IELTS
                  </a>
                </li>
                <li>
                  <a href="/TOEFLIBT">
                    <i className="far fa-arrow-up"></i> TOEFL IBT
                  </a>
                </li>
                <li>
                  <a href="/GRE">
                    <i className="far fa-arrow-up"></i> GRE
                  </a>
                </li>
                <li>
                  <a href="/SAT">
                    <i className="far fa-arrow-up"></i> SAT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   {/* new content end */}
       </div>
        <Footer />
      </div>
    </>
  )
}

export default PTE
