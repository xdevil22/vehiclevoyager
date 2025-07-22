const RoamlyBanner = () => {
  return (
    <div className="flex justify-center items-center mb-8">
      <a
        href="https://outdoorsyinc.go2cloud.org/aff_c?offer_id=28&aff_id=2660&file_id=4968"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src="https://media.go2speed.org/brand/files/outdoorsyinc/28/Roamly-Digital-Display-300x250-1.jpg"
          width="300"
          height="250"
          alt="Roamly Insurance Banner"
        />
      </a>

      {/* Tracking Pixel */}
      <img
        src="https://outdoorsyinc.go2cloud.org/aff_i?offer_id=28&file_id=4968&aff_id=2660"
        width="0"
        height="0"
        style={{position: "absolute", visibility: "hidden"}}
        alt=""
      />
    </div>
  );
};

export default RoamlyBanner;
