import React from "react";

type CTABoxProps = {
  title: string;
  description?: string;
  href: string;
  buttonText: string;
  className?: string;
  searchButtonText?: string;
  searchHref?: string;
};

const CTABox: React.FC<CTABoxProps> = ({
  title,
  description,
  href,
  buttonText,
  className,
  searchButtonText,
  searchHref,
}) => {
  return (
    <div
      className={`bg-blue-600 text-white p-6 rounded-lg shadow ${className || ""}`}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="mb-4 leading-relaxed">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        {buttonText}
      </a>
      {searchButtonText && searchHref && (
        <a
          href={searchHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ml-4"
        >
          {searchButtonText}
        </a>
      )}
    </div>
  );
};

export default CTABox;
