import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div 
        initial={{opacity: 0,}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='h-screen flex overflow-hidden flex-col text-left md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-10 uppercase tracking-[20px] text-gray text-2xl'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>  
            <ExperienceCard name="uab"/>
            <ExperienceCard name="pearson"/>
            <ExperienceCard name="astro"/>
            <ExperienceCard name="csa"/>
        </div>
    </motion.div>
  )
}

export default Experience