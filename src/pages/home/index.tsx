import AffiliateLogos from "./components/AffiliateLogos";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroBanner from "./components/HeroBanner";
import HomeCategories from "./components/HomeCategories";
import CookieConsent from "../../components/CookieConsent";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AffiliateLogos />
      <HomeCategories />
      <CookieConsent />
    </>
  );
}
