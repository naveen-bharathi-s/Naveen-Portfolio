import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const headerLinks = [
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certification", href: "#certification" },
  ]

  // Apply/remove the dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  // Highlight active link
  useEffect(() => {
    const sections = headerLinks.map((link) => document.querySelector(link.href)).filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = headerLinks.find(h => h.href === `#${entry.target.id}`)
          if (link) setActive(link.name)
        }
      })
    }, {
      root: null,
      rootMargin: "-70px 0px -50% 0px",
      threshold: 0.4,
    })
    sections.forEach((sec) => sec && observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (name) => {
    setActive(name)
    setMenu(false)
  }

  // ✅ Toggle dark mode + close menu if open
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    setMenu(false) // <--- closes mobile menu
  }

  return (
    <>
      <header className="flex justify-between items-center bg-white dark:bg-black
                         text-black dark:text-white p-4 sticky top-0 left-0 z-50 shadow-md">
        <h1 className="text-xl font-bold">Naveen Portfolio</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex md:gap-5 lg:gap-8 items-center">
          {headerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`text-base font-semibold transition-transform duration-300 hover:scale-110
              ${active === link.name ? "border-b-4 border-gray-600 dark:border-gray-300 font-extrabold" : ""}`}
            >
              {link.name}
            </a>
          ))}
          {/* Theme Toggle (desktop) */}
          <button onClick={toggleTheme} className="text-2xl ml-4">
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenu((prev) => !prev)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile Dropdown */}
      {menu && (
        <div className="fixed z-30 w-full h-full bg-white dark:bg-black
                        text-black dark:text-white flex flex-col text-center gap-8 p-4 md:hidden">
          {headerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`text-base font-semibold transition-transform duration-300 hover:scale-110
              ${active === link.name ? "border-b-4 mx-32 font-extrabold" : ""}`}
            >
              {link.name}
            </a>
          ))}
          {/* Theme Toggle (mobile) — closes menu too */}
          <button onClick={toggleTheme} className="text-2xl mx-auto mt-4">
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      )}
    </>
  )
}

export default Header