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
         <section className="about pos-rel  pt-120">
        <div className="container">
          
          <div className="sec-title sec-title--big style-2 mb-20">
       
              <h3 style={{marginBottom:'15px'}}>    Which exam to give for which course to study abroad?</h3>
          
            
      

            <p style={{marginBottom:'30px'}}> 
            If you are planning to study abroad, the admission process will require you to give one language exam and one standardized exam. However, depending on the country, course or college you are targeting, you may be exempt from standardized exams, but you would still be required to take one language exam to show English language proficiency. Depending on the course and college, you may also be required to provide scores of one standardized test.
            </p>

          
          
            
            <ul style={{ paddingBottom: "10px", listStyle:"none" }}>
              <li style={{ textAlign: "justify" }}>
       
           
              <h3 style={{marginBottom:'15px'}}>
              Language    exams
              </h3>
        
         
             
               <p>The language exams show your English proficiency skills. You need to give either one of the language exams to get admission to any university in an English speaking country. These are required for almost all courses; Undergraduate courses, Postgraduate courses, Certificates or Diplomas (unless mentioned).

Different countries give preference to one language exam over others. TOEFL is the preferred exam for universities at US and Canada, while it is not accepted at many colleges in UK. On the other hand, IELTS is the preferred exam for getting admission to universities at UK, Australia and New Zealand. PTE is accepted at a few colleges in US and most colleges in UK. CAE and CPE are given preference by the British universities.</p>
              </li>




              {/* <!-- visa type start --> */}
        <section className="visa-type pt-120 pb-135">
            <div className="container">
                <div className="sec-title text-center mb-60">
                    <h2 className="wow skewIn">Couses </h2> <br />
                  <p style={{justifyContent:'center',display:'flex',marginTop:'15px'}}>"Explore a wide range of career-focused courses tailored to help you qualify for your desired visa destination."</p>
                </div>
                <div className="row justify-content-md-center mt-none-30">
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="xb-service">
                            <div className="xb-item--inner">
                                <div className="xb-item--icon mb-50">
                                    <img src="assets/img/icon/sv_01.svg" alt="" />
                                </div>
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title mb-20"><a href="/IELTS"> IELTS</a>
                                    </h3>
                                    <div className="xb-item--description">
                                    Prepare for the globally recognized IELTS exam to enhance your chances of studying or migrating abroad.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="xb-service">
                            <div className="xb-item--inner">
                                <div className="xb-item--icon color2 mb-50">
                                    <img src="assets/img/icon/sv_02.svg" alt=" "  />
                                </div>
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title mb-20"><a href="/TOEFLIBT">
                                        TOEFL IBT</a></h3>
                                    <div className="xb-item--description">
                                    Boost your English proficiency with TOEFL iBT, accepted by universities and immigration bodies worldwide.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="xb-service">
                            <div className="xb-item--inner">
                                <div className="xb-item--icon color6 mb-50">
                                    <img src="assets/img/icon/sv_02.svg" alt="" />
                                </div>
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title mb-20"><a href="/GRE"> GRE</a></h3>
                                    <div className="xb-item--description">
                                    Achieve your academic and career goals with the GRE – a powerful gateway essential for graduate admissions globally.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="xb-service">
                            <div className="xb-item--inner">
                                <div className="xb-item--icon color3 mb-50">
                                    <img src="assets/img/icon/sv_03.svg" alt="" />
                                </div>
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title mb-20"><a href="/PTE"> PTE</a>
                                    </h3>
                                    <div className="xb-item--description">
                                    Get fast, reliable results with PTE Academic — ideal for study, work, or migration.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-30">
                        <div className="xb-service">
                            <div className="xb-item--inner">
                                <div className="xb-item--icon color4 mb-50">
                                    <img src="assets/img/icon/sv_04.svg" alt="" />
                                </div>
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title mb-20"><a href="/SAT">
                                        SAT</a></h3>
                                    <div className="xb-item--description">
                                    Open doors to top  universities with strong SAT scores designed for undergraduate programs.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
        {/* <!-- visa type end --> */}








              <li style={{ textAlign: "justify" }}>
              <span className="sec-title--sub"  style={{marginTop:'25px'}}>
 <img src="assets/img/icon/h_star.png" alt="" />
              Standardized     Exams
              <img src="assets/img/icon/h_star.png" alt="" />
            </span>
             
               <p>The exams required for various courses will be different. Depending on the courses of your choice, you will be required to give only one standardized test.

Here is a table describing exam requirement according to the course of your choice –</p>
              </li>
             
            </ul>
           <br />
           <div className="table-responsive">
      
<div className="table-responsive">
    <table className="table table-bordered">
        <thead className="thead-light">
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
        <div className="about-shape">
          <div className="shape shape--1">
            <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
              <img src="assets/img/shape/a_shape1.png" alt="" />
            </div>
          </div>
          <div className="shape shape--2" style={{ top: "70%", right: "7%" }}>
            <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
              <img src="assets/img/shape/a_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* What is a visa end  */}
  
          <Footer />
      </div>
    </>
  )
}

export default Courses
