import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import TableOfContents from '../../components/TableOfContents';
import Callout from '../../components/Callout';
import MarkdownRenderer from '../../components/MarkdownRenderer';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  categories: string[];
  content: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);

    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || 'No date',
        description: data.description || '',
        tags: data.tags || [],
        categories: data.categories || [],
        content,
      };
    } catch {
      // Blog post not found
      return null;
    }
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const files = await fs.readdir(blogDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    const posts = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = path.join(blogDir, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        const slug = file.replace(/\.md$/, '');

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || 'No date',
          description: data.description || content.slice(0, 150) + '...',
          tags: data.tags || [],
          categories: data.categories || [],
          content,
        };
      })
    );

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const postUrl = `https://danielkliewer.com/blog/${post.slug}`;
  const publishDate = new Date(post.date).toISOString();

  return {
    title: `${post.title} | Daniel Kliewer`,
    description: post.description || `Read "${post.title}" by Daniel Kliewer - insights on AI development, local-first AI solutions, and innovative technology projects.`,
    keywords: [
      ...post.tags,
      'AI Development',
      'Machine Learning',
      'Local-First AI',
      'Daniel Kliewer',
      'Technical Blog',
      'AI Insights'
    ],
    authors: [{ name: "Daniel Kliewer", url: "https://danielkliewer.com" }],
    publishedTime: publishDate,
    modifiedTime: publishDate,
    openGraph: {
      title: `${post.title} | Daniel Kliewer`,
      description: post.description || `Read "${post.title}" by Daniel Kliewer - insights on AI development, local-first AI solutions, and innovative technology projects.`,
      url: postUrl,
      siteName: "Daniel Kliewer",
      locale: "en_US",
      type: "article",
      publishedTime: publishDate,
      modifiedTime: publishDate,
      authors: ["Daniel Kliewer"],
      tags: post.tags,
      images: [
        {
          url: "/profile/8754022.jpeg",
          width: 1200,
          height: 630,
          alt: `${post.title} - Daniel Kliewer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Daniel Kliewer`,
      description: post.description || `Read "${post.title}" by Daniel Kliewer - insights on AI development, local-first AI solutions, and innovative technology projects.`,
      images: ["/profile/8754022.jpeg"],
      creator: "@danielkliewer",
      site: "@danielkliewer",
    },
    alternates: {
      canonical: postUrl,
    },
    robots: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div>
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Post Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The blog post you're looking for doesn't exist.
            </p>

          </div>
        </div>
      </div>
    );
  }

  // Structured data for blog post
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": "Daniel Kliewer",
      "url": "https://danielkliewer.com/about"
    },
    "publisher": {
      "@type": "Person",
      "name": "Daniel Kliewer",
      "url": "https://danielkliewer.com"
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "url": `https://danielkliewer.com/blog/${post.slug}`,
    "keywords": post.tags.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://danielkliewer.com/blog/${post.slug}`
    },
    "articleSection": post.categories?.[0] || "AI Development",
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${Math.ceil(post.content.split(' ').length / 200)}M`, // Estimated reading time
    "image": "/profile/8754022.jpeg"
  };


  return (
    <div className="relative">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">


        {/* Article Header */}
        <article>
          <header className="mb-16">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <h1 className="text-4xl font-bold text-black mb-8">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {post.description}
              </p>
            )}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownRenderer content={post.content} />
          </div>
        </article>

     
      </div>

    </div>
  );
}
