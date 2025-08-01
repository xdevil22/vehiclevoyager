// src/layouts/Layout.tsx
import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";
const Layout = () => {
  return (
    <>
      <Helmet>
        <title>VehicleVoyager</title>
        <meta
          name="description"
          content="Explore vehicles for every adventure."
        />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-neutral-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
