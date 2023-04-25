
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import { SocialBody, experienceBody, pageInfoBody, projectsBody, skillsBody } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchProjects } from "../utils/fetchProjects";
import { urlFor } from "../sanity";
import { abort } from "process";


type Props = {
  pageInfo : pageInfoBody,
  skills: skillsBody[],
  experience: experienceBody[],
  socials: SocialBody[],
  projects: projectsBody[]
}

export default function Example({ pageInfo, skills, experience, socials, projects}: Props) {
  const color = typeof window !== 'undefined' ? 'red' : 'blue';
  const aboutId = "about";
  const experienceId = "experience";
  const skillId = "skills";
  const projectId = "projects";
  const contactId = "contact";

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    scrollbar-thin scrollbar-track-gray/20 scrollbar-thumb-[#F7AB0A]/80">
        <Header socials={socials} contactId={contactId}/>
        <section id="hero" className="snap-start">
          <Hero about={aboutId} experience={experienceId} skills={skillId} projects={projectId} contact={contactId} />
        </section>
        {/** Hero */}
        {/** About */}
        <section id={aboutId} className="snap-center">
          <About/>
        </section>
        <section id={experienceId} className="snap-center">
          <Experience/>
        </section>
        <section id={skillId} className="snap-center">
          <Skills skills={skills}/>
        </section>
        <section id={projectId} className="snap-center">
          <Projects projects={projects} />
        </section>
        <section id={contactId} className="snap-end">
          <Contact />
        </section>
      
        <Link href="#hero">
          <footer className="fixed bottom-5 w-full right-0 z-50 p-5 cursor-pointer opacity-0">
            <div className="flex items-center justify-center">
              <img
                className="w-10 h-10 mx-auto rounded-full filter grayscale hover:grayscale-0"
                src={urlFor(pageInfo.image).url() || ''}
                />
            </div>

          </footer>
        </Link>
    </div>
  )
}

export async function getStaticProps(): Promise<{ props: Props, revalidate: number }> {
  const pageInfo = await fetchPageInfo();
  const skills = await fetchSkills();
  const experience = await fetchExperience();
  const socials = await fetchSocials();
  const projects = await fetchProjects();
  return {
    props: {
      pageInfo,
      skills,
      experience,
      socials,
      projects
    },
    revalidate: 60
  }
}