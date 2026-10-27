import {Meta} from "react-head";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4 py-16">
      <Meta name="robots" content="noindex,follow" />
      <div className="max-w-xl text-center bg-white rounded-3xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist. Check the URL or return to
          the homepage.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Return home
        </a>
      </div>
    </div>
  );
}
