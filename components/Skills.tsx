import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { skillsBody } from '../typings'

type Props = {
  skills: skillsBody[]
}

const Skills = ({ skills }: Props) => {
  return (
    <div className="min-h-screen py-20 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <p className="text-indigo text-sm uppercase tracking-[6px] mb-3 font-mono">Stack</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Tech{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo to-blue">
            Skills
          </span>
        </h2>
        <p className="text-slate text-sm">Hover over or focus a skill to see proficiency</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {skills.map((skill) => (
          <Skill
            key={skill._id}
            directionLeft={skill.directionLeft}
            name={skill.title}
            image={skill.image}
            progress={skill.progress}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills