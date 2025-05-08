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
    <h2 className=" breadcrumb__title" style={{color:'#fff'}}>Gallery</h2>
            <ul className=" breadcrumb__list clearfix" >
              <li className=" breadcrumb-item" >
                <a href=" /" >Home</a>
              </li>
              <li className=" breadcrumb-item" >Gallery</li>
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
              <img src=" assets/img/shape/br_shape1.png"    />
            </div>
          </div>
          <div className=" shape shape--2" >
            <div className=" shape-inner"  data-parallax='{" x" :50," y" :-90}'>
              <img src=" assets/img/shape/br_shape2.png"    />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb end --> */}


      
      {/* <!-- country start --> */}
        <section className="country pt-120 pb-130">
            <div className="container">
              
                        <div className="sec-title" style={{display:'flex',justifyContent:'center',marginBottom:'30px'}}>
                            <h2 className="mb-20 wow skewIn">Our Gallery
                            </h2>
                        </div>
                    
             
           
                        <ul className="xb-country-nav nav nav-tabs d-flex justify-content-between mb-65 w-100" id="myTab" role="tablist">


                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="xbc-tab1" data-bs-toggle="tab"
                                data-bs-target="#xbc-tab-pane1" type="button" role="tab" aria-controls="xbc-tab-pane1"
                                aria-selected="true">Coaching
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="xbc-tab2" data-bs-toggle="tab" data-bs-target="#xbc-tab-pane2"
                                type="button" role="tab" aria-controls="xbc-tab-pane2" aria-selected="false">
                            succesfull
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="xbc-tab3" data-bs-toggle="tab" data-bs-target="#xbc-tab-pane3"
                                type="button" role="tab" aria-controls="xbc-tab-pane3" aria-selected="false">Advertisment
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="xbc-tab4" data-bs-toggle="tab" data-bs-target="#xbc-tab-pane4"
                                type="button" role="tab" aria-controls="xbc-tab-pane4" aria-selected="false">
                            Offer
                        </button>
                    </li>
                  
                </ul>
                <div className="tab-content" id="myTabContent">
                <div className="tab-pane animated fadeInUp show active" id="xbc-tab-pane1" role="tabpanel" aria-labelledby="xbc-tab1" tabIndex="0">
  <div className="xb-countryes">

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/g1.jpg" data-fancybox="gallery" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/g1.jpg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/g2.webp" data-fancybox="gallery" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/g2.webp')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/g3.webp" data-fancybox="gallery" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/g3.webp')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/g4.jpeg" data-fancybox="gallery" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/g4.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/g5.webp" data-fancybox="gallery" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/g5.webp')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/g6.jpeg" data-fancybox="gallery" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/g6.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/g7.jpg" data-fancybox="gallery" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/g7.jpg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/g8.jpeg" data-fancybox="gallery" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/g8.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

  </div>
</div>

<div className="tab-pane animated fadeInUp" id="xbc-tab-pane2" role="tabpanel" aria-labelledby="xbc-tab2" tabIndex="0">
  <div className="xb-countryes">

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/s1.jpeg" data-fancybox="gallery2" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/s1.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/s2.jpeg" data-fancybox="gallery2" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/s2.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/s3.jpeg" data-fancybox="gallery2" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/s3.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/s4.jpeg" data-fancybox="gallery2" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/s4.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>


  </div>
</div>

<div className="tab-pane animated fadeInUp" id="xbc-tab-pane3" role="tabpanel" aria-labelledby="xbc-tab3" tabIndex="0">
  <div className="xb-countryes">
  
    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a1.webp" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a1.webp')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a2.webp" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a2.webp')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a3.webp" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a3.webp')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a4.jpeg" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a4.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a5.webp" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a5.webp')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a6.jpg" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a6.jpg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a7.jpeg" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a7.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a8.jpeg" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a8.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a9.jpeg" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a9.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a10.jpeg" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a10.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a11.jpeg" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a11.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/a12.jpeg" data-fancybox="gallery3" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/a12.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

  </div>
</div>


<div className="tab-pane animated fadeInUp" id="xbc-tab-pane4" role="tabpanel" aria-labelledby="xbc-tab4" tabIndex="0">
  <div className="xb-countryes">

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/q1.jpeg" data-fancybox="gallery4" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/q1.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>



    <div className="xb-itemes--itemes">
      <a href="/assets/pic/q3.jpeg" data-fancybox="gallery4" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/q3.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/q4.jpeg" data-fancybox="gallery4" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/q4.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/q5.jpeg" data-fancybox="gallery4" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/q5.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/q6.jpeg" data-fancybox="gallery4" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/q6.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/q7.jpeg" data-fancybox="gallery4" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/q7.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/q8.jpeg" data-fancybox="gallery4" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/q8.jpeg')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

    <div className="xb-itemes--itemes">
      <a href="/assets/pic/q9.png" data-fancybox="gallery4" className="xb-item--inner">
        <div className="image" style={{ backgroundImage: "url('/assets/pic/q9.png')" }}>
          <div className="overlay">
            <em className="mdi mdi-magnify-plus"></em>
          </div>
        </div>
      </a>
    </div>

  </div>
</div>

                    
               
                  
                </div>
            </div>
        </section>
        {/* <!-- country end --> */}
        <Footer />
      </div>
    </>
  )
}

export default Gallary
