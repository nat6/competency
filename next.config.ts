// next.config.ts
const isProd = process.env.NODE_ENV === 'production'
const repo = 'competency' // имя репо в GitHub

export default {
  output: 'export',          // ключ к статическому билду
  images: { unoptimized: true }, // для GitHub Pages (нет серверной оптимизации)
  trailingSlash: true,       // /path/ -> /path/index.html (важно для Pages)
  basePath: isProd ? `/${repo}` : '',     // т.к. это project pages: user.github.io/<repo>
  assetPrefix: isProd ? `/${repo}/` : '', // чтобы подтягивались CSS/JS/изображения
}
