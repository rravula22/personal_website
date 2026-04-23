import React from 'react'
import { motion } from 'framer-motion'

type Props = {
}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{opacity:0, scale:0.8,}}
      animate={{opacity:1, scale:1,}}
      transition={{duration:1.5, delay:0.5, type:'string', stiffness:120,}}
     className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-30 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray">About</h3>
      <motion.img
        src='./profile.jpeg'
        initial={{x: -200, opacity: 1,}}
        whileInView={{opacity:1, scale:1, x: 0,}}
        transition={{duration:1.2,}}
        className='mt-44 md:mb-0 md:mr-20 md:-mt-20 md:ml-20 rounded-full h-96 w-96'
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-gray">
          Here&apos;s a{" "}little bit{""} about me
        </h4>
        <p className="text-gray text-sm">I&apos;m Rakesh Ravula, a Full Stack Developer with 5+ years of experience building scalable web applications and APIs for global enterprises including American Airlines and Walmart.</p>
        <p className="text-gray text-sm">I specialize in React, Angular, Next.js, Node.js, TypeScript, Java, and GraphQL, delivering high-impact projects such as micro-frontend architectures, federated GraphQL APIs, and real-time alerts systems.</p>
        <p className="text-gray text-sm">Experienced in cloud-native deployments on AWS and Azure, Kafka event-driven architectures, and Kubernetes-based infrastructure. Currently expanding into Generative AI with LangChain, LCEL, and Python-based LLM development, leveraging tools like GitHub Copilot and MCP servers daily.</p>
      </div>
    </motion.div>
  )
}