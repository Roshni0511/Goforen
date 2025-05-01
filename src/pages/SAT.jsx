import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const SAT = () => {
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
        <div>
            {/* <!-- breadcrumb start --> */}
      <section
        className="breadcrumb pos-rel bg_img"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title">SAT</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">SAT</li>
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
                <div className="col-8">
                <blockquote>
                                    <p>"The SAT is a standardized test widely used for college admissions in the United States. Introduced in 1926, its name and scoring have changed several times; originally called the Scholastic Aptitude Test, it was later called the Scholastic Assessment Test, then the SAT I: Reasoning Test, then the SAT Reasoning Test, and now, simply the SAT."</p>
                                    
                                    <div className="quote"><img src="assets/img/icon/quote.png" alt=" "/></div>
                                </blockquote>
                                <div className="post-thumb">
                                    <img src="assets/img/blog/post_02.jpg" alt="" />
                                </div>
                                <div>
                               
   
                           
                                <p style={{margin:'20px 0px 10px'}}>The SAT is owned, developed, and published by the College Board, a private, non-profit organization in the United States. It is administered on behalf of the College Board by the Education Testing Service, which until recently developed the SAT as well. The test is intended to assess students' readiness for college. The SAT was originally designed not to be aligned with high school curricula, but several adjustments were made for the version of the SAT introduced in 2016, and College Board president, David Coleman, has said that he also wanted to make the test reflect more closely what students learned in high school.

</p>
                            
                          <p style={{margin:'2px '}}>SAT is a standardized test administered by the College Board and is required to be taken by students seeking admission in undergraduate schools. SAT exam has been developed to evaluate the written, verbal and mathematical skills of the candidates.</p>
                      
            
                                <div style={{marginBottom:'40px'}}>
                                    <button style={{padding:'10px 20px',background:'#00cc99',color:'#fff',borderRadius:'10px'}}>Read More</button>
                                </div>
                                </div>
                </div>
                <div className="col-4 mt-40">
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
                                    <li><a href="/TOEFLIBT "><i className="far fa-arrow-up"></i> TOEFL IBT</a></li>
                                    <li><a href="/GRE"><i className="far fa-arrow-up"></i> GRE</a></li>
                                    <li><a href="/PTE"><i className="far fa-arrow-up"></i> PTE</a></li>
                           
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

export default SAT
