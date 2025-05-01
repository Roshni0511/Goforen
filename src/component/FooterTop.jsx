import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
export default function FooterTop() {

        const brandImages = [
          'img_01.png',
          'img_02.png',
          'img_03.png',
          'img_04.png',
          'img_05.png',
          'img_06.png',
          'img_07.png',
        ];
  return (
    <div>
      {/* <!-- brand start --> */}
      <section className="brand" style={{paddingTop:'130px',paddingBottom:'100px'}}>
      <div className="container mx-auto">
      <h2 class="brand-title text-center mb-50">
                    <span><span>We're proud to work with our preferred partners</span></span>
                </h2>
        <Swiper
        style={{overflow:"hidden"}}
          modules={[Autoplay]}
          slidesPerView={7}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          speed={400}
          breakpoints={{
            1600: { slidesPerView: 7 },
            1200: { slidesPerView: 6 },
            992: { slidesPerView: 5, centeredSlides: false },
            768: { slidesPerView: 4, centeredSlides: false },
            576: { slidesPerView: 3, centeredSlides: false },
            0: { slidesPerView: 2 },
          }}
        >
          {brandImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <a href="#!" style={{padding:'20px'}}>
                <img src={`/assets/img/brand/${img}`} alt={`Brand ${idx + 1}`} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
      {/* <!-- brand end --> */}

      {/* <!-- newsletter start --> */}
      <section className="newsletter">
        <div className="container">
          <div className="xb-newsletter pos-rel">
            <div className="row">
              <div className="col-lg-7">
                <div className="">
                  <div className="xb-item--holder mb-30">
                    <span>newsletter</span>
                    <h3>
                      Subscribe to the free newsletter to receive the latest{" "}
                      <br /> news & case studies!
                    </h3>
                  </div>
                  <form className="xb-item--form" action="#!">
                    <input type="text" placeholder="Your e-mail address" />
                    <button className="thm-btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="xb-newsletter__img">
              <img src="assets/img/bg/newsletter_img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- newsletter end --> */}

      {/* <!-- contact start --> */}
      <section className="contact contact-pt gray-bg">
        <div className="container">
          <div className="xb-contact pos-rel">
            <div className="row">
              <div className="col-lg-6">
                <div className="xb-item--inner">
                  <div className="xb-item--holder mb-25">
                    <span>
                      <img src="assets/img/icon/n_pad.svg" alt="" />
                      Contact Us
                    </span>
                    <h3>
                      Do you have questions or went more <br /> information?
                    </h3>
                  </div>
                  <form className="xb-item--form contact-from" action="#!">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_user.svg" alt="" />
                          </span>
                          <input type="text" placeholder="Goladria Gomez" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_mail.svg" alt="" />
                          </span>
                          <input
                            type="text"
                            placeholder="e.visa@services.com"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_select.svg" alt="" />
                          </span>
                          <select name="select" id="nice-select">
                            <option value="1">Student Visa</option>
                            <option value="2">Tourist Visa</option>
                            <option value="3">Commercial Visa</option>
                            <option value="4">Residence Visa</option>
                            <option value="4">Working Visa</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_call.svg" alt="" />
                          </span>
                          <input type="text" placeholder="+888 -8867 3333" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="xb-item--field">
                          <span>
                            <img src="assets/img/icon/c_message.svg" alt="" />
                          </span>
                          <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Write Your Message..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="thm-btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="google-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1592852423971!5m2!1sen!2sbd"></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact end --> */}
    </div>
  );
}
