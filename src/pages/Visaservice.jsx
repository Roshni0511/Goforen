import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCalendarAlt, FaTags, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
const Visaservice = () => {
       const [background1, setBackground1] = useState("");
                        
                          useEffect(() => {
                            const backgroundUrl1 = "https://html.xpressbuddy.com/e.visa/assets/img/bg/b_bg.jpg";
                            setBackground1(backgroundUrl1);
                          }, []);
                          const blogs = [
                            {
                              id: 1,
                              title: "Canada’s CRS System: How It Works",
                              date: "20 Dec, 2024",
                              category: "Immigration - PR Visa",
                              country: "Canada",
                              description: "Canada’s Comprehensive Ranking System (CRS) scores Express Entry candidates...",
                              link: "/blog-detail/394",
                              tags: ["Immigration - PR Visa,Canada"],
                            },
                            {
                              id: 2,
                              title: "Canada to End LMIA Job Offer Points in Express Entry",
                              date: "20 Dec, 2024",
                              category: "Immigration - PR Visa",
                              country: "Canada",
                              description: "Canada to Stop Giving Extra Points for LMIA Job Offers in Express Entry",
                              link: "/blog-detail/395",
                              tags: ["Immigration - PR Visa,Canada"],
                            },
                          ];
  return (
    <>
    <Navbar />
       <div style={{padding:'80px 0px'}}>
        <div className="container">
            <div className="col-12">
                <div className="row">
                  
                    <div className="col-4 ">
                <div className="widget widget-banner text-center " style={{ backgroundImage: `url(${background1})`, backgroundPosition:'center center',backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100%' }}
                >
                                <img className="mb-40" src="assets/img/icon/b_icon.png" alt="" />
                                <h4>Detailed Information</h4>
                                <a className="thm-btn" href="#!">Contact Us</a>
                            </div>
                          
                    </div>
                    <div className="col-6">
                    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-box" key={blog.id}>
          <h3 className="blog-title">{blog.title}</h3>
          <div className="blog-meta">
            <span><FaCalendarAlt className="icon" /> {blog.date}</span>
            <span className="separator">|</span>
            <span><FaTags className="icon" /> {blog.category}, {blog.country}</span>
          </div>
          <div className="share-buttons">
            <button className="share fb"><FaFacebookF className="icon" /> Share</button>
            <button className="share wa"><FaWhatsapp className="icon" /> WhatsApp</button>
            <button className="share li"><FaLinkedinIn className="icon" /> Share</button>
          </div>
          <p className="blog-desc">{blog.description}</p>
          <div className="read-more-tag-row">
  <a href={blog.link} className="read-more">Read More</a>
  <div className="tags">
    {blog.tags.map((tag, i) => (
      <span className="tag" key={i}><FaTags className="icon" style={{marginRight:'6px' , color:'#ff9900'}}/>{tag}</span>
    ))}
  </div>
</div>
        </div>
      ))}
    </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <Footer />
    </>
  )
}

export default Visaservice
