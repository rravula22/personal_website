import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BgCircles({}: Props) {
  return (
    <motion.div
        initial={{opacity: 0,}}
        animate={{opacity:[0.1,0.2,0.4,0.8,1.0], scale:[1,2,2,3,1], borderRadius:[0,150,200,300,400,500,400, 300, 100,0]}}
        transition={{duration:1.0}}
     className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='rounded-full border border-gray-dark h-[300px] w-[300px] mt-52 absolute'/>
        <div className='border border-[#333333] rounded-full opacity-5 h-[500px] w-[500px] mt-52 absolute'/>
        <div className='absolute border border-[#F7AB0A] rounded-full opacity-20 h-[500px] w-[500px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[650px] w-[650px] mt-52'/>
    </motion.div>
  )
}

export default BgCircles