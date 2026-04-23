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

const Skill = ({ directionLeft, name, image, progress }: Props) => {
    return (
        <div className="group relative flex flex-col items-center cursor-pointer" tabIndex={0}>
            <motion.div
                initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-16 h-16"
            >
                <img
                    src={urlFor(image).url() || ''}
                    alt={name}
                    className='rounded-xl border border-navy-light object-contain w-full h-full p-1.5 bg-surface
                        filter group-hover:grayscale-0 transition duration-300 ease-in-out group-hover:border-indigo'
                />
                {/* Overlay with progress on hover */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-90 group-focus:opacity-90 transition duration-300
                    ease-in-out bg-navy-light rounded-xl flex items-center justify-center'>
                    <p className='text-sm text-indigo font-bold'>{progress}%</p>
                </div>
            </motion.div>
            <span className="mt-1.5 text-xs text-slate text-center max-w-[4rem] leading-tight opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200">
                {name}
            </span>
        </div>
    )
}

export default Skill