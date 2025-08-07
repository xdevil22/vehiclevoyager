import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Cars from "./pages/cars";
import About from "./pages/about";
import Admin from "./pages/admin/admin";

import "./index.css";
import "./indexpegy.css";
import Layout from "./layouts/Layouts";
import { HelmetProvider } from "react-helmet-async";
import AdminLogin from "./pages/admin/adminLogin";
import Blog from "./pages/Blog";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
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

            <Route path="About" element={<About />} />
            <Route path="Blog" element={<Blog />} />
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
