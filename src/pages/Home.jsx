import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

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
  
    // Add a duplicate of the first item to the end for looping
    const extendedItems = [...items, items[0]];
  
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
        <section className="hero hero__style-one bg_img"   style={{ backgroundImage: `url(${background})` }}>
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
                <div class="service-wrap pos-rel" style={{paddingTop:'40px'}}>
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
                                        <h3 class="xb-item--title mb-20"><a href="visa-single.html">NEWS</a>
                                        </h3>
                                        <div class="scroll-container" id="scrollBox">
                                        <div className="scroll-container">
                                        <div className="scroll-container">
                                        <div className="scroll-container">
      <div className="scroll-inner" ref={scrollRef}>
        {extendedItems.map((text, i) => (
          <div className="scroll-item" key={i}>
            <div className="xb-item--description">{text}</div>
          </div>
        ))}
        <button>VIEW MORE</button>
      </div>
    </div>
    </div>
    </div>
</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-30">
                            <div class="xb-service">
                                <div class="xb-item--inner">
                                    <div class="xb-item--icon color2 ">
                                        <img src="assets/img/icon/sv_02.svg" alt="" />
                                    </div>
                                    <div class="xb-item--holder">
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
</div>
      <Footer />
    </div>
  )
}
