const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://onchain-blog.onrender.com"
    : "http://localhost:3000";
export { serverUrl };
