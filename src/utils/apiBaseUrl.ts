export const getApiBaseUrl = () => {
  const envBaseUrl =
    typeof import.meta !== "undefined" ? import.meta.env.VITE_API_BASE_URL : undefined;

  if (envBaseUrl && envBaseUrl.trim()) {
    return envBaseUrl.replace(/\/+$/, "");
  }

  if (typeof window !== "undefined") {
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    return (isLocalhost ? "http://localhost:5001" : window.location.origin).replace(
      /\/+$/,
      "",
    );
  }

  return "http://localhost:5001";
};
