import React from 'react'
import { motion } from 'framer-motion'
import { Image } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    directionLeft?: boolean;
    name: string;
    image: Image;
    progress: number;
}

const Skill = ({directionLeft, name, image, progress,  }: Props) => {
    return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
            initial={{
                x:directionLeft? -200 : 200, 
                opacity:0
            }}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1}}
            src={urlFor(image).url() || ''}
            className='rounded-full border border-gray object-cover w-12 h-12 filter group-hover:grayscale transition duration-300 ease-in-out '
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3x text-[#FABA0A] opacity-100 font-bold'>{progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill