import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VanillaTilt from 'vanilla-tilt'


const Gallary = () => {
     const [background, setBackground] = useState(" " );
            
              useEffect(() => {
                const backgroundUrl ="/assets/pic/breadcrumb-bg.jpg" ;
                setBackground(backgroundUrl);
              }, []);
              const [background1, setBackground1] = useState(" " );
            
              useEffect(() => {
                const backgroundUrl1 = " https://html.xpressbuddy.com/e.visa/assets/img/bg/b_bg.jpg" ;
                setBackground1(backgroundUrl1);
              }, []);
              useEffect(() => {
                AOS.init({ duration: 1000 });
              }, []);
              const tiltRefs = useRef([])

              useEffect(() => {
                AOS.init({ duration: 1200 })
            
                tiltRefs.current.forEach((ref) => {
                  if (ref) {
                    VanillaTilt.init(ref, {
                      max: 10,
                      speed: 400,
                      glare: true,
                      "max-glare": 0.3,
                    })
                  }
                })
              }, [])
              useEffect(() => {
                AOS.init({ duration: 1000 });
              }, []);
            
              const images = [
                '96-image.png', '95-image.jpg', '94-image.jpg', '93-image.JPG',
                '92-image.JPG', '91-image.jpg', '90-image.jpg', '89-image.jpg',
                '88-image.jpg', '87-image.jpg', '86-image.jpg', '85-image.jpg',
                
              ];
              
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
    <h2 className=" breadcrumb__title" style={{color:'#fff'}}>Gallary</h2>
            <ul className=" breadcrumb__list clearfix" >
              <li className=" breadcrumb-item" >
                <a href=" /" >Home</a>
              </li>
              <li className=" breadcrumb-item" >Gallary</li>
            </ul>
    </div>
  </div>
      
     
        <div className=" breadcrumb__circle" >
          <span
            className=" big" 
            data-parallax='{" y"  : 100, " scale"  : 0.1}'
          ></span>
          <span
            className=" small" 
            data-parallax='{" y"  : 100, " scale"  : 0.1}'
          ></span>
        </div>
        <div className=" breadcrumb__shape" >
          <div className=" shape shape--1" >
            <div className=" shape-inner"  data-parallax='{" x" :-50," y" :80}'>
              <img src=" assets/img/shape/br_shape1.png"  alt=" "  />
            </div>
          </div>
          <div className=" shape shape--2" >
            <div className=" shape-inner"  data-parallax='{" x" :50," y" :-90}'>
              <img src=" assets/img/shape/br_shape2.png"  alt=" "  />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}


      {/* Gallary start */}
     <div>
        <div className=" container" >
        <div className="masonry-gallery">
        {images.map((img, idx) => (
          <div className="masonry-item" data-aos="fade-up" key={idx}>
            <img
              src={`https://www.goforen.com/uploads/gallery/${img}`}
              alt={`gallery-${idx}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>


        </div>
     </div>
      {/* gallary end */}

        <Footer />
      </div>
    </>
  )
}

export default Gallary
