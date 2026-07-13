import type { NextConfig } from "next";

// Every top-level page that exists under src/app/[lang]/<path>/page.tsx.
// Add new entries here whenever a new top-level zh/en page is created —
// without a matching rewrite, the bare (unprefixed) path would be
// swallowed by the "/[lang]" dynamic segment itself (matching a 1-segment
// URL as if it were the lang value) and 404 before this config ever runs.
const ZH_ROUTES = [
  "/",
  "/the-500",
  "/companies",
  "/industries",
  "/methodology",
  "/about",
  "/insights",
  "/nomination",
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Default locale ("zh") is served unprefixed (e.g. "/", "/the-500"),
  // internally mapped to the "/zh/..." route. "/en/..." matches the
  // "/[lang]" dynamic segment directly and needs no rewrite. Rewrites mask
  // the destination — the URL bar still shows the unprefixed path.
  //
  // These must run as "beforeFiles" (not the default array-form, which
  // runs after the filesystem is checked) — otherwise a 1-segment path
  // like "/companies" gets matched by "/[lang]/page.tsx" (lang="companies")
  // before the rewrite ever has a chance to apply.
  //
  // See src/app/[lang]/layout.tsx for the locale-aware root layout.
  async rewrites() {
    return {
      beforeFiles: [
        ...ZH_ROUTES.map((path) => ({
          source: path,
          destination: path === "/" ? "/zh" : `/zh${path}`,
        })),
        // Custom regex excludes any segment containing a dot, so real static
        // files under public/insights/*.png|*.svg are served normally instead
        // of being wrongly treated as an article slug and rewritten to a
        // non-existent route (which is exactly what broke every insight image).
        { source: "/insights/:slug([^.]+)", destination: "/zh/insights/:slug" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
