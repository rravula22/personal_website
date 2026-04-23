import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { experienceBody } from '../typings';

const formatDate = (dateStr: string): string => {
    if (!dateStr || typeof dateStr !== 'string') return '';
    const parts = dateStr.split('-');
    if (parts.length < 2) return dateStr;
    const year = Number(parts[0]);
    const month = Number(parts[1]);
    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) return dateStr;
    const date = new Date(year, month - 1, 1);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
};

type Props = {
    exp: experienceBody
}

const ExperienceCard = ({ exp }: Props) => {
    const { Company, jobTitle, companyImage, points, technologies, startDate, endDate, isCurrentJob } = exp;
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex flex-col rounded-xl items-center space-y-6 flex-shrink-0
            w-[360px] md:w-[500px] xl:w-[700px] snap-center bg-surface border border-navy-light p-8
            hover:border-indigo transition-all duration-300 hover:shadow-glow cursor-pointer'
        >
            {/* Company logo */}
            <motion.img
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='w-20 h-20 rounded-xl object-contain object-center bg-navy-light p-2'
                src={urlFor(companyImage).url() || ''}
                alt={Company || ''}
            />

            <div className='w-full text-left space-y-4'>
                <div>
                    <h4 className='text-2xl font-semibold text-white'>{jobTitle}</h4>
                    <p className='text-indigo font-medium text-sm mt-1'>{Company}</p>
                    <p className='text-slate text-xs mt-1 font-mono'>
                        {formatDate(startDate)} — {isCurrentJob ? 'Present' : formatDate(endDate)}
                    </p>
                </div>

                <ul className='list-disc space-y-2 ml-4 text-sm text-slate'>
                    {points.map((desc, index) => (
                        <li key={index} className='leading-relaxed'>{desc}</li>
                    ))}
                </ul>

                {technologies && technologies.length > 0 && (
                    <div className='flex flex-wrap gap-1.5 pt-2 border-t border-navy-light'>
                        {technologies.map((tech) => (
                            <span
                                key={tech._id}
                                className='px-2 py-0.5 rounded text-xs bg-navy text-slate border border-navy-light'
                            >
                                {tech.title}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.article>
    )
}

export default ExperienceCard