import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BgCircles from './BgCircles'
import Link from 'next/link'
import img from '../public/profile.jpeg'
type Props = {}

export default function hero({}: Props) {
  const [text, setText] = useTypewriter({
    words: ["Hey there,  Rakesh here", "Who loves to code & explore different tech", "Don't wait here just go ahead see my stuff"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center'>
      <BgCircles />
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="./public/profile" alt='Rakesh Ravula' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-dark pb-2 tracking-[15px]'>Full Stack Engineer</h2>
        <h1>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor="#F7ABOA"/>
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experinece</button>
          </Link>
          <Link href="#Skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#Projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}