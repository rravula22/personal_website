import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{opacity:0, scale:0.8,}}
      animate={{opacity:1, scale:1,}}
      transition={{duration:1.5, delay:0.5, type:'string', stiffness:120,}}
     className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-30 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray">About</h3>
      <motion.img
        src='./profile.jpeg'
        initial={{x: -200, opacity: 1,}}
        whileInView={{opacity:1, scale:1, x: 0,}}
        transition={{duration:1.2,}}
        className='mt-44 md:mb-0 md:mr-20 md:-mt-20 md:ml-20 rounded-full h-96 w-96'
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-gray">
          Here's a{" "}
          <span className='underline decoration-[#F7AB0A]/50'>little bit</span>{""} about me
        </h4>
        <p className="text-gray text-sm">I'm Rakesh Ravula, a software engineer with 4+ years of experience in developing full stack web applications and working with various technologies. I'm currently pursuing my Master's degree in Computer Science at UAB, expected to graduate in May 2023.
          I'm passionate about building scalable and efficient web applications using the latest technologies. I'm also interested in blockchain technology and its applications in the real world.
          I'm currently looking for full-time opportunities in Software Engineering, Web Development, and Blockchain Development.
        </p>
      </div>
    </motion.div>
  )
}