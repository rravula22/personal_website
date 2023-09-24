import { motion } from 'framer-motion';
import Link from 'next/link';
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
                initial={{x: 0, opacity: 0, scale:0.5,}}
                animate={{x:0, opacity:1, scale:1,}}
                transition={{duration:1.5, delay:0.5, type:'string', stiffness:120,}}
            className="flex flex-row items-center">
                <Link className='px-4 py-2 heroButton' href='#projects'>
                    Projects
                </Link>
                <Link className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700' href="#experience">
                    <button className='heroButton'>Experinece</button>
                </Link>
                <Link className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700' href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700' href="#contact">
                    <button className='heroButton'>Contact</button>
                </Link>
            </motion.div>
            <motion.div
                initial={{x: 500, opacity: 0, scale:0.5,}}
                animate={{x:0, opacity:1, scale:1,}}
                transition={{duration:1.5, delay:0.5, type:'string', stiffness:120,}}
            >
                {/* <SocialIcon
                    className='curser-pointer'
                    network='house'
                    fgColor='gray'
                    url={`mailto:${contactId}`}
                    bgColor='transparent'
                /> */}
                 <Link className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700' href="#hero">
                    <button className='heroButton'>Home</button>
                </Link>
            </motion.div>
        </header>
    )
}