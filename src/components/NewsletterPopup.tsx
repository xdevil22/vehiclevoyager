import {useState, useEffect} from "react";

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000); // Show after 5 sec
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg  w-[570px] h-[600px] shadow-lg relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black">
          ✕
        </button>
        <iframe
          src="/brevo-frame.html"
          className="w-full h-[605px] border-none"
          title="Newsletter Signup"></iframe>
      </div>
    </div>
  );
}
