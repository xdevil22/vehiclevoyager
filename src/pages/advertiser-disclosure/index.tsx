import React from "react";

interface Props {}

function AdvertiserDisclosure(props: Props) {
  const {} = props;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>
      <p className="mb-4">
        Vechura participates in affiliate marketing programs designed to provide
        a means for websites to earn commissions by linking to partner products
        and services. When you click certain links on this site and make a
        purchase or booking, we may earn a commission at no extra cost to you.
        These commissions help support the operation of Vechura and allow us to
        continue providing useful travel and rental resources
      </p>
      <p className="mb-4">
        We only recommend products, companies, and platforms that we believe
        offer genuine value for travelers.
      </p>

      <hr className="my-6 border-t-2 border-gray-400" />
      <div>
        <h2 className="text-xl font-bold mt-6 mb-4">
          Amazon Associates Program
        </h2>
        <p className="mb-4">
          Vechura is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means
          for sites to earn fees by linking to{" "}
          <a
            href="https://www.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 no-underline hover:underline">
            Amazon.com
          </a>{" "}
          and affiliated sites.
        </p>
        <p className="mb-4">
          {" "}
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-400" />
      <div>
        <h2 className="text-xl font-bold mt-6 mb-4">
          Other Affiliate Programs
        </h2>
        <p className="mb-4">
          Vechura also participates in additional affiliate partnerships through
          networks such as but not limited to Awin, CJ, Impact, HasOffers/Tune,
          and other reputable platforms. When we link to products or services
          offered by these companies, we may earn a commission at no extra cost
          to you.
        </p>
        <p className="mb-4">
          {" "}
          These partnerships help support the site and do not change the cost of
          any product or service you may purchase.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-400" />
      <div>
        <h2 className="text-xl font-bold mt-6 mb-4">Editorial Transparency</h2>
        <p className="mb-4">
          Some content on Vechura focuses on or features companies that we
          partner with. Our goal is to provide helpful, accurate travel
          information based on our research and experience, while being
          transparent about our affiliate relationships.
        </p>
      </div>
      <hr className="my-6 border-t-2 border-gray-400" />
      <div>
        <h2 className="text-xl font-bold mt-6 mb-4">Questions?</h2>
        <p className="mb-4">
          If you have any questions about our affiliate relationships, please
          contact us at{" "}
          <a
            href="mailto:info@vechura.com"
            className="text-primary hover:underline transition-colors">
            info@vechura.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default AdvertiserDisclosure;
