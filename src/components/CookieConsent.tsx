import React, {useEffect, useState} from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black ">
      <div className="container mx-auto px-4">
        <div className=" text-white p-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div className="text-md leading-relaxed max-w-5xl">
            <p>
              We use cookies and similar technologies to enhance your browsing
              experience, analyze site traffic, and provide personalized
              content. This includes essential cookies for site functionality
              and analytics cookies to help us improve our services.
            </p>
            <p className="mt-4">
              By clicking <strong>"Accept All"</strong>, you consent to our use
              of cookies. You can manage your preferences or learn more in our{" "}
              <a href="/cookiepolicy" className="text-blue-400 underline">
                Cookie Policy
              </a>{" "}
              and{" "}
              <a href="/privacypolicy" className="text-blue-400 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="flex space-x-3 shrink-0">
            <button
              onClick={declineCookies}
              className="px-4 py-2 border border-gray-400 text-white rounded hover:bg-gray-800 transition">
              Decline Optional
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition">
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
