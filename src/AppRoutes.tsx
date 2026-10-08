import React, { JSX } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Admin from "./pages/admin/admin";
import Layout from "./layouts/Layouts";
import AdminLogin from "./pages/admin/adminLogin";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/Blog/BlogPost";
import CookiePolicy from "./pages/cookie-policy";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsofUse from "./pages/terms-of-use";
import BookingTools from "./pages/booking-tools";
import AdvertiserDisclosure from "./pages/advertiser-disclosure";
import BrevoNewsletter from "./components/BrevoNewsletter";
import LandingPage from "./pages/landing/LandingPage";
import CreateLandingPage from "./pages/admin/CreateLandingPage";
import Resources from "./pages/Resources";
import ResourcePost from "./pages/Resources/ResourcePost";

function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null {
  const isAdmin = sessionStorage.getItem("adminAccess") === "granted";
  return isAdmin ? <>{children}</> : <Navigate to="/admin/login" replace />;
}

export default function AppRoutes() {
  return (
        <Routes>
          <Route
            path="/cookie-policy"
            element={<Navigate to="/cookiepolicy" replace />}
          />
          <Route
            path="/terms-of-service"
            element={<Navigate to="/termsofuse" replace />}
          />
          <Route
            path="/terms-of-use"
            element={<Navigate to="/termsofuse" replace />}
          />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/booking-tools" element={<BookingTools />} />
            <Route path="About" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs" element={<Navigate to="/blog" replace />} />
            <Route path="/cars" element={<Navigate to="/" replace />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsofuse" element={<TermsofUse />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/resources/:slug" element={<ResourcePost />} />
            <Route path="/:slug" element={<LandingPage />} />
            <Route
              path="advertiser-disclosure"
              element={<AdvertiserDisclosure />}
            />
            <Route path="/email-signup" element={<BrevoNewsletter />} />

            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin/create-landing-page"
              element={
                <ProtectedRoute>
                  <CreateLandingPage />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
  );
}
