importScripts("https://cdn.brevo.com/js/sdk-loader.js");
Brevo.push([
  "init",
  {
    client_key: (location.search.match(/[?&]key=([^&]*)/) || [])[1],
  },
]);
// Service worker for Brevo
self.addEventListener("install", () => {
  console.log("Brevo service worker installed.");
});

self.addEventListener("push", function (event) {
  let data = {};
  if (event.data) {
    data = event.data.json();
  }
  const title = data.title || "Newsletter Update";
  const options = {
    body: data.body || "Stay updated with our latest content.",
    icon: data.icon || "/icon.png",
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
