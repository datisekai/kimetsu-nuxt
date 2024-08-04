export default defineNuxtPlugin((nuxtApp) => {
  // Check if the window is available (client-side)
  if (process.client) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XYEZ9KMTQJ");

    // Load the gtag.js script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XYEZ9KMTQJ";
    document.head.appendChild(script);
  }
});
