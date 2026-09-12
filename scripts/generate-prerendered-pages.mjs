import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

const root = path.resolve(path.dirname('..'));
const projectRoot = path.resolve(process.cwd());
const baseUrl = 'https://vechura.com';

const indexPath = path.join(projectRoot, 'index.html');
const blogPostsPath = path.join(projectRoot, 'src', 'utils', 'blogPosts.tsx');
const landingContentDir = path.join(projectRoot, 'src', 'pages', 'landing', 'content');
const outDir = path.join(projectRoot, 'public');

function ensureDir(p) {
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
}

const template = readFileSync(indexPath, 'utf8');

function writePage(destPath, replacements) {
  ensureDir(path.dirname(destPath));
  let out = template;
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${replacements.title}</title>`);
  out = out.replace(/<meta name="description" content="[^"]*" \/>/i, `<meta name="description" content="${replacements.description}" />`);
  out = out.replace(/<link rel="canonical" href="[^"]*" \/>/i, `<link rel="canonical" href="${replacements.canonical}" />`);
  out = out.replace(/<meta property="og:url" content="[^"]*" \/>/i, `<meta property="og:url" content="${replacements.canonical}" />`);
  out = out.replace(/<meta property="og:title" content="[^"]*" \/>/i, `<meta property="og:title" content="${replacements.title}" />`);
  out = out.replace(/<meta property="og:description" content="[^"]*" \/>/i, `<meta property="og:description" content="${replacements.description}" />`);
  if (replacements.image) {
    out = out.replace(/<meta property="og:image" content="[^"]*" \/>/i, `<meta property="og:image" content="${replacements.image}" />`);
    out = out.replace(/<meta property="og:image:secure_url" content="[^"]*" \/>/i, `<meta property="og:image:secure_url" content="${replacements.image}" />`);
    out = out.replace(/<meta name="twitter:image" content="[^"]*" \/>/i, `<meta name="twitter:image" content="${replacements.image}" />`);
  }
  writeFileSync(destPath, out, 'utf8');
  console.log('Wrote', destPath);
}

// Generate blog post pages
const blogSource = readFileSync(blogPostsPath, 'utf8');
const slugMatches = [...blogSource.matchAll(/slug:\s*"([^"]+)"/g)];
const seoTitleMatches = [...blogSource.matchAll(/seoTitle:\s*"([^"]+)"/g)];
const seoDescMatches = [...blogSource.matchAll(/seoDescription:\s*"([^"]+)"/g)];
const imageMatches = [...blogSource.matchAll(/image:\s*"([^"]+)"/g)];

const blogCount = slugMatches.length;
for (let i = 0; i < blogCount; i++) {
  const slug = slugMatches[i][1];
  const title = seoTitleMatches[i] ? seoTitleMatches[i][1] : 'Vechura';
  const desc = seoDescMatches[i] ? seoDescMatches[i][1] : '';
  const image = imageMatches[i] ? `${baseUrl}/${imageMatches[i][1].replace(/^\//, '')}` : '';
  const outPath = path.join(outDir, 'blog', slug, 'index.html');
  writePage(outPath, {
    title,
    description: desc,
    canonical: `${baseUrl}/blog/${slug}`,
    image,
  });
}

// Generate landing pages
import fs from 'fs';
const landingFiles = fs.readdirSync(landingContentDir).filter((f) => f.endsWith('.ts'));
for (const file of landingFiles) {
  const content = fs.readFileSync(path.join(landingContentDir, file), 'utf8');
  const slugMatch = content.match(/slug:\s*"([^"]+)"/);
  const titleMatch = content.match(/seoTitle:\s*"([^"]+)"/);
  const descMatch = content.match(/seoDescription:\s*"([^"]+)"/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  const title = titleMatch ? titleMatch[1] : 'Vechura';
  const desc = descMatch ? descMatch[1] : '';
  const outPath = path.join(outDir, slug, 'index.html');
  writePage(outPath, {
    title,
    description: desc,
    canonical: `${baseUrl}/${slug}`,
    image: '',
  });
}

console.log('Prerender complete.');
