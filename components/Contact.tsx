import React from 'react'
import PhoneIcon from '@heroicons/react/outline/PhoneIcon';
import EnvelopIcon from '@heroicons/react/outline/MailIcon';
import MapPinIcon from '@heroicons/react/outline/MapIcon';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
function Contact({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:rravula1998@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
        console.log(data); 
    };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray text-2xl'>Contact</h3>        */}
        <div className='flex flex-col space-y-10 mt-20'>
            <h4 className='text-4xl font-semibold text-gray text-center'>
                I have got just what you&apos;re looking for<br/>
                <span className='text-2xl font-normal text-gray'>Let&apos;s get in touch</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='h-7 w-8 animate-pulse text-[#F7AB0A]'/>
                    <p className='text-gray text-sm'>+1 (205) 586- 9047</p>
                </div>  
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopIcon className='h-7 w-8 animate-pulse text-[#F7AB0A]'/>
                    <p className='text-gray text-sm'>rravula1998@gmail.com</p>
                </div> 
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='h-7 w-8 animate-pulse text-[#F7AB0A]'/>
                    <p className='text-gray text-sm'>1416 13th St S AL 35205</p>
                </div> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='name' type='text'  className='w-full h-10 px-5 rounded-md border-2 border-gray transition-opacity-0 focus:outline-none focus:border-[#F7AB0A]'/>
                    <input placeholder='email' type='text'  className='w-full h-10 px-5 rounded-md border-2 border-gray focus:outline-none focus:border-[#F7AB0A]'/>
                </div>
                <input {...register('subject')} placeholder='subject' type='text'  className='w-full h-10 px-5 rounded-md border-2 border-gray focus:outline-none focus:border-[#F7AB0A]'/>
                <textarea {...register('message')} placeholder='Message' className='w-full h-40 px-5 rounded-md border-2 border-gray focus:outline-none focus:border-[#F7AB0A]'/>
                <button className='w-full h-10 rounded-md bg-[#F7AB0A] text-white font-semibold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact