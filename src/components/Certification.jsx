import React from 'react'
import {  FaFreeCodeCamp } from 'react-icons/fa'
import { motion } from "framer-motion"

const cardVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
}

const certifications = [
    {
        href : "Agile Fundament including Scrum certificate.pdf",
        title: "Agile Fundament",
        delay: 0,
    },
    {
        href: "AWS Certified Cloud Practitioner.pdf",
        title: "AWS Cloud Practitioner",
        delay: 0.1
    },
    {
        href : "Fundamentals of Web Development Program - B20.pdf",
        title: "Fundamentals of Web Development",
        delay: 0.2,
    },
    {
        href: "Jira Agile project Certificate.pdf",
        title: "Jira Agile project",
        delay: 0.3,
    },
    {
        href : "Microsoft Certified AZ-900_Azure_Fundamentals_2024.pdf",
        title: "AZ-900 Azure Fundamentals",
        delay: 0.4,
    },
    {
        href: "Oracle Cloud Infrastructure Foundations eCertificate.pdf",
        title: "Oracle Cloud Infrastructure Foundations",
        delay: 0.5,
    },
    {
        href : "Postman API Certificate.pdf",
        title: "Postman API",
        delay: 0.6,
    },
    {
        href: "Prompt Engineering Certificate.pdf",
        title: "Prompt Engineering",
        delay: 0.7,
    },
    {
        href : "Scrum and Agile Basics Certificate.pdf",
        title: "Scrum and Agile Basics",
        delay: 0.8,
    },
    {
        href: "Soft Skills Certificate.pdf",
        title: "Soft Skills",
        delay: 0.9,
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
                        className='space-y-2 mx-2 my-3 rounded-2xl px-2 py-3  flex items-start justify-start text-center'>

                        <div className='flex items-start gap-2'>
                            <FaFreeCodeCamp className='w-8 h-6 text-orange-700 '/>
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