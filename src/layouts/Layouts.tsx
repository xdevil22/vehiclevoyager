import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";
import NewsletterPopup from "../components/NewsletterPopup";
const Layout = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("Brevo service worker registered"))
        .catch((err) => console.error("SW registration failed:", err));
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Vechura</title>
        <meta
          name="description"
          content="Explore vehicles for every adventure."
        />
      </Helmet>
      <NewsletterPopup />
      <Header />
      <main className="min-h-screen bg-neutral-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
