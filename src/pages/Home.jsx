import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Visacard from '../component/Visacard';
import SuccessStories from '../component/SuccessStories';

export default function Home() {
  const scrollRef = useRef(null);
  const itemHeight = 70;
  const [index, setIndex] = useState(0);
  // data-background img start
  const [background, setBackground] = useState("");

  useEffect(() => {
    const backgroundUrl = "/assets/img/bg/hero_bg.jpg";
    setBackground(backgroundUrl);
  }, []);
  // data-background img end

  const items = [
    "Poland Introduced e-Konsulat for Work Visa Applications in India.",
    "Australian Universities Impose Restrictions on Students from Six Indian Regions.",
    "Stay and Work in Canada: Apply for a TFWP Work Permit After PGWP Expiry.",
    "Latvia to Enforce Stricter Entry Rules for Third-Country Nationals Without Local Visa or Permit.",
    "CRS Scores Drop Sharply After Removal of Arranged Employment Points.",
    "UAE Expands Visa on Arrival for Indian Nationals.",
    "EU Urges Fast-Track of ETIAS &amp; EES to Secure Schengen Borders.",
    "Latvia to Tighten Border Rules for Third-Country Nationals Without Latvian Visa or Residence Permit.",
  ];
  const visa = [
    "Temporary Residents Can Now Apply for the Canada Child Benefit (CCB).",
    "Canada&amp;rsquo;s CRS System: How It Works.",
    "Canada to End LMIA Job Offer Points in Express Entry.",
    "New Zealand Increases Visa Fees and Charges, Introduces New Immigration Requirements&amp;quot",
    "Canada Child Benefit: Eligibility and Payment Dates for Temporary Residents.",
   
  ]

  // Add a duplicate of the first item to the end for looping
  const extendedItems = [...items, items[0]];
  const extendvisa = [...visa,visa[0]];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transition = 'top 0.5s ease-in-out';
      scrollRef.current.style.top = `-${index * itemHeight}px`;

      // Reset to start if at the cloned last item
      if (index === items.length) {
        setTimeout(() => {
          scrollRef.current.style.transition = 'none'; // disable animation
          scrollRef.current.style.top = '0px'; // reset to start
          setIndex(1); // move to second item
        }, 600); // wait until transition finishes
      }
    }
  }, [index]);
  return (
    <div>
      <Navbar />






      <div className="body_wrap">

        {/* <!-- hero start --> */}
        <section className="hero hero__style-one bg_img" style={{ backgroundImage: `url(${background})` }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="hero__content">
                  <h2 className="wow skewIn" style={{fontSize:'50px',marginBottom:'30px'}}>Get a free assessment / advice</h2>
                  <p className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration=".6s" style={{marginBottom:'50px'}}>Expert Fill up a quick inquiry form / Upload your cv and we will help you out with your queries!</p>

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
        <section className="visa type pb-135 pt-80">
          <div className="container">
            <div className="service-wrap pos-rel" style={{ paddingTop: '40px' }}>
              <div className="service-img-wrap">
                <div className="service-bg" data-background="assets/img/bg/service_bg.png"></div>
                <div className="service-img wow skewIn" data-wow-delay="100ms"
                  data-background="assets/img/service/img_01.jpg"></div>
              </div>
              <div className="sec-title wow skewIn ">
                <h2 className="mb-60">Latest News</h2>
              </div>
              <div className="row justify-content-md-center mt-none-30">
                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-service">
                    <div className="xb-item--inner" style={{ padding: '20px 42px' }}>

                      <div
                        className="xb-item--holder"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          height: '100%', // Ensure full height usage
                        }}
                      >
                        {/* Icon */}
                        <div className="xb-item--icon" style={{ marginBottom: '20px' }}>
                          <img src="assets/img/icon/sv_01.svg" alt="" />
                        </div>

                        {/* Title */}
                        <h3 className="xb-item--title mb-20">
                          <a href="visa-single.html">NEWS</a>
                        </h3>

                        {/* Scrollable content */}
                        <div className="scroll-container" id="scrollBox">
                          <div className="scroll-inner" ref={scrollRef}>
                            {extendedItems.map((text, i) => (
                              <div className="scroll-item" key={i}>
                                <div className="xb-item--description">{text}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Button */}
                        <div className="text-center mt-20">
                          <a href="#" className="btn" style={{ background: '#00cc99', color: '#fff' }}>
                            View All
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-30">
                  <div className="xb-service">
                    <div className="xb-item--inner">

                      <div
                        className="xb-item--holder"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          height: '100%', // Ensure full height usage
                        }}
                      >
                        <div className="xb-item--icon color2 " style={{ marginBottom: '20px' }}>
                          <img src="assets/img/icon/sv_02.svg" alt="" />
                        </div>

                        <h3 className="xb-item--title mb-20"><a href="visa-single.html">
                          ACTIVITIES</a></h3>
                        <div className="xb-item--description">
                          Coming Soon !
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
        {/* <!-- brand start --> */}
        <section className="brand  pb-90">
          <div className="container">
            <h2 className="brand-title text-center mb-50">
              <span><span>Media</span></span>
            </h2>
            <div className="xb-swiper-sliders brand-slider">
              <div className="xb-carousel-inner">
                <div className="xb-swiper-container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                  <div className="xb-swiper-wrapper swiper-wrapper" id="swiper-wrapper-c5c7a5ce62d86f17" aria-live="off"
                   style={{transitionDuration:'0ms', transform:'translate3d(-1103px, 0px, 0px);'}}
                  >
            
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 21" style={{opacity:2, width:"184px"}}>
                    <a href="#!"><img src="assets/img/brand/img_01.png" alt="" /></a>
                  </div>

                  <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" role="group" aria-label="2 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_02.png" alt="" /></a>
                    </div>

                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" role="group" aria-label="3 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_03.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" role="group" aria-label="4 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_04.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" role="group" aria-label="5 / 21" style={{ opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_05.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" role="group" aria-label="6 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_06.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-visible" data-swiper-slide-index="6" role="group" aria-label="7 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_07.png" alt="" /></a>
                    </div>

                    <div className="swiper-slide xb-swiper-slide swiper-slide-visible" data-swiper-slide-index="0" role="group" aria-label="8 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_01.png" alt="" /></a>
                    </div>

                    <div className="swiper-slide xb-swiper-slide swiper-slide-visible swiper-slide-prev" data-swiper-slide-index="1" role="group" aria-label="9 / 21" style={{ opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_02.png" alt="" /></a>
                    </div>

                    <div className="swiper-slide xb-swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index="2" role="group" aria-label="10 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_03.png" alt="" /></a>
                    </div>

                    <div className="swiper-slide xb-swiper-slide swiper-slide-visible swiper-slide-next" data-swiper-slide-index="3" role="group" aria-label="11 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_04.png" alt="" /></a>
                    </div>

                    <div className="swiper-slide xb-swiper-slide swiper-slide-visible" data-swiper-slide-index="4" role="group" aria-label="12 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_05.png" alt="" /></a>
                    </div>

                    <div className="swiper-slide xb-swiper-slide swiper-slide-visible" data-swiper-slide-index="5" role="group" aria-label="13 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_06.png" alt="" /></a>
                    </div>

                    <div className="swiper-slide xb-swiper-slide" data-swiper-slide-index="6" role="group" aria-label="14 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_07.png" alt="" /></a>
                    </div>

                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="15 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_01.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" role="group" aria-label="16 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_02.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" role="group" aria-label="17 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_03.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" role="group" aria-label="18 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_04.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" role="group" aria-label="19 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_05.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" role="group" aria-label="20 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_06.png" alt="" /></a>
                    </div>
                    
                    <div className="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" role="group" aria-label="21 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_07.png" alt="" /></a>
                    </div>
                    </div>
                  <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- brand end --> */}
        
        
      <Visacard />

      {/* <!-- blog start --> */}
        <section className="blog pb-130">
            <div className="container">
                <div className="blog-wrap">
                    <div className="sec-title mb-60 text-center">
                        <h2 className="mb-30 wow skewIn">Why Us</h2>
                        <p>GO FOREN provides service in the area of immigration/ PR visa, Student visa, visitor visa and entrepreneur / business visa. The immigration segment (a core specialisation) provides end to end support to clients/aspirants who aspire to work and settle in a new prospective country. The support by us is provided not just at the initial stages of counselling, evaluation, application and subsequent immigration, but also extends to air ticketing services, foreign exchange services, and even go far as to provide accommodation in new destination, travel insurance, arrange for a transfer from the airport of the new country within a short period of successful launching of its overseas segment.</p>
                   
                    </div>
                    <div className="row justify-content-md-center mt-none-30">
                    <div className="col-lg-4 col-md-6 mt-30 d-flex">

                    <div className="xb-blog w-100 d-flex flex-column">

                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <img src="assets/img/blog/img_01.jpg" alt="" />
                                    </div>
                                    <div className="xb-item--holder">
                                        
                                        <h3 className="xb-item--title border-effect" style={{display:'flex',textAlign:'center'}}><a href="blog-single.html" >Immigration - PR Visa</a></h3>
                                        <p style={{marginBottom:'20px'}}>Any foreign national who wishes to relocate to any other country, on a permanent basis need an immigration visa or in general terms called a PR (permanent residency) of a particular country.</p>
                                        <a className="xb-item--link " href="blog-single.html" style={{color:'#000',fontSize:'20px',}}>Read the article<span><img
                                                src="assets/img/icon/right_arrow.svg" alt="" /></span></a>
                                    </div>
                                    <a className="xb-overlay xb-overlay-link" href="blog-single.html"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30 d-flex">

                        <div className="xb-blog w-100 d-flex flex-column">

                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <a href="blog-single.html"><img src="assets/img/blog/img_02.jpg" alt="" /></a>
                                    </div>
                                    <div className="xb-item--holder">
                                       
                                        <h3 className="xb-item--title border-effect"  style={{display:'flex',textAlign:'center'}}><a href="blog-single.html" >Student Visa.</a></h3>
                                        <p style={{marginBottom:'20px'}}>
                                        Most countries will issue student visas in order to allow foreign students to attend school within their borders. However, in most cases the student must be enrolled at a postsecondary institution of higher learning. Foreign exchange students must..
                                        </p>
                                        <a className="xb-item--link" href="blog-single.html" style={{color:'#000',fontSize:'20px',}}>Read the article<span><img
                                                src="assets/img/icon/right_arrow.svg" alt="" /></span></a>
                                    </div>
                                    <a className="xb-overlay xb-overlay-link" href="blog-single.html"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-30 d-flex">

                        <div className="xb-blog w-100 d-flex flex-column">

                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <a href="blog-single.html"><img src="assets/img/blog/img_03.jpg" alt="" /></a>
                                    </div>
                                    <div className="xb-item--holder">
                                       
                                        <h3 className="xb-item--title border-effect"  style={{display:'flex',textAlign:'center'}}><a href="blog-single.html" >Visitor Visa</a></h3>
                                        <p style={{marginBottom:'20px'}} >
                                        Tourist/Visitors visas are conditional authorization granted by a country to foreigners to enter and temporarily remain within that country. Visas typically include limits on the duration of the foreigner's stay, territory within the country they...
                                        </p>
                                        <a className="xb-item--link" href="blog-single.html" style={{color:'#000',fontSize:'20px',}}>Read the article<span><img
                                                src="assets/img/icon/right_arrow.svg" alt="" /></span></a>
                                    </div>
                                    <a className="xb-overlay xb-overlay-link" href="blog-single.html"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xb-blog-bg" data-bg-color="#EDF3F5" data-background="assets/img/bg/blog_bg.png"></div>
                </div>
            </div>
        </section>
        {/* <!-- blog end --> */}

        <SuccessStories />

      </div>
      <Footer />
    </div>
  )
}
