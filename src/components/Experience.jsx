import React from 'react'
import { FaRocket, FaBuilding, FaHourglassEnd, FaHourglassHalf } from 'react-icons/fa'
import { motion } from "framer-motion"

const cardVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
}

const experiences = [
    {
        title: "Internship",
        company: "Cognizant",
        img : <FaHourglassEnd />,
        period: "Feb 2022 - Jul 2022",
        delay: 0,
    },
    {
        title: "Program Analyst Trainee",
        company: "Cognizant",
        img : <FaHourglassEnd />,
        period: "Sep 2022 - Sep 2023",
        delay: 0.1,
    },
    {
        title: "Program Analyst",
        company: "Cognizant",
        img : <FaHourglassEnd />,
        period: "Sep 2023 - May 2025",
        delay: 0.2,
    },
    {
        title: "Associate",
        company: "Cognizant",
        img : <FaHourglassHalf />,
        period: "Jun 2025 - Till Date",
        delay: 0.3,
    },
]

const Experience = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-bold p-4 scroll-mt-20' id='experience'>Experience</h1>
            <div className='px-4 py-6 m-4 border-2 rounded-2xl
                            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ amount: 0.2 }}
                        className='bg-slate-300 text-white dark:text-black space-y-2 m-2 shadow-md rounded-2xl px-2 py-3'>

                        <div className='flex items-center justify-start gap-1 text-green-700'>
                            <FaRocket />
                            <h1 className='font-bold text-xl'>{exp.title}</h1>
                        </div>
                        <div className='flex items-center justify-start gap-1'>
                            <FaBuilding className='text-green-700' />
                            <p>{exp.company}</p>
                        </div>
                        <div className='flex items-center justify-start gap-1'>
                            <p className='text-green-700'>{exp.img}</p>
                            <p>{exp.period}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience