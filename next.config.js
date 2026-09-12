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
};
