import { motion } from 'framer-motion'
import { experienceBody } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
  experience: experienceBody[]
}

const Experience = ({ experience }: Props) => {
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
        <p className="text-indigo text-sm uppercase tracking-[6px] mb-3 font-mono">Career</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Work{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo to-blue">
            Experience
          </span>
        </h2>
      </motion.div>

      {/* Scrollable cards */}
      <div className="w-full flex space-x-6 overflow-x-scroll pb-6 snap-x snap-mandatory
        scrollbar-thin scrollbar-track-navy scrollbar-thumb-indigo/40">
        {experience.map((exp) => (
          <ExperienceCard key={exp._id} exp={exp} />
        ))}
      </div>
    </div>
  )
}

export default Experience