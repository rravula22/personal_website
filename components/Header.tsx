import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { SocialBody } from '../typings';

type Props = {
    socials: SocialBody[];
    contactId: string;
}

export default function Header({socials, contactId}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div 
                initial={{x: -500, opacity: 0, scale:0.5,}}
                animate={{x:0, opacity:1, scale:1,}}
                transition={{duration:1.5, delay:0.5, type:'string', stiffness:120,}}
            className="flex flex-row items-center">
                {socials.map((social) => (
                    <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor='gray'
                    bgColor='transparent'
                    />
                ))}
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
                    url='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:64d8d739-8e59-36f4-92c0-66466fb7fcd6'
                    bgColor='transparent'
                />
                <p className="capitalize hidden md:inline-flex text-sm text-gray">
                   Resume
                </p>
            </motion.div>
        </header>
    )
}