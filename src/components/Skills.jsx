import React from 'react'
import { FaRocket, FaBuilding, FaHourglassEnd, FaHourglass, FaHourglassStart } from 'react-icons/fa'
import { motion } from "framer-motion"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import tailwind from "../assets/tailwindcss.svg"
import js from "../assets/js.svg"
import reactjs from "../assets/reactjs.svg"
import redux from "../assets/redux.svg"
import c from "../assets/c.svg"
import nodejs from "../assets/nodejs.svg"
import git from "../assets/git.svg"
import mongodb from "../assets/mongodb.svg"
import vite from "../assets/vite.svg"
import vscode from "../assets/vs-code.svg"




const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const skills = [
    {
        img: html,
        title: "Html",
        delay: 0,
    },
    {
        img: css,
        title: "CSS",
        delay: 0.1
    },
    {
        img: tailwind,
        title: "TailwindCSS",
        delay: 0.2,
    },
    {
        img: js,
        title: "JavaScript",
        delay: 0.2,
    },
    {
        img: reactjs,
        title: "ReactJS",
        delay: 0.3,
    },
    {
        img: redux,
        title: "Redux",
        delay: 0.4,
    },
    {
        img: c,
        title: "C",
        delay: 0.5,
    },
    {
        img: nodejs,
        title: "NodeJS",
        delay: 0.6,
    },
    {
        img: git,
        title: "Git",
        delay: 0.7,
    },
    {
        img: mongodb,
        title: "MongoDB",
        delay: 0.8,
    },
    {
        img: vite,
        title: "Vite",
        delay: 0.8,
    },
    {
        img: vscode,
        title: "VS code",
        delay: 0.8,
    },
]

const Skills = () => {
  return (
     <div className='mt-10'>
            <h1 className='text-2xl font-bold p-4 scroll-mt-20' id='skills'>Skills</h1>
            <div className='px-4 py-6 m-4 border-2 rounded-2xl
                            grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ amount: 1 }}
                        className='space-y-2 m-2 mb-12 shadow-md rounded-2xl px-2 py-3 flex items-center justify-center text-center'>

                        <div>
                            <img src={skill.img} alt={skill.title} className='w-12 h-12 object-contain mb-3' />
                            <h1 className='font-bold text-xl'>{skill.title}</h1>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Skills