import React from 'react'
import { FaSchool, FaBuilding, FaLayerGroup, FaUserGraduate, FaEnvira, FaFeatherAlt, FaBaseballBall, FaBriefcase, FaTrophy, FaCheckCircle, FaChevronRight, FaDotCircle, FaRunning } from 'react-icons/fa'
import { motion } from "framer-motion"

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

const achievements = [
  {
    img: <FaBriefcase/>,
    title: "Professional",
    img1 : <FaFeatherAlt />,
    img2 : <FaFeatherAlt />,
    img3 : <FaFeatherAlt />,
    img4 : <FaFeatherAlt />,
    desc: (<>Associate — Promoted in <span className='text-base font-bold'>July 2025</span> for consistent performance and ownership</>),
    desc1: (<>Program Analyst — Promoted in <span className='text-base font-bold'>September 2023</span></>),
    desc2: (<>Program Analyst Trainee — Promoted in <span className='text-base font-bold'>September 2022</span></>),
    desc3: (<>Joined Cognizant as a Full Stack Intern in <span className='text-base font-bold'>February 2022,</span> marking the start of my professional career</>),
    delay: 0,
  },
  {
    img: <FaBaseballBall/>,
    title: "Sports",
    img1 : <FaFeatherAlt />,
    img2 : <FaFeatherAlt />,
    img3 : <FaFeatherAlt />,
    desc: (<>Corporate Olympiad <span className='text-base font-bold'>2025 – Basketball Champion,</span> representing the Cognizant Basketball Team</>),
    desc1: (<>College Basketball <span className='text-base font-bold'>Team Captain</span> and Zonal-Level <span className='text-base font-bold'>Runner-Up 2021</span></>),
    desc2: (<>State-Level Basketball <span className='text-base font-bold'>Runner-Up 2015</span></>),
    delay: 0.1,
  },
  {
    img: <FaUserGraduate />,
    title: "Academics",
    img1 : <FaFeatherAlt />,
    img2 : <FaFeatherAlt />,
    img3 : <FaFeatherAlt />,
    desc: (<>Bachelor of Technology in Information Technology National Engineering College - <span className='text-base font-bold'>GPA: 7.3</span></>),
    desc1: (<>Higher Secondary Education Sri Jayendra Gold Jubilee School - <span className='text-base font-bold'>72%</span></>),
    desc2: (<>Secondary School Education Sri Jayendra Gold Jubilee School - <span className='text-base font-bold'>89%</span></>),
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