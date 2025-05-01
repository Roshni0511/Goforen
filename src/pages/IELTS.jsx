import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const IELTS = () => {
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
       <Navbar />
       <div>
            {/* <!-- breadcrumb start --> */}
      <section
        className="breadcrumb pos-rel bg_img"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="breadcrumb__content">
            <h2 className="breadcrumb__title">IELTS</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">IELTS</li>
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
                                    <p>"IELTS, the international English Language Testing system, provides an assessment of language ability of candidates who need to study or train in the medium of English."</p>
                                    
                                    <div class="quote"><img src="assets/img/icon/quote.png" alt=" "/></div>
                                </blockquote>
                                <div class="post-thumb">
                                    <img src="assets/img/blog/post_02.jpg" alt="" />
                                </div>
                                <div>
                               
   
                           
                                <p style={{margin:'15px 0px'}}>IELTS is regarded as an entrance requirement by most universities in the United Kingdom, Australia, New Zealand and Canada. It is also gaining recognition among universities and other educational institutes in the United States of America.</p>
                            
                          <p style={{margin:'10px 0px'}}>In India test is held at many test centers inclusive of SURAT, which arrange test administrations according to local demand.</p>
                          <p style={{margin:'10px 0px'}}>The University of Cambridge Local Examinations Syndicate (UCLES), the British council and IDP Education Australia jointly manage the IELTS.</p>
                          <p style={{margin:'20px 0px'}}>Candidates must select either the Academic or the general Training Modules depending on the stated requirement of their sponsor or receiving institution.</p>
                                <div style={{marginBottom:'40px'}}>
                                    <button style={{padding:'10px 20px',background:'#00cc99',color:'#fff',borderRadius:'10px'}}>Read More</button>
                                </div>
                                </div>
                </div>
                <div className="col-4 mt-40">
                <div class="widget widget-banner text-center " style={{ backgroundImage: `url(${background1})`, backgroundPosition:'center center',backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100%' }}
                >
                                <img class="mb-40" src="assets/img/icon/b_icon.png" alt="" />
                                <h4>Detailed Information</h4>
                                <a class="thm-btn" href="#!">Contact Us</a>
                            </div>
                            <div className='pt-30'>
                            <div class="blog-sidebar" >

                            <div class="widget">
                                <h3 class="widget-title">Courses</h3>
                                <ul class="widget__category list-unstyled">
                                    <li><a href="#!"><i class="far fa-arrow-up"></i> TOEFL IBT</a></li>
                                    <li><a href="#!"><i class="far fa-arrow-up"></i> GRE</a></li>
                                    <li><a href="#!"><i class="far fa-arrow-up"></i> PTE</a></li>
                                    <li><a href="#!"><i class="far fa-arrow-up"></i> SAT</a></li>
                           
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
    </>
  )
}

export default IELTS
