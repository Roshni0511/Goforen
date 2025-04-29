import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* <!-- backtotop - start --> */}
<div className="xb-backtotop">
    <a href="#" className="scroll">
        <i className="far fa-arrow-up"></i>
    </a>
</div>
{/* <!-- backtotop - end --> */}




<div className="body_wrap">
  
{/* <!-- hero start --> */}
        <section className="hero hero__style-one bg_img" data-background="/assets/img/bg/hero_bg.jpg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="hero__content">
                            <h2 className="wow skewIn">Get a free assessment / advice</h2>
                            <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".6s">Expert Fill up a quick inquiry form / Upload your cv and we will help you out with your queries!</p>
                         
                            <div className="btns wow fadeInUp" data-wow-delay="600ms" data-wow-duration=".6s">
                                <a className="thm-btn" href="contact.html">QUICK INQUIRY</a>
                                <a className="thm-btn thm-btn--white" href="about.html">UPLOAD CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- hero end --> */}
       
        {/* <!-- visa type start --> */}
        <section class="visa type pb-135">
            <div class="container">
                <div class="service-wrap pos-rel">
                    <div class="service-img-wrap">
                        <div class="service-bg" data-background="assets/img/bg/service_bg.png"></div>
                        <div class="service-img wow skewIn" data-wow-delay="100ms"
                             data-background="assets/img/service/img_01.jpg"></div>
                    </div>
                    <div class="sec-title wow skewIn ">
                        <h2 class="mb-60">Latest News</h2>
                    </div>
                    <div class="row justify-content-md-center mt-none-30">
                        <div class="col-lg-6 col-md-6 mt-30">
                            <div class="xb-service">
                                <div class="xb-item--inner">
                                    <div class="xb-item--icon ">
                                        <img src="assets/img/icon/sv_01.svg" alt="" />
                                    </div>
                                    <div class="xb-item--holder">
                                        <h3 class="xb-item--title mb-20"><a href="visa-single.html">Tourist Visa</a>
                                        </h3>
                                        <div class="xb-item--description">
                                            Visit new places to discover with a Tourist Visa. We deliver your documents
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 mt-30">
                            <div class="xb-service">
                                <div class="xb-item--inner">
                                    <div class="xb-item--icon color2 ">
                                        <img src="assets/img/icon/sv_02.svg" alt="" />
                                    </div>
                                    <div class="xb-item--holder">
                                        <h3 class="xb-item--title mb-20"><a href="visa-single.html">Commercial
                                            Visa</a></h3>
                                        <div class="xb-item--description">
                                            Developing your trade, setting up new sales channels Your visa is ready...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                       
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- visa type end --> */}
</div>
      <Footer />
    </div>
  )
}
