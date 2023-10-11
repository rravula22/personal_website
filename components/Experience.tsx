import { motion } from 'framer-motion'
import { experienceBody } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
  experience: experienceBody[]
}

const Experience = ({experience}: Props) => {
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
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar-thin scrollbar-track-gray/20 scrollbar-thumb-[#F7AB0A]/80'>  
            {/* <ExperienceCard name="uab"/>
            <ExperienceCard name="pearson"/>
            <ExperienceCard name="astro"/>
            <ExperienceCard name="csa"/> */}
            {
              experience.map((exp) => (
                <ExperienceCard key={exp._id}  exp={exp} />
              ))
            }
        </div>
    </motion.div>
  )
}

export default Experience