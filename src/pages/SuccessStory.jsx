import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const SuccessStory = () => {
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Success Stories</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Success Stories</li>
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
      {/* <!-- testimonial start --> */}
        <section className="testimonial pt-180 pb-130">
            <div className="container">
                <div className="xb-testimonial__masonry">
                    <div className="row grid mt-none-100">
                        <div className="col-lg-6 grid-item mt-100">
                            <div className="xb-testimonial3">
                                <div className="xb-item--inner">
                                    <div className="xb-item--author-info ul_li mb-40">
                                        <div className="xb-item--avatar">
                                            <img src="/assets/pic/bd3.png" alt="" />
                                        </div>
                                        <div className="xb-item--author">
                                            <h3 className="xb-item--name">RISHI MODI - STV CANADA</h3>
                                            
                                        </div>
                                    </div>
                                    <div className="xb-item--content">
                                        <p>I would like to thank Go Foren for your assistance during the student visa process for canada.</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item mt-100">
                            <div className="xb-testimonial3 style-2">
                                <div className="xb-item--inner">
                                    <div className="xb-item--author-info ul_li mb-40">
                                        <div className="xb-item--avatar">
                                            <img src="/assets/pic/bd3.png" alt="" />
                                        </div>
                                        <div className="xb-item--author">
                                            <h3 className="xb-item--name">
                                            KAIS SOYEB PATEL - STV CANADA </h3>
                                        
                                        </div>
                                    </div>
                                    <div className="xb-item--content">
                                    
                                        <p>For a long time I had a dream of studying abroad and finally it came true with the help of GOFOREN. the staff of GOFOREN have guided me through every stage of process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item mt-100">
                            <div className="xb-testimonial3 style-3">
                                <div className="xb-item--inner">
                                    <div className="xb-item--author-info ul_li mb-40">
                                        <div className="xb-item--avatar">
                                            <img src="/assets/pic/bd3.png" alt="" />
                                        </div>
                                        <div className="xb-item--author">
                                            <h3 className="xb-item--name">MUBASHARA MALBARI - STV CANADA </h3>
                                        
                                        </div>
                                    </div>
                                    <div className="xb-item--content">
                                        <p>GOFOREN has been my pillar of support through all the steps required to achieve my dreams of studying abroad. I especially thank Rajesh Sir and Vijay Sir for guiding me throughout my process from selection of courses, application of student visa.</p>
                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item mt-100">
                            <div className="xb-testimonial3 style-4">
                                <div className="xb-item--inner">
                                    <div className="xb-item--author-info ul_li mb-40">
                                        <div className="xb-item--avatar">
                                            <img src="/assets/pic/bd3.png" alt="" />
                                        </div>
                                        <div className="xb-item--author">
                                            <h3 className="xb-item--name">Tushar Javeri - TRV Europe </h3>
                                         
                                        </div>
                                    </div>
                                    <div className="xb-item--content">
                                        <p>I had a great experience at Go Foren. I thank the team for helping me in the passport as well as in my visa process.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item mt-100">
                            <div className="xb-testimonial3 style-5">
                                <div className="xb-item--inner">
                                    <div className="xb-item--author-info ul_li mb-40">
                                        <div className="xb-item--avatar">
                                            <img src="/assets/pic/bd3.png" alt="" />
                                        </div>
                                        <div className="xb-item--author">
                                            <h3 className="xb-item--name">
                                            Lesa N. Parekh - TRV(Dependent Visa) New Zealand </h3>
                                          
                                        </div>
                                    </div>
                                    <div className="xb-item--content">
                                        <p>I really thankful to you guys for guiding me properly on visa and its process. Thanks for your support and help to get it done.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item mt-100">
                            <div className="xb-testimonial3 style-6">
                                <div className="xb-item--inner">
                                    <div className="xb-item--author-info ul_li mb-40">
                                        <div className="xb-item--avatar">
                                            <img src="/assets/pic/bd3.png" alt="" />
                                        </div>
                                        <div className="xb-item--author">
                                            <h3 className="xb-item--name">Pooja D. Parekh - STV UK </h3>
                                            
                                        </div>
                                    </div>
                                    <div className="xb-item--content">
                                        <p>Go Foren has great coaching classes for IELTS, the faculties of which imparts detailed information necessary for getting a good score. It also has helped me get my visa.</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item mt-100">
                            <div className="xb-testimonial3 style-7">
                                <div className="xb-item--inner">
                                    <div className="xb-item--author-info ul_li mb-40">
                                        <div className="xb-item--avatar">
                                            <img src="/assets/pic/bd3.png" alt="" />
                                        </div>
                                        <div className="xb-item--author">
                                            <h3 className="xb-item--name">
                                            Patel P - H1B Visa USA </h3>
                                            
                                        </div>
                                    </div>
                                    <div className="xb-item--content">
                                        <p>I want to thank the entire team of Go Foren for sharing vital details about visa and explaining them properly. The team has helped me with great support for getting the USA Green Card done.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item mt-100">
                            <div className="xb-testimonial3">
                                <div className="xb-item--inner">
                                    <div className="xb-item--author-info ul_li mb-40">
                                        <div className="xb-item--avatar">
                                            <img src="/assets/pic/bd3.png" alt="" />
                                        </div>
                                        <div className="xb-item--author">
                                            <h3 className="xb-item--name">Mansi Bhavsar, PRV - Canada</h3>
                                            
                                        </div>
                                    </div>
                                    <div className="xb-item--content">
                                        <p>Very helpful and supportive staff. Had a great support from these guys during visa process.</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- testimonial end --> */}
      <Footer />
    </>
  )
}

export default SuccessStory
