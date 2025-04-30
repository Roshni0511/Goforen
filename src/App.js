import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div id="xb-loadding">
        <div className="loader">
          <div className="plane">
            <img className="plane-img" src="assets/img/icon/plane.gif" alt="" />
          </div>
          <div className="earth-wrapper">
            <div className="earth"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {/* <!-- backtotop - start --> */}
      <div className="xb-backtotop">
        <a href="#" className="scroll">
          <i className="far fa-arrow-up"></i>
        </a>
      </div>
      {/* <!-- backtotop - end --> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
