import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImg from '../../assets/profile_pic/ayush_pic(1).jpg';

const About = () => {
  return (
    <div id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>

      <div className='flex flex-col-reverse md:flex-row justify-evenly items-center'>

        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ayush Raj
          </h2>

          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={['Competitive Programmer', 'Web Developer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a Java enthusiast and competitive programmer.
            Currently, Pupil @Codeforces, 3★ @CodeChef, 1600+ @LeetCode.
            Exploring full-stack web development with MERN stack and building real-world projects.
            CP/DSA Coordinator at DevUp Club, guided by the values of Lord Ram and Hanuman Ji, I strive for consistency, clarity, and continuous improvement.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1xPi2rCmCMy3nSU0j8Y38LVlaKL4yCaLn/view?usp=drivesdk"
            target='_blank'
            rel='oops error occured'
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #5b21b6, #7c3aed)', // darker purples
              boxShadow: '0 0 4px #5b21b6, 0 0 8px #5b21b6, 0 0 20px #5b21b6',
            }}>Download CV</a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}>
            <img src={profileImg} alt="Ayush Raj"
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0,5)]' />
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default About
