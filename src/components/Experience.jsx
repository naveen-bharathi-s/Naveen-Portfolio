import React from 'react'
import { FaRocket, FaBuilding, FaHourglassEnd, FaHourglassHalf, FaCheckCircle, FaChevronCircleRight, FaChevronRight } from 'react-icons/fa'
import { motion } from "framer-motion"

const cardVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
}

const experiences = [
    {
        title: "Associate",
        company: "Cognizant",
        img : <FaHourglassHalf />,
        period: "Jun 2025 - Till Date",
        img1 : <FaChevronCircleRight/>,
        point1: "Working as a Frontend Engineer on a large-scale e-commerce platform supporting 1000+ food delivery websites.",
        img2 : <FaChevronCircleRight />,
        point2: "Developing and maintaining React.js-based UI components for online ordering, catering, and reservation workflows.",
        img3 : <FaChevronCircleRight />,
        point3: "Handling production issues, UI defects, content updates, and payment-related configurations during high-traffic periods.",
        img4 : <FaChevronCircleRight />,
        point4: "Collaborating with cross-functional teams to ensure performance, stability, and smooth user experience.",
        delay: 0.3,
    },
    {
        title: "Program Analyst",
        company: "Cognizant",
        img : <FaHourglassEnd />,
        period: "Sep 2023 - May 2025",
        img1 : <FaChevronCircleRight />,
        point1: "Supported and enhanced enterprise-level web applications using JavaScript, React.js, HTML, and CSS.",
        img2 : <FaChevronCircleRight />,
        point2: "Implemented menu updates, special-hour configurations, global banners, and feature enhancements",
        img3 : <FaChevronCircleRight />,
        point3: "Played a key role during peak business days, providing UI validation and frontend support.",
        img4 : <FaChevronCircleRight />,
        point4: "Recognized for quick system understanding and effective issue resolution.",
        delay: 0.2,
    },
    {
        title: "Program Analyst Trainee",
        company: "Cognizant",
        img : <FaHourglassEnd />,
        period: "Sep 2022 - Sep 2023",
        img1 : <FaChevronCircleRight />,
        point1: "Trained in frontend and backend fundamentals, including JavaScript, React basics, REST APIs, and application workflows.",
        img2 : <FaChevronCircleRight />,
        point2: "Gained hands-on experience with Agile practices, bug fixing, and code reviews.",
        img3 : <FaChevronCircleRight />,
        point3: "Assisted senior developers in maintaining and supporting production applications.",
        img4 : "",
        point4: "",
        delay: 0.1,
    },
    {
        title: "Internship",
        company: "Cognizant",
        img : <FaHourglassEnd />,
        period: "Feb 2022 - Jul 2022",
        img1 : <FaChevronCircleRight />,
        point1: "Completed a 6-month Full Stack internship covering Core Java, SQL, HTML, CSS, and JavaScript.",
        img2 : <FaChevronCircleRight />,
        point2: "Learned SDLC, Agile methodology, debugging techniques, and enterprise development standards.",
        img3 : <FaChevronCircleRight />,
        point3: "Built a strong foundation for transitioning into a full-time development role.",
        img4 :  "",
        point4: "",
        delay: 0,
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
                        className='bg-slate-300 text-black dark:text-black space-y-1 m-2 shadow-md rounded-2xl px-2 py-3'>

                        <div className='flex items-center justify-start gap-1 text-green-700 py-2'>
                            <FaRocket />
                            <h1 className='font-bold text-xl'>{exp.title}</h1>
                        </div>
                        <div className='flex items-center justify-start gap-1'>
                            <FaBuilding className='text-green-700' />
                            <p className='font-semibold text-sm'>{exp.company}</p>
                        </div>
                        <div className='flex items-center justify-start gap-1 pb-2'>
                            <p className='text-green-700'>{exp.img}</p>
                            <p className='font-semibold text-sm'>{exp.period}</p>
                        </div>
                        <div className='flex items-start justify-start gap-2'>
                            <p className='text-green-700 my-1'>{exp.img1}</p>
                            <p className='font-medium text-sm'>{exp.point1}</p>
                        </div>
                        <div className='flex items-start justify-start gap-2'>
                            <p className='text-green-700 my-1'>{exp.img2}</p>
                            <p className='font-medium text-sm'>{exp.point2}</p>
                        </div>
                        <div className='flex items-start justify-center gap-2'>
                            <p className='text-green-700 my-1'>{exp.img3}</p>
                            <p className='font-medium text-sm'>{exp.point3}</p>
                        </div>
                        <div className='flex items-start justify-start gap-2'>
                            <p className='text-green-700 my-1'>{exp.img4}</p>
                            <p className='font-medium text-sm'>{exp.point4}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience