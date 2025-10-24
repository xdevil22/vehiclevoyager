import React from "react";
import hybridinnovation from "../../../public/assets/blogs/hybrid-innovation.webp";
import powermeetsprecision from "../../../public/assets/blogs/power-meets-precision.webp";
import designinterior from "../../../public/assets/blogs/design-interior.webp";
import coststoown from "../../../public/assets/blogs/costs-to-own.webp";
import lvcexotics from "../../../public/assets/blogs/lvc-exotics.webp";

import {BASE_URL} from "../constants";

export default function Blog7() {
  return (
    <>
      <p>
        Some cars turn heads.
        <br /> The{" "}
        <a
          href="https://lvcexotics.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline">
          Ferrari SF90 Stradale
        </a>{" "}
        stops time.
        <br /> It's the ultimate showcase of Ferrari's hybrid technology—where
        blistering performance meets elegant Italian design.
      </p>
      <hr className="my-6 border-t-2 border-gray-400" />
      <div className="text-center">
        <img
          src={BASE_URL + powermeetsprecision}
          alt="power meets precision"
          className="inline-block"
          loading="lazy"
        />
      </div>

      <h2>Power Meets Precision</h2>
      <p>
        At the heart of the SF90 Stradale sits a 4.0-liter twin-turbo V8 paired
        with three electric motors. Together they produce an astonishing 986
        horsepower (735 kW)—the most ever in a production Ferrari.
        <br /> 0 - 60 mph? Around 2.0 seconds flat.
        <br /> Top speed? About 211 mph (340 km/h).
      </p>
      <p>
        The car automatically switches between EV mode, Hybrid, and Performance
        modes, giving you quiet city cruising one moment and full Formula 1
        ferocity the next.
      </p>

      <hr className="my-6 border-t-2 border-gray-400" />
      <div className="text-center">
        <img
          src={BASE_URL + hybridinnovation}
          alt="power meets precision"
          className="inline-block"
          loading="lazy"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mt-6">Smart Hybrid Innovation</h2>
        <p>The SF90 is Ferrari's first plug-in hybrid supercar.</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            A lithium-ion battery provides roughly 15–16 miles of electric
            range, enough for emission-free driving in city zones.
          </li>
          <li>
            The e-Drive system powers the front wheels, creating all-wheel
            traction—another first for a Ferrari road car.
          </li>
          <li>
            Its advanced torque-vectoring system calculates grip hundreds of
            times per second, keeping the car perfectly balanced even under full
            throttle.
          </li>
        </ul>
      </div>
      <hr className="my-6 border-t-2 border-gray-400" />
      <div>
        <div className="text-center">
          <img
            src={BASE_URL + designinterior}
            alt="power meets precision"
            className="inline-block"
            loading="lazy"
          />
        </div>
        <h2 className="text-xl font-bold mt-6">Design & Interior</h2>
        <p>Ferrari redesigned everything for the SF90:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            A lithium-ion battery provides roughly 15-16 miles of electric
            range, enough for emission-free driving in city zones.
          </li>
          <li>
            The cockpit surrounds the driver in a futuristic, minimalist layout
            with a 16-inch curved HD screen.
          </li>
          <li>
            Even the key is sculpted aluminum, designed to display proudly like
            a piece of jewelry.
          </li>
        </ul>
      </div>
      <hr className="my-6 border-t-2 border-gray-400" />
      <div>
        <div className="text-center">
          <img
            src={BASE_URL + coststoown}
            alt="power meets precision"
            className="inline-block"
            loading="lazy"
          />
        </div>
        <h2 className="text-xl font-bold mt-6">What It Costs to Own</h2>
        <p>
          Owning one of these masterpieces comes with a price worthy of its
          pedigree.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Base MSRP:</strong> ≈ $525,000 USD
          </li>
          <li>
            <strong>Fully optioned:</strong> $600,000 - $700,000 USD depending
            on custom carbon fiber, paint, and interior packages.
          </li>
        </ul>

        <p>
          Add insurance, maintenance, and scarcity premiums, and you're looking
          at a genuine million-dollar experience.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-400" />
      <div>
        <div className="text-center">
          <img
            src={BASE_URL + lvcexotics}
            alt="power meets precision"
            className="inline-block"
            loading="lazy"
          />
        </div>
        <h2>Experience It Without Owning One</h2>
        <p>
          If you're not planning to drop half a million dollars—but still want
          to feel that unmistakable Ferrari rush—you can rent the SF90 Stradale
          or other Ferrari models for a day or a weekend.
        </p>
        <p>
          Through our partner{" "}
          <a
            href="https://lvcexotics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline">
            LVC Exotics
          </a>
          , you can slip behind the wheel of a Ferrari SF90 Stradale in Las
          Vegas for an exhilarating experience. Or choose from other equally
          impressive Ferraris like the 488 GTB, F8 Tributo, or Roma.
        </p>
        <p>
          Whether it's cruising the Strip or the red-rock desert highways, it's
          the closest you can get to owning Maranello's finest—without the
          seven-figure commitment.
        </p>
      </div>

      <hr className="my-6 border-t-2 border-gray-400" />
      <h2>Final Thoughts</h2>
      <p>
        The Ferrari SF90 Stradale represents the next era of supercars: electric
        precision paired with Ferrari soul.
        <br /> It's breathtaking, advanced, and utterly unforgettable.
        <br />
        If you've ever dreamed of hearing that hybrid V8-electric symphony in
        person, Las Vegas makes it possible for a day.
      </p>
    </>
  );
}
