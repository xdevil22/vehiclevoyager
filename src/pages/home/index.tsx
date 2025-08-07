import AffiliateLogos from "./components/AffiliateLogos";

import HeroBanner from "./components/HeroBanner";
import HomeCategories from "./components/HomeCategories";
import CookieConsent from "../../components/CookieConsent";
import BrevoNewsletter from "../../components/BrevoNewsletter";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AffiliateLogos />
      <HomeCategories />
      <BrevoNewsletter />
      <CookieConsent />
    </>
  );
}
