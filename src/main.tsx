import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import Cars from "./pages/cars";
import About from "./pages/about";
// import Layout from "./layouts/Layout";

import "./index.css";
import "./indexpegy.css";
import Layout from "./layouts/Layouts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Cars />} />
          {/* Future Routes: */}
          <Route path="About" element={<About />} />
          {/* <Route path="rvs" element={<RVs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
