import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PTE = () => {
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
            <h2 className="breadcrumb__title">PTE</h2>
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
    <div className='pt-40'>
        <div className="container">
         <div className="col-12">
            <div className="row">
                <div className="col-8">
                <blockquote>
                                    <p>"PTE test is based on real-life academic and general content. You will come across graphs, summaries, excerpts, and many more items that belong to things around you. The test also contains accents from both native and non-native speakers exactly that you hear on the television, movies, and real conversation encountered in day-to-day life."</p>
                                    
                                    <div class="quote"><img src="assets/img/icon/quote.png" alt=" "/></div>
                                </blockquote>
                                <div class="post-thumb">
                                    <img src="assets/img/blog/post_02.jpg" alt="" />
                                </div>
                                <div>
                               
   
                           
                                <p style={{margin:'20px 0px 10px'}}>Aussizz Group brings you the best way to digitally access your reading, speaking, listening, and writing skills. The three-hour test session will help you evaluate your answers thoroughly so that you can recognize the flaws and improve for the final exam.

</p>
                            
                          <p style={{margin:'2px '}}>To take the PTE test, you need to go to a secure Pearson test center where you'll be given with a computer and a headset to get on all the four modules. While speaking and writing modules are combined in one session, listening and reading have separate sections. Ranging from MCQs to essay writing, and reading out the sentences to choosing a proper word, there are twenty types of question formats.</p>
                      
            <p style={{marginBottom:'30px'}}>Upon release, it was recognized by nearly 6,000 organizations. For instance, the test is approved for use by the Australia Border Agency and the Australian Department of Immigration and Citizenship for visa</p>
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
                                    <li><a href="#!"><i class="far fa-arrow-up"></i> IELTS</a></li>
                                    <li><a href="/TOEFLIBT                                                                                                                             EM                "><i class="far fa-arrow-up"></i> TOEFL IBT</a></li>
                                    <li><a href="#!"><i class="far fa-arrow-up"></i> GRE</a></li>
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
      </div>
    </>
  )
}

export default PTE
