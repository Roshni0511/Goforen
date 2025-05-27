import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

export default function SuccessStories() {
       // data-background img start
        const [background1, setBackground1] = useState("");
    
        useEffect(() => {
          const backgroundUrl1 = "assets/img/bg/tm_bg.png";
          setBackground1(backgroundUrl1);
        }, []);
        // data-background img end
  return (
    <div>
       <section
      className="testimonial bg_img pt-130 pb-130"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundColor: '#edf3f57a',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="sec-title margin-none-md mb-30-xs mb-125">
              <h2 className="mb-70 wow skewIn">
              Success Stories
              </h2>
              <p>
                Embark on a Global Exploration: <br /> Experience Joy in 190+
                Countries <br /> and Across the World
              </p>
            </div>
            <div className="xb-testimonial__nav ul_li">
              <div className="tm-nav-item tm-button-prev"></div>
              <div className="tm-nav-item tm-button-next"></div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="xb-swiper-sliders" style={{overflow:'hidden'}}>
              <Swiper
                spaceBetween={34}
                slidesPerView={2}
                loop={true}
                loopAdditionalSlides={30}
                navigation={{
                  nextEl: '.tm-button-next',
                  prevEl: '.tm-button-prev',
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                speed={400}
                breakpoints={{
                  1600: { slidesPerView: 2 },
                  1200: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 2 },
                  0: { slidesPerView: 1 },
                }}
                modules={[Navigation, Autoplay]}
                className="xb-testimonial-slider"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="xb-testimonial">
                    <div className="xb-item--inner text-center">
                      <div className="xb-item--img">
                        <img src="/assets/pic/logogo.png" alt="" style={{height:'85px'}}/>
                      </div>
                      <div className="xb-item--content" style={{color:'#fff'}}>
                      “ Very helpful and supportive staff. Had a great support from these guys during visa process. ”
                      </div>
                      <div className="xb-item--bottom">
                      <div className="xb-item--ratting" style={{ display: 'flex', gap: '4px',justifyContent:'center' }}>
  {[...Array(5)].map((_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#e38508"
    >
      <path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z"/>
    </svg>
  ))}
</div>
                        <h3 className="xb-item--title" style={{color:'#fff'}}>Mansi Bhavsar, <br/>PRV - Canada</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="xb-testimonial">
                    <div className="xb-item--inner text-center">
                      <div className="xb-item--img">
                      <img src="/assets/pic/logogo.png" alt="" style={{height:'85px'}}/>
                      </div>
                      <div className="xb-item--content" style={{color:'#fff'}}>
                      “ Had a great experience at Go Foren. Really helped me a lot to get my Canada student VISA. ”
                      </div>
                      <div className="xb-item--bottom">
                       <div className="xb-item--ratting" style={{ display: 'flex', gap: '4px',justifyContent:'center' }}>
  {[...Array(5)].map((_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#e38508"
    >
      <path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z"/>
    </svg>
  ))}
</div>
                        <h3 className="xb-item--title" style={{color:'#fff'}}>Aniket Bhavsar,<br/> Student Visa - Canada</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 3 (repeat or modify) */}
                <SwiperSlide>
                  <div className="xb-testimonial">
                    <div className="xb-item--inner text-center">
                      <div className="xb-item--img">
                      <img src="/assets/pic/logogo.png" alt="" style={{height:'85px'}}/>
                      </div>
                      <div className="xb-item--content" style={{color:'#fff'}} >
                      “ I want to thank the entire team of Go Foren for sharing vital details about visa and explaining them properly. The team has helped me with great support for getting the USA Green Card done. ”
                      </div>
                      <div className="xb-item--bottom">
                       <div className="xb-item--ratting" style={{ display: 'flex', gap: '4px',justifyContent:'center' }}>
  {[...Array(5)].map((_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#e38508"
    >
      <path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z"/>
    </svg>
  ))}
</div>
                        <h3 className="xb-item--title" style={{color:'#fff'}}>Patel P <br/> H1B Visa USA</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 {/* Slide 4 (repeat or modify) */}
                 <SwiperSlide>
                  <div className="xb-testimonial">
                    <div className="xb-item--inner text-center">
                      <div className="xb-item--img">
                      <img src="/assets/pic/logogo.png" alt="" style={{height:'85px'}}/>
                      </div>
                      <div className="xb-item--content" style={{color:'#fff'}}>
                      “ Go Foren has great coaching classes for IELTS, the faculties of which imparts detailed information necessary for getting a good score. It also has helped me get my visa. ”
                      </div>
                      <div className="xb-item--bottom">
                       <div className="xb-item--ratting" style={{ display: 'flex', gap: '4px',justifyContent:'center' }}>
  {[...Array(5)].map((_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#e38508"
    >
      <path d="M12 .587l3.668 7.568L24 9.75l-6 5.852L19.336 24 12 19.896 4.664 24 6 15.602 0 9.75l8.332-1.595z"/>
    </svg>
  ))}
</div>
                        <h3 className="xb-item--title" style={{color:'#fff'}}>Pooja D. Parekh<br/> STV UK</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
