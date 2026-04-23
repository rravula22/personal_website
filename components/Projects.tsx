import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GitHubProject, categoryLabels, languageColors, githubProjects } from '../data/githubProjects'

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const categories = ["all", "fullstack", "frontend", "backend", "systems", "tools", "ml"]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? githubProjects
    : githubProjects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen py-20 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-indigo text-sm uppercase tracking-[6px] mb-3 font-mono">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          GitHub{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo to-blue">
            Projects
          </span>
        </h2>
        <p className="text-slate max-w-xl mx-auto text-sm md:text-base">
          A collection of projects built across full-stack, systems, ML, and cloud domains.
        </p>
        <a
          href="https://github.com/rravula22"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-slate text-sm hover:text-indigo transition-colors duration-200"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          View all repositories →
        </a>
      </motion.div>

      {/* Category filter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-200 border
              ${activeCategory === cat
                ? "bg-indigo border-indigo text-white shadow-glow"
                : "border-navy-light text-slate hover:border-indigo hover:text-indigo bg-surface"
              }`}
          >
            {cat === "all" ? "All" : categoryLabels[cat]}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  )
}

function ProjectCard({ project }: { project: GitHubProject }) {
  const langColor = project.language ? (languageColors[project.language] ?? "#6366f1") : "#6366f1"
  const catLabel = categoryLabels[project.category]

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col bg-surface border border-navy-light rounded-xl p-6
        hover:border-indigo transition-all duration-300 hover:shadow-glow cursor-pointer"
    >
      {/* Top row: category badge + stars */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-navy-light text-slate border border-navy-light">
          {catLabel}
        </span>
        {project.stargazers_count > 0 && (
          <span className="flex items-center gap-1 text-amber text-xs font-medium">
            <StarIcon />
            {project.stargazers_count}
          </span>
        )}
      </div>

      {/* Project name */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo transition-colors duration-200 font-mono">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-slate text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Topics */}
      {project.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded text-xs bg-navy text-slate border border-navy-light"
            >
              #{topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer: language + GitHub link */}
      <div className="flex items-center justify-between pt-4 border-t border-navy-light mt-auto">
        {project.language ? (
          <span className="flex items-center gap-1.5 text-xs text-slate">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: langColor }}
            />
            {project.language}
          </span>
        ) : (
          <span />
        )}
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-indigo font-medium hover:text-blue transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          View on GitHub
          <ExternalLinkIcon />
        </a>
      </div>
    </motion.div>
  )
}

export default Projects