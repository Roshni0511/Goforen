import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const TOEFLIBT = () => {
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
                                    <p>"TOEFL IBT is version of the test that is the most widely used today. IBT stands for Internet Based Test. The entire TOEFL IBT is done on a computer and it is the first TOEFL test to have Speaking questions. It started in 2005 and replaced the CBT (Computer Based Test) which started the trend towards computer-based testing. From 1964 to 1998, the only TOEFL version available was the PBT (Paper Based Test). The PBT test is still used in some countries where computer access is not available."</p>
                                    
                                    <div class="quote"><img src="assets/img/icon/quote.png" alt=" "/></div>
                                </blockquote>
                                <div class="post-thumb">
                                    <img src="assets/img/blog/post_02.jpg" alt="" />
                                </div>
                                <div>
                               
   
                           
                                <p style={{margin:'15px 0px'}}>The parts of the TOEFL test have changed with each new version. Things like the question types, test sections, number of questions, and scoring tables have changed a lot. ETS has invested hundreds of millions of dollars in the IBT system to show their university customers that the TOEFL is an accurate measure of your English level. Your US$170 fee helps them to recover this cost.</p>
                            
                          <p style={{margin:'5px 0px 20px 0px'}}>Because the IBT version is what most of you will take, the information in this page will only cover the TOEFL IBT. This information emphasizes the current format of the IBT that has been in use since 2007. If you are lucky enough to be in a country where the PBT is still being offered, your best source of information is ETS.The TOEFL IBT test takes about 4 hours to complete. At minimum, the TOEFL IBT will last 3 hours and 10 minutes. At maximum, it will take 4 hours and 20 minutes. The length varies because the Reading section</p>
                          
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
                                    <li><a href="/IELTS"><i class="far fa-arrow-up"></i> IELTS</a></li>
                                    <li><a href="/GRE"><i class="far fa-arrow-up"></i> GRE</a></li>
                                    <li><a href="/PTE"><i class="far fa-arrow-up"></i> PTE</a></li>
                                    <li><a href="/SAT"><i class="far fa-arrow-up"></i> SAT</a></li>
                           
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

export default TOEFLIBT
