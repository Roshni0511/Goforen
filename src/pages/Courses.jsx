import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Courses = () => {
      const [background, setBackground] = useState("");
    
      useEffect(() => {
        const backgroundUrl = "assets/img/bg/breadcrumb_bg.jpg";
        setBackground(backgroundUrl);
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
            <h2 className="breadcrumb__title">Courses</h2>
            <ul className="breadcrumb__list clearfix">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Courses</li>
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
      {/* <!-- about start --> */}
        <section className="about pos-rel pb-130 pt-80">
            <div className="container">
                <div className="sec-title mb-55">
                    <h3 className="mb-10 wow skewIn" style={{fontSize:'35px'}}>International Exam Preparation Courses</h3>
                    <p>Your one-stop coaching destination for IELTS, TOEFL, GRE, PTE, SAT & more</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-10">
                        <div className="about__content">
                            <ul className="about-list ul_li list-unstyled">
                                <li>
                                    <div className="xb-item--inner" style={{padding:'35px 25px'}}>
                                        <div className="xb-item--number">1</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">IELTS</h3>
                                            <div className="xb-item--description">
                                            IELTS, the international English Language Testing system, provides an assessment of language ability of...
                                            </div>
                                            <button style={{marginTop:'15px'}}>Read More</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner" style={{padding:'35px 25px'}}>
                                        <div className="xb-item--number color-2">2</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">TOEFL IBT</h3>
                                            <div className="xb-item--description">
                                            TOEFL IBT is version of the test that is the most widely used today. IBT stands for Internet Based Test....
                                            </div>
                                            <button style={{marginTop:'15px'}}>Read More</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner" style={{padding:'35px 25px'}}>
                                        <div className="xb-item--number color-3">3</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">GRE</h3>
                                            <div className="xb-item--description">
                                            If you're planning on going to graduate school, you'll probably need to take the GRE test...
                                            </div>
                                            <button style={{marginTop:'15px'}}>Read More</button>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner" style={{padding:'35px 25px'}}>
                                        <div className="xb-item--number color-4">4</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">PTE</h3>
                                            <div className="xb-item--description">
                                            PTE test is based on real-life academic and general content. You will come across graphs, summaries...
                                            </div>
                                            <button style={{marginTop:'15px'}}>Read More</button>
                                        </div>
                                    </div>
                                </li>
                                <li >
                                    <div className="xb-item--inner" style={{padding:'35px 25px'}}>
                                        <div className="xb-item--number color-5">5</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">SAT</h3>
                                            <div className="xb-item--description">
                                            The SAT is a standardized test widely used for college admissions in the United States. Introduced in 1926...
                                            </div>
                                            <button style={{marginTop:'15px'}}>Read More</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__img">
                <img src="assets/img/about/about_img.png" alt="" />
            </div>
        </section>
        {/* <!-- about end --> */}
          <Footer />
      </div>
    </>
  )
}

export default Courses
