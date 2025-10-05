import React from "react";

const BrevoNewsletter = () => {
  return (
    <div className="my-12 brevo-newsletter">
      <iframe
        src="/brevo-frame.html"
        className="w-full h-[605px] border-none"
        title="Newsletter Signup"></iframe>
    </div>
  );
};

export default BrevoNewsletter;
