import { motion } from 'framer-motion';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:rravula1998@gmail.com?subject=${encodeURIComponent(data.subject)}&body=Hi, my name is ${encodeURIComponent(data.name)} (${encodeURIComponent(data.email)}).%0A%0A${encodeURIComponent(data.message)}`;
    };

    const contactItems = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: '+1 (205) 586-9047',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'rravula1998@gmail.com',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Birmingham, AL 35205',
        },
    ];

    return (
        <div className="min-h-screen py-20 px-6 md:px-10 max-w-5xl mx-auto">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <p className="text-indigo text-sm uppercase tracking-[6px] mb-3 font-mono">Get In Touch</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Let&apos;s{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo to-blue">
                        Connect
                    </span>
                </h2>
                <p className="text-slate max-w-md mx-auto text-sm">
                    I&apos;m open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Details</h3>
                    {contactItems.map(({ icon, label }) => (
                        <div key={label} className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-indigo/10 border border-indigo/20 flex items-center justify-center text-indigo flex-shrink-0">
                                {icon}
                            </div>
                            <span className="text-slate text-sm">{label}</span>
                        </div>
                    ))}
                    <div className="pt-4">
                        <a
                            href="https://github.com/rravula22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate hover:text-indigo transition-colors text-sm"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            github.com/rravula22
                        </a>
                    </div>
                </motion.div>

                {/* Contact form */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-4"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input
                                {...register('name', { required: true })}
                                placeholder="Your Name"
                                type="text"
                                className="w-full h-11 px-4 rounded-lg bg-surface border border-navy-light text-white text-sm
                                    placeholder-slate focus:outline-none focus:border-indigo transition-colors duration-200"
                            />
                            {errors.name && <span className="text-red text-xs mt-1">Required</span>}
                        </div>
                        <div>
                            <input
                                {...register('email', { required: true })}
                                placeholder="Your Email"
                                type="email"
                                className="w-full h-11 px-4 rounded-lg bg-surface border border-navy-light text-white text-sm
                                    placeholder-slate focus:outline-none focus:border-indigo transition-colors duration-200"
                            />
                            {errors.email && <span className="text-red text-xs mt-1">Required</span>}
                        </div>
                    </div>
                    <input
                        {...register('subject', { required: true })}
                        placeholder="Subject"
                        type="text"
                        className="w-full h-11 px-4 rounded-lg bg-surface border border-navy-light text-white text-sm
                            placeholder-slate focus:outline-none focus:border-indigo transition-colors duration-200"
                    />
                    <textarea
                        {...register('message', { required: true })}
                        placeholder="Your Message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-surface border border-navy-light text-white text-sm
                            placeholder-slate focus:outline-none focus:border-indigo transition-colors duration-200 resize-none"
                    />
                    <button
                        type="submit"
                        className="btn-primary w-full justify-center"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    )
}

export default Contact