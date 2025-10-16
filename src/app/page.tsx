import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MotionDiv, { MotionArticle } from '../../components/MotionDiv';
import { motion } from 'framer-motion';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  categories: string[];
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const files = await fs.readdir(blogDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    const posts = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = path.join(blogDir, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data } = matter(fileContent);

        const slug = file.replace(/\.md$/, '');

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || 'No date',
          description: data.description || '',
          tags: data.tags || [],
          categories: data.categories || [],
        };
      })
    );

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [
      {
        slug: 'building-simulacra-agent',
        title: 'Building Chrisbot: The Quest for Digital Immortality',
        date: '2025-01-20',
        description: 'Exploring the technical and philosophical challenges of creating a persona-based reasoning agent that preserves a lost friend\'s consciousness through AI.',
        tags: ['ai', 'simulacra', 'machine-learning', 'philosophy', 'artificial-intelligence'],
        categories: ['AI Development', 'Technical Philosophy'],
      },
      {
        slug: 'local-first-ai-principles',
        title: 'Local-First AI: Privacy, Sovereignty, and Independence',
        date: '2025-01-15',
        description: 'Diving deep into the principles and practices of running AI systems locally, with a focus on user privacy and technical sovereignty.',
        tags: ['privacy', 'ollama', 'local-ai', 'sovereignty', 'open-source'],
        categories: ['AI Integration & Development', 'Privacy & Ethics'],
      },
    ];
  }
}

export default async function HomePage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Daniel Kliewer:{' '}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                AI Developer
              </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
                Creative Technologist and Architect of Digital Identity
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Bridging Artificial Intelligence, Creative Coding, and Digital Art to Create Immersive Experiences
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/about"
                className="btn-professional px-8 py-4 text-lg font-semibold"
              >
                My Journey
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 text-lg font-semibold border-2 border-accent text-accent hover:bg-accent/5 transition-colors rounded-lg"
              >
                View Projects
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Skills Highlights */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/art/ComfyUI_00233_.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
        

          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Recursive Architect</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stop using AI like a tool—start building with it like a partner. Mind-expanding blueprint for creators who want to evolve from AI users into AI superarchitects.
              </p>
              <a
                href="https://6340588028610.gumroad.com/l/eunvm?_gl=1*1mns354*_ga*MzE3MDczOTcwLjE3NTc2MTM4MzI.*_ga_6LJN6D94N6*czE3NjA2MDg4NDAkbzUkZzEkdDE3NjA2MDg4NzkkajIxJGwwJGgw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Book
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Zero-Budget AI Products</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Zero-budget guide to building, launching, and selling AI products as a solo creator using free tools like ChatGPT, Ollama, and Netlify.
              </p>
              <a
                href="https://6340588028610.gumroad.com/l/bulxtf?_gl=1*qim3nb*_ga*MzE3MDczOTcwLjE3NTc2MTM4MzI.*_ga_6LJN6D94N6*czE3NjA2MDg4NDAkbzUkZzEkdDE3NjA2MDg4OTkkajEkbDAkaDA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Book
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Agentic Knowledge Graphs</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Inspired by systems thinking and local-first tooling, build a network of AI agents that reflect, analyze, and adapt—designed for deep thinkers.
              </p>
              <a
                href="https://6340588028610.gumroad.com/l/ddsrtm?_gl=1*190d6zg*_ga*MzE3MDczOTcwLjE3NTc2MTM4MzI.*_ga_6LJN6D94N6*czE3NjA2MDg4NDAkbzUkZzEkdDE3NjA2MDg4OTEkajYwJGwwJGgw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Book
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Persona Design for AI</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hands-on guide to building realistic writing personas for AI. Reverse-engineer style and make LLMs sound like real people.
              </p>
              <a
                href="https://6340588028610.gumroad.com/l/squjox?_gl=1*iz565q*_ga*MzE3MDczOTcwLjE3NTc2MTM4MzI.*_ga_6LJN6D94N6*czE3NjA2MDg4NDAkbzUkZzEkdDE3NjA2MDg4OTAkajU3JGwwJGgw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Book
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
    

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <MotionArticle
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-professional"
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-accent hover:text-accent/80 font-medium transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </MotionArticle>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="btn-professional px-8 py-4"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/art/ComfyUI_00234_.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Collaborate & Innovate
            </h2>
            <p className="text-xl text-accent-foreground/80 mb-8 leading-relaxed">
              From AI systems that democratize technology to digital resurrection projects that preserve human memory,
              let's build the future of human-centric AI together.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
