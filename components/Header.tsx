import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { SocialBody } from '../typings';

type Props = {
    socials: SocialBody[];
    contactId: string;
}

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ socials, contactId }: Props) {
    return (
        <header className="sticky top-0 p-4 flex items-center justify-between max-w-7xl mx-auto z-20 
          backdrop-blur-sm bg-bg/80 border-b border-navy-light">
            {/* Social icons */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-row items-center gap-1"
            >
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor='#94a3b8'
                        bgColor='transparent'
                        style={{ height: 36, width: 36 }}
                    />
                ))}
            </motion.div>

            {/* Logo / home link */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Link href="#hero" className="font-mono font-bold text-white text-lg tracking-tight">
                    rr<span className="text-indigo">.</span>dev
                </Link>
            </motion.div>

            {/* Nav links */}
            <motion.nav
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-1"
            >
                {navLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className="heroButton text-xs hidden md:inline-flex"
                    >
                        {label}
                    </Link>
                ))}
            </motion.nav>
        </header>
    )
}