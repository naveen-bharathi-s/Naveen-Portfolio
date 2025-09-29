import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import HeroSection from './components/HeroSection'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Certification from './components/Certification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-white dark:bg-black text-black dark:text-white border-0 md:border-0'>
      <Header />
      <HeroSection />
      <Main />
      <Experience />
      <Skills />
      <Achievements />
      <Certification />
      </div>
    </>
  )
}

export default App
