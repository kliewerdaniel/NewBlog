'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../../components/ProjectCard';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
}

// Full fallback data of all interactive repos from crawled data
const fallbackProjects = [
  {
    name: 'Workflow',
    description: 'Structured AI-Assisted Development Workflow Guide',
    language: null,
    html_url: 'https://github.com/kliewerdaniel/workflow',
    stars: 27,
    forks: 0,
    watchers: 27,
    category: 'AI Development'
  },
  {
    name: 'AutoBlog',
    description: 'A professional Next.js blogging platform with advanced AI-driven content generation. Auto-Blog leverages RSS feed analysis and Retrieval-Augmented Generation (RAG) to create high-quality, SEO-optimized blog content automatically. Built for content creators, marketers, and businesses who want to scale their blogging efforts with AI assistance.',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/autoblog01',
    stars: 13,
    forks: 2,
    watchers: 13,
    category: 'Full-Stack AI'
  },
  {
    name: 'OpenAIAgentsSDKOllama',
    description: 'OpenAI Agents SDK integration with Ollama for local LLM deployments',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/OpenAIAgentsSDKOllama01',
    stars: 10,
    forks: 1,
    watchers: 10,
    category: 'AI Orchestration'
  },
  {
    name: 'KnowledgeGraph',
    description: 'Implementation of knowledge graphs for enhanced AI reasoning and information retrieval',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/KnowledgeGraph01',
    stars: 6,
    forks: 2,
    watchers: 6,
    category: 'AI Development'
  },
  {
    name: 'Chrome-AI-Filename-Generator',
    description: 'Browser extension that uses AI to generate descriptive and organized filenames automatically',
    language: 'JavaScript',
    html_url: 'https://github.com/kliewerdaniel/chrome-ai-filename-generator',
    stars: 6,
    forks: 0,
    watchers: 6,
    category: 'AI Development'
  },
  {
    name: 'news02',
    description: 'News Broadcast Generator Script',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/News02',
    stars: 7,
    forks: 1,
    watchers: 7,
    category: 'News Generator'
  },
  {
    name: 'news08',
    description: 'News Broadcast Generator Script',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/news08',
    stars: 7,
    forks: 1,
    watchers: 7,
    category: 'News Generator'
  },
  {
    name: 'NextGenPersonaGen',
    description: 'Next-level persona generation platform focusing on advanced character creation for AI interactions',
    language: 'TypeScript',
    html_url: 'https://github.com/kliewerdaniel/ngpg07',
    stars: 5,
    forks: 0,
    watchers: 5,
    category: 'AI Development'
  },
  {
    name: 'news11',
    description: 'News Broadcast Generator',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/news11',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'News Generator'
  },
  {
    name: 'news13',
    description: 'News Broadcast Generator',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/news13',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'News Generator'
  },
  {
    name: 'PersonaGen',
    description: 'Advanced persona and character generation system for AI interactions and content creation.',
    language: 'TypeScript',
    html_url: 'https://github.com/kliewerdaniel/PersonaGen',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'AI Development'
  },
  {
    name: 'RedDiss',
    description: 'Entry for Loco Local LocalLLaMa Hackathon 1.0',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/RedDiss',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'Creative AI'
  },
  {
    name: 'PersonaGen01',
    description: 'Persona and Character Generation System for AI Interactions and Content Creation',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/PersonaGen01',
    stars: 4,
    forks: 0,
    watchers: 4,
    category: 'AI Development'
  },
  {
    name: 'ImageToBook',
    description: 'AI Image to Book Generator',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/ITB02',
    stars: 3,
    forks: 0,
    watchers: 3,
    category: 'AI Development'
  },
  {
    name: 'RedToBlog02',
    description: 'Reddit to Blog Post Generator',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/RedToBlog02',
    stars: 3,
    forks: 0,
    watchers: 3,
    category: 'Creative AI'
  },
  {
    name: 'reasonai03',
    description: 'Ollama Reasoing Agent Next.JS Framework',
    language: 'TypeScript',
    html_url: 'https://github.com/kliewerdaniel/reasonai03',
    stars: 4,
    forks: 2,
    watchers: 4,
    category: 'Full-Stack AI'
  },
  {
    name: 'GhostWriter',
    description: 'AI-Powered Writing Assistant and Content Generator',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/GhostWriter',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'AI Development'
  },
  {
    name: 'Orchestrator-Ollama',
    description: 'Multi-Agent Orchestrator using Ollama Local LLMs',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/Orchestrator-Ollama',
    stars: 4,
    forks: 0,
    watchers: 4,
    category: 'AI Orchestration'
  },
  {
    name: 'reverie-reactor01',
    description: 'Combine your thoughts, reddit history, and real time news into personalized visual narratives using local LLMs and Stable Diffusion.',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/reverie-reactor01',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'Creative AI'
  },
  {
    name: 'bumcpo01',
    description: 'Browser-Use MCP Ollama Researcher',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/bumcpo01',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'AI Orchestration'
  },
  {
    name: 'lldp01',
    description: 'Local LLM Document Processing',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/lldp01',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'AI Development'
  },
  {
    name: 'reddit-eval',
    description: 'Reddit Data Annotation and Evaluation Tool',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/Reddit-Eval',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'AI Development'
  },
  {
    name: 'ai-research-assistant',
    description: 'AI Research Assistant for Data Annotation and Analysis',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/ai_research_assistant',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'AI Development'
  },
  {
    name: 'agentickg01',
    description: 'Basic Agentic Knowledge Graph',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/agentickg01',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'AI Development'
  },
  {
    name: 'tech-company-orchestrator',
    description: 'Tech Company Orchestrator',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/tech-company-orchestrator',
    stars: 2,
    forks: 0,
    watchers: 2,
    category: 'AI Orchestration'
  },
  {
    name: 'PersonaGen07',
    description: 'Next-level persona generation platform focusing on advanced character creation for AI interactions',
    language: 'TypeScript',
    html_url: 'https://github.com/kliewerdaniel/PersonaGen07',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'AI Development'
  },
  {
    name: 'news17',
    description: 'Infinite Newsfeed Generator',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/news17',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'News Generator'
  },
  {
    name: 'news21',
    description: 'Infinite NewsFeed Generator with Basic UI',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/news21',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'News Generator'
  },
  {
    name: 'news23',
    description: 'Quant Infinite News Generator',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/news23',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'News Generator'
  },
  {
    name: 'q01',
    description: 'A production-grade implementation of quantum-resilient cryptographic protocols for secure communications, demonstrating practical applications of post-quantum cryptography (PQC), quantum key distribution (QKD) simulation, and quantum-enhanced security mechanisms described in SIPRI\'s 2025 military and security quantum technologies primer.',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/q01',
    stars: 1,
    forks: 1,
    watchers: 1,
    category: 'AI Development'
  },
  {
    name: 'r02',
    description: 'Prototype of an API service secured by a hybrid, quantum-aware security stack: Post-Quantum Cryptography (PQC) for authentication + Quantum Key Distribution (QKD) / Quantum Random Number Generator (QRNG) elements where available to derive session symmetric keys (the \"QASP\" approach).',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/r02',
    stars: 1,
    forks: 1,
    watchers: 1,
    category: 'AI Development'
  },
  {
    name: 'obj01',
    description: 'Objective Newsfeed - A Tool for Truth',
    language: 'TypeScript',
    html_url: 'https://github.com/kliewerdaniel/obj01',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'News Generator'
  },
  {
    name: 'obj02',
    description: 'Objective Newsfeed',
    language: 'TypeScript',
    html_url: 'https://github.com/kliewerdaniel/obj02',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'News Generator'
  },
  {
    name: 'news03',
    description: 'AI News Digest Generator',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/news03',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'News Generator'
  },
  {
    name: 'news04',
    description: 'News Broadcast Generator Script',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/news04',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'News Generator'
  },
  {
    name: 'TextAdventure',
    description: 'AI Choose Your Own Adventure Generator From Images',
    language: 'Python',
    html_url: 'https://github.com/kliewerdaniel/TextAdventure',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'Creative AI'
  },
  {
    name: 'AI-Blog',
    description: 'Static website template designed specifically for AI-related content and blogging. Features optimized layouts and components for showcasing artificial intelligence projects, research, and developments.',
    language: 'HTML',
    html_url: 'https://github.com/kliewerdaniel/AI-Blog',
    stars: 1,
    forks: 1,
    watchers: 1,
    category: 'AI Development'
  },
  {
    name: 'bearwaifu01',
    description: 'Basically Uber but instead of cars it would be an app which pairs Bear Waifus with their paying customers and the Bear Waifu would transport the customer on their shoulder carrying them around town so that the willing participant can say sassy things without fear of reprisal by unamused spectators.',
    language: 'HTML',
    html_url: 'https://github.com/kliewerdaniel/bearwaifu01',
    stars: 0,
    forks: 1,
    watchers: 0,
    category: 'Creative AI'
  },
  {
    name: 'textadventure07',
    description: 'AI-powered choose-your-own-adventure generator that creates personalized narratives from images. Combines computer vision with natural language generation to transform visual input into interactive storytelling experiences.',
    language: 'TypeScript',
    html_url: 'https://github.com/kliewerdaniel/textadventure07',
    stars: 1,
    forks: 0,
    watchers: 1,
    category: 'Creative AI'
  }
];

