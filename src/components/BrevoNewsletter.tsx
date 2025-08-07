import React from "react";

const BrevoNewsletter = () => {
  return (
    <div className="my-12 brevo-newsletter">
      <iframe
        width="540"
        height="450"
        src="https://261870c5.sibforms.com/serve/MUIFACCctyWI6vF6K6ZcFbuFvQmq6Wvw3NyfPmCBowdLZfXvjUKwvchEam8ABy8xNyrUz_KdVN6gQ-Tuuu-V1i6hjr2qOLeRZ5HnErAbRaKohVV4lVArrN0KE-XM2B18IaS3rTHxo_6TunmxaHJkHcufK4j1EN4H-RY4DpJ6vZAXMH7HmTiWwGk65QFmVtgTaIkUaPuV8IVE2ren"
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
        }}
        title="Brevo Newsletter Signup"
      />
    </div>
  );
};

export default BrevoNewsletter;
