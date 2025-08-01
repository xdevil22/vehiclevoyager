import React, { useEffect, useState } from "react";

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

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <p className="text-sm mb-2 md:mb-0">
        We use cookies to improve your experience. By using our site, you agree
        to our use of cookies.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
