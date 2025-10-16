import { motion } from 'framer-motion';

interface Project {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  category: string;
  html_url: string;
}

interface ProjectCardProps {
  project?: Project;
  index?: number;
  name?: string;
  description?: string;
  html_url?: string;
  homepage?: string;
  language?: string;
  stargazers_count?: number;
  topics?: string[];
  hasImage?: boolean;
}

export default function ProjectCard({
  project,
  index = 0,
  name,
  description,
  html_url,
  language,
  stargazers_count = 0
}: ProjectCardProps) {
  // Use props or fallback to project object
  const displayName = name || project?.name || 'Unknown Project';
  const displayDescription = description || project?.description || '';
  const displayUrl = html_url || project?.html_url || '';
  const displayLanguage = language || project?.language || 'Unknown';
  const displayStars = project?.stars || stargazers_count || 0;
  const displayForks = project?.forks || 0;
  const displayCategory = project?.category || 'Project';



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="card-professional hover:shadow-xl transition-all duration-300 w-full">
        <div className="px-4 py-3 flex items-center gap-4">
          {/* Title */}
          <h3 className="font-bold text-gray-900 truncate flex-1 min-w-0">
            {displayName}
          </h3>

          {/* Description (truncated) */}
          {displayDescription && (
            <p className="text-sm text-gray-600 truncate flex-1 min-w-0">
              {displayDescription}
            </p>
          )}

          {/* Language badge */}
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full flex-shrink-0">
            {displayLanguage}
          </span>

          {/* Stats */}
          <div className="flex items-center gap-3 flex-shrink-0 text-xs text-gray-500">
            <div className="flex items-center">
              <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {displayStars}
            </div>
            <div className="flex items-center">
              <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 6H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {displayForks}
            </div>
          </div>

          {/* Category */}
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full flex-shrink-0">
            {displayCategory}
          </span>

          {/* Action */}
          <a
            href={displayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-professional text-sm px-3 py-1 inline-flex items-center flex-shrink-0"
          >
            <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View
          </a>
        </div>
      </div>
    </motion.div>
  );
}
