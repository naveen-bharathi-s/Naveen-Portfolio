import React from 'react'
import { FaSchool, FaBuilding, FaLayerGroup, FaUserGraduate, FaEnvira, FaFeatherAlt } from 'react-icons/fa'
import { motion } from "framer-motion"

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

const achievements = [
  {
    img: <FaLayerGroup />,
    title: "Office",
    img1 : <FaFeatherAlt />,
    img2 : <FaFeatherAlt />,
    img3 : <FaFeatherAlt />,
    desc: (<>Program Analyst Trainee by <span className='text-base font-bold'>Cognizant</span> on 2022</>),
    desc1: (<>Program Analyst by <span className='text-base font-bold'>Cognizant</span> on 2023</>),
    desc2: (<>Associate by <span className='text-base font-bold'>Cognizant</span> on 2025</>),
    delay: 0,
  },
  {
    img: <FaUserGraduate />,
    title: "College",
    img1 : <FaFeatherAlt />,
    img2 : <FaFeatherAlt />,
    desc: (<>Completed degree with <span className='text-base font-bold'>7.3 GPA</span></>),
    desc1: (<>Runner-up in <span className='text-base font-bold'>Zonal Level Basketball</span> Championship in 2021</>),
    delay: 0.1,
  },
  {
    img: <FaSchool />,
    title: "School",
    img1 : <FaFeatherAlt />,
    img2 : <FaFeatherAlt />,
    desc: "Completed HSC with 70%",
    desc1: "Completed SSLC with 89%",
    delay: 0.2,
  },
]


const Achievements = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-2xl font-bold p-4 scroll-mt-20' id='achievements'>Achievements</h1>
      <div className='px-4 py-6 m-4 border-2 rounded-2xl
                                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {achievements.map((achieve, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className='bg-violet-300 space-y-3 m-2 shadow-md rounded-2xl px-3 py-4'>

            <div className='flex items-center justify-start gap-3 text-green-700'>
              <p >{achieve.img}</p>
              <h1 className='font-bold text-xl'>{achieve.title}</h1>
            </div>
            <div className='flex items-start gap-3'>
              <p className='text-green-700 w-4 h-4 mt-2'>{achieve.img1}</p>
              <div className='font-semibold text-sm text-start'>{achieve.desc}</div>
            </div>
            <div className='flex items-start gap-3'>
              <p className='text-green-700 w-4 h-4 mt-2'>{achieve.img2}</p>
              <div className='font-semibold text-sm text-start'>{achieve.desc1}</div>
            </div>
            <div className='flex items-start gap-3'>
              <p className='text-green-700 w-4 h-4 mt-1'>{achieve.img3}</p>
              <div className='font-semibold text-sm text-start'>{achieve.desc2}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Achievements