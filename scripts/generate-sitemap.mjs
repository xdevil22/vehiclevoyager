import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const blogPostsPath = path.join(rootDir, 'src', 'utils', 'blogPosts.tsx');
const outputPath = path.join(rootDir, 'public', 'sitemap.xml');
const baseUrl = 'https://vechura.com';

const staticRoutes = [
  '/',
  '/cars',
  '/about',
  '/blog',
  '/booking-tools',
  '/cookiepolicy',
  '/privacypolicy',
  '/advertiser-disclosure',
  '/email-signup',
];

const blogPostsSource = readFileSync(blogPostsPath, 'utf8');
const slugMatches = [...blogPostsSource.matchAll(/slug:\s*"([^"]+)"/g)];
const blogSlugs = [...new Set(slugMatches.map((match) => match[1]))];

const urls = [
  ...staticRoutes.map((route) => ({
    loc: `${baseUrl}${route === '/' ? '' : route}`,
  })),
  ...blogSlugs.map((slug) => ({
    loc: `${baseUrl}/blog/${slug}`,
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>\n    <loc>${url.loc}</loc>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(outputPath, xml, 'utf8');
console.log(`Generated sitemap with ${urls.length} URLs at ${outputPath}`);
