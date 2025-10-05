const RoamlyBanner = () => {
  return (
    <div className="flex justify-center items-center relative">
      <a
        href="https://outdoorsyinc.go2cloud.org/aff_c?offer_id=28&aff_id=2660&file_id=4968"
        target="_blank"
        rel="noopener noreferrer"
        className="block">
        <img
          src="https://media.go2speed.org/brand/files/outdoorsyinc/28/Roamly-Digital-Display-300x250-1.jpg"
          width="300"
          height="250"
          alt="Roamly Insurance Banner"
          className="rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          loading="lazy"
        />
      </a>

      {/* Tracking Pixel */}
      <img
        src="https://outdoorsyinc.go2cloud.org/aff_i?offer_id=28&file_id=4968&aff_id=2660"
        width="0"
        height="0"
        className="absolute invisible"
        alt="Roamly Insurance Banner"
        loading="lazy"
      />
    </div>
  );
};

export default RoamlyBanner;
