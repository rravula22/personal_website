import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { pageInfoBody } from '../typings'
import BgCircles from './BgCircles'
import Link from 'next/link'

type Props = {
  about: string;
  experience: string;
  skills: string;
  projects: string;
  contact: string;
  pageInfo: pageInfoBody
}

export default function Hero({ pageInfo, projects, experience, skills, contact }: Props) {
  const [text] = useTypewriter({
    words: pageInfo.backgroundInformation.split('#').reverse(),
    loop: 0,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  })

  return (
    <div className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20'>
      <BgCircles />

      {/* Avatar */}
      <div className="relative z-10 mb-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo to-blue opacity-30 blur-xl scale-110" />
          <img
            src={urlFor(pageInfo.image).url() || ''}
            alt="Rakesh Ravula"
            width={160}
            height={160}
            className="relative rounded-full h-36 w-36 object-cover border-2 border-indigo/40 shadow-glow"
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald border-2 border-bg" />
        </div>
      </div>

      {/* Name and role */}
      <div className="relative z-10 text-center px-6">
        <p className="text-indigo text-sm uppercase tracking-[6px] mb-2 font-mono">
          Full Stack Developer
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
          Hi, I&apos;m{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo to-blue">
            Rakesh
          </span>
        </h1>
        <p className="text-slate text-sm font-mono mb-2 tracking-wide">
          {pageInfo.role}
        </p>

        {/* Typewriter */}
        <div className="min-h-[2rem] flex items-center justify-center mt-4 mb-8">
          <span className="text-gray-light text-base md:text-lg font-mono">
            {text}
          </span>
          <Cursor cursorColor="#6366f1" />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={`#${projects}`}>
            <button className="btn-primary">View Projects</button>
          </Link>
          <Link href={`#${experience}`}>
            <button className="btn-outline">My Experience</button>
          </Link>
          <a
            href="https://github.com/rravula22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-12 flex flex-col items-center gap-2 text-slate text-xs">
          <span className="tracking-widest uppercase">Scroll down</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}