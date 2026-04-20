import sailoBanner from "../../../../public/assets/banner2.webp";
import {BASE_URL} from "../../../utils/constants";

const SailoBanner = () => {
  return (
    <div className="flex justify-center items-center relative">
      <a
        rel="sponsored"
        href="https://www.awin1.com/cread.php?awinmid=92667&awinaffid=1967225&ued=https%3A%2F%2Fwww.sailo.com">
        <img
          // src="https://www.awin1.com/cshow.php?s=4033631&v=92667&q=529187&r=1967225"
          src={BASE_URL + sailoBanner}
          alt="sailo affordable boat rentals"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default SailoBanner;
