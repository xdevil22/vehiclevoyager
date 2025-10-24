import React from "react";
import canyonhelicopter from "../../../public/assets/blogs/canyon-helicopter.webp";
import redrockcanyon from "../../../public/assets/blogs/red-rock-canyon.webp";
import catalinaisland from "../../../public/assets/blogs/catalina-island.webp";
// import feelfreedom from "../../../public/assets/blogs/feel-freedom.webp";
import mauihawaii from "../../../public/assets/blogs/maui-hawaii.webp";

import {BASE_URL} from "../constants";

export default function Blog10() {
  return (
    <>
      <p>
        Some sights are too spectacular to experience from the ground. That's
        where a helicopter tour comes in — giving you front-row seats to
        landscapes most travelers only glimpse from postcards.
      </p>
      <p>
        From red rock canyons to turquoise coastlines, here are four
        destinations where a flight is <em>the</em> experience you'll talk about
        for years.
      </p>
      <h2>1. Grand Canyon Helicopter Tours</h2>
      <div className="text-center">
        <img
          src={BASE_URL + canyonhelicopter}
          alt="canyon helicopter"
          className="inline-block"
          loading="lazy"
        />
      </div>
      <p>
        Few places on Earth are as jaw-dropping from above as the Grand Canyon.
        A helicopter flight lets you truly grasp the scale — mile-wide chasms,
        layered rock formations, and the mighty Colorado River twisting through
        the desert floor.
      </p>
      <p>
        <a
          href="https://www.maverickhelicopter.com/al.aspx?id=9992&t=9992"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline">
          Many flights
        </a>{" "}
        depart directly from Las Vegas, so you can go from city lights to
        natural wonder in a single day. Some tours even land on the canyon floor
        for a champagne toast.
        <em>
          (Tip: Sunset flights offer the most dramatic lighting — golden cliffs
          that glow as the sun dips below the rim.)
        </em>
      </p>
      <hr className="my-6 border-t-2 border-gray-400" />
      <h2>2. Las Vegas Strip & Red Rock Canyon</h2>
      <div className="text-center">
        <img
          src={BASE_URL + redrockcanyon}
          alt="red rock canyon"
          className="inline-block"
          loading="lazy"
        />
      </div>
      <p>
        If the Grand Canyon is nature's masterpiece, the Las Vegas Strip is its
        neon counterpart. A nighttime helicopter ride gives you a bird's-eye
        view of every landmark — the Bellagio fountains, the Sphere, and the
        endless desert glow.
      </p>
      <p>
        Daytime tours also head out to Red Rock Canyon, where sandstone peaks
        contrast against the city skyline — a perfect mix of natural and
        man-made spectacle.
      </p>
      <p>
        <a
          href="https://www.maverickhelicopter.com/al.aspx?id=280252&t=9993"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline">
          Fly in comfort to major events
        </a>{" "}
        like <em>EDC Las Vegas</em>, the <em>Las Vegas Grand Prix</em>, or{" "}
        <em>NASCAR Weekend</em> — skipping traffic and arriving in unforgettable
        style.
      </p>
      <hr className="my-6 border-t-2 border-gray-400" />
      <h2>3. Maui, Hawaii</h2>
      <div className="text-center">
        <img
          src={BASE_URL + mauihawaii}
          alt="catalina island"
          className="inline-block"
          loading="lazy"
        />
      </div>
      <p>
        In Maui, a helicopter tour isn't just a thrill — it's practically a rite
        of passage. You'll glide over waterfalls that tumble hundreds of feet,
        the lush valleys of Iao, and the volcanic crater of Haleakalā.
        <br />
        Unlike road trips that take hours, a helicopter lets you see every side
        of the island in one breathtaking loop.
      </p>
      <p>
        <a
          href="https://www.maverickhelicopter.com/al.aspx?id=280252&t=9994"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline">
          Some tours
        </a>{" "}
        even cross over to Moloka'i, famous for its towering sea cliffs — the
        tallest in the world.
      </p>
      <hr className="my-6 border-t-2 border-gray-400" />
      <h2>4. Catalina Island, California</h2>
      <div className="text-center">
        <img
          src={BASE_URL + catalinaisland}
          alt="catalina island"
          className="inline-block"
          loading="lazy"
        />
      </div>
      <p>
        Just a short hop off the Southern California coast, Catalina Island is
        already a peaceful escape — but from above, it's something else
        entirely.
        <br />
        <a
          href="https://www.maverickhelicopter.com/al.aspx?id=9991"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline">
          Helicopter tours
        </a>{" "}
        showcase the contrast between deep-blue ocean, green ridgelines, and the
        charming town of Avalon. <br /> If you're lucky, you'll spot dolphins or
        migrating whales cutting through the Pacific below.
      </p>
      <p>
        It's a perfect add-on to any SoCal trip — especially if you're flying
        out of Long Beach or Orange County.
      </p>
      <hr className="my-6 border-t-2 border-gray-400" />
      <h2>Why Book with Maverick Helicopters</h2>
      <p>
        Maverick is one of the most respected names in aerial tours, with an
        impeccable safety record and a fleet of modern ECO-Star helicopters
        designed for panoramic views and comfort. Whether you're soaring above
        the Strip, skimming the rim of the Grand Canyon, or tracing the Hawaiian
        coast, Maverick delivers a smooth, first-class experience.
      </p>
      <p>
        👉 Ready to take off?
        <a
          href="https://www.maverickhelicopter.com/al.aspx?id=280252&t=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline">
          Book your Maverick Helicopter tour here
        </a>{" "}
        and see the world from a perspective few ever experience.
      </p>

      <hr className="my-6 border-t-2 border-gray-400" />
      <h2>Final Thoughts</h2>
      <p>
        Helicopter tours are one of those rare adventures that balance
        adrenaline with awe. They turn already stunning destinations — Las
        Vegas, Maui, Catalina, and the Grand Canyon — into something
        unforgettable.
        <br /> Whether it's your first flight or your fiftieth, seeing these
        landscapes from above will remind you why travel is worth every minute.
      </p>
      <hr className="my-6 border-t-2 border-gray-400" />
    </>
  );
}
