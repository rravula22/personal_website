import React from 'react'
import { color, motion } from 'framer-motion'
import { once } from 'events'
type Props = {
    name: string | undefined
}
type ExperienceData = {
    [key: string]: {
      name: string;
      role: string;
      date: string;
      description: string[];
      color: string;
    };
  };
  
const experienceData: ExperienceData = {
    "uab": {
        name: 'UAB SHP',
        role: 'Full Stack Developer',
        date: 'May 2022 - May 2023',
        description: ["Developed and launched a VUI node application with Alexa Skills Kit to help Diabetes patients track and log their food",
            "Provided daily operational support for several applications by troubleshooting incidents to identify root causes and solutions",
            "Developed a custom CMS for a health and nutrition project using PHP Laravel, Ajax, jQuery, GraphQL",
            "Conducted hands-on tests of new technologies and tools and identified gaps in internal processes"
        ],
        color: '#5D9A2F'
    },
    "pearson": {
        name: 'Pearson',
        role: 'Backend Developer',
        date: 'April 2020 - Dec 2021',
        description: [
            "Designed and implemented a NodeJS module that served as an AWS Lambda function for digital publication generation and publication from a proprietary authoring platform",
            "Provided and implemented a solution for provisioning Cross Reference links for online books using graph algorithms",
            "Reduced the effort for creating the final title by 35% and having a faster go-live date for course titles",
            "Participated in an integrated DevOps Team utilizing Agile methodologies with strong change management focus"
        ],
        color: '#43E6E6'
    },
    "astro": {
        name: 'Astro',
        role: 'Full Stack Developer',
        date: 'May 2019 - March 2020',
        description: [
            "Developed a web app for Digital Ads website in Astro using ReactJS, Redux, NodeJS, ExpressJS, MongoDB, and AWS",
            "Increased client acquisition and retention by incorporating new layouts into the existing UX using Material UI",
            "Developed a web app for Astro’s internal use using VueJs, Vuetify, NodeJS, ExpressJS, MySQL, and AWS",
            "Addressed complex issues with real-time lead prioritization using WebSocket connectivity"
        ],
        color: '#F61D9F'
    },
    "csa": {
        name: 'CSA Soft Ltd',
        role: 'Intern Software Engineer',
        date: 'Aug 2018  - Dec 2018',
        description: [
            "Involved in the development of a web application for a client to handle stock management using HTML, CSS, JavaScript, and PHP",
            "Implemented a feature to display the network speed and download files from the server using AWS S3",
            "Participated in the deployment of the application to AWS server using Docker",
            "Worked on EC2 instances, S3 buckets, and RDS instances"
        ],
        color: '#D9F61D'
    },
  };

const ExperienceCard = (props: Props) => {
    let name, role, date, description, color;
    if (props.name && experienceData[props.name]) {
        name = experienceData[props.name].name;
        role = experienceData[props.name].role;
        date = experienceData[props.name].date;
        description = experienceData[props.name].description;
        color = experienceData[props.name].color;
    } else {
        return (<></>)
    }
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{opacity: 0,  y: -100}}
            transition={{duration:1.5}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            className='w-40 h-40 rounded-full xl:w-[200px] object-contain object-center' 
            src={'./' + props.name + '.png'}
            alt={name}
        />
        <div className='px-0 md:px-10 text-left'>
            <h4 className='text-4xl font-light text-gray-light'>{role}</h4>
            <p className='uppercase py-5 text-gray-light'>{date}</p>
            
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                {description.map((desc, index) => (

                    <motion.li
                        initial={{opacity: 0,  y: -100}}
                        transition={{duration:1.5}}
                        whileInView={{opacity: 1, y:0}}
                        viewport={{once: true}}
                        key={index} className='text-gray'>{desc}</motion.li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard