import React from 'react'

const Main = () => {
    return (
        <div className='my-12 bg-white dark:bg-black text-black dark:text-white border-0 md:border-0'>
            <h1 className='text-2xl font-bold p-4'>About Me</h1>
            <div className='p-4 mx-4 border-2 rounded-2xl space-y-4'>
                <p>
                    {`Welcome to my portfolio! I’m excited to share my journey and expertise with you.`}
                </p>
                <p>
                    {`I am a passionate MERN Stack Developer with a Bachelor’s degree in Information Technology from National Engineering College, graduating with a GPA of 7.3. During my second year, I proudly served as the basketball team captain, an experience that strengthened my leadership and teamwork skills.`}
                </p>
                <p>
                    {`In my professional journey, I have honed my skills in React web development, with a strong focus on frontend technologies such as Redux, HTML, CSS, and Tailwind CSS. I am proficient in JavaScript and experienced with Node.js and MongoDB, enabling me to deliver seamless full-stack solutions.`}
                </p>
                <p>
                    {`My career began as an intern at Cognizant in 2022, where I quickly progressed to the role of Program Analyst Trainee, gaining valuable industry exposure and sharpening my problem-solving abilities.`}
                </p>
                <p>
                    {`I am driven by a commitment to continuous learning and innovation. My short-term goal is to further deepen my expertise as a Full Stack Developer, while my long-term aspiration is to create groundbreaking applications that push the boundaries of technology.`}
                </p>
                <p>
                    {`Thank you for taking the time to explore my portfolio. I look forward to the opportunity to collaborate with you on creating elegant applications.`}
                </p>
            </div>
        </div>
    )
}

export default Main