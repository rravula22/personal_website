import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BgCircles({}: Props) {
  return (
    <motion.div
        initial={{opacity: 0,}}
        animate={{x:0, opacity:[0.1,0.2,0.4,0.8,1.0], scale:[1,2,2,3,1], borderRadius:[0,150,200,100,0]}}
        transition={{duration:2.5}}
     className='relative flex justify-center items-center'>
        <div className='absolute border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='rounded-full border border-green-500 h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='border border-orange-500 rounded-full h-[200px] w-[200px] mt-52 absolute'/>
        <div className='absolute border border-red-500 rounded-full h-[200px] w-[200px] mt-52'/>
        <div className='absolute border border-red-500 rounded-full h-[200px] w-[200px] mt-52'/>
    </motion.div>
  )
}

export default BgCircles