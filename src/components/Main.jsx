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
                    {`Hi, I’m Naveen Bharathi S, a MERN Stack Developer with 3+ years of professional experience at Cognizant Technology Solutions, where I’ve worked on building, supporting, and scaling large-scale web applications.`}
                </p>
                <p>
                    {`I specialize in developing responsive, user-centric web interfaces using React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS, and I have hands-on experience building full-stack solutions with Node.js, Express.js, and MongoDB. My work includes REST API development, authentication, CRUD operations, payment gateway integration, and deploying applications using modern tools.`}
                </p>
                <p>
                    {`At Cognizant, I currently work as a Frontend Engineer on a large E-Commerce platform supporting 1000+ food delivery websites for Darden Restaurants. I actively handle production issues, UI enhancements, menu and payment configurations, and high-traffic peak-day support. One of my contributions helped drive a 25%+ revenue increase by implementing and configuring a new menu category during peak business periods.`}
                </p>
                <p>
                    {`My professional journey began as a Full Stack Java Intern, where I gained a solid foundation in Core Java, SQL, JavaScript, Agile methodologies, and enterprise application workflows, which continues to strengthen my problem-solving approach today.`}
                </p>
                <p>
                    {`I hold a Bachelor’s degree in Information Technology from National Engineering College (GPA: 7.3). Beyond academics, serving as a college basketball team captain helped me build strong leadership, communication, and teamwork skills.`}
                </p>
                <p>
                    {`I’m passionate about continuous learning and building impactful products. My short-term goal is to grow further as a Full Stack MERN Developer, while my long-term vision is to create scalable, high-performance applications that deliver real business value.`}
                </p>
            </div>
        </div>
    )
}

export default Main