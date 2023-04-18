import { motion } from 'framer-motion';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div 
                initial={{x: -500, opacity: 0, scale:0.5,}}
                animate={{x:0, opacity:1, scale:1,}}
                transition={{duration:1.5, delay:0.5, type:'string', stiffness:120,}}
            className="flex flex-row items-center">
                <SocialIcon
                    url="https://twitter.com/rakesh_ravula_2"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/rakesh22/"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://github.com/rravula22"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>

            <motion.div
                initial={{x: 500, opacity: 0, scale:0.5,}}
                animate={{x:0, opacity:1, scale:1,}}
                transition={{duration:1.5, delay:0.5, type:'string', stiffness:120,}}
            >
                <SocialIcon
                    className='curser-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className="capitalize hidden md:inline-flex text-sm text-gray-400">
                    Get In Touch
                </p>
            </motion.div>
        </header>
    )
}