interface Project {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stars: number;
  forks: number;
  watchers: number;
  category: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Attempt to fetch from GitHub API - get more repos to catch all with interaction
        const response = await fetch('https://api.github.com/users/kliewerdaniel/repos?sort=updated&per_page=100');

        if (response.ok) {
          const repos: GitHubRepo[] = await response.json();

          // Map GitHub data to project format, filter for repos with community interaction (stars/forks)
          const mappedProjects = repos
            .filter(repo => {
              // Include repos with any community interaction (stars or forks)
              return repo.stargazers_count > 0 || repo.forks_count > 0;
            })
            .sort((a, b) => b.stargazers_count - a.stargazers_count || b.forks_count - a.forks_count) // Sort by stars then forks descending
            // No slice - show ALL repos with interaction
            .map(repo => ({
              name: repo.name,
              description: expandedDescriptions[repo.name] || repo.description || generateDescription(repo.name, repo.language),
              language: repo.language || 'Unknown',
              html_url: repo.html_url,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              watchers: repo.watchers_count,
              category: determineCategory(repo.name, repo.description)
            }));

          // Expanded descriptions for repos that need better descriptions
          const expandedDescriptions: { [key: string]: string } = {
            'workflow': 'A comprehensive framework for AI-assisted development workflows, providing structured guidance for integrating artificial intelligence into software development processes. This methodology has gained significant community attention for its practical approach to improving developer productivity.',
            'autoblog01': 'A professional Next.js blogging platform with advanced AI-driven content generation. Auto-Blog leverages RSS feed analysis and Retrieval-Augmented Generation (RAG) to create high-quality, SEO-optimized blog content automatically. Built for content creators, marketers, and businesses who want to scale their blogging efforts with AI assistance.',
            'OpenAIAgentsSDKOllama01': 'Integration of OpenAI\'s Agents SDK with Ollama for local LLM deployments. Enables developers to build sophisticated AI agents that run entirely on local infrastructure, combining the power of modern agent frameworks with open-source language models.',
            'KnowledgeGraph01': 'Implementation of knowledge graphs for enhanced AI reasoning and information retrieval. This project explores graph-based data structures and algorithms for creating more sophisticated AI systems capable of understanding complex relationships between concepts.',
            'chrome-ai-filename-generator': 'Browser extension that uses AI to generate descriptive and organized filenames automatically. Helps users maintain better file organization by leveraging machine learning to understand file content and suggest appropriate naming conventions.',
            'News02': 'Automated news broadcast generator script that creates personalized news content. Uses AI to curate and present news in an engaging broadcast format, demonstrating practical applications of natural language generation in media.',
            'news08': 'Advanced news broadcasting system with enhanced content generation capabilities. Features sophisticated algorithms for news aggregation, summarization, and presentation, creating compelling news content automatically.',
            'ngpg07': 'Next-level persona generation platform focusing on advanced character creation for AI interactions. Features sophisticated psychological modeling and personality-driven content generation for more realistic AI-human interactions.',
            'q01': 'Production-grade implementation of quantum-resilient cryptographic protocols for secure communications. Demonstrates practical applications of post-quantum cryptography (PQC), quantum key distribution (QKD) simulation, and quantum-enhanced security mechanisms.',
            'r02': 'Prototype of an API service secured by a hybrid, quantum-aware security stack: Post-Quantum Cryptography (PQC) for authentication + Quantum Key Distribution (QKD) / Quantum Random Number Generator (QRNG) elements to derive session symmetric keys.',
            'reasonai03': 'Full-stack reasoning agent framework built with Next.js and Ollama. Provides a web-based interface for creating and managing AI agents that can perform complex reasoning tasks with local LLM inference.',
            'AI-Blog': 'Static website template designed specifically for AI-related content and blogging. Features optimized layouts and components for showcasing artificial intelligence projects, research, and developments.',
            'TextAdventure': 'AI-powered choose-your-own-adventure generator that creates personalized narratives from images. Combines computer vision with natural language generation to transform visual input into interactive storytelling experiences.',
            'Reverie-Reactor01': 'Advanced system that generates personalized visual narratives by combining user thoughts, Reddit history, and real-time news. Uses local LLMs and Stable Diffusion to create unique, emotionally resonant visual stories.',
            'ITB02': 'Intelligent text processing and analysis platform focusing on advanced natural language understanding and generation. Features sophisticated algorithms for text comprehension, summarization, and insight extraction.'
          };

          // Helper function for generating descriptions when none exist
          function generateDescription(name: string, language?: string): string {
            const lowerName = name.toLowerCase();
            if (lowerName.includes('persona')) return 'Advanced persona and character generation system for AI interactions and content creation.';
            if (lowerName.includes('news')) return 'Automated news content generation and broadcasting system utilizing AI technologies.';
            if (lowerName.includes('agent')) return 'Intelligent agent framework for automated task execution and problem solving.';
            if (lowerName.includes('knowledge')) return 'Knowledge representation and graph processing system for enhanced AI reasoning.';
            if (lowerName.includes('orchestrator')) return 'Multi-agent orchestration platform for complex workflow automation.';
            if (lowerName.includes('blog')) return 'AI-enhanced blogging platform with automated content generation capabilities.';
            return `AI-powered project built with ${language || 'multiple technologies'} focusing on intelligent automation and content generation.`;
          }

          if (mappedProjects.length > 0) {
            // Prioritize API results but include fallback projects if not covered
            setProjects([...mappedProjects, ...fallbackProjects.filter(fallback =>
              !mappedProjects.some(mapped => mapped.name === fallback.name)
            )]);
          }
        }
      } catch (err) {
        console.warn('GitHub API unavailable, using fallback data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const determineCategory = (name: string, description: string): string => {
    const desc = description?.toLowerCase() || '';
    if (name.includes('autoblog01') || desc.includes('blog') || desc.includes('content generation')) return 'Full-Stack AI';
    if (name.includes('PersonaGen') || desc.includes('persona')) return 'AI Development';
    if (name.includes('TechCompany') || desc.includes('orchestrator')) return 'AI Orchestration';
    if (name.includes('ReasonAI') || desc.includes('reasoning')) return 'Full-Stack AI';
    if (name.includes('RedDiss') || desc.includes('diss tracks')) return 'Creative AI';
    if (desc.includes('annotation') || desc.includes('data')) return 'Data Tools';
    if (desc.includes('news') || desc.includes('broadcast')) return 'Creative AI';
    return 'AI Development';
  };

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 sm:py-16">

        {/* Filter buttons should scroll on small screens */}
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 gap-2 sm:gap-4 sm:flex-wrap sm:justify-center sm:pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-2 text-sm font-medium rounded-full whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        {/* Header */}


        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Featured Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            A showcase of cutting-edge AI development projects, from local-first LLM orchestration to creative AI applications and innovative data annotation tools.
          </p>
        </motion.div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="card-professional animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 text-lg mb-4">Error loading projects</p>
            <p className="text-gray-600">{error}</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.name}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            These projects represent ongoing efforts in AI development. If you're interested in contributing,
            partnering, or exploring similar technologies, let's connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="btn-professional px-6 sm:px-8 py-3 sm:py-4 text-center"
            >
              Learn More About Me
            </a>
            <a
              href="https://github.com/kliewerdaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-center"
            >
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
