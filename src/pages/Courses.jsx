import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Courses = () => {
      const [background, setBackground] = useState("");
    
      useEffect(() => {
        const backgroundUrl ="/assets/pic/breadcrumb-bg.jpg";
        setBackground(backgroundUrl);
      }, []);
  return (
    <>
      <div>
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
    <h2 className="breadcrumb__title" style={{color:'#fff'}}>Courses</h2>
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
         {/* What is a visa start  */}
         <section class="about pos-rel  pt-120">
        <div class="container">
          <div class="row align-items-center mt-none-30">
            <div class="col-xl-8 col-lg-8 mt-30">
              <div class="sec-title sec-title--big style-2 mb-20">
                

                <p>
                Around 3 lakh students go abroad every year for higher education. Now, the craze for studying abroad may be taken adversely as it is brain-drain for the country, or the positive aspect for the individual may be noted.
                </p>
                <p>
                Nevertheless, the process of flying overseas to study is a tedious one. Apart from the various passport and immigration complexities, a student has to prepare for various exams to be merely eligible for getting into the college and course he/she aspires for.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 mt-30">
              <div class="xb-about-img" style={{marginTop:'1px'}}>
                <img src="/assets/pic/visa-service.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="sec-title sec-title--big style-2 mb-20">
            <p>As IELTS/TOEFL/PTE, GRE/GMAT/SAT and other options for all such exams can confuse students, to help them out, here are the top 5 international exams that are taken by students aspiring to study abroad:</p>
            <span class="sec-title--sub" style={{marginTop:'25px'}}>
              <img src="assets/img/icon/h_star.png" alt="" />
              Which exam to give for which course to study abroad?
              <img src="assets/img/icon/h_star.png" alt="" />
            </span>

            <p>
            If you are planning to study abroad, the admission process will require you to give one language exam and one standardized exam. However, depending on the country, course or college you are targeting, you may be exempt from standardized exams, but you would still be required to take one language exam to show English language proficiency. Depending on the course and college, you may also be required to provide scores of one standardized test.
            </p>

          
          
            
            <ul style={{ paddingBottom: "10px", listStyle:"none" }}>
              <li style={{ textAlign: "justify" }}>
              <span class="sec-title--sub" style={{marginTop:'25px'}}>
              <img src="assets/img/icon/h_star.png" alt="" />
              Language    exams
              <img src="assets/img/icon/h_star.png" alt="" />
            </span>
             
               <p>The language exams show your English proficiency skills. You need to give either one of the language exams to get admission to any university in an English speaking country. These are required for almost all courses; Undergraduate courses, Postgraduate courses, Certificates or Diplomas (unless mentioned).

Different countries give preference to one language exam over others. TOEFL is the preferred exam for universities at US and Canada, while it is not accepted at many colleges in UK. On the other hand, IELTS is the preferred exam for getting admission to universities at UK, Australia and New Zealand. PTE is accepted at a few colleges in US and most colleges in UK. CAE and CPE are given preference by the British universities.</p>
              </li>
              <li style={{ textAlign: "justify" }}>
              <span class="sec-title--sub"  style={{marginTop:'25px'}}>
              <img src="assets/img/icon/h_star.png" alt="" />
              Standardized     Exams
              <img src="assets/img/icon/h_star.png" alt="" />
            </span>
             
               <p>The exams required for various courses will be different. Depending on the courses of your choice, you will be required to give only one standardized test.

Here is a table describing exam requirement according to the course of your choice –</p>
              </li>
             
            </ul>
           <br />
           <div class="table-responsive">
      
<div class="table-responsive">
    <table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Courses/Programs</th>
                <th>Standardized Tests</th>
                <th>Preferred English Language Tests (by Country)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Undergraduate</th>
                <td>SAT or ACT</td>
                <td>
                    TOEFL for US, IELTS or PTE for Canada, UK, Australia, New Zealand, CAE or CPE for UK
                </td>
            </tr>
            <tr>
                <th>MBA</th>
                <td>GMAT or GRE</td>
                <td>
                    TOEFL for US, IELTS or PTE for Canada, UK, Australia, New Zealand, CAE or CPE for UK
                </td>
            </tr>
            <tr>
                <th>MS or PG Degree</th>
                <td>GRE</td>
                <td>
                    TOEFL for US, IELTS or PTE for Canada, UK, Australia, New Zealand, CAE or CPE for UK
                </td>
            </tr>
            <tr>
                <th>Certificate Course</th>
                <td>–</td>
                <td>
                    TOEFL for US, IELTS or PTE for Canada, UK, Australia, New Zealand, CAE or CPE for UK
                </td>
            </tr>
        </tbody>
    </table>
</div>

</div>

          </div>
        </div>
        <div class="about-shape">
          <div class="shape shape--1">
            <div class="shape-inner" data-parallax='{"x":-50,"y":-80}'>
              <img src="assets/img/shape/a_shape1.png" alt="" />
            </div>
          </div>
          <div class="shape shape--2" style={{ top: "70%", right: "7%" }}>
            <div class="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/a_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* What is a visa end  */}
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
                                         <a href="/IELTS">
                                         <button style={{marginTop:'15px'}}>Read More</button>
                                          </a> 
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
                                            <a href="/TOEFLIBT">  <button style={{marginTop:'15px'}}>Read More</button></a>
                                          
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
                                            <a href="/GRE"><button style={{marginTop:'15px'}}>Read More</button></a>
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
                                           <a href="/PTE"><button style={{marginTop:'15px'}}>Read More</button></a> 
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
                                           <a href="/SAT"><button style={{marginTop:'15px'}}>Read More</button></a> 
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about__img">
                <img src="/assets/pic/main (1).jpeg" alt="" />
            </div> */}
        </section>
        {/* <!-- about end --> */}
          <Footer />
      </div>
    </>
  )
}

export default Courses
