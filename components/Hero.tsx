import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { pageInfoBody } from '../typings'
import BgCircles from './BgCircles'

type Props = {
  about: string;
  experience: string;
  skills: string;
  projects: string;
  contact: string;
  pageInfo: pageInfoBody
}

export default function Hero({pageInfo}: Props) {
  const [text, setText] = useTypewriter({
    words: pageInfo.backgroundInformation.split('#').reverse(),
    loop: 1,
    typeSpeed: 20,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center'>
      <BgCircles />
      <img
        src={urlFor(pageInfo.image).url() || ''}
        alt="Rakesh Ravula"
        width={400}
        height={400}
        className="relative rounded-full h-36 w-36 mx-auto mt-52 object-cover"
      />
      <span className='text-gray text-lg'>Hi, I&apos;m <b className='text-xl text-blue'>Rakesh</b></span>
      <div>
        <p className='text-lg px-10'>
          <span className='mr-3 text-gray'>{text}</span>
          <Cursor cursorColor="#F7AB0A"/>
        </p>
      </div>
    </div>
  )
}