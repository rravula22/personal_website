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
        role: 'Software Engineer',
        date: 'May 2022 - April 2023',
        description: ["The project I worked on focused on research and development in the field of Health & Nutrition for sportspersons and individuals. This involved creating M health applications aimed at providing personalized health and nutrition recommendations. The project emphasized gathering data, conducting analysis, and designing algorithms to optimize nutrition intake for specific populations. My role encompassed research, development, and implementation of features, ensuring the applications effectively supported the health goals of the targeted user groups."
        ],
        color: '#5D9A2F'
    },
    "pearson": {
        name: 'Pearson',
        role: 'Backend Developer',
        date: 'April 2020 - Dec 2021',
        description: [
            "At Pearson, I played a pivotal role in converting XHTML (.epub) content to JSON using web scraping tools and algorithms. This process streamlined the extraction of data from .epub files, enabling efficient analysis and processing. Additionally, I utilized my expertise in React and Redux Saga to develop dynamic question rendering functionalities, enhancing the interactivity and engagement of the courseware. Collaborating with cross-functional teams, I designed and implemented RESTful APIs, ensuring seamless integration with external systems and optimizing data exchange capabilities. I also took charge of conducting thorough code reviews, identifying bugs, and providing valuable feedback to maintain high code quality and adhere to best practices. Alongside my development responsibilities, I actively participated in project management tasks, including sprint planning, task estimation, and progress tracking using JIRA and Agile methodologies. By engaging in daily stand-ups and sprint retrospectives, I fostered effective communication and contributed to continuous improvement within the team. Lastly, my proficiency in automated testing frameworks played a crucial role in enhancing testing efficiency and ensuring software quality."
        ],
        color: '#43E6E6'
    },
    "astro": {
        name: 'Astro',
        role: 'Full Stack Developer',
        date: 'May 2019 - March 2020',
        description: [
            "As a full stack developer for the Astro client, I spearheaded the development of a robust web application using React and Node.js, resulting in a highly responsive and user-friendly interface that enhanced overall user experience. By implementing REST APIs, I facilitated efficient communication between the frontend and backend, enabling seamless data retrieval and manipulation for improved application performance. Leveraging my expertise in SQL databases, I optimized data management and retrieval by creating efficient procedures, leading to enhanced application efficiency and faster response times. Additionally, I designed and developed visually appealing dashboards in the frontend, providing users with intuitive visual representations for effective data analysis and decision-making. Working closely with the team, I diligently translated client requirements into functional features and enhancements, ensuring a seamless integration of application components. Thorough testing and debugging were conducted to ensure the reliability and stability of the application. Demonstrating strong problem-solving skills, I proactively identified and resolved issues, continuously improving application functionality and user experience. I also remained updated with the latest industry trends, actively researching and implementing best practices and emerging technologies to drive innovation and continuous improvement within the project."
        ],
        color: '#F61D9F'
    },
    "csa": {
        name: 'CSA Soft Ltd',
        role: 'Intern Software Engineer',
        date: 'Aug 2018  - Dec 2018',
        description: [
            "As an Intern for CSA Soft, Involved in the development of a web application for a client to handle stock management using HTML, CSS, JavaScript, and PHP",
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