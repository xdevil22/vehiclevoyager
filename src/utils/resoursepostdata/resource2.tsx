import React from "react";

export default function Resource2() {
  return (
    <>
      <h1 className="text-2xl font-bold mt-2">Resource 2: Placeholder Title</h1>
      <p className="mt-4">
        This is a second dummy resource file. Replace with the real content.
      </p>

      <h2 className="text-xl font-semibold mt-6">Jump Links</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>
          <a className="text-blue-600 hover:underline" href="#overview">
            Overview
          </a>
        </li>
        <li>
          <a className="text-blue-600 hover:underline" href="#details">
            Details
          </a>
        </li>
      </ul>

      <h2 id="overview" className="text-lg font-bold mt-6">
        Overview
      </h2>
      <p className="mt-2">Placeholder overview content.</p>

      <h2 id="details" className="text-lg font-bold mt-6">
        Details
      </h2>
      <p className="mt-2">Placeholder details content.</p>
    </>
  );
}
