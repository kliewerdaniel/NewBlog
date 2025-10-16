import MotionDiv, { MotionArticle } from '../../../components/MotionDiv';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About – Daniel Kliewer",
  description: "Daniel Kliewer is a multifaceted AI Developer and Full-Stack Technologist operating at the intersection of human alignment, decentralized AI architectures, and high-integrity data systems. With over a decade in data annotation, he specializes in transforming human data into machine-readable formats."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Daniel Kliewer
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-600 mt-4 block">
                AI Developer & Full-Stack Technologist
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Operating at the critical intersection of human alignment, decentralized AI architectures, and high-integrity data systems.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-sm text-gray-600 space-x-4">
            <span>Austin, TX • danielkliewer@gmail.com • danielkliewer.com • GitHub: kliewerdaniel</span>
          </div>
        </div>
      </section>

      {/* I. Executive Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              I. Executive Summary: AI Development and Data Integrity
            </h2>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionArticle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Daniel Kliewer is a multifaceted AI Developer and Full-Stack Technologist operating at the critical intersection of human alignment, decentralized AI architectures, and high-integrity data systems. With a professional background spanning over a decade in rigorous data annotation methodologies and a self-taught mastery of modern software engineering, he specializes in transforming complex human data—such as psychological traits and writing styles—into quantifiable, machine-readable formats.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                His work is driven by a commitment to local-first computing (Loco LLMs), prioritizing data privacy, computational sovereignty, and cost-effective deployment over reliance on proprietary cloud services.
              </p>
            </MotionArticle>

            <MotionArticle
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/profile/8754022.jpeg"
                alt="Daniel Kliewer Profile"
                className="w-full max-w-sm mx-auto rounded-xl shadow-2xl object-cover"
              />
            </MotionArticle>
          </div>
        </div>
      </section>

      {/* II. Core Technical Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              II. Core Technical Expertise
            </h2>
          </MotionDiv>

          <MotionArticle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-6xl mx-auto">
              Mr. Kliewer possesses comprehensive full-stack capability across the development lifecycle, specializing in architectures designed for AI integration, data persistence, and scalable deployment.
            </p>
          </MotionArticle>

          {/* Technical Skills Table */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Domain</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Key Skills & Technologies</th>

                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Languages & Frameworks</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Python, JavaScript, TypeScript, React, Next.js (App Router), Django, Django REST Framework, FastAPI, Tailwind CSS</td>
                    <td className="px-6 py-4 text-sm text-gray-500"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">AI & LLM Tooling</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Ollama (Local Inference), RLHF (Reinforcement Learning from Human Feedback), ChromaDB (Vector Store), LangChain, SmolAgents, llama.cpp, OpenAI function calling, Pydantic AI</td>
                    <td className="px-6 py-4 text-sm text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Data & Databases</td>
                    <td className="px-6 py-4 text-sm text-gray-700">PostgreSQL (Relational Data), SQLite, MongoDB (NoSQL option), Universal Data Tool (UDT), JSON/JSONL pipelines, R (for NLP/data cleaning)</td>
                    <td className="px-6 py-4 text-sm text-gray-500"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Architecture & DevOps</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Docker (Containerization), Git/GitHub, Netlify (Cost-effective deployment), Continuous Integration/Deployment (CI/CD) practices, VSCode + Cline (AI-assisted workflow)</td>
                    <td className="px-6 py-4 text-sm text-gray-500"></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Specialized Skills</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Agent Orchestration (NetworkX, LangGraph), Dynamic Prompt Generation (using f-strings and metadata), Persona Modeling, SEO Optimization</td>
                    <td className="px-6 py-4 text-sm text-gray-500"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* III. Key Projects and Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              III. Key Projects and Achievements
            </h2>
          </MotionDiv>



          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                1. PersonaGen (Quantified Persona Generator)
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A proprietary full-stack application leveraging local LLMs (Ollama) to analyze writing samples, generate a highly detailed 50-metric JSON persona profile, and then use this structured data to generate tailored, style-cloned content.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-6">
                <li><strong>Technical Depth:</strong> The system utilizes recursive chain construction via LangChain/LangGraph to generate and store reasoning metadata in a vector database (ChromaDB) alongside structured JSON/SQLite for persistence, ensuring the persona evolves and maintains coherence ("round character" behavior).</li>
                <li><strong>Demonstration:</strong> Showcases advanced prompt engineering, data parsing via regex, and API integration (tested with XAi, Anthropic, and readily adaptable for OpenAI).</li>
              </ul>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                2. AI Agent Orchestration and Workflow Design
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2 mb-6">
                <li><strong>Tech Company Orchestrator & Workflow Repository:</strong> Authored a highly-starred open-source guide (workflow.git) detailing a documentation-driven development workflow for creating technology companies using AI agents. This framework uses graph structures (NetworkX) to define agent roles, data flow, and iterative prompt chains (stored in ai_guidelines.md and prompts.md).</li>
                <li><strong>Decentralized Intelligence:</strong> Implemented integrations of the Model Context Protocol (MCP) with OpenAI's Agents SDK and Ollama, establishing a framework for decentralized intelligence architectures that prioritize computational sovereignty.</li>
              </ul>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                3. AI-Integrated Personal Platforms
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
                <li><strong>Insight Journal Platform:</strong> Developed a privacy-focused journaling system integrating locally hosted LLMs (Ollama) to provide personalized feedback and insights on user entries, aiming to enhance self-reflection and cognitive engagement outside of commercial cloud platforms.</li>
                <li><strong>Multimodal Story Generation System:</strong> Built a system that transforms visual inputs into structured, multi-chapter narratives, employing RAG and LLM calls to summarize content into metadata to overcome the inherent limitations of context windows for long-form generation.</li>
              </ul>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* IV. Professional Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              IV. Professional Experience and Data Expertise
            </h2>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                Independent Developer & Annotator
              </h3>
              <p className="text-sm text-gray-600 mb-6">Austin, TX • 2022 – Present</p>

              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-3">
                <li><strong>Reinforcement Learning from Human Feedback (RLHF) Expert:</strong> Possesses over a decade of experience in high-integrity data annotation, including foundational work on platforms like Amazon Mechanical Turk (pre-iPhone era) and subsequent contracts for major tech companies.</li>
                <li><strong>Model Alignment & QA:</strong> Contributed directly to RLHF pipelines by providing human ranking and feedback on model outputs, training reward models to align LLM behavior toward specific goals (e.g., helpfulness, harmlessness, truthfulness). Expertise includes understanding annotator behavior and developing robust QA strategies to prevent circumvention.</li>
                <li><strong>Multimodal Data Processing:</strong> Annotated complex datasets, including video feeds collected from AR-integrated devices, transforming raw, real-world perception into structured linguistic intelligence for model training.</li>
              </ul>
            </div>
          </MotionDiv>

   

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                Fine Arts Professional and Web Designer (Freelance)
              </h3>
              <p className="text-sm text-gray-600 mb-6">January 2010 – Present</p>

              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-3">
                <li>Developed and maintained multiple digital presences and web applications (e.g., danielkliewer.com, kadaligogh.com, eastsidechess.org).</li>
                <li>Produced experimental film and digital art displayed at venues such as the Austin Film Society's Avant Cinema program and Co-Lab Projects (2012), demonstrating creative coding and multimedia expertise.</li>
              </ul>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* V. Education and Community Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              V. Education and Community Leadership
            </h2>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Self-Taught Mastery & Continuous Learning
              </h3>

              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-3 mb-8">
                <li><strong>Computer Science & Mathematics:</strong> Developed a strong theoretical foundation in linear algebra, advanced probability/statistics, data structures, and algorithms through rigorous self-study, leveraging resources from MIT OpenCourseWare and Harvard edX.</li>
                <li><strong>Community Advocacy:</strong> Founder of the Loco LLM Community and organizer of the Loco LLM Hackathons, promoting open-source AI development and community collaboration.</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">B.A. in History</h4>
              <p className="text-gray-700">University of Mary Hardin-Baylor • Belton, TX • 2003 – 2007</p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, .5), rgba(255, 255, 255, 0.9)),
                      url('/art/ComfyUI_00239_.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to collaborate on AI-driven projects, local-first technologies, or data annotation solutions that prioritize privacy and human alignment?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-blue-600"
              >
                Explore Projects
              </Link>
            </div>
          </MotionDiv>
        </div>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Daniel Kliewer",
              "url": "https://danielkliewer.com/about",
              "description": "Daniel Kliewer is a multifaceted AI Developer and Full-Stack Technologist operating at the intersection of human alignment, decentralized AI architectures, and high-integrity data systems. With over a decade in data annotation, he specializes in transforming human data into machine-readable formats.",
              "jobTitle": "AI Developer and Full-Stack Technologist",
              "sameAs": [
                "https://github.com/kliewerdaniel",
                "https://danielkliewer.com"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Reinforcement Learning from Human Feedback (RLHF)",
                "Full-Stack Development",
                "Local-First Computing",
                "Data Annotation",
                "Decentralized AI Architectures",
                "Agent Orchestration",
                "Persona Modeling",
                "Computational Literary Theory"
              ]
            })
          }}
        />
      </section>
    </div>
  );
}
