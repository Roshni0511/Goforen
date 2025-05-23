import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Videos = () => {
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
        const [background12, setBackground12] = useState("");
          
            useEffect(() => {
              const backgroundUrl12 = "assets/img/bg/blog_bg.png";
              setBackground12(backgroundUrl12);
            }, []);
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}> Videos Gallery</h2>
                        <ul className="breadcrumb__list clearfix">
                            <li className="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item">Videos Gallery</li>
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
            {/* video gallery start */}


            <div>
                <div className="container">

                    <div style={{margin:'50px 0px 10px 0px',justifyContent:'center',display:'flex',fontSize:'50px'}}>
                        <h1>Our Videos</h1>
                    </div>
                    <ul id="youtube-videogallery" class="youtube-videogallery-container youtube-videogallery-allowtitle">
                        <li class="youtube-videogallery-item">
                            <a title="JAYANTI BHAI EXPERIENCE ON VISITOR VISA  (opens in a new window)" data-youtube-id="vCQalqvEexs" href="http://www.youtube.com/watch?v=vCQalqvEexs" class="youtube-videogallery-link" target="_blank">

                                <img class="youtube-videogallery-img" src="http://img.youtube.com/vi/vCQalqvEexs/0.jpg" />
                                <span class="youtube-videogallery-title">JAYANTI BHAI EXPERIENCE ON VISITOR VISA </span>
                               
                            </a>

                        </li>

                        <li class="youtube-videogallery-item">
                            <a title="Interview of Rashmiben  (visitors visa) (opens in a new window)" data-youtube-id="ohTdbKXaysE" href="http://www.youtube.com/watch?v=ohTdbKXaysE" class="youtube-videogallery-link" target="_blank">

                                <img class="youtube-videogallery-img" src="http://img.youtube.com/vi/ohTdbKXaysE/0.jpg" />
                                <span class="youtube-videogallery-title" >Interview of Rashmiben  (visitors visa)</span>
                              
                                </a></li>

                        <li class="youtube-videogallery-item"><a title="Interview of Hetvi Vaidhya (Student Visa) (opens in a new window)" data-youtube-id="suaMqm2Xm1U" href="http://www.youtube.com/watch?v=suaMqm2Xm1U" class="youtube-videogallery-link" target="_blank">

                            <img class="youtube-videogallery-img" src="http://img.youtube.com/vi/suaMqm2Xm1U/0.jpg" /><span class="youtube-videogallery-title">Interview of Hetvi Vaidhya (Student Visa)</span>
                            </a></li>
                        <li class="youtube-videogallery-item">
                            <a title="Interview of Ankit Parmar (opens in a new window)" data-youtube-id="NjO4T5enbEk" href="http://www.youtube.com/watch?v=NjO4T5enbEk" class="youtube-videogallery-link" target="_blank"><img class="youtube-videogallery-img" src="http://img.youtube.com/vi/NjO4T5enbEk/0.jpg" /><span class="youtube-videogallery-title">Interview of Ankit Parmar</span>
                            
                            </a>
                            </li>
                        <li class="youtube-videogallery-item"><a title="INTERVIEW OF AKSHIT SHAH WHO GOT STUDENT VISA FOR CANADA (opens in a new window)" data-youtube-id="WlgmpegFzgc" href="http://www.youtube.com/watch?v=WlgmpegFzgc" class="youtube-videogallery-link" target="_blank">
                            <img class="youtube-videogallery-img" src="http://img.youtube.com/vi/WlgmpegFzgc/0.jpg" />
                            <span class="youtube-videogallery-title">INTERVIEW OF AKSHIT SHAH WHO GOT STUDENT VISA FOR CANADA</span>
                            </a></li>

                        <li class="youtube-videogallery-item">
                            <a title="INTERVIEW OF AKSHIT SHAH WHO GOT STUDENT VISA FOR CANADA (opens in a new window)" data-youtube-id="JCpMolFXg5A" href="http://www.youtube.com/watch?v=JCpMolFXg5A" class="youtube-videogallery-link" target="_blank">
                                <img class="youtube-videogallery-img" src="http://img.youtube.com/vi/JCpMolFXg5A/0.jpg" />
                                <span class="youtube-videogallery-title">INTERVIEW OF AKSHIT SHAH WHO GOT STUDENT VISA FOR CANADA</span>
                              
                            </a>
                        </li>
                        <li class="youtube-videogallery-item">
                            <a title="INTERVIEW OF AKSHIT SHAH WHO GOT STUDENT VISA FOR CANADA (opens in a new window)" data-youtube-id="0jetDdQRVnw" href="http://www.youtube.com/watch?v=0jetDdQRVnw" class="youtube-videogallery-link" target="_blank">
                                <img class="youtube-videogallery-img" src="http://img.youtube.com/vi/0jetDdQRVnw/0.jpg" />
                                <span class="youtube-videogallery-title">INTERVIEW OF AKSHIT SHAH WHO GOT STUDENT VISA FOR CANADA</span>
                               
                            </a>
                        </li>
                        <li class="youtube-videogallery-item">
                            <a title="INTERVIEW OF AKSHIT SHAH WHO GOT STUDENT VISA FOR CANADA (opens in a new window)" data-youtube-id="QsdhYhuKoFg" href="http://www.youtube.com/watch?v=QsdhYhuKoFg" class="youtube-videogallery-link" target="_blank">
                                <img class="youtube-videogallery-img" src="http://img.youtube.com/vi/QsdhYhuKoFg/0.jpg" />
                                <span class="youtube-videogallery-title">INTERVIEW OF AKSHIT SHAH WHO GOT STUDENT VISA FOR CANADA</span>
                              
                            </a>
                        </li>
                        <li class="youtube-videogallery-item">
                            <a title="INTERVIEW OF VRUTANT SHETH WHO GOT STUDENT VISA FOR CANADA (opens in a new window)" data-youtube-id="WAw-J-r1LLk" href="http://www.youtube.com/watch?v=WAw-J-r1LLk" class="youtube-videogallery-link" target="_blank">
                                <img class="youtube-videogallery-img" src="http://img.youtube.com/vi/WAw-J-r1LLk/0.jpg" />
                                <span class="youtube-videogallery-title">INTERVIEW OF VRUTANT SHETH WHO GOT STUDENT VISA FOR CANADA</span>
                               
                            </a>
                        </li>
                        <li class="youtube-videogallery-item">
                            <a title="INTERVIEW OF MR. JIGAR WHO GOT STUDENT VISA FOR CANADA (opens in a new window)" data-youtube-id="-8UkXvHRJ8A" href="http://www.youtube.com/watch?v=-8UkXvHRJ8A" class="youtube-videogallery-link" target="_blank">
                                <img class="youtube-videogallery-img" src="http://img.youtube.com/vi/-8UkXvHRJ8A/0.jpg" />
                                <span class="youtube-videogallery-title">INTERVIEW OF MR. JIGAR WHO GOT STUDENT VISA FOR CANADA</span>
                                </a></li></ul>
                </div>
            </div>
            {/* video gallery end */}
  {/* working time  */}
  <div style={{background:'#edf3f5',padding:'30px 0px'}}>
  <div className="container">
        <div
          className="xb-newsletter1 pos-rel "
          style={{
            backgroundImage: `url(${background12})`,
            // minHeight: '400px',
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: "30px 0px",
          }}
        >
          <div className="row">
            <div className="col-12">
              <div>
                <div className="sec-title mb-40 text-center">
                  <h2 className="mb-20 wow skewIn">Our Working Time</h2>
                  <p style={{ textAlign: "center" }}>
                    We are available throughout the week to help you with your
                    visa and training needs.
                  </p>
                </div>

                <div className="row justify-content-center text-center">
                  <div
                    className="col-lg-3 mt-30 col-md-6"
                    style={{
                      boxShadow: " 0px 14px 19px rgb(221 229 236)",
                      padding: "20px",
                      margin: "5px",
                    }}
                  >
                    <div>
                      <h5 className="mb-2">Monday - Saturday :</h5>
                      <p style={{ textAlign: "center" }}>
                        10.00 a.m. to 6.30 p.m.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 mt-30 col-md-6"
                    style={{
                      boxShadow: "0px 14px 19px rgb(221 229 236)",
                      padding: "20px",
                      margin: "5px",
                    }}
                  >
                    <h5 className="mb-2">Sunday :</h5>
                    <p style={{ textAlign: "center" }}>
                      10.00 a.m. to 12.30 p.m.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* workingtime end  */}
            <Footer />
        </>
    )
}

export default Videos
