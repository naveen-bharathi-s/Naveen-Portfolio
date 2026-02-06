import React from 'react'
import { FaMobileAlt, FaGithub, FaLinkedin, FaEnvelope, FaRegFilePdf } from 'react-icons/fa'
import profile from '/Naveen1.jpg'
import { motion } from "framer-motion"

const cardVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
}

const HeroSection = () => {
  return (
    <div className=' md:flex p-4 items-center justify-center mx-auto scroll-mt-16 
     bg-white dark:bg-black text-black dark:text-white border-0 md:border-0' id='about'>
      <div className='px-2 py-6 m-4 grid items-center text-center justify-center mx-auto'>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          <img src={profile} alt="Profile" className='w-48 h-48 rounded-full ml-9 mb-4 md:ml-3 lg:ml-16' />
        </motion.div>
        <h2 className='font-bold text-xl text-green-900'>Hi, I am Naveen Bharathi!</h2>
        <h1 className='font-bold text-3xl lg:text-4xl text-gray-700'>Software Developer</h1>
      </div>
      <div className='px-4 py-6 m-4 border-2 rounded-2xl mx-auto'>
        <h3 className='font-bold text-xl pb-4 border-b-2'>Contact Info</h3>
        <div className='flex items-center justify-start gap-2 pt-4'>
          <FaEnvelope />
          <a 
          className='hover:text-blue-700 cursor-pointer'
          href='mailto:naveenbharathi555@gmail.com'
          target='_blank'>
            naveenbharathi555@gmail.com
            </a>
        </div>
        <div className='flex items-center justify-start gap-1'>
          <FaMobileAlt />
          <a 
          className='hover:text-blue-700 cursor-pointer'
           href='tel:+919344323461'
           target='_blank'>
          +91 9344323461
          </a>
        </div>
        <nav className='p-2 mx-20 md:mx-0 md:flex items-start justify-start md:gap-3 lg:gap-4 md:pb-16 md:pr-8 lg:pb-20 lg:pr-36 '>
          <a 
          href='https://github.com/naveen-bharathi-s'
          target='_blank'
          rel='noopener noreferer'
          className='px-6 py-2 mt-2 bg-black text-white dark:bg-white dark:text-black text-center rounded-3xl flex items-center justify-start gap-3
            transform transition-transform duration-300 hover:scale-110'>
            <FaGithub className='w-6 h-6' />
            Github
          </a>
          <a 
          href='https://www.linkedin.com/in/naveen-bharathi-s/'
          target='_blank'
          rel='noopener noreferer'
          className='px-6 py-2 mt-2 bg-blue-500 text-white text-center rounded-3xl flex items-center justify-start gap-3
            transform transition-transform duration-300 hover:scale-110'>
            <FaLinkedin className='w-6 h-6' />
            LinkedIn
          </a>
          <a 
          href='/Naveen_Bharathi_MERN_Developer_Resume.pdf'
          target='_blank'
          rel='noopener noreferer'
          className='px-6 py-2 mt-2 bg-green-700 text-white text-center rounded-3xl flex items-center justify-start gap-3
            transform transition-transform duration-300 hover:scale-110'>
            <FaRegFilePdf className='w-6 h-6' />
            <button >Resume</button>
          </a>
        </nav>
      </div>
    </div>
  )
}

export default HeroSection