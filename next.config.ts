const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: BASE,
  assetPrefix: BASE ? `${BASE}/` : "",
  env: { NEXT_PUBLIC_BASE_PATH: BASE },
};
