import React from 'react'
import {  FaAward, FaCertificate, FaCloud, FaCode, FaFreeCodeCamp, FaTasks } from 'react-icons/fa'
import { motion } from "framer-motion"

const cardVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
}

const certifications = [
    {
        img: <FaCloud className='w-5 mt-1'/>,
        href : "Microsoft Certified AZ-900_Azure_Fundamentals_2024.pdf",
        title: "AZ-900 Azure Fundamentals",
        delay: 0.1,
    },
    {
        img: <FaCloud className='w-5 mt-1'/>,
        href: "AWS Certified Cloud Practitioner.pdf",
        title: "AWS Cloud Practitioner",
        delay: 0.1
    },
    {
        img: <FaCloud className='w-5 mt-1'/>,
        href: "Oracle Cloud Infrastructure Foundations eCertificate.pdf",
        title: "OCI Foundations",
        delay: 0.1,
    },
    {
        img: <FaCode className='w-5 mt-1'/>,
        href: "Full Stack Developer.pdf",
        title: "MERN Stack Developer",
        delay: 0.1,
    },
    {
        img: <FaCode className='w-5 mt-1'/>,
        href : "Fundamentals of Web Development Program - B20.pdf",
        title: "Web App Fundamentals",
        delay: 0.1,
    },
    { 
        img: <FaCode className='w-5 mt-1'/>,
        href : "Postman API Certificate.pdf",
        title: "Postman API",
        delay: 0.1,
    },
    {
        img: <FaTasks className='w-5 mt-1'/>,
        href: "Jira Agile project Certificate.pdf",
        title: "Jira Agile project",
        delay: 0.1,
    },
    {
        img: <FaTasks className='w-5 mt-1'/>,
        href : "Agile Fundament including Scrum certificate.pdf",
        title: "Agile Fundamentals",
        delay: 0.1,
    },
]

const Certification = () => {
  return (
    <div className='py-10'>
            <h1 className='text-2xl font-bold p-4 scroll-mt-20' id='certification'>Certifications</h1>
            <div className='px-4 py-6 m-4 border-2 rounded-2xl
                            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {certifications.map((certificate, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ amount: 0.2 }}
                        className='space-y-2 mx-2 my-3 rounded-2xl px-2 py-3 flex items-start justify-start text-center'>

                        <div className='flex items-start gap-2'>
                            <p className='text-orange-600'>{certificate.img}</p>
                            <a 
                            href={certificate.href}
                            target='_blank'
                            className='font-semibold text-start'>{certificate.title}</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Certification