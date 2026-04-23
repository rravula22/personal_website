
import Link from "next/link";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { urlFor } from "../sanity";
import { SocialBody, experienceBody, pageInfoBody, skillsBody } from "../typings";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";


type Props = {
  pageInfo: pageInfoBody,
  skills: skillsBody[],
  experience: experienceBody[],
  socials: SocialBody[],
}

export default function Home({ pageInfo, skills, experience, socials }: Props) {
  const projectId = "projects";
  const experienceId = "experience";
  const skillId = "skills";
  const contactId = "contact";

  return (
    <div className="bg-bg text-white min-h-screen overflow-x-hidden">
      <Header socials={socials} contactId={contactId} />

      <main>
        <section id="hero">
          <Hero
            pageInfo={pageInfo}
            about="about"
            experience={experienceId}
            skills={skillId}
            projects={projectId}
            contact={contactId}
          />
        </section>

        <section id={projectId}>
          <Projects />
        </section>

        <section id={experienceId}>
          <Experience experience={experience} />
        </section>

        <section id={skillId}>
          <Skills skills={skills} />
        </section>

        <section id={contactId}>
          <Contact />
        </section>
      </main>

      <Link href="#hero">
        <footer className="fixed bottom-5 w-full right-0 z-50 p-5 cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center">
            <img
              className="w-10 h-10 mx-auto rounded-full filter grayscale hover:grayscale-0 border border-indigo/40"
              src={urlFor(pageInfo.image).url() || ''}
              alt="Back to top"
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
  const experience = (await fetchExperience()).reverse();
  const socials = await fetchSocials();
  return {
    props: {
      pageInfo,
      skills,
      experience,
      socials,
    },
    revalidate: 60
  }
}