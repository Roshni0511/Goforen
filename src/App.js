import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";




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
   <Routes>
      <Route path="/" element={<Home />}/>
   </Routes>
    </>
  );
}

export default App;
