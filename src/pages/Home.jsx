import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Visacard from '../component/Visacard';

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
        <section class="visa type pb-135 pt-80">
          <div class="container">
            <div class="service-wrap pos-rel" style={{ paddingTop: '40px' }}>
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
                    <div class="xb-item--inner" style={{ padding: '20px 42px' }}>

                      <div
                        class="xb-item--holder"
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
                        <div class="xb-item--icon" style={{ marginBottom: '20px' }}>
                          <img src="assets/img/icon/sv_01.svg" alt="" />
                        </div>

                        {/* Title */}
                        <h3 class="xb-item--title mb-20">
                          <a href="visa-single.html">NEWS</a>
                        </h3>

                        {/* Scrollable content */}
                        <div class="scroll-container" id="scrollBox">
                          <div class="scroll-inner" ref={scrollRef}>
                            {extendedItems.map((text, i) => (
                              <div class="scroll-item" key={i}>
                                <div class="xb-item--description">{text}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Button */}
                        <div class="text-center mt-20">
                          <a href="#" class="btn" style={{ background: '#00cc99', color: '#fff' }}>
                            View All
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mt-30">
                  <div class="xb-service">
                    <div class="xb-item--inner">

                      <div
                        class="xb-item--holder"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          height: '100%', // Ensure full height usage
                        }}
                      >
                        <div class="xb-item--icon color2 " style={{ marginBottom: '20px' }}>
                          <img src="assets/img/icon/sv_02.svg" alt="" />
                        </div>

                        <h3 class="xb-item--title mb-20"><a href="visa-single.html">
                          ACTIVITIES</a></h3>
                        <div class="xb-item--description">
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
        <section class="brand  pb-90">
          <div class="container">
            <h2 class="brand-title text-center mb-50">
              <span><span>Media</span></span>
            </h2>
            <div class="xb-swiper-sliders brand-slider">
              <div class="xb-carousel-inner">
                <div class="xb-swiper-container swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                  <div class="xb-swiper-wrapper swiper-wrapper" id="swiper-wrapper-c5c7a5ce62d86f17" aria-live="off"
                   style={{transitionDuration:'0ms', transform:'translate3d(-1103px, 0px, 0px);'}}
                  >
            
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 21" style={{opacity:2, width:"184px"}}>
                    <a href="#!"><img src="assets/img/brand/img_01.png" alt="" /></a>
                  </div>

                  <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" role="group" aria-label="2 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_02.png" alt="" /></a>
                    </div>

                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" role="group" aria-label="3 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_03.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" role="group" aria-label="4 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_04.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" role="group" aria-label="5 / 21" style={{ opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_05.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" role="group" aria-label="6 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_06.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-visible" data-swiper-slide-index="6" role="group" aria-label="7 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_07.png" alt="" /></a>
                    </div>

                    <div class="swiper-slide xb-swiper-slide swiper-slide-visible" data-swiper-slide-index="0" role="group" aria-label="8 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_01.png" alt="" /></a>
                    </div>

                    <div class="swiper-slide xb-swiper-slide swiper-slide-visible swiper-slide-prev" data-swiper-slide-index="1" role="group" aria-label="9 / 21" style={{ opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_02.png" alt="" /></a>
                    </div>

                    <div class="swiper-slide xb-swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index="2" role="group" aria-label="10 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_03.png" alt="" /></a>
                    </div>

                    <div class="swiper-slide xb-swiper-slide swiper-slide-visible swiper-slide-next" data-swiper-slide-index="3" role="group" aria-label="11 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_04.png" alt="" /></a>
                    </div>

                    <div class="swiper-slide xb-swiper-slide swiper-slide-visible" data-swiper-slide-index="4" role="group" aria-label="12 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_05.png" alt="" /></a>
                    </div>

                    <div class="swiper-slide xb-swiper-slide swiper-slide-visible" data-swiper-slide-index="5" role="group" aria-label="13 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_06.png" alt="" /></a>
                    </div>

                    <div class="swiper-slide xb-swiper-slide" data-swiper-slide-index="6" role="group" aria-label="14 / 21" style={{opacity:2, width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_07.png" alt="" /></a>
                    </div>

                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="15 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_01.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" role="group" aria-label="16 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_02.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" role="group" aria-label="17 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_03.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" role="group" aria-label="18 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_04.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" role="group" aria-label="19 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_05.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5" role="group" aria-label="20 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_06.png" alt="" /></a>
                    </div>
                    
                    <div class="swiper-slide xb-swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" role="group" aria-label="21 / 21" style={{opacity:2,width:"184px"}}>
                      <a href="#!"><img src="assets/img/brand/img_07.png" alt="" /></a>
                    </div>
                    </div>
                  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- brand end --> */}
        
        
      <Visacard />

      </div>
      <Footer />
    </div>
  )
}
