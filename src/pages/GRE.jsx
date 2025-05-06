import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const GRE = () => {
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>GRE</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">GRE</li>
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
    <div className='pt-40'>
        <div className="container">
         <div className="col-12">
            <div className="row">
                <div className="col-lg-8 col-md-12 mb-4">
                <blockquote>
                                    <p>"If you're planning on going to graduate school, you'll probably need to take the GRE test (or the Graduate Record Exam). It's the most commonly required admission test for grad school."</p>
                                    
                                    <div className="quote"><img src="assets/img/icon/quote.png" alt=" "/></div>
                                </blockquote>
                                <div className="post-thumb">
                                    <img src="/assets/pic/gre.jpg" alt="" />
                                </div>
                                <div>
                               
   
                           
                                <p style={{margin:'15px 0px'}}>The GRE exam is a broad assessment of your critical thinking, analytical writing, verbal reasoning, and quantitative reasoning skills - all skills developed over the course of many years. Some schools may also require you to take one or more GRE subject tests.</p>
                            
                          <p style={{margin:'2px '}}>The purpose of each GRE examination, of course, is to help graduate schools decide if you've got the right stuff for their program.</p>
                          <span className="sec-title--sub" style={{marginTop:'25px'}}>
              <img src="assets/img/icon/h_star.png" alt="" />
              Overview of the GRE test
              <img src="assets/img/icon/h_star.png" alt="" />
            </span>
            <p style={{marginBottom:'30px'}}>The GRE test is divided into three main sections. The Analytical Writing section is always presented first. The other two sections are the Verbal and Quantitative sections and they may appear in any order and may include not to be scored and research sections with questions that are being considered for use in future</p>
                                <div style={{marginBottom:'40px'}}>
                                    <button style={{padding:'10px 20px',background:'#00cc99',color:'#fff',borderRadius:'10px'}}>Read More</button>
                                </div>
                                </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-40">
                <div className="widget widget-banner text-center " style={{ backgroundImage: `url(${background1})`, backgroundPosition:'center center',backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100%' }}
                >
                                <img className="mb-40" src="assets/img/icon/b_icon.png" alt="" />
                                <h4>Detailed Information</h4>
                                <a className="thm-btn" href="#!">Contact Us</a>
                            </div>
                            <div className='pt-30'>
                            <div className="blog-sidebar" >

                            <div className="widget">
                                <h3 className="widget-title">Courses</h3>
                                <ul className="widget__category list-unstyled">
                                    <li><a href="/IELTS"><i className="far fa-arrow-up"></i> IELTS</a></li>
                                    <li><a href="/TOEFLIBT"><i className="far fa-arrow-up"></i> TOEFL IBT</a></li>
                                    <li><a href="/PTE"><i className="far fa-arrow-up"></i> PTE</a></li>
                                    <li><a href="/SAT"><i className="far fa-arrow-up"></i> SAT</a></li>
                           
                               </ul>
                            </div>
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

export default GRE
