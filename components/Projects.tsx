import React from 'react'
import { motion } from 'framer-motion'
import { projectsBody } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: projectsBody[]
}

const Projects = ({projects}: Props) => {

  return (
    <motion.div
    initial={{opacity: 0,}}
    transition={{duration:1.5}}
    whileInView={{opacity:1}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray text-2xl'>Projects</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar-thin scrollbar-track-gray/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center p-10'
                key={project._id}>
                    <motion.img
                        initial={{opacity: 0, y: -300}}
                        transition={{duration:1.5}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once: true}}
                        src= {urlFor(project.image).url() || ''}
                        alt={project.title || ''}
                        className='border border-gray object w-60 h-60 md:w-96 md:h-96'
                    />
                    <div>
                        <h4 className='text-4xl font-semibold text-gray text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                                {project.title}
                            </span>
                        </h4>
                        <p className='text-lg text-center md:text-left text-gray-light'>
                            {project.summary}
                        </p> 
                        <p className='text-lg text-center md:text-left text-[#FABA0A]'>
                            Technologies Used: {project.technologies.map((tech) => (
                                <span className='text-gray-light' key={tech._id}> {tech.title}, </span>
                            ))}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Projects