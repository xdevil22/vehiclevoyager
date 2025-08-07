import React, { useState, useEffect } from "react";

const Admin = () => {
  const [access, setAccess] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Check sessionStorage (auto-reset on browser close)
    if (sessionStorage.getItem("adminAccess") === "granted") {
      setAccess(true);
    }
  }, []);

  const handleLogin = () => {
    if (input === "admin1234") {
      sessionStorage.setItem("adminAccess", "granted");
      setAccess(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!access) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border px-4 py-2 mb-4 rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* GA4 EMBED SECTION */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">GA4 Traffic Summary</h2>
        <iframe
          src="https://datastudio.google.com/embed/reporting/your-report-id/page/your-page-id"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          title="GA4 Report"
        />
      </section>

      {/* MOCK AFFILIATE CLICKS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Affiliate Click Logs</h2>
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 text-left">Link</th>
              <th className="border px-3 py-2 text-left">Clicks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Amazon CTA</td>
              <td className="border px-3 py-2">14</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Outdoorsy Listing</td>
              <td className="border px-3 py-2">6</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* NEWSLETTER PLACEHOLDER */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Newsletter Leads</h2>
        <p className="text-gray-600">
          Once Brevo API or form integration is set up, captured leads will
          appear here.
        </p>
      </section>
    </div>
  );
};

export default Admin;
