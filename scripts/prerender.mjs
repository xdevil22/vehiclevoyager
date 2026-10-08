import fs from 'fs/promises';
import path from 'path';
import { pathToFileURL } from 'url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const projectIndex = path.join(root, 'index.html');
const blogSource = path.join(root, 'src', 'utils', 'blogPosts.tsx');
const landingDir = path.join(root, 'src', 'pages', 'landing', 'content');

const defaultBase = await (async () => {
  try {
    const index = await fs.readFile(projectIndex, 'utf8');
    const m = index.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
    return (m && m[1]) || 'https://vechura.com';
  } catch (e) {
    return 'https://vechura.com';
  }
})();

async function ensureDistIndex() {
  try {
    await fs.access(path.join(distDir, 'index.html'));
    return true;
  } catch (e) {
    console.error('dist/index.html not found. Run `vite build` before prerender.');
    process.exit(1);
  }
}

function sanitize(str) {
  if (!str) return '';
  return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function parseBlogPosts() {
  const text = await fs.readFile(blogSource, 'utf8');
  const body = text.slice(text.indexOf('export const blogPosts'));
  const field = (chunk, name) => {
    const m = chunk.match(new RegExp(name + String.raw`\s*:\s*"((?:[^"\\]|\\.)*)"`));
    return m ? m[1] : '';
  };
  // One chunk per post: everything from one `slug:` to the next.
  const chunks = body.split(/\n\s*slug:\s*(?=")/).slice(1);
  return chunks.map((chunk) => ({
    slug: field('slug: ' + chunk, 'slug'),
    seoTitle: field(chunk, 'seoTitle'),
    seoDescription: field(chunk, 'seoDescription'),
    image: field(chunk, 'image'),
  })).filter((p) => p.slug);
}

async function parseLandingPages() {
  const files = await fs.readdir(landingDir);
  const pages = [];
  for (const f of files) {
    if (!f.endsWith('.ts') || f.startsWith('_') || f === 'index.ts' || f === 'types.ts') continue;
    const content = await fs.readFile(path.join(landingDir, f), 'utf8');
    const mSlug = content.match(/slug:\s*"([^"]+)"/);
    const mSeoTitle = content.match(/seoTitle:\s*"([^"]*)"/);
    const mSeoDesc = content.match(/seoDescription:\s*"([^"]*)"/);
    if (mSlug && !/[\[\]]/.test(mSlug[1])) {
      pages.push({
        slug: mSlug[1],
        seoTitle: mSeoTitle ? mSeoTitle[1] : '',
        seoDescription: mSeoDesc ? mSeoDesc[1] : '',
      });
    }
  }
  return pages;
}

function makeHead(meta) {
  const title = sanitize(meta.title || 'Vechura');
  const desc = sanitize(meta.description || '');
  const canonical = sanitize(meta.canonical || '');
  const url = sanitize(meta.url || canonical || defaultBase);
  const image = sanitize(meta.image || 'https://vechura.com/vechura-social-card-2026.jpg');

  return `
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
  `;
}

const staticPages = [
  { path: '/about', title: 'About Vechura | Compare Cars, RVs, Boats and More', description: 'Learn how Vechura helps travelers compare and book cars, RVs, boats, motorcycles and more from trusted rental partners in one place.' },
  { path: '/blog', title: 'Vechura Blog | Travel Guides and Rental Tips', description: 'Travel guides, rental tips and destination ideas for cars, RVs, boats and motorcycles from the Vechura team.' },
  { path: '/resources', title: 'Vechura Resources | Vehicle Rental Guides', description: 'Practical guides on vehicle rental insurance, age and license requirements, deposits and more.' },
  { path: '/booking-tools', title: 'Booking Tools | Compare Cars, Hotels, Boats and Flights', description: 'Search and compare rentals, hotels, boats and flights with the Vechura booking tools.' },
  { path: '/termsofuse', title: 'Terms of Use | Vechura', description: 'Read the Vechura Terms of Use covering informational purpose, affiliate links, user responsibilities and liability.' },
  { path: '/privacypolicy', title: 'Privacy Policy | Vechura', description: 'How Vechura collects, uses and protects your information, including cookies, analytics and third-party links.' },
  { path: '/cookiepolicy', title: 'Cookie Policy | Vechura', description: 'How Vechura uses cookies and similar technologies, and how you can manage your preferences.' },
  { path: '/advertiser-disclosure', title: 'Advertiser and Affiliate Disclosure | Vechura', description: 'How Vechura earns commissions from affiliate links and how we keep our content independent.' },
];

async function parseResourcePosts() {
  const text = await fs.readFile(path.join(root, 'src', 'utils', 'resourcePosts.tsx'), 'utf8');
  const re = /slug:\s*"([^"]+)"[\s\S]*?seoTitle:\s*"([^"]*)"[\s\S]*?seoDescription:\s*"([^"]*)"/g;
  const out = [];
  let m;
  while ((m = re.exec(text))) out.push({ slug: m[1], seoTitle: m[2], seoDescription: m[3] });
  return out;
}

async function loadRenderer() {
  const entry = path.join(root, 'dist-ssr', 'entry-server.mjs');
  try {
    await fs.access(entry);
  } catch (e) {
    console.error('dist-ssr/entry-server.mjs not found. Run `vite build --ssr src/entry-server.tsx --outDir dist-ssr` first.');
    process.exit(1);
  }
  return (await import(pathToFileURL(entry).href)).render;
}

async function run() {
  await ensureDistIndex();
  const render = await loadRenderer();
  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

  const posts = await parseBlogPosts();
  const landing = await parseLandingPages();
  const resources = await parseResourcePosts();

  const pages = [{ path: '/', home: true }];
  for (const p of staticPages) pages.push(p);
  for (const p of resources) {
    pages.push({ path: `/resources/${p.slug}`, title: p.seoTitle, description: p.seoDescription });
  }
  for (const p of posts) {
    pages.push({
      path: `/blog/${p.slug}`,
      title: p.seoTitle || '',
      description: p.seoDescription || '',
      image: p.image ? (defaultBase.replace(/\/$/, '') + '/' + p.image.replace(/^\//, '')) : undefined,
    });
  }
  for (const p of landing) {
    pages.push({ path: `/${p.slug}`, title: p.seoTitle || '', description: p.seoDescription || '' });
  }

  let problems = 0;
  for (const page of pages) {
    const body = render(page.path);
    const h1Count = (body.match(/<h1[\s>]/g) || []).length;
    if (h1Count !== 1 || /Loading\.\.\./.test(body)) {
      console.warn(`WARN ${page.path}: h1=${h1Count}, loading-fallback=${/Loading\.\.\./.test(body)}`);
      problems++;
    }

    let out = template.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);

    if (!page.home) {
      const canonicalFull = (defaultBase.replace(/\/$/, '') + page.path).replace(/([^:])\/\//g, '$1/');
      // remove existing head title/description/canonical/og/twitter tags before injecting
      out = out.replace(/<title>[\s\S]*?<\/title>/i, '');
      out = out.replace(/<link[^>]+rel=["']canonical["'][^>]*>/i, '');
      out = out.replace(/<meta[^>]+name=["']description["'][^>]*>/i, '');
      out = out.replace(/<meta[^>]+property=["']og:title["'][^>]*>/i, '');
      out = out.replace(/<meta[^>]+property=["']og:description["'][^>]*>/i, '');
      out = out.replace(/<meta[^>]+property=["']og:url["'][^>]*>/i, '');
      out = out.replace(/<meta[^>]+name=["']twitter:title["'][^>]*>/i, '');
      out = out.replace(/<meta[^>]+name=["']twitter:description["'][^>]*>/i, '');

      const headExtra = makeHead({
        title: page.title,
        description: page.description,
        canonical: canonicalFull,
        url: canonicalFull,
        image: page.image,
      });
      out = out.replace(/<\/head>/i, `${headExtra}
</head>`);
    } else {
      out = out.replace(/<\/head>/i, `<link rel="canonical" href="${defaultBase.replace(/\/$/, '')}/" />
</head>`);
    }

    const outDir = page.home ? distDir : path.join(distDir, page.path.replace(/(^\/|\/$)/g, ''));
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, 'index.html'), out, 'utf8');
    console.log('Wrote prerendered:', path.join(outDir, 'index.html'));
  }

  console.log(`Prerender complete. ${pages.length} pages, ${problems} warnings.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
