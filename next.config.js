const path = require("path");

/**
 * Turbopack infers the workspace root by walking up for a lockfile, which can
 * wander outside the repo. Pin it here.
 * @type {import('next').NextConfig}
 */
module.exports = {
  turbopack: {
    root: __dirname,
  },
  // These URLs are in Google's index from the previous site and were
  // returning 404. Point each at the page that now holds its content so the
  // ranking signal carries over instead of being dropped.
  async redirects() {
    return [
      { source: "/resume", destination: "/cv", permanent: true },
      { source: "/projects", destination: "/shipped", permanent: true },
      { source: "/who", destination: "/", permanent: true },
      { source: "/now", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
    ];
  },
};
