import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: 8/11/2025</p>

        <section className="space-y-4">
          <p>
            VehicleVoyager ("we," "our," or "us") collects information you
            provide directly to us, such as when you create an account, search
            for vehicle rentals, save favorite listings, contact us for support,
            or subscribe to our newsletter.
          </p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc list-inside">
            <li>Create an account or register for our services</li>
            <li>Search for vehicle rentals</li>
            <li>Save favorite listings</li>
            <li>Contact us for support</li>
            <li>Subscribe to our newsletter</li>
          </ul>

          <p>
            Information collected automatically includes device info (IP,
            browser type), usage data (pages visited, search queries), location
            data (if enabled), and cookies.
          </p>

          <h2 className="text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices and updates</li>
            <li>Respond to comments and questions</li>
            <li>Personalize your experience</li>
            <li>Analyze usage patterns</li>
            <li>Prevent fraud and enhance security</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share with rental
            partners, service providers, or as required by law. Business
            transfers may also involve data sharing.
          </p>

          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p>
            We implement security measures but cannot guarantee 100% security of
            transmissions.
          </p>

          <h2 className="text-xl font-semibold">5. Cookies and Tracking</h2>
          <p>
            We use cookies to improve your experience. You can manage
            preferences in browser settings.
          </p>

          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <p>
            You may access, update, or delete your data; opt out of marketing;
            or file a complaint with authorities.
          </p>

          <h2 className="text-xl font-semibold">7. Third-Party Links</h2>
          <p>We are not responsible for external sites’ privacy practices.</p>

          <h2 className="text-xl font-semibold">8. Children's Privacy</h2>
          <p>
            Not intended for children under 13. We do not knowingly collect
            their data.
          </p>

          <h2 className="text-xl font-semibold">9. International Users</h2>
          <p>
            Your information may be stored and processed in the United States.
          </p>

          <h2 className="text-xl font-semibold">10. Changes to This Policy</h2>
          <p>
            We may update this policy and will post changes here with a new
            date.
          </p>

          <h2 className="text-xl font-semibold">11. Contact Us</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:info@vehiclevoyager.net"
              className="text-blue-600 underline">
              info@vehiclevoyager.net
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
