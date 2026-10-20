import fs from "fs";
import path from "path";
import { CILAD_PUBLICATIONS } from "../src/data/ciladData";

const DOMAIN = "https://www.cilad.in";

interface StaticRoute {
  path: string;
  priority?: string;
  changefreq?: string;
  lastmod?: string;
}

// Static routes in CILAD
const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/research", priority: "0.8", changefreq: "monthly" },
  { path: "/editorials", priority: "0.9", changefreq: "weekly" },
  { path: "/initiatives", priority: "0.8", changefreq: "monthly" },
  { path: "/publications", priority: "0.8", changefreq: "monthly" },
  { path: "/events", priority: "0.8", changefreq: "monthly" },
  { path: "/team", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "monthly" },
  { path: "/submit", priority: "0.7", changefreq: "monthly" },
];

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

function generateSitemapXml(): string {
  const publishedArticles = CILAD_PUBLICATIONS.filter((p) => p.status === "published");

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static Routes
  for (const route of STATIC_ROUTES) {
    const loc = `${DOMAIN}${route.path}`;
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(loc)}</loc>\n`;
    if (route.lastmod) {
      xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    }
    xml += `  </url>\n`;
  }

  // Dynamic Article / Editorial Routes
  for (const article of publishedArticles) {
    const loc = `${DOMAIN}/#/article/${article.slug}`;
    const dateStr = article.isoDate || article.updatedDate || article.date;
    const lastmod = dateStr && /^\d{4}-\d{2}-\d{2}/.test(dateStr) ? dateStr.substring(0, 10) : undefined;

    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(loc)}</loc>\n`;
    if (lastmod) {
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
    }
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
}

function main() {
  const publicDir = path.resolve(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapContent = generateSitemapXml();
  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemapContent, "utf-8");
  console.log(`Successfully generated sitemap.xml at ${sitemapPath}`);

  const robotsContent = generateRobotsTxt();
  const robotsPath = path.join(publicDir, "robots.txt");
  fs.writeFileSync(robotsPath, robotsContent, "utf-8");
  console.log(`Successfully generated robots.txt at ${robotsPath}`);
}

main();
