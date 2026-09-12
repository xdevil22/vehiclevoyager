import fs from 'fs/promises';
import path from 'path';

const root = process.cwd();
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const robotsPath = path.join(root, 'public', 'robots.txt');
const blogSource = path.join(root, 'src', 'utils', 'blogPosts.tsx');
const landingDir = path.join(root, 'src', 'pages', 'landing', 'content');
const base = 'https://vechura.com';

async function readSitemap() {
  const xml = await fs.readFile(sitemapPath, 'utf8');
  const matches = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/gi)).map(m => m[1].trim());
  return new Set(matches);
}

async function readBlogSlugs() {
  const txt = await fs.readFile(blogSource, 'utf8');
  const matches = Array.from(txt.matchAll(/slug:\s*"([^"]+)"/g)).map(m=>m[1]);
  return matches.map(s => `${base}/blog/${s}`);
}

async function readLandingSlugs() {
  const files = await fs.readdir(landingDir);
  const slugs = [];
  for (const f of files) {
    if (!f.endsWith('.ts')) continue;
    const txt = await fs.readFile(path.join(landingDir, f),'utf8');
    const m = txt.match(/slug:\s*"([^"]+)"/);
    if (m) slugs.push(`${base}/${m[1]}`);
  }
  return slugs;
}

async function readRobots() {
  try {
    const txt = await fs.readFile(robotsPath, 'utf8');
    return txt;
  } catch (e) {
    return '';
  }
}

async function run() {
  const sitemap = await readSitemap();
  const blogUrls = await readBlogSlugs();
  const landingUrls = await readLandingSlugs();
  const robots = await readRobots();

  const expected = new Set([...blogUrls, ...landingUrls]);

  const missing = [];
  for (const url of expected) {
    if (!sitemap.has(url)) missing.push(url);
  }

  const extra = [];
  for (const url of sitemap) {
    if (url.startsWith(`${base}/blog/`) || url === base || url.startsWith(`${base}/`)) {
      // keep
    } else {
      // ignore other domains
    }
  }

  console.log('Sitemap contains', sitemap.size, 'entries');
  if (missing.length) {
    console.log('\nMissing from sitemap (expected but not present):');
    missing.forEach(u => console.log(' -', u));
  } else {
    console.log('\nAll blog & landing slugs are present in sitemap.');
  }

  // Check robots
  if (!robots) {
    console.log('\nrobots.txt not found in public/ — please add one.');
  } else {
    if (/Disallow\s*:\s*\//i.test(robots)) {
      console.log('\nWarning: robots.txt disallows root (/) — pages may be blocked.');
    } else {
      console.log('\nrobots.txt allows crawling of site.');
    }
    if (/Sitemap\s*:/i.test(robots)) console.log('robots.txt references sitemap.');
  }

  // Check for client-side noindex meta usage: Seo injects index,follow via react-head, so check code for explicit noindex
  const repo = await fs.readFile(path.join(root,'src','components','Seo.tsx'),'utf8');
  if (/robots/i.test(repo) && /index,follow/i.test(repo)) {
    console.log('\n`Seo` component sets `meta name="robots" content="index,follow"` client-side.');
  }

  if (missing.length) process.exitCode = 2;
}

run().catch(err => { console.error(err); process.exit(1); });
