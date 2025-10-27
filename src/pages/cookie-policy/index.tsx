import React from "react";

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-8 text-gray-800">
        <h2 className="text-3xl font-bold mb-6">Cookie Policy</h2>
        <p className="text-sm text-gray-500 mb-6">Last updated: 8/11/2025</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or
          mobile device when you visit our website. They are widely used to make
          websites work more efficiently and provide information to website
          owners.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. How We Use Cookies
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Remembering your preferences and settings</li>
          <li>Keeping you logged in during your visit</li>
          <li>Analyzing website traffic and user behavior</li>
          <li>Personalizing content and recommendations</li>
          <li>Measuring the effectiveness of our marketing campaigns</li>
          <li>Preventing fraud and enhancing security</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Types of Cookies We Use
        </h2>
        <p>
          <strong>Essential Cookies</strong> - Necessary for website
          functionality, security, and network management.
        </p>
        <p>
          <strong>Analytics Cookies</strong> - Help us understand user
          interactions via tools like Google Analytics.
        </p>
        <p>
          <strong>Functional Cookies</strong> - Enable personalization and
          remembering your preferences.
        </p>
        <p>
          <strong>Marketing Cookies</strong> - Used for tracking, advertising,
          and affiliate conversions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Third-Party Cookies
        </h2>
        <p>
          We work with third-party service providers including Google Analytics,
          Affiliate Networks, Rental Partners, and Social Media Platforms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookie Duration</h2>
        <p>
          <strong>Session Cookies</strong> - Deleted when you close your
          browser.
        </p>
        <p>
          <strong>Persistent Cookies</strong> - Remain until manually deleted or
          expire.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Managing Your Cookie Preferences
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Block or allow cookies via browser settings</li>
          <li>Opt-out of tracking services like Google Analytics</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Impact of Disabling Cookies
        </h2>
        <p>
          Some features may not work properly, and you may lose personalized
          content and settings.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          8. Updates to This Policy
        </h2>
        <p>
          We may update this Cookie Policy periodically for legal or operational
          reasons.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <p>
          Email:{" "}
          <a href="mailto:info@vechura.com" className="text-blue-600">
            info@vechura.com
          </a>
        </p>
      </div>
    </div>
  );
}
