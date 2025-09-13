import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from "./pages/home";
import Cars from "./pages/cars";
import About from "./pages/about";
import Admin from "./pages/admin/admin";

import "./index.css";
import "./indexpegy.css";
import Layout from "./layouts/Layouts";
import {HelmetProvider} from "react-helmet-async";
import AdminLogin from "./pages/admin/adminLogin";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/Blog/BlogPost";
import CookiePolicy from "./pages/cookie-policy";
import PrivacyPolicy from "./pages/privacypolicy";
import BookingTools from "./pages/booking-tools";
function ProtectedRoute({children}: {children: React.ReactNode}) {
  const isAdmin = sessionStorage.getItem("adminAccess") === "granted";
  return isAdmin ? children : <Navigate to="/admin/login" replace />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/booking-tools" element={<BookingTools />} />

            <Route path="About" element={<About />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
