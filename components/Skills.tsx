import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { skillsBody } from '../typings'

type Props = {
  skills: skillsBody[]
}

const Skills = ({skills}: Props) => {
  
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray text-2xl'>Skills</h3>
       <h3 className="absolute top-36 uppercase tracking-[3px] text-gray text-sm">
            Hover over a skill to see my proficiency
       </h3>
       <div className="grid grid-cols-8 gap-4 mt-11">
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
    </motion.div>

  )
}

export default Skills