import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BgCircles({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden'
    >
        <div className='absolute rounded-full h-[300px] w-[300px] border border-indigo/10 animate-ping' style={{ animationDuration: '3s' }} />
        <div className='absolute rounded-full h-[500px] w-[500px] border border-indigo/5' />
        <div className='absolute rounded-full h-[700px] w-[700px] border border-indigo/5' />
        <div className='absolute rounded-full h-[200px] w-[200px] bg-indigo/5 blur-3xl animate-pulse' />
        <div className='absolute rounded-full h-[400px] w-[400px] border border-gold/10 animate-pulse' style={{ animationDuration: '4s' }} />
    </motion.div>
  )
}

export default BgCircles