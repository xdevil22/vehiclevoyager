import fs from 'fs/promises';
import path from 'path';

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
  const arrMatch = text.match(/export const blogPosts[\s\S]*?=\s*\[/);
  if (!arrMatch) return [];
  const body = text.slice(text.indexOf('export const blogPosts'));
  const re = /\{[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?seoTitle:\s*"([^"]*)"[\s\S]*?seoDescription:\s*"([^"]*)"[\s\S]*?image:\s*"([^"]*)"[\s\S]*?\}/gm;
  const posts = [];
  let m;
  while ((m = re.exec(body))) {
    posts.push({
      slug: m[1],
      seoTitle: m[2],
      seoDescription: m[3],
      image: m[4],
    });
  }
  return posts;
}

async function parseLandingPages() {
  const files = await fs.readdir(landingDir);
  const pages = [];
  for (const f of files) {
    if (!f.endsWith('.ts')) continue;
    const content = await fs.readFile(path.join(landingDir, f), 'utf8');
    const mSlug = content.match(/slug:\s*"([^"]+)"/);
    const mSeoTitle = content.match(/seoTitle:\s*"([^"]*)"/);
    const mSeoDesc = content.match(/seoDescription:\s*"([^"]*)"/);
    if (mSlug) {
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

async function run() {
  await ensureDistIndex();
  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

  const posts = await parseBlogPosts();
  const landing = await parseLandingPages();

  const pages = [];
  for (const p of posts) {
    pages.push({
      path: `/blog/${p.slug}`,
      title: p.seoTitle || '',
      description: p.seoDescription || '',
      image: p.image ? (defaultBase.replace(/\/$/, '') + '/' + p.image.replace(/^\//, '')) : undefined,
    });
  }

  for (const p of landing) {
    pages.push({
      path: `/${p.slug}`,
      title: p.seoTitle || '',
      description: p.seoDescription || '',
    });
  }

  for (const page of pages) {
    const outDir = path.join(distDir, page.path.replace(/(^\/|\/$)/g, ''));
    const outIndex = path.join(outDir, 'index.html');
    await fs.mkdir(outDir, { recursive: true });

    // remove existing head title/description/canonical/og/twitter tags before injecting
    let out = template.replace(/<title>[\s\S]*?<\/title>/i, '');
    out = out.replace(/<link[^>]+rel=["']canonical["'][^>]*>/i, '');
    out = out.replace(/<meta[^>]+name=["']description["'][^>]*>/i, '');
    out = out.replace(/<meta[^>]+property=["']og:title["'][^>]*>/i, '');
    out = out.replace(/<meta[^>]+property=["']og:description["'][^>]*>/i, '');
    out = out.replace(/<meta[^>]+property=["']og:url["'][^>]*>/i, '');
    out = out.replace(/<meta[^>]+name=["']twitter:title["'][^>]*>/i, '');
    out = out.replace(/<meta[^>]+name=["']twitter:description["'][^>]*>/i, '');

    const canonicalFull = (defaultBase.replace(/\/$/, '') + page.path).replace(/([^:])\/\//g, '$1/');

    const headExtra = makeHead({
      title: page.title,
      description: page.description,
      canonical: canonicalFull,
      url: canonicalFull,
      image: page.image,
    });

    out = out.replace(/<\/head>/i, `${headExtra}\n</head>`);

    await fs.writeFile(outIndex, out, 'utf8');
    console.log('Wrote prerendered:', outIndex);
  }

  console.log('Prerender complete.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
