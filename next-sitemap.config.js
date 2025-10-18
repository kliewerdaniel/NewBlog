/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://danielkliewer.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  outDir: 'out',
  // Exclude draft posts and admin pages
  exclude: [
    '/admin/*',
    '/dashboard/*',
    '/drafts/*',
    '/api/*',
  ],
  // Additional paths to include
  additionalPaths: async (config) => {
    const result = [];

    // Add static pages
    result.push({
      url: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastModified: new Date(),
    });

    result.push({
      url: '/about',
      changefreq: 'monthly',
      priority: 0.8,
      lastModified: new Date(),
    });

    result.push({
      url: '/projects',
      changefreq: 'weekly',
      priority: 0.9,
      lastModified: new Date(),
    });

    result.push({
      url: '/blog',
      changefreq: 'daily',
      priority: 0.9,
      lastModified: new Date(),
    });

    // Add blog posts dynamically
    try {
      const fs = require('fs');
      const path = require('path');
      const matter = require('gray-matter');

      const blogDir = path.join(process.cwd(), 'content', 'blog');
      const files = fs.readdirSync(blogDir);
      const mdFiles = files.filter(file => file.endsWith('.md'));

      for (const file of mdFiles) {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        const slug = file.replace(/\.md$/, '');

        // Only include published posts (no draft posts)
        if (!data.draft) {
          result.push({
            url: `/blog/${slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastModified: data.date ? new Date(data.date) : new Date(),
          });
        }
      }
    } catch (error) {
      console.error('Error generating blog post URLs for sitemap:', error);
    }

    return result;
  },
  // Transform function to customize entries
  transform: async (config, path) => {
    // Set higher priority for important pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  // Robots.txt options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/dashboard/',
          '/drafts/',
          '/api/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/dashboard/',
          '/drafts/',
          '/api/',
        ],
      },
    ],
    additionalSitemaps: [
      'https://danielkliewer.com/sitemap.xml',
    ],
  },
};
