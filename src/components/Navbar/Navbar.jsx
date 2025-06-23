import React, { use, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  // If any menu is clicked : NavBar must disappear.
  const [isOpen, setIsOpen] = useState(false);

  // If any menu is clicked : change that menu's color until page is refreshed. 
  const [activeMenu, setActiveMenu] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "codingprofile", label: "CodingProfile" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Check scroll and change navbar background.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  // Scroll Function (Redirects us to desired section).
  const handleMenuItemClick = (sectionId) => {
    setActiveMenu(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px[7vw] lg:px[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className='text-white py-5 flex justify-between items-center'>

        {/* Logo */}
        <div className='text-lg font-semibold cursor-pointer' onClick={() => window.location.reload()}>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Ayush</span>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Raj</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/* {Desktop Menu} */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeMenu === item.id ? "text-[8245ec]" : ""}`}>
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icons : Whenever the desktop size reduces, 
            the icons get hidden and toggle button appears. */}
        <div className='md:hidden'>
          {
            isOpen ? (
              // Cross-Icon
              <FiX className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
                onClick={() => setIsOpen(true)} />
            )
          }
        </div>

        {/* Social Media Icons */}
        <div className='hidden md:flex space-x-4'>
          <a
            href='https://github.com/AyushRajgit'
            target='_blank'
            rel='oops-error-occured'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaGithub size={24} />
          </a>

          <a
            href='https://www.linkedin.com/in/ayush-raj-119338275'
            target='_blank'
            rel='oops-error-occured'
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaLinkedin size={24} />
          </a>
        </div>

      </div>




      {/* Mobile Menu Items : When Mobile Screen is Open how the menu item,social-media items must appear. */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${activeMenu === item.id ? "text-[8245ec]" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">

              <a
                href="https://github.com/AyushRajgit"
                target="_blank"
                rel="oops-error-occured"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              
              <a
                href="https://www.linkedin.com/in/ayush-raj-119338275"
                target="_blank"
                rel="oops-error-occured"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>

            </div>
          </ul>
        </div>
      )}

    </div>
  )
}

export default Navbar